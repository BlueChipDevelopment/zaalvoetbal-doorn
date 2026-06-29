import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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

  applyMatchDeductions(matchId: number): Observable<void> {
    const matchQ: Promise<{ data: any; error: any }> = this.supabase.client
      .from('matches').select('season').eq('id', matchId).single() as any;
    return (from(matchQ) as Observable<{ data: any; error: any }>).pipe(
      switchMap(({ data: matchRow, error: matchErr }) => {
        if (matchErr) throw matchErr;
        const season: string | null = (matchRow as any)?.season ?? null;
        // 1. verwijder bestaande auto-regels voor deze wedstrijd
        const delQ: Promise<{ error: any }> = this.supabase.client
          .from('strip_transactions').delete().eq('match_id', matchId).eq('reason', 'wedstrijd') as any;
        return (from(delQ) as Observable<{ error: any }>).pipe(
          switchMap(({ error: delErr }) => {
            if (delErr) throw delErr;
            // 2. lees de opstelling
            const lineupQ: Promise<{ data: any; error: any }> = this.supabase.client
              .from('match_lineups').select('player_id').eq('match_id', matchId) as any;
            return (from(lineupQ) as Observable<{ data: any; error: any }>).pipe(
              switchMap(({ data: lineup, error: luErr }) => {
                if (luErr) throw luErr;
                const playerIds: number[] = (lineup ?? []).map((r: any) => r.player_id);
                if (playerIds.length === 0) return of(undefined as void);
                // 3. strippenkaart-spelers binnen de opstelling
                const stripQ: Promise<{ data: any; error: any }> = this.supabase.client
                  .from('players').select('id').in('id', playerIds).eq('uses_strippenkaart', true) as any;
                return (from(stripQ) as Observable<{ data: any; error: any }>).pipe(
                  switchMap(({ data: stripRows, error: spErr }) => {
                    if (spErr) throw spErr;
                    const stripIds: number[] = (stripRows ?? []).map((r: any) => r.id);
                    if (stripIds.length === 0) return of(undefined as void);
                    // 4. abonnementen dat seizoen (binnen de strippenkaart-spelers)
                    const subs$: Observable<{ data: any; error: any }> = season
                      ? (from(this.supabase.client.from('season_subscriptions').select('player_id').eq('season', season).in('player_id', stripIds) as any) as Observable<{ data: any; error: any }>)
                      : of({ data: [] as any[], error: null });
                    return subs$.pipe(
                      switchMap(({ data: subsData, error: subsErr }) => {
                        if (subsErr) throw subsErr;
                        const subscribed = new Set((subsData ?? []).map((r: any) => r.player_id));
                        const eligible = stripIds.filter(id => !subscribed.has(id));
                        if (eligible.length === 0) return of(undefined as void);
                        const rows = eligible.map(id => ({ player_id: id, match_id: matchId, amount: -1, reason: 'wedstrijd' }));
                        const insQ: Promise<{ error: any }> = this.supabase.client
                          .from('strip_transactions').insert(rows) as any;
                        return (from(insQ) as Observable<{ error: any }>).pipe(
                          map(({ error: insErr }) => { if (insErr) throw insErr; return undefined as void; }),
                        );
                      }),
                    );
                  }),
                );
              }),
            );
          }),
        );
      }),
    );
  }
}
