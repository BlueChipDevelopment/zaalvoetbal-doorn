import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { ACHIEVEMENT_DEFINITIONS } from './achievement-definitions';
import {
  AchievementDefinition,
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
      players: this.playerService.getPlayers(),
      matches: this.wedstrijdenService.getGespeeldeWedstrijden(),
      stats: this.statsService.getFullPlayerStats(null),
    }).pipe(
      map(({ matches, stats }) => this.buildForPlayer(playerId, matches, stats)),
    );
  }

  private buildForPlayer(playerId: number, matches: WedstrijdData[], stats: Player[]): PlayerAchievement[] {
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
