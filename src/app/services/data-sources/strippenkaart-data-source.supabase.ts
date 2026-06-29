import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StripTransaction } from '../../interfaces/IStrippenkaart';
import { StrippenkaartDataSource } from './strippenkaart-data-source';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class SupabaseStrippenkaartDataSource extends StrippenkaartDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  getAllTransactions(): Observable<StripTransaction[]> {
    return from(
      this.supabase.client
        .from('strip_transactions')
        .select('id, player_id, match_id, amount, reason, created_at')
        .order('created_at'),
    ).pipe(
      map(({ data, error }: { data: any; error: any }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          id: row.id,
          playerId: row.player_id,
          matchId: row.match_id ?? null,
          amount: row.amount,
          reason: row.reason,
          createdAt: row.created_at ?? undefined,
        } as StripTransaction));
      }),
    );
  }

  addTransaction(playerId: number, amount: number, reason: string): Observable<void> {
    return from(
      this.supabase.client.from('strip_transactions').insert({
        player_id: playerId, match_id: null, amount, reason,
      }),
    ).pipe(
      map(({ error }: { error: any }) => { if (error) throw error; return undefined; }),
    );
  }

  getSubscriptions(season: string): Observable<number[]> {
    return from(
      this.supabase.client.from('season_subscriptions').select('player_id').eq('season', season),
    ).pipe(
      map(({ data, error }: { data: any; error: any }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => row.player_id);
      }),
    );
  }

  setSubscription(playerId: number, season: string, on: boolean): Observable<void> {
    if (on) {
      return from(
        this.supabase.client.from('season_subscriptions').insert({ player_id: playerId, season }),
      ).pipe(map(({ error }: { error: any }) => { if (error) throw error; return undefined; }));
    }
    return from(
      this.supabase.client.from('season_subscriptions').delete().eq('player_id', playerId).eq('season', season),
    ).pipe(map(({ error }: { error: any }) => { if (error) throw error; return undefined; }));
  }

  applyMatchDeductions(_matchId: number): Observable<void> {
    // Geïmplementeerd in Task 4.
    return of(undefined);
  }
}
