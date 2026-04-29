import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { WedstrijdData } from '../interfaces/IWedstrijd';
import { Player } from '../interfaces/IPlayer';

export interface PlayerProfileStats {
  rating: number;
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;            // 0..1
  zlatanCount: number;
  ventielCount: number;
  zlatanPerMatch: number;
  attendanceRate: number;     // 0..1 -- vereenvoudigd: matchesPlayed / totalGespeeldeWedstrijden (actieve speler assumed)
  currentWinStreak: number;
  longestWinStreak: number;
  longestLossStreak: number;
}

export interface RatingPoint {
  matchDate: string;
  rating: number;
}

export interface TopTeammate {
  teammate: PlayerSheetData;
  played: number;
  wins: number;
  winRate: number;
}

export interface MatchHistoryEntry {
  matchId: number;
  date: string;
  ownTeam: 'wit' | 'rood';
  opponents: PlayerSheetData[];
  ownTeamScore: number;
  opponentScore: number;
  outcome: 'win' | 'loss' | 'draw';
}

/**
 * Herbruikbare helper: bereken rating-map (id → rating) uit een set wedstrijden + spelers.
 * Repliceert de rating-formule uit GameStatisticsService.getFullPlayerStats.
 */
function computeRatingsFromMatches(
  wedstrijden: WedstrijdData[],
  spelers: PlayerSheetData[],
): Map<number, number> {
  const playerStats: {
    [id: number]: { totalPoints: number; wins: number; losses: number; ties: number; zlatanPoints: number };
  } = {};

  const sorted = [...wedstrijden].sort((a, b) => {
    if (!a.datum || !b.datum) return 0;
    return a.datum.getTime() - b.datum.getTime();
  });

  sorted.forEach(match => {
    const teamWit = match.teamWit || [];
    const teamRood = match.teamRood || [];
    const scoreWit = match.scoreWit ?? 0;
    const scoreRood = match.scoreRood ?? 0;

    teamWit.forEach((pid: number) => {
      if (!playerStats[pid]) playerStats[pid] = { totalPoints: 0, wins: 0, losses: 0, ties: 0, zlatanPoints: 0 };
      if (scoreWit > scoreRood) playerStats[pid].wins++;
      else if (scoreWit < scoreRood) playerStats[pid].losses++;
      else playerStats[pid].ties++;
      if (match.zlatanPlayerId === pid) playerStats[pid].zlatanPoints++;
    });

    teamRood.forEach((pid: number) => {
      if (!playerStats[pid]) playerStats[pid] = { totalPoints: 0, wins: 0, losses: 0, ties: 0, zlatanPoints: 0 };
      if (scoreRood > scoreWit) playerStats[pid].wins++;
      else if (scoreRood < scoreWit) playerStats[pid].losses++;
      else playerStats[pid].ties++;
      if (match.zlatanPlayerId === pid) playerStats[pid].zlatanPoints++;
    });
  });

  // Stel totalPoints in
  Object.entries(playerStats).forEach(([idStr, stats]) => {
    stats.totalPoints = (stats.wins * 3) + (stats.ties * 2) + (stats.losses * 1) + (stats.zlatanPoints);
  });

  const maxTotalPoints = Math.max(...Object.values(playerStats).map(s => s.totalPoints), 1);

  const ratingMap = new Map<number, number>();
  spelers.forEach(p => {
    if (typeof p.id !== 'number') return;
    const stats = playerStats[p.id];
    if (!stats) { ratingMap.set(p.id, 1); return; }
    let rating = Math.round(stats.totalPoints / (maxTotalPoints / 10));
    rating = Math.max(1, Math.min(10, rating));
    ratingMap.set(p.id, rating);
  });
  return ratingMap;
}

@Injectable({ providedIn: 'root' })
export class PlayerProfileService {
  constructor(
    private playerService: PlayerService,
    private wedstrijdenService: WedstrijdenService,
    private statsService: GameStatisticsService,
  ) {}

  getStats(playerId: number): Observable<PlayerProfileStats> {
    // Rating wordt seizoens-relatief berekend (zie GameStatisticsService);
    // we gebruiken het huidige seizoen zodat de profiel-rating overeenkomt
    // met wat het klassement default toont.
    return this.statsService.getCurrentSeason().pipe(
      switchMap(season => forkJoin({
        spelers: this.playerService.getPlayers(),
        wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden(),
        fullStats: this.statsService.getFullPlayerStats(season),
      })),
      map(({ spelers, wedstrijden, fullStats }) => {
        // Filter wedstrijden voor deze speler
        const playerMatches = wedstrijden.filter(
          m => (m.teamWit || []).includes(playerId) || (m.teamRood || []).includes(playerId)
        );

        // Sorteer chronologisch voor streak-berekening
        const sorted = [...playerMatches].sort((a, b) => {
          if (!a.datum || !b.datum) return 0;
          return a.datum.getTime() - b.datum.getTime();
        });

        let wins = 0, losses = 0, draws = 0;
        let zlatanCount = 0, ventielCount = 0;
        const outcomes: ('W' | 'L' | 'D')[] = [];

        sorted.forEach(m => {
          const inWit = (m.teamWit || []).includes(playerId);
          const scoreWit = m.scoreWit ?? 0;
          const scoreRood = m.scoreRood ?? 0;
          const ownScore = inWit ? scoreWit : scoreRood;
          const oppScore = inWit ? scoreRood : scoreWit;

          if (ownScore > oppScore) { wins++; outcomes.push('W'); }
          else if (ownScore < oppScore) { losses++; outcomes.push('L'); }
          else { draws++; outcomes.push('D'); }

          if (m.zlatanPlayerId === playerId) zlatanCount++;
          if (m.ventielPlayerId === playerId) ventielCount++;
        });

        const matchesPlayed = playerMatches.length;

        // Win-streaks
        let currentWinStreak = 0;
        for (let i = outcomes.length - 1; i >= 0; i--) {
          if (outcomes[i] === 'W') currentWinStreak++;
          else break;
        }
        let longestWinStreak = 0;
        let longestLossStreak = 0;
        let winRun = 0;
        let lossRun = 0;
        outcomes.forEach(o => {
          if (o === 'W') {
            winRun++; lossRun = 0;
            longestWinStreak = Math.max(longestWinStreak, winRun);
          } else if (o === 'L') {
            lossRun++; winRun = 0;
            longestLossStreak = Math.max(longestLossStreak, lossRun);
          } else {
            winRun = 0; lossRun = 0;
          }
        });

        // Rating uit fullStats
        const playerStat: Player | undefined = fullStats.find((p: Player) => p.id === playerId);
        const rating = playerStat?.rating ?? 1;

        // attendanceRate: matchesPlayed / totalGespeeldeWedstrijden
        // Beperking: we weten niet exact wanneer de speler actief werd; dit is een benadering.
        const totalMatches = wedstrijden.length;
        const attendanceRate = totalMatches > 0 ? matchesPlayed / totalMatches : 0;

        return {
          rating,
          matchesPlayed,
          wins,
          losses,
          draws,
          winRate: matchesPlayed > 0 ? wins / matchesPlayed : 0,
          zlatanCount,
          ventielCount,
          zlatanPerMatch: matchesPlayed > 0 ? zlatanCount / matchesPlayed : 0,
          attendanceRate,
          currentWinStreak,
          longestWinStreak,
          longestLossStreak,
        } as PlayerProfileStats;
      })
    );
  }

  getRatingTrend(playerId: number, range: '12m' | 'all' = 'all'): Observable<RatingPoint[]> {
    return forkJoin({
      spelers: this.playerService.getPlayers(),
      wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden(),
    }).pipe(
      map(({ spelers, wedstrijden }) => {
        const now = new Date();
        const cutoff = range === '12m'
          ? new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
          : null;

        // Filter alle gespeelde wedstrijden op de range
        let filteredAll = wedstrijden;
        if (cutoff) {
          filteredAll = wedstrijden.filter(m => m.datum && m.datum >= cutoff);
        }

        // Speler-specifieke wedstrijden in range, chronologisch gesorteerd
        const playerMatches = filteredAll
          .filter(m => (m.teamWit || []).includes(playerId) || (m.teamRood || []).includes(playerId))
          .sort((a, b) => {
            if (!a.datum || !b.datum) return 0;
            return a.datum.getTime() - b.datum.getTime();
          });

        // Voor elke wedstrijd van de speler: bereken rating op basis van alle wedstrijden t/m die datum
        return playerMatches.map(match => {
          const matchDate = match.datum!;
          const subset = filteredAll.filter(m => m.datum && m.datum <= matchDate);
          const ratingMap = computeRatingsFromMatches(subset, spelers);
          const rating = ratingMap.get(playerId) ?? 1;
          return {
            matchDate: matchDate.toISOString().slice(0, 10),
            rating,
          } as RatingPoint;
        });
      })
    );
  }

  getTopTeammates(playerId: number, limit = 5): Observable<TopTeammate[]> {
    return this.buildTeammates(playerId).pipe(
      map(list => list
        .sort((a, b) => b.winRate - a.winRate || b.played - a.played)
        .slice(0, limit)),
    );
  }

  getWorstTeammates(playerId: number, limit = 5): Observable<TopTeammate[]> {
    return this.buildTeammates(playerId).pipe(
      map(list => list
        .sort((a, b) => a.winRate - b.winRate || b.played - a.played)
        .slice(0, limit)),
    );
  }

  private buildTeammates(playerId: number): Observable<TopTeammate[]> {
    return forkJoin({
      spelers: this.playerService.getPlayers(),
      wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden(),
    }).pipe(
      map(({ spelers, wedstrijden }) => {
        const spelersById = new Map<number, PlayerSheetData>();
        spelers.forEach(p => { if (typeof p.id === 'number') spelersById.set(p.id, p); });

        const teammateStat: { [id: number]: { played: number; wins: number } } = {};

        wedstrijden.forEach(m => {
          const teamWit = m.teamWit || [];
          const teamRood = m.teamRood || [];
          const inWit = teamWit.includes(playerId);
          const inRood = teamRood.includes(playerId);
          if (!inWit && !inRood) return;

          const ownTeam = inWit ? teamWit : teamRood;
          const scoreWit = m.scoreWit ?? 0;
          const scoreRood = m.scoreRood ?? 0;
          const ownScore = inWit ? scoreWit : scoreRood;
          const oppScore = inWit ? scoreRood : scoreWit;
          const isWin = ownScore > oppScore;

          ownTeam.forEach(tid => {
            if (tid === playerId) return;
            if (!teammateStat[tid]) teammateStat[tid] = { played: 0, wins: 0 };
            teammateStat[tid].played++;
            if (isWin) teammateStat[tid].wins++;
          });
        });

        return Object.entries(teammateStat)
          .filter(([, s]) => s.played >= 3)
          .map(([idStr, s]) => {
            const tid = Number(idStr);
            const teammate = spelersById.get(tid);
            if (!teammate) return null;
            return {
              teammate,
              played: s.played,
              wins: s.wins,
              winRate: s.played > 0 ? s.wins / s.played : 0,
            } as TopTeammate;
          })
          .filter((t): t is TopTeammate => t !== null);
      })
    );
  }

  getMatchHistory(playerId: number, limit = 10): Observable<MatchHistoryEntry[]> {
    return forkJoin({
      spelers: this.playerService.getPlayers(),
      wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden(),
    }).pipe(
      map(({ spelers, wedstrijden }) => {
        const spelersById = new Map<number, PlayerSheetData>();
        spelers.forEach(p => { if (typeof p.id === 'number') spelersById.set(p.id, p); });

        const playerMatches = wedstrijden
          .filter(m => (m.teamWit || []).includes(playerId) || (m.teamRood || []).includes(playerId))
          .sort((a, b) => {
            if (!a.datum || !b.datum) return 0;
            return b.datum.getTime() - a.datum.getTime(); // desc
          })
          .slice(0, limit);

        return playerMatches.map(m => {
          const inWit = (m.teamWit || []).includes(playerId);
          const ownTeam: 'wit' | 'rood' = inWit ? 'wit' : 'rood';
          const oppIds = inWit ? (m.teamRood || []) : (m.teamWit || []);
          const opponents = oppIds
            .map(id => spelersById.get(id))
            .filter((p): p is PlayerSheetData => p !== undefined);
          const ownScore = inWit ? (m.scoreWit ?? 0) : (m.scoreRood ?? 0);
          const oppScore = inWit ? (m.scoreRood ?? 0) : (m.scoreWit ?? 0);
          let outcome: 'win' | 'loss' | 'draw';
          if (ownScore > oppScore) outcome = 'win';
          else if (ownScore < oppScore) outcome = 'loss';
          else outcome = 'draw';

          return {
            matchId: m.id ?? 0,
            date: m.datum ? m.datum.toISOString().slice(0, 10) : '',
            ownTeam,
            opponents,
            ownTeamScore: ownScore,
            opponentScore: oppScore,
            outcome,
          } as MatchHistoryEntry;
        });
      })
    );
  }
}
