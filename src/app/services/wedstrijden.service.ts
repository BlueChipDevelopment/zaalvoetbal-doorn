import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, shareReplay } from 'rxjs/operators';
import { WedstrijdData, WedstrijdFilter, SeizoenData } from '../interfaces/IWedstrijd';
import { MatchDataSource } from './data-sources/match-data-source';

@Injectable({
  providedIn: 'root'
})
export class WedstrijdenService {
  private wedstrijdenCache$ = new BehaviorSubject<WedstrijdData[] | null>(null);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 3 * 60 * 1000;

  constructor(private dataSource: MatchDataSource) {}

  getWedstrijden(filter?: WedstrijdFilter): Observable<WedstrijdData[]> {
    return this.getCachedWedstrijden().pipe(
      map(wedstrijden => this.applyFilter(wedstrijden, filter))
    );
  }

  getGespeeldeWedstrijden(): Observable<WedstrijdData[]> {
    return this.getWedstrijden({ gespeeld: true });
  }

  getToekomstigeWedstrijden(): Observable<WedstrijdData[]> {
    return this.getWedstrijden({ gespeeld: false });
  }

  getBeschikbareSeizoen(): Observable<SeizoenData[]> {
    return this.getCachedWedstrijden().pipe(
      map(wedstrijden => {
        const seizoenMap = new Map<string, { totaal: number; gespeeld: number }>();
        wedstrijden
          .filter(w => w.datum !== null)
          .forEach(wedstrijd => {
            const seizoen = wedstrijd.seizoen;
            if (seizoen) {
              if (!seizoenMap.has(seizoen)) {
                seizoenMap.set(seizoen, { totaal: 0, gespeeld: 0 });
              }
              const stats = seizoenMap.get(seizoen)!;
              stats.totaal++;
              if (wedstrijd.scoreWit !== null && wedstrijd.scoreRood !== null) {
                stats.gespeeld++;
              }
            }
          });
        return Array.from(seizoenMap.entries())
          .map(([seizoen, stats]) => ({
            seizoen,
            aantalWedstrijden: stats.totaal,
            aantalGespeeld: stats.gespeeld
          }))
          .sort((a, b) => b.seizoen.localeCompare(a.seizoen));
      })
    );
  }

  getWedstrijdenVoorSeizoen(seizoen: string): Observable<WedstrijdData[]> {
    return this.getWedstrijden({ seizoen });
  }

  refreshCache(): Observable<WedstrijdData[]> {
    this.wedstrijdenCache$.next(null);
    this.cacheTimestamp = 0;
    return this.getCachedWedstrijden();
  }

  findWedstrijdBySeizoenAndNummer(seizoen: string, wedstrijdNummer: number): Observable<WedstrijdData | null> {
    return this.getCachedWedstrijden().pipe(
      map(wedstrijden => wedstrijden.find(w =>
        w.seizoen === seizoen && w.id === wedstrijdNummer
      ) || null)
    );
  }

  addWedstrijd(wedstrijd: WedstrijdData): Observable<WedstrijdData> {
    return this.dataSource.add(wedstrijd).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error adding wedstrijd:', error);
        throw error;
      })
    );
  }

  updateWedstrijd(wedstrijd: WedstrijdData): Observable<void> {
    return this.dataSource.update(wedstrijd).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error updating wedstrijd:', error);
        throw error;
      })
    );
  }

  /**
   * Bulk-update score + zlatan voor één wedstrijd. Vervangt de directe
   * `batchUpdateSheet`-aanroep in score.component.
   */
  updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatan: string,
  ): Observable<void> {
    return this.dataSource.updateScore(matchId, scoreWhite, scoreRed, zlatan).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error updating score:', error);
        throw error;
      })
    );
  }

  /**
   * Update team-namen + generatietype + optionele voorbeschouwing.
   * Vervangt de directe `batchUpdateSheet`-aanroep in team-generator.component.
   */
  updateTeams(
    matchId: number,
    teamWit: string,
    teamRood: string,
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void> {
    return this.dataSource.updateTeams(matchId, teamWit, teamRood, teamGeneration, voorbeschouwing).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error updating teams:', error);
        throw error;
      })
    );
  }

  private getCachedWedstrijden(): Observable<WedstrijdData[]> {
    const now = Date.now();
    const cachedData = this.wedstrijdenCache$.value;
    if (cachedData && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return of(cachedData);
    }
    return this.dataSource.getAll().pipe(
      tap(wedstrijden => {
        this.wedstrijdenCache$.next(wedstrijden);
        this.cacheTimestamp = now;
      }),
      catchError(error => {
        console.error('Error fetching wedstrijden data:', error);
        return of([]);
      }),
      shareReplay(1)
    );
  }

  private applyFilter(wedstrijden: WedstrijdData[], filter?: WedstrijdFilter): WedstrijdData[] {
    if (!filter) return wedstrijden;
    let filtered = wedstrijden;
    if (filter.seizoen) {
      filtered = filtered.filter(w => w.seizoen === filter.seizoen);
    }
    if (filter.gespeeld !== undefined) {
      filtered = filtered.filter(w => {
        const isGespeeld = w.scoreWit !== null && w.scoreRood !== null;
        return filter.gespeeld ? isGespeeld : !isGespeeld;
      });
    }
    if (filter.teamFilter) {
      const teamFilter = filter.teamFilter.toLowerCase();
      filtered = filtered.filter(w =>
        w.teamWit.toLowerCase().includes(teamFilter) ||
        w.teamRood.toLowerCase().includes(teamFilter)
      );
    }
    return filtered;
  }
}
