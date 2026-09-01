import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeasonDecider } from '../../interfaces/ISeasonDecider';
import { SeasonDeciderDataSource } from './season-decider-data-source';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class SupabaseSeasonDeciderDataSource extends SeasonDeciderDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  getAll(): Observable<SeasonDecider[]> {
    return from(
      this.supabase.client
        .from('season_deciders')
        .select('season, winner_player_id, note')
        .order('season'),
    ).pipe(
      map(({ data, error }: { data: any; error: any }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          season: row.season,
          winnerPlayerId: row.winner_player_id,
          note: row.note ?? null,
        } as SeasonDecider));
      }),
    );
  }

  set(season: string, winnerPlayerId: number, note: string | null): Observable<void> {
    return from(
      this.supabase.client
        .from('season_deciders')
        .upsert({ season, winner_player_id: winnerPlayerId, note }, { onConflict: 'season' }),
    ).pipe(
      map(({ error }: { error: any }) => { if (error) throw error; return undefined; }),
    );
  }

  clear(season: string): Observable<void> {
    return from(
      this.supabase.client.from('season_deciders').delete().eq('season', season),
    ).pipe(
      map(({ error }: { error: any }) => { if (error) throw error; return undefined; }),
    );
  }
}
