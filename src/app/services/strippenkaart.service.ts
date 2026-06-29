import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, shareReplay, finalize } from 'rxjs/operators';
import { StrippenkaartDataSource } from './data-sources/strippenkaart-data-source';
import { StripTransaction } from '../interfaces/IStrippenkaart';

@Injectable({ providedIn: 'root' })
export class StrippenkaartService {
  private txCache$ = new BehaviorSubject<StripTransaction[] | null>(null);
  private timestamp = 0;
  private readonly CACHE_MS = 5 * 60 * 1000;
  private inflight$?: Observable<StripTransaction[]>;

  constructor(private dataSource: StrippenkaartDataSource) {}

  private transactions(): Observable<StripTransaction[]> {
    const now = Date.now();
    const cached = this.txCache$.value;
    if (cached && (now - this.timestamp) < this.CACHE_MS) {
      return of(cached);
    }
    if (!this.inflight$) {
      this.inflight$ = this.dataSource.getAllTransactions().pipe(
        tap(txs => { this.txCache$.next(txs); this.timestamp = Date.now(); }),
        finalize(() => { this.inflight$ = undefined; }),
        shareReplay(1),
      );
    }
    return this.inflight$;
  }

  refresh(): void {
    this.txCache$.next(null);
    this.timestamp = 0;
  }

  getBalance(playerId: number): Observable<number> {
    return this.transactions().pipe(
      map(txs => txs.filter(t => t.playerId === playerId).reduce((sum, t) => sum + t.amount, 0)),
    );
  }

  getLedger(playerId: number): Observable<StripTransaction[]> {
    return this.transactions().pipe(
      map(txs => txs.filter(t => t.playerId === playerId)),
    );
  }

  addStrips(playerId: number, amount: number): Observable<void> {
    return this.dataSource.addTransaction(playerId, amount, 'kaart gekocht').pipe(
      tap(() => this.refresh()),
    );
  }

  correct(playerId: number, amount: number): Observable<void> {
    return this.dataSource.addTransaction(playerId, amount, 'correctie').pipe(
      tap(() => this.refresh()),
    );
  }

  getSubscriptions(season: string): Observable<number[]> {
    return this.dataSource.getSubscriptions(season);
  }

  isSubscribed(playerId: number, season: string): Observable<boolean> {
    return this.dataSource.getSubscriptions(season).pipe(
      map(ids => ids.includes(playerId)),
    );
  }

  setSubscription(playerId: number, season: string, on: boolean): Observable<void> {
    return this.dataSource.setSubscription(playerId, season, on);
  }
}
