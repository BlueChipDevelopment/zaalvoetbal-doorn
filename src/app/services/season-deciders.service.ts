import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { SeasonDecider } from '../interfaces/ISeasonDecider';
import { SeasonDeciderDataSource } from './data-sources/season-decider-data-source';

/**
 * Seizoensbeslissingen: wie een gelijkstand aan kop van het klassement heeft
 * gewonnen. Records, achievements en het klassement raadplegen deze service om
 * bij gelijke punten de juiste kampioen aan te wijzen.
 */
@Injectable({ providedIn: 'root' })
export class SeasonDecidersService {
  private cache$: Observable<SeasonDecider[]> | null = null;

  constructor(private dataSource: SeasonDeciderDataSource) {}

  getAll(): Observable<SeasonDecider[]> {
    if (!this.cache$) {
      this.cache$ = this.dataSource.getAll().pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }
    return this.cache$;
  }

  /** Map seizoen -> beslissing, handig voor lookups per seizoen. */
  getBySeason(): Observable<Map<string, SeasonDecider>> {
    return this.getAll().pipe(
      map(deciders => new Map(deciders.map(d => [d.season, d]))),
    );
  }

  set(season: string, winnerPlayerId: number, note: string | null): Observable<void> {
    return this.dataSource.set(season, winnerPlayerId, note).pipe(tap(() => this.invalidate()));
  }

  clear(season: string): Observable<void> {
    return this.dataSource.clear(season).pipe(tap(() => this.invalidate()));
  }

  private invalidate(): void {
    this.cache$ = null;
  }
}
