import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { ACHIEVEMENT_DEFINITIONS } from './achievement-definitions';
import {
  AchievementDefinition,
  AchievementOccurrence,
  AchievementTier,
  PlayerAchievement,
} from '../interfaces/IAchievement';
import { WedstrijdData } from '../interfaces/IWedstrijd';
import { Player } from '../interfaces/IPlayer';

interface PlayerMatchView {
  match: WedstrijdData;
  outcome: 'W' | 'L' | 'D';
  isZlatan: boolean;
}

@Injectable({ providedIn: 'root' })
export class AchievementsService {
  constructor(
    private playerService: PlayerService,
    private wedstrijdenService: WedstrijdenService,
    private statsService: GameStatisticsService,
  ) {}

  getPlayerAchievements(playerId: number): Observable<PlayerAchievement[]> {
    return forkJoin({
      matches: this.wedstrijdenService.getGespeeldeWedstrijden(),
      stats: this.statsService.getFullPlayerStats(null),
      seasons: this.statsService.getAvailableSeasons(),
      current: this.statsService.getCurrentSeason(),
    }).pipe(
      switchMap(({ matches, stats, seasons, current }) => {
        const completed = (seasons ?? []).filter(s => s !== current);
        const seasonStats$ = completed.length === 0
          ? of([] as { season: string; stats: Player[] }[])
          : forkJoin(
              completed.map(season =>
                this.statsService.getFullPlayerStats(season).pipe(
                  map(s => ({ season, stats: s })),
                ),
              ),
            );
        return seasonStats$.pipe(
          map(perSeason => this.buildForPlayer(playerId, matches, stats, perSeason)),
        );
      }),
    );
  }

  private buildForPlayer(
    playerId: number,
    matches: WedstrijdData[],
    stats: Player[],
    perSeason: { season: string; stats: Player[] }[],
  ): PlayerAchievement[] {
    const playerStats = stats.find(s => s.id === playerId);
    if (!playerStats) return [];
    const sortedMatches = this.matchesForPlayer(playerId, matches);

    const result: PlayerAchievement[] = [];
    for (const def of ACHIEVEMENT_DEFINITIONS) {
      if (def.category === 'milestone') {
        result.push(this.buildMilestone(def, playerStats, sortedMatches));
      }
    }
    const streakInfo = this.computeWinStreak(sortedMatches);
    for (const def of ACHIEVEMENT_DEFINITIONS) {
      if (def.category === 'streak') {
        result.push(this.buildStreak(def, streakInfo));
      }
    }
    const seasonResults = this.computeSeasonOccurrences(playerId, matches, perSeason);
    for (const def of ACHIEVEMENT_DEFINITIONS) {
      if (def.category === 'season') {
        result.push(this.buildSeasonBadge(def, seasonResults));
      }
    }
    return result;
  }

  private matchesForPlayer(playerId: number, matches: WedstrijdData[]): PlayerMatchView[] {
    const sorted = [...matches]
      .filter(m => m.datum)
      .sort((a, b) => (a.datum!.getTime() - b.datum!.getTime()));
    const views: PlayerMatchView[] = [];
    for (const m of sorted) {
      const inWit = (m.teamWit || []).includes(playerId);
      const inRood = (m.teamRood || []).includes(playerId);
      if (!inWit && !inRood) continue;
      const own = inWit ? (m.scoreWit ?? 0) : (m.scoreRood ?? 0);
      const opp = inWit ? (m.scoreRood ?? 0) : (m.scoreWit ?? 0);
      const outcome: 'W' | 'L' | 'D' = own > opp ? 'W' : own < opp ? 'L' : 'D';
      views.push({ match: m, outcome, isZlatan: m.zlatanPlayerId === playerId });
    }
    return views;
  }

  private buildMilestone(
    def: AchievementDefinition,
    stats: Player,
    views: PlayerMatchView[],
  ): PlayerAchievement {
    const valueFn = MILESTONE_VALUES[def.key];
    const matchValueFn = MILESTONE_MATCH_VALUES[def.key];
    const current = valueFn(stats);
    const tiers = def.tiers ?? [];
    const earnedTier = [...tiers].reverse().find(t => current >= t.threshold) ?? null;
    const nextTier = tiers.find(t => current < t.threshold) ?? null;
    const target = nextTier?.threshold ?? earnedTier?.threshold ?? tiers[0]?.threshold ?? 0;

    let earnedAt: Date | null = null;
    if (earnedTier) {
      let acc = 0;
      for (const v of views) {
        acc += matchValueFn(v);
        if (acc >= earnedTier.threshold) { earnedAt = v.match.datum; break; }
      }
    }

    return {
      key: def.key,
      category: def.category,
      tier: earnedTier?.tier ?? null,
      title: tierTitle(def, earnedTier?.tier ?? null),
      description: def.description,
      icon: def.icon,
      earnedAt,
      progress: { current, target },
    };
  }

  private computeWinStreak(views: PlayerMatchView[]): { longest: number; reachedAt: Map<number, Date | null> } {
    let longest = 0;
    let run = 0;
    const reachedAt = new Map<number, Date | null>();
    for (const v of views) {
      if (v.outcome === 'W') {
        run++;
        if (!reachedAt.has(run)) reachedAt.set(run, v.match.datum);
        if (run > longest) longest = run;
      } else {
        run = 0;
      }
    }
    return { longest, reachedAt };
  }

  private buildStreak(
    def: AchievementDefinition,
    info: { longest: number; reachedAt: Map<number, Date | null> },
  ): PlayerAchievement {
    const target = STREAK_TARGETS[def.key];
    const earned = info.longest >= target;
    return {
      key: def.key,
      category: def.category,
      tier: earned ? 'bronze' : null,
      title: def.title,
      description: def.description,
      icon: def.icon,
      earnedAt: earned ? (info.reachedAt.get(target) ?? null) : null,
      progress: { current: info.longest, target },
    };
  }

  private computeSeasonOccurrences(
    playerId: number,
    matches: WedstrijdData[],
    perSeason: { season: string; stats: Player[] }[],
  ): Record<string, AchievementOccurrence[]> {
    const out: Record<string, AchievementOccurrence[]> = {
      season_champion: [], season_podium: [], season_full_attend: [],
    };
    for (const { season, stats } of perSeason) {
      const seasonMatches = matches
        .filter(m => m.seizoen === season && m.datum)
        .sort((a, b) => a.datum!.getTime() - b.datum!.getTime());
      const lastDate = seasonMatches.length > 0 ? seasonMatches[seasonMatches.length - 1].datum : null;

      const ranking = [...stats].filter(s => typeof s.id === 'number')
        .sort((a, b) => b.totalPoints - a.totalPoints);
      const top1 = ranking[0]?.totalPoints ?? -Infinity;
      const top3Threshold = ranking[2]?.totalPoints ?? -Infinity;
      const me = stats.find(s => s.id === playerId);

      if (me && me.totalPoints === top1 && me.totalPoints > 0) {
        out['season_champion'].push({ season, date: lastDate });
      }
      if (me && me.totalPoints >= top3Threshold && me.totalPoints > 0) {
        out['season_podium'].push({ season, date: lastDate });
      }
      if (seasonMatches.length > 0) {
        const playedAll = seasonMatches.every(
          m => (m.teamWit || []).includes(playerId) || (m.teamRood || []).includes(playerId),
        );
        if (playedAll) out['season_full_attend'].push({ season, date: lastDate });
      }
    }
    return out;
  }

  private buildSeasonBadge(
    def: AchievementDefinition,
    occurrencesByKey: Record<string, AchievementOccurrence[]>,
  ): PlayerAchievement {
    const occurrences = occurrencesByKey[def.key] ?? [];
    const earned = occurrences.length > 0;
    const earnedAt = earned
      ? occurrences.reduce<Date | null>((min, o) => {
          if (!o.date) return min;
          return !min || o.date < min ? o.date : min;
        }, null)
      : null;
    return {
      key: def.key,
      category: def.category,
      tier: earned ? 'bronze' : null,
      title: def.title,
      description: def.description,
      icon: def.icon,
      earnedAt,
      occurrences: earned ? occurrences : undefined,
    };
  }
}

const STREAK_TARGETS: Record<string, number> = {
  streak_3: 3, streak_5: 5, streak_7: 7,
};

const MILESTONE_VALUES: Record<string, (s: Player) => number> = {
  matches_played: s => s.gamesPlayed,
  matches_won: s => s.wins,
  zlatan_points: s => s.zlatanPoints,
};

const MILESTONE_MATCH_VALUES: Record<string, (v: PlayerMatchView) => number> = {
  matches_played: () => 1,
  matches_won: v => v.outcome === 'W' ? 1 : 0,
  zlatan_points: v => v.isZlatan ? 1 : 0,
};

function tierTitle(def: AchievementDefinition, tier: AchievementTier | null): string {
  if (!def.tiers || !tier) return def.title;
  const labels: Record<AchievementTier, string> = {
    bronze: 'Brons', silver: 'Zilver', gold: 'Goud', platinum: 'Platina',
  };
  return `${def.title} – ${labels[tier]}`;
}
