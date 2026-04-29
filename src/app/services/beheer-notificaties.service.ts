import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SupabaseClientService } from './data-sources/supabase-client.service';
import { parseUserAgent } from '../utils/user-agent-parser';

export interface AdminSubscription {
  id: number;
  endpoint: string;
  playerName: string | null;
  playerId: number | null;
  device: string;
  active: boolean;
  createdAt: string | null;
  lastSeenAt: string | null;
}

export interface ReminderLogEntry {
  id: number;
  sentAt: string;
  type: string;
  title: string | null;
  body: string | null;
  recipientsCount: number | null;
  succeededCount: number | null;
  expiredCount: number | null;
}

export interface UnreachablePlayer {
  id: number;
  name: string;
}

export interface MonthBucket {
  month: string;
  newSubsCount: number;
}

export interface NotificationsAnalytics {
  reachableCount: number;
  totalActiveCount: number;
  unreachablePlayers: UnreachablePlayer[];
  growthByMonth: MonthBucket[];
  last30DaysStats: {
    reminders: number;
    recipients: number;
    succeeded: number;
    expired: number;
  };
}

export interface BroadcastResult {
  sent: number;
  failed: number;
  deactivated: number;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class BeheerNotificatiesService {
  constructor(
    private supabase: SupabaseClientService,
    private http: HttpClient,
  ) {}

  getSubscriptionsForAdmin(): Observable<AdminSubscription[]> {
    return from(
      this.supabase.client
        .from('push_subscriptions')
        .select('id, endpoint, user_agent, active, created_at, last_seen_at, player_id, players:player_id(id, name)')
        .order('active', { ascending: false })
        .order('last_seen_at', { ascending: false, nullsFirst: false }),
    ).pipe(
      map(({ data, error }: { data: any; error: any }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          id: row.id,
          endpoint: row.endpoint,
          playerName: row.players?.name ?? null,
          playerId: row.player_id ?? null,
          device: parseUserAgent(row.user_agent),
          active: !!row.active,
          createdAt: row.created_at ?? null,
          lastSeenAt: row.last_seen_at ?? null,
        } as AdminSubscription));
      }),
    );
  }

  getReminderHistory(limit = 50): Observable<ReminderLogEntry[]> {
    return from(
      this.supabase.client
        .from('reminder_log')
        .select('id, sent_at, type, title, body, recipients_count, succeeded_count, expired_count')
        .order('sent_at', { ascending: false })
        .limit(limit),
    ).pipe(
      map(({ data, error }: { data: any; error: any }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          id: row.id,
          sentAt: row.sent_at,
          type: row.type,
          title: row.title,
          body: row.body,
          recipientsCount: row.recipients_count,
          succeededCount: row.succeeded_count,
          expiredCount: row.expired_count,
        } as ReminderLogEntry));
      }),
    );
  }

  getAnalytics(): Observable<NotificationsAnalytics> {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    return combineLatest([
      from(this.supabase.client.from('players').select('id, name, actief').eq('actief', true)),
      from(this.supabase.client.from('push_subscriptions').select('player_id, active, created_at')),
      from(
        this.supabase.client
          .from('reminder_log')
          .select('recipients_count, succeeded_count, expired_count, sent_at')
          .gte('sent_at', thirtyDaysAgo),
      ),
    ]).pipe(
      map(([playersRes, subsRes, logRes]: [any, any, any]) => {
        if (playersRes.error) throw playersRes.error;
        if (subsRes.error) throw subsRes.error;
        if (logRes.error) throw logRes.error;

        const activePlayers = (playersRes.data ?? []) as { id: number; name: string }[];
        const subs = (subsRes.data ?? []) as { player_id: number | null; active: boolean; created_at: string }[];
        const log = (logRes.data ?? []) as { recipients_count: number | null; succeeded_count: number | null; expired_count: number | null }[];

        const reachablePlayerIds = new Set(
          subs.filter(s => s.active && s.player_id !== null).map(s => s.player_id as number),
        );
        const reachableCount = activePlayers.filter(p => reachablePlayerIds.has(p.id)).length;
        const unreachablePlayers = activePlayers
          .filter(p => !reachablePlayerIds.has(p.id))
          .map(p => ({ id: p.id, name: p.name }));

        const monthBuckets = new Map<string, number>();
        const now = new Date();
        for (let i = 11; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
          monthBuckets.set(key, 0);
        }
        for (const s of subs) {
          if (!s.created_at) continue;
          const d = new Date(s.created_at);
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
          if (monthBuckets.has(key)) {
            monthBuckets.set(key, (monthBuckets.get(key) ?? 0) + 1);
          }
        }
        const growthByMonth = Array.from(monthBuckets.entries()).map(([month, newSubsCount]) => ({ month, newSubsCount }));

        const last30DaysStats = log.reduce(
          (acc, r) => ({
            reminders: acc.reminders + 1,
            recipients: acc.recipients + (r.recipients_count ?? 0),
            succeeded: acc.succeeded + (r.succeeded_count ?? 0),
            expired: acc.expired + (r.expired_count ?? 0),
          }),
          { reminders: 0, recipients: 0, succeeded: 0, expired: 0 },
        );

        return {
          reachableCount,
          totalActiveCount: activePlayers.length,
          unreachablePlayers,
          growthByMonth,
          last30DaysStats,
        };
      }),
    );
  }

  sendTestBroadcast(title: string, body: string, url?: string): Observable<BroadcastResult> {
    const endpoint = `${environment.firebaseBaseUrl}/sendPushToAll`;
    return this.http.post<BroadcastResult>(endpoint, {
      type: 'broadcast-test',
      title,
      body,
      url: url || undefined,
    });
  }
}
