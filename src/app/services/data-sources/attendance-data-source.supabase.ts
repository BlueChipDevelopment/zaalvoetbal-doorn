import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AttendanceRecord, AttendanceUpdate } from '../../interfaces/IAttendance';
import { AttendanceDataSource } from './attendance-data-source';
import { SupabaseClientService } from './supabase-client.service';

const PAGE_SIZE = 1000;

@Injectable({ providedIn: 'root' })
export class SupabaseAttendanceDataSource extends AttendanceDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  getAll(): Observable<AttendanceRecord[]> {
    return from(this.fetchAllRows()).pipe(
      map(rows => rows.map((row: any) => ({
        date: row.match?.date ?? '',
        playerName: row.player?.name ?? '',
        status: row.status,
        timestamp: row.updated_at ?? undefined,
      } as AttendanceRecord))),
    );
  }

  /**
   * Supabase/PostgREST geeft max. 1000 rijen per request terug. De attendance-tabel
   * is groter dan dat, dus we halen hem in pagina's op (stabiel gesorteerd op PK).
   */
  private async fetchAllRows(): Promise<any[]> {
    const all: any[] = [];
    for (let offset = 0; ; offset += PAGE_SIZE) {
      const { data, error } = await this.supabase.client
        .from('attendance')
        .select('match_id, player_id, status, updated_at, match:matches(date), player:players(name)')
        .order('match_id', { ascending: true })
        .order('player_id', { ascending: true })
        .range(offset, offset + PAGE_SIZE - 1);
      if (error) throw error;
      const page = data ?? [];
      all.push(...page);
      if (page.length < PAGE_SIZE) return all;
    }
  }

  upsert(record: AttendanceUpdate): Observable<void> {
    // Lookup player_id
    return from(
      this.supabase.client.from('players').select('id').eq('name', record.playerName.trim()).limit(1),
    ).pipe(
      switchMap(({ data: playerData, error: playerError }) => {
        if (playerError) throw playerError;
        const playerRow = (playerData as any[])?.[0];
        if (!playerRow) {
          return throwError(() => new Error(`Player not found: ${record.playerName}`));
        }
        // Lookup match_id by date
        return from(
          this.supabase.client.from('matches').select('id').eq('date', record.date).limit(1),
        ).pipe(
          switchMap(({ data: matchData, error: matchError }) => {
            if (matchError) throw matchError;
            const matchRow = (matchData as any[])?.[0];
            if (!matchRow) {
              return throwError(() => new Error(`Match not found for date: ${record.date}`));
            }
            return from(
              this.supabase.client.from('attendance').upsert({
                match_id: matchRow.id,
                player_id: playerRow.id,
                status: record.status,
              }, { onConflict: 'match_id,player_id' }),
            ).pipe(
              map(({ error }) => {
                if (error) throw error;
                return undefined;
              }),
            );
          }),
        );
      }),
    );
  }
}
