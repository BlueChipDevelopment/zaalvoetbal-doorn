import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, shareReplay } from 'rxjs/operators';
import { PlayerSheetData, PlayerFilter } from '../interfaces/IPlayerSheet';
import { PlayerDataSource } from './data-sources/player-data-source';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersCache$ = new BehaviorSubject<PlayerSheetData[] | null>(null);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000;

  constructor(private dataSource: PlayerDataSource) {}

  getPlayers(filter?: PlayerFilter): Observable<PlayerSheetData[]> {
    return this.getCachedPlayers().pipe(
      map(players => this.applyFilter(players, filter))
    );
  }

  getActivePlayers(): Observable<PlayerSheetData[]> {
    return this.getPlayers({ activeOnly: true });
  }

  getPlayerByName(name: string): Observable<PlayerSheetData | undefined> {
    return this.getCachedPlayers().pipe(
      map(players => players.find(player =>
        player.name.toLowerCase() === name.toLowerCase()
      ))
    );
  }

  getPlayerById(id: number): Observable<PlayerSheetData | undefined> {
    return this.getCachedPlayers().pipe(
      map(players => players.find(player => player.id === id))
    );
  }

  refreshPlayers(): Observable<PlayerSheetData[]> {
    this.clearCache();
    return this.getCachedPlayers();
  }

  addPlayer(player: PlayerSheetData): Observable<void> {
    return this.dataSource.add(player).pipe(
      tap(() => this.clearCache()),
      catchError(error => {
        console.error('❌ PlayerService error adding player:', error);
        throw error;
      })
    );
  }

  updatePlayer(playerName: string, updatedPlayer: PlayerSheetData): Observable<void> {
    return this.dataSource.update(playerName, updatedPlayer).pipe(
      tap(() => this.clearCache()),
      catchError(error => {
        console.error('❌ PlayerService error updating player:', error);
        throw error;
      })
    );
  }

  private getCachedPlayers(): Observable<PlayerSheetData[]> {
    const now = Date.now();
    const cachedData = this.playersCache$.value;
    if (cachedData && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return of(cachedData);
    }
    return this.dataSource.getAll().pipe(
      tap(players => {
        this.playersCache$.next(players);
        this.cacheTimestamp = now;
      }),
      catchError(error => {
        console.error('Error fetching players:', error);
        return of(cachedData || []);
      }),
      shareReplay(1)
    );
  }

  private applyFilter(players: PlayerSheetData[], filter?: PlayerFilter): PlayerSheetData[] {
    if (!filter) return players;
    let filtered = players;
    if (filter.activeOnly) {
      filtered = filtered.filter(player => player.actief);
    }
    if (filter.positions && filter.positions.length > 0) {
      filtered = filtered.filter(player =>
        filter.positions!.some(pos =>
          player.position.toLowerCase() === pos.toLowerCase()
        )
      );
    }
    return filtered;
  }

  private clearCache(): void {
    this.playersCache$.next(null);
    this.cacheTimestamp = 0;
  }
}
