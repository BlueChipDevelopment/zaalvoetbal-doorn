import { Injectable } from '@angular/core';
import { GameHistoryEntry, Player } from '../interfaces/IPlayer';
import { Observable, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { WedstrijdenService } from './wedstrijden.service';

@Injectable({
  providedIn: 'root'
})
export class GameStatisticsService {
  private ratingsCache: Player[] | null = null;
  private cacheTimestamp: number | null = null;
  private cacheDurationMs = 5 * 60 * 1000; // 5 minuten

  constructor(
    private playerService: PlayerService,
    private wedstrijdenService: WedstrijdenService
  ) {}



  /**
   * Haalt alle beschikbare seizoenen op uit de wedstrijdendata.
   * @returns Observable array van seizoen strings, gesorteerd van nieuw naar oud
   */
  getAvailableSeasons(): Observable<string[]> {
    return this.wedstrijdenService.getBeschikbareSeizoen().pipe(
      map(seizoenData => seizoenData.map(s => s.seizoen))
    );
  }

  /**
   * Haalt het meest recente seizoen op.
   */
  getCurrentSeason(): Observable<string | null> {
    return this.getAvailableSeasons().pipe(
      map(seasons => seasons.length > 0 ? seasons[0] : null)
    );
  }

  getPlayerStatsByName(playerName: string): Player | undefined {
    const now = Date.now();
    if (this.ratingsCache && this.cacheTimestamp && (now - this.cacheTimestamp < this.cacheDurationMs)) {
      return this.ratingsCache.find(p => p.name === playerName);
    }
    return undefined;
  }

  /**
   * Geeft uitgebreide statistieken voor alle spelers, incl. gamesPlayed, totalPoints, wins, losses, ties, rating, winRatio, gameHistory, zlatanPoints, ventielPoints
   * @param season Optioneel seizoen filter (bijv. "2024-2025"). Als null, worden alle wedstrijden meegenomen.
   */
  getFullPlayerStats(season?: string | null): Observable<Player[]> {
    return forkJoin({
      spelers: this.playerService.getPlayers(),
      wedstrijden: this.wedstrijdenService.getGespeeldeWedstrijden()
    }).pipe(
      map(({ spelers, wedstrijden }) => {
        const spelersById = new Map<number, PlayerSheetData>();
        spelers.forEach(p => {
          if (typeof p.id === 'number') spelersById.set(p.id, p);
        });

        let geldigeWedstrijden = wedstrijden;

        // Filter wedstrijden op seizoen indien opgegeven
        if (season) {
          geldigeWedstrijden = geldigeWedstrijden.filter(match => {
            return match.seizoen === season;
          });
        }

        // Sorteer geldigeWedstrijden op datum (oud -> nieuw) zodat gameHistory altijd chronologisch is
        const geldigeWedstrijdenSorted = [...geldigeWedstrijden].sort((a, b) => {
          if (!a.datum || !b.datum) return 0;
          return a.datum.getTime() - b.datum.getTime();
        });

        // Statistieken per speler — gekeyed op id
        const playerStats: { [playerId: number]: { gamesPlayed: number; totalPoints: number; wins: number; losses: number; ties: number; gameHistory: GameHistoryEntry[]; zlatanPoints: number; ventielPoints: number } } = {};

        const idToName = (id: number): string => spelersById.get(id)?.name ?? '';

        geldigeWedstrijdenSorted.forEach(match => {
          const teamWhiteIds = match.teamWit || [];
          const teamRedIds = match.teamRood || [];
          const allIds = [...teamWhiteIds, ...teamRedIds];
          const allNames = allIds.map(idToName).filter(Boolean);
          const teamWhiteNames = teamWhiteIds.map(idToName).filter(Boolean);
          const teamRedNames = teamRedIds.map(idToName).filter(Boolean);
          const teamWhiteGoals = match.scoreWit || 0;
          const teamRedGoals = match.scoreRood || 0;

          // White team players
          teamWhiteIds.forEach((pid: number) => {
            if (!playerStats[pid]) playerStats[pid] = { gamesPlayed: 0, totalPoints: 0, wins: 0, losses: 0, ties: 0, gameHistory: [], zlatanPoints: 0, ventielPoints: 0 };
            playerStats[pid].gamesPlayed++;
            if (teamWhiteGoals > teamRedGoals) playerStats[pid].wins++;
            else if (teamWhiteGoals < teamRedGoals) playerStats[pid].losses++;
            else playerStats[pid].ties++;
            playerStats[pid].gameHistory.push({
              result: teamWhiteGoals > teamRedGoals ? 3 : teamWhiteGoals === teamRedGoals ? 2 : 1,
              date: match.datum,
              playerIds: allNames,
              teammates: teamWhiteNames,
              opponents: teamRedNames
            });
            if (match.zlatanPlayerId === pid) {
              playerStats[pid].zlatanPoints = (playerStats[pid].zlatanPoints || 0) + 1;
            }
            if (match.ventielPlayerId === pid) {
              playerStats[pid].ventielPoints = (playerStats[pid].ventielPoints || 0) + 1;
            }
          });

          // Red team players
          teamRedIds.forEach((pid: number) => {
            if (!playerStats[pid]) playerStats[pid] = { gamesPlayed: 0, totalPoints: 0, wins: 0, losses: 0, ties: 0, gameHistory: [], zlatanPoints: 0, ventielPoints: 0 };
            playerStats[pid].gamesPlayed++;
            if (teamRedGoals > teamWhiteGoals) playerStats[pid].wins++;
            else if (teamRedGoals < teamWhiteGoals) playerStats[pid].losses++;
            else playerStats[pid].ties++;
            playerStats[pid].gameHistory.push({
              result: teamRedGoals > teamWhiteGoals ? 3 : teamRedGoals === teamWhiteGoals ? 2 : 1,
              date: match.datum,
              playerIds: allNames,
              teammates: teamRedNames,
              opponents: teamWhiteNames
            });
            if (match.zlatanPlayerId === pid) {
              playerStats[pid].zlatanPoints = (playerStats[pid].zlatanPoints || 0) + 1;
            }
            if (match.ventielPlayerId === pid) {
              playerStats[pid].ventielPoints = (playerStats[pid].ventielPoints || 0) + 1;
            }
          });
        });
        // Voeg spelers toe die in de Spelers-lijst staan maar nog geen wedstrijden hebben gespeeld
        spelers.forEach((player) => {
          if (typeof player.id === 'number' && !playerStats[player.id]) {
            playerStats[player.id] = {
              gamesPlayed: 0,
              totalPoints: 0,
              wins: 0,
              losses: 0,
              ties: 0,
              gameHistory: [],
              zlatanPoints: 0,
              ventielPoints: 0
            };
          }
        });
        // Total points en max
        Object.values(playerStats).forEach(stats => {
          stats.totalPoints = (stats.wins * 3) + (stats.ties * 2) + (stats.losses * 1) + (stats.zlatanPoints || 0);
        });
        const maxTotalPoints = Math.max(...Object.values(playerStats).map(stats => stats.totalPoints || 0), 1);
        // Maak array met alle info
        return Object.entries(playerStats)
          .map(([playerIdStr, stats]) => {
            const playerId = Number(playerIdStr);
            const spelerData = spelersById.get(playerId);
            let rating = Math.round((stats.totalPoints / (maxTotalPoints / 10)));
            rating = Math.max(1, Math.min(10, rating));
            return {
              id: spelerData?.id,
              name: spelerData ? spelerData.name : '',
              position: spelerData ? spelerData.position : null,
              rating: rating,
              gamesPlayed: stats.gamesPlayed,
              totalPoints: stats.totalPoints,
              wins: stats.wins,
              losses: stats.losses,
              ties: stats.ties,
              winRatio: stats.gamesPlayed > 0 ? (stats.wins / stats.gamesPlayed) * 100 : 0,
              gameHistory: stats.gameHistory || [],
              zlatanPoints: stats.zlatanPoints || 0,
              ventielPoints: stats.ventielPoints || 0,
              actief: spelerData ? spelerData.actief : false
            } as Player;
          })
          // Filter: alleen spelers met geldige naam (gevonden in spelersById)
          .filter(player => !!player.name)
          // Filter: verwijder spelers die niet actief zijn EN geen wedstrijden hebben in dit seizoen
          .filter(player => player.actief || player.gamesPlayed > 0)
          .sort((a, b) => b.totalPoints - a.totalPoints);
      }),
      tap(players => {
        this.ratingsCache = players;
        this.cacheTimestamp = Date.now();
      })
    );
  }
}
