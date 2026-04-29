import { onSchedule } from "firebase-functions/v2/scheduler";
import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { FIREBASE_CONFIG, SCHEDULE_PATTERNS } from "../config/constants";
import { createSupabaseClient, SUPABASE_SERVICE_ROLE_KEY } from "../shared/supabase-client";

const REMINDER_HOURS = [24, 12, 4];

/**
 * Scheduled: stuur reminders 24u, 12u en 4u voor de eerstvolgende wedstrijd.
 * Houdt bij in `reminder_log` of een reminder al is verstuurd.
 */
export const scheduledAttendanceReminders = onSchedule(
  {
    schedule: SCHEDULE_PATTERNS.HOURLY,
    region: FIREBASE_CONFIG.region,
    timeZone: FIREBASE_CONFIG.timeZone,
    secrets: [SUPABASE_SERVICE_ROLE_KEY],
  },
  async () => {
    const supabase = createSupabaseClient();
    const now = new Date();

    // Vind de eerstvolgende wedstrijd (date >= today).
    const todayIso = now.toISOString().slice(0, 10);
    const { data: nextMatches, error: matchErr } = await supabase
      .from('matches')
      .select('id, date')
      .gte('date', todayIso)
      .order('date', { ascending: true })
      .limit(1);
    if (matchErr) {
      logger.error('attendance-reminders: could not load next match', matchErr);
      return;
    }
    const nextMatch = nextMatches?.[0];
    if (!nextMatch) {
      logger.info('attendance-reminders: no upcoming match');
      return;
    }

    // Wedstrijd-tijd: 21:00 Europe/Amsterdam. DST-heuristiek (april-sept = CEST +02:00, anders CET +01:00).
    // Boundary-gevallen (eind okt, eind maart) kunnen 1u afwijken — acceptabel voor zaalvoetbal-seizoen.
    const month = parseInt(nextMatch.date.slice(5, 7), 10);
    const offsetHours = (month >= 4 && month <= 9) ? 2 : 1;
    const offset = `+0${offsetHours}:00`;
    const matchDateTime = new Date(`${nextMatch.date}T21:00:00${offset}`);
    const hoursUntilMatch = (matchDateTime.getTime() - now.getTime()) / (1000 * 60 * 60);

    // Bepaal welk reminder-slot we nu zouden moeten versturen (als 'ie nog niet gestuurd is).
    const slot = REMINDER_HOURS.find(h => Math.abs(hoursUntilMatch - h) <= 0.5);
    if (!slot) {
      logger.info(`attendance-reminders: no reminder slot active (hoursUntilMatch=${hoursUntilMatch.toFixed(2)})`);
      return;
    }

    const reminderType = `attendance-reminder-${slot}h`;

    // Check of we deze al hebben verstuurd voor deze match (binnen laatste 7 dagen).
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { data: existingLogs, error: logErr } = await supabase
      .from('reminder_log')
      .select('id')
      .eq('type', reminderType)
      .gte('sent_at', sevenDaysAgo)
      .ilike('body', `%match=${nextMatch.id}%`);
    if (logErr) {
      logger.error('attendance-reminders: could not check reminder_log', logErr);
      return;
    }
    if (existingLogs && existingLogs.length > 0) {
      logger.info(`attendance-reminders: ${reminderType} already sent for match ${nextMatch.id}`);
      return;
    }

    // Active players die nog niet hebben gereageerd op deze match.
    const { data: activePlayers, error: playersErr } = await supabase
      .from('players')
      .select('id')
      .eq('actief', true);
    if (playersErr) {
      logger.error('attendance-reminders: could not load players', playersErr);
      return;
    }
    const { data: respondedRows, error: respErr } = await supabase
      .from('attendance')
      .select('player_id')
      .eq('match_id', nextMatch.id);
    if (respErr) {
      logger.error('attendance-reminders: could not load attendance', respErr);
      return;
    }
    const respondedIds = new Set((respondedRows ?? []).map(r => r.player_id));
    const targetPlayerIds = new Set(
      (activePlayers ?? []).filter(p => !respondedIds.has(p.id)).map(p => p.id),
    );

    // Vind active push_subscriptions voor target players.
    const { data: subs, error: subsErr } = await supabase
      .from('push_subscriptions')
      .select('endpoint, keys_p256dh, keys_auth, player_id')
      .eq('active', true);
    if (subsErr) {
      logger.error('attendance-reminders: could not load subscriptions', subsErr);
      return;
    }

    const eligible = (subs ?? []).filter(s => s.player_id !== null && targetPlayerIds.has(s.player_id));
    logger.info(`attendance-reminders: slot=${slot}h, match=${nextMatch.id}, target=${targetPlayerIds.size}, subs=${eligible.length}`);

    if (eligible.length === 0) {
      logger.info('attendance-reminders: no eligible subscriptions, skipping send');
      // Toch loggen zodat we niet over een uur opnieuw proberen.
      await supabase.from('reminder_log').insert({
        type: reminderType,
        title: `Reminder ${slot}u`,
        body: `match=${nextMatch.id} (no eligible)`,
        recipients_count: 0,
        succeeded_count: 0,
        expired_count: 0,
      });
      return;
    }

    const title = `Aanwezigheid bevestigen ⏰`;
    const body = `Speel je over ${slot} uur mee?`;
    const url = `${FIREBASE_CONFIG.baseUrl.replace(/-cloudfunctions\.net.*$/, '.web.app')}/kalender`;

    const sends = eligible.map(s => {
      const sub = { endpoint: s.endpoint, keys: { p256dh: s.keys_p256dh, auth: s.keys_auth } };
      const payload = JSON.stringify({
        notification: {
          title,
          body,
          icon: '/assets/icons/icon-192x192.png',
          badge: '/assets/icons/icon-72x72.png',
          data: { url },
        },
      });
      return webpush.sendNotification(sub, payload, { TTL: 60, urgency: 'high' });
    });
    const results = await Promise.allSettled(sends);
    const succeeded = results.filter(r => r.status === 'fulfilled').length;
    const expired: string[] = [];
    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        const reason = r.reason as { statusCode?: number } | undefined;
        if (reason?.statusCode === 404 || reason?.statusCode === 410) {
          expired.push(eligible[i].endpoint);
        }
      }
    });

    if (expired.length > 0) {
      await supabase.from('push_subscriptions').update({ active: false }).in('endpoint', expired);
    }

    await supabase.from('reminder_log').insert({
      type: reminderType,
      title,
      body: `${body} (match=${nextMatch.id})`,
      recipients_count: eligible.length,
      succeeded_count: succeeded,
      expired_count: expired.length,
    });

    logger.info(`attendance-reminders: sent ${succeeded}/${eligible.length} (expired: ${expired.length})`);
  }
);
