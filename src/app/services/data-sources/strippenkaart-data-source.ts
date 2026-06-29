import { Observable } from 'rxjs';
import { StripTransaction } from '../../interfaces/IStrippenkaart';

export abstract class StrippenkaartDataSource {
  /** Alle strip-mutaties (voor client-side saldo-aggregatie). */
  abstract getAllTransactions(): Observable<StripTransaction[]>;
  /** Voegt een handmatige mutatie toe (match_id null). */
  abstract addTransaction(playerId: number, amount: number, reason: string): Observable<void>;
  /** player_ids met een abonnement voor het gegeven seizoen. */
  abstract getSubscriptions(season: string): Observable<number[]>;
  /** Zet abonnement voor (player, season) aan of uit. */
  abstract setSubscription(playerId: number, season: string, on: boolean): Observable<void>;
  /** Idempotente strip-aftrek voor een gespeelde wedstrijd. */
  abstract applyMatchDeductions(matchId: number): Observable<void>;
}
