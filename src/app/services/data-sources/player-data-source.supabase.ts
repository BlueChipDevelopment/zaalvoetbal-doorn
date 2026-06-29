import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';
import { PlayerDataSource } from './player-data-source';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class SupabasePlayerDataSource extends PlayerDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  private normalizeEmail(email?: string): string | null {
    const trimmed = email?.trim().toLowerCase();
    return trimmed ? trimmed : null;
  }

  getAll(): Observable<PlayerSheetData[]> {
    return from(
      this.supabase.client
        .from('players')
        .select('id, name, position, actief, email, is_admin, uses_strippenkaart')
        .order('name'),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data ?? []).map(row => ({
          id: row.id,
          name: row.name,
          position: row.position,
          actief: row.actief,
          email: row.email ?? undefined,
          isAdmin: row.is_admin ?? false,
          usesStrippenkaart: row.uses_strippenkaart ?? false,
        }));
      }),
    );
  }

  add(player: PlayerSheetData): Observable<void> {
    return from(
      this.supabase.client.from('players').insert({
        name: player.name,
        position: player.position,
        actief: player.actief,
        email: this.normalizeEmail(player.email),
        is_admin: player.isAdmin ?? false,
        uses_strippenkaart: player.usesStrippenkaart ?? false,
      }),
    ).pipe(
      map(({ error }) => {
        if (error) throw error;
        return undefined;
      }),
    );
  }

  update(nameOrId: string | number, player: PlayerSheetData): Observable<void> {
    const updateById = (id: number) =>
      from(
        this.supabase.client.from('players').update({
          name: player.name,
          position: player.position,
          actief: player.actief,
          email: this.normalizeEmail(player.email),
          is_admin: player.isAdmin ?? false,
          uses_strippenkaart: player.usesStrippenkaart ?? false,
        }).eq('id', id),
      ).pipe(
        map(({ error }) => {
          if (error) throw error;
          return undefined;
        }),
      );

    if (typeof nameOrId === 'number') {
      return updateById(nameOrId);
    }

    return from(
      this.supabase.client.from('players').select('id').eq('name', nameOrId).limit(1),
    ).pipe(
      switchMap(({ data, error }) => {
        if (error) throw error;
        const row = data?.[0];
        if (!row) {
          return throwError(() => new Error(`Player not found: ${nameOrId}`));
        }
        return updateById(row.id);
      }),
    );
  }

  isAdminEmail(email: string): Observable<boolean> {
    const normalized = email.trim().toLowerCase();
    return from(
      this.supabase.client
        .from('players')
        .select('id')
        .eq('email', normalized)
        .eq('is_admin', true)
        .limit(1),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data?.length ?? 0) > 0;
      }),
    );
  }
}
