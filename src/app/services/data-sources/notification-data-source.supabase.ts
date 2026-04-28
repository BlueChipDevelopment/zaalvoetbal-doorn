import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PushSubscriptionRecord } from '../../interfaces/IPushSubscription';
import { NotificationDataSource } from './notification-data-source';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class SupabaseNotificationDataSource extends NotificationDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  getAllSubscriptions(): Observable<PushSubscriptionRecord[]> {
    return from(
      this.supabase.client
        .from('push_subscriptions')
        .select('endpoint, keys_p256dh, keys_auth, user_agent, last_seen_at, active, player_id, players:player_id(name)'),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          endpoint: row.endpoint,
          keysP256dh: row.keys_p256dh ?? '',
          keysAuth: row.keys_auth ?? '',
          userAgent: row.user_agent ?? '',
          timestamp: row.last_seen_at ?? '',
          active: !!row.active,
          playerName: row.players?.name ?? '',
        } as PushSubscriptionRecord));
      }),
    );
  }

  addSubscription(record: PushSubscriptionRecord): Observable<void> {
    // Player name → id lookup. If playerName is empty, skip lookup.
    const trimmedName = record.playerName?.trim() ?? '';
    const lookup$: Observable<{ data: any; error: any }> = (trimmedName
      ? from(this.supabase.client.from('players').select('id').eq('name', trimmedName).limit(1) as any)
      : from(Promise.resolve({ data: [{ id: null }], error: null }))) as Observable<{ data: any; error: any }>;

    return lookup$.pipe(
      switchMap(({ data, error }: { data: any; error: any }) => {
        if (error) throw error;
        const playerId = (data as any[])?.[0]?.id ?? null;
        const insert = {
          endpoint: record.endpoint,
          keys_p256dh: record.keysP256dh,
          keys_auth: record.keysAuth,
          user_agent: record.userAgent,
          last_seen_at: record.timestamp,
          active: record.active,
          player_id: playerId,
        };
        return from(
          this.supabase.client.from('push_subscriptions').upsert(insert, { onConflict: 'endpoint' }),
        ).pipe(
          map(({ error: upsertError }) => {
            if (upsertError) throw upsertError;
            return undefined;
          }),
        );
      }),
    );
  }

  deactivateSubscription(endpoint: string): Observable<void> {
    return from(
      this.supabase.client.from('push_subscriptions').update({ active: false }).eq('endpoint', endpoint),
    ).pipe(
      map(({ error }) => {
        if (error) throw error;
        return undefined;
      }),
    );
  }
}
