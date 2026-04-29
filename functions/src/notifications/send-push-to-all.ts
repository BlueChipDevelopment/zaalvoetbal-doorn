import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { setCorsHeaders } from "../shared/cors";
import { FIREBASE_CONFIG } from "../config/constants";
import { createSupabaseClient, SUPABASE_SERVICE_ROLE_KEY } from "../shared/supabase-client";

/**
 * Push notification functie: stuurt een bericht naar alle spelers met toestemming.
 * Reminder-mode (req.body.type === 'attendance-reminder') stuurt alleen naar
 * actieve spelers die nog NIET hebben gereageerd op de eerstvolgende wedstrijd.
 */
export const sendPushToAll = onRequest(
  { region: FIREBASE_CONFIG.region, secrets: [SUPABASE_SERVICE_ROLE_KEY] },
  async (req, res) => {
    setCorsHeaders(res, req);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    try {
      const isReminder = req.body.type === 'attendance-reminder';
      const isTestMessage = req.body.type === 'test' || !req.body.type;
      logger.info(`📧 Push request: type=${req.body.type ?? '(broadcast)'}, title=${req.body.title}`);

      const supabase = createSupabaseClient();

      // Read parallel: active players, push subscriptions, optional next-match attendance.
      const playersPromise = supabase
        .from('players')
        .select('id, name, actief')
        .eq('actief', true);

      const subscriptionsPromise = supabase
        .from('push_subscriptions')
        .select('endpoint, keys_p256dh, keys_auth, active, player_id')
        .eq('active', true);

      type NextMatchAttendance = {
        nextMatchId: number | null;
        respondedPlayerIds: Set<number>;
      } | null;

      const nextMatchAttendancePromise: Promise<NextMatchAttendance> = isReminder
        ? (async () => {
            const today = new Date();
            const todayIso = today.toISOString().slice(0, 10);
            const { data: nextMatches, error: matchErr } = await supabase
              .from('matches')
              .select('id, date')
              .gte('date', todayIso)
              .order('date', { ascending: true })
              .limit(1);
            if (matchErr) {
              logger.error('Could not load next match', matchErr);
              return { nextMatchId: null, respondedPlayerIds: new Set<number>() };
            }
            const nextMatch = nextMatches?.[0];
            if (!nextMatch) {
              return { nextMatchId: null, respondedPlayerIds: new Set<number>() };
            }
            const { data: attendanceRows, error: attErr } = await supabase
              .from('attendance')
              .select('player_id')
              .eq('match_id', nextMatch.id);
            if (attErr) {
              logger.error('Could not load attendance', attErr);
              return { nextMatchId: nextMatch.id, respondedPlayerIds: new Set<number>() };
            }
            return {
              nextMatchId: nextMatch.id,
              respondedPlayerIds: new Set((attendanceRows ?? []).map(r => r.player_id)),
            };
          })()
        : Promise.resolve(null);

      const [playersResult, subsResult, nextMatchAtt] = await Promise.all([
        playersPromise,
        subscriptionsPromise,
        nextMatchAttendancePromise,
      ]);

      if (playersResult.error) throw playersResult.error;
      if (subsResult.error) throw subsResult.error;

      const activePlayers = playersResult.data ?? [];
      const subscriptions = subsResult.data ?? [];

      let targetPlayerIds: Set<number>;
      if (isReminder && nextMatchAtt) {
        targetPlayerIds = new Set(
          activePlayers
            .filter(p => !nextMatchAtt.respondedPlayerIds.has(p.id))
            .map(p => p.id),
        );
      } else {
        targetPlayerIds = new Set(activePlayers.map(p => p.id));
      }

      logger.info(`📧 Target players: ${targetPlayerIds.size}, subscriptions: ${subscriptions.length}`);

      const notifications: Promise<unknown>[] = [];
      const notificationEndpoints: string[] = [];
      let skippedInactivePlayer = 0;

      for (const sub of subscriptions) {
        let shouldSend: boolean;
        if (isReminder) {
          shouldSend = sub.player_id !== null && targetPlayerIds.has(sub.player_id);
        } else if (isTestMessage) {
          shouldSend = true;
        } else {
          shouldSend = sub.player_id === null || targetPlayerIds.has(sub.player_id);
        }
        if (!shouldSend) {
          skippedInactivePlayer++;
          continue;
        }

        try {
          const subscription = {
            endpoint: sub.endpoint,
            keys: { p256dh: sub.keys_p256dh, auth: sub.keys_auth },
          };
          const payload = JSON.stringify({
            notification: {
              title: req.body.title || 'Zaalvoetbal Doorn',
              body: req.body.body || 'Er is nieuws van Zaalvoetbal Doorn!',
              icon: '/assets/icons/icon-192x192.png',
              badge: '/assets/icons/icon-72x72.png',
              data: { url: req.body.url || '/' },
            },
          });
          notifications.push(webpush.sendNotification(subscription, payload, { TTL: 60, urgency: 'high' }));
          notificationEndpoints.push(sub.endpoint);
        } catch (err) {
          logger.error(`Invalid subscription endpoint=${sub.endpoint}`, err);
        }
      }

      logger.info(`📧 Sending ${notifications.length} — skipped: ${skippedInactivePlayer} not targeted`);

      const results = await Promise.allSettled(notifications);
      const succeeded = results.filter(r => r.status === 'fulfilled').length;
      const failed = results.filter(r => r.status === 'rejected').length;

      const expiredEndpoints: string[] = [];
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          const reason = result.reason as { statusCode?: number } | undefined;
          const statusCode = reason?.statusCode;
          if (statusCode === 404 || statusCode === 410) {
            expiredEndpoints.push(notificationEndpoints[index]);
          } else {
            logger.error(`Push failed (endpoint ${notificationEndpoints[index]}, status ${statusCode ?? 'unknown'})`);
          }
        }
      });

      if (expiredEndpoints.length > 0) {
        const { error: deactivateErr } = await supabase
          .from('push_subscriptions')
          .update({ active: false })
          .in('endpoint', expiredEndpoints);
        if (deactivateErr) {
          logger.error('Failed to deactivate expired subscriptions', deactivateErr);
        } else {
          logger.info(`🧹 Deactivated ${expiredEndpoints.length} expired push subscription(s)`);
        }
      }

      logger.info(`📧 Sent ${succeeded}/${notifications.length} push notifications (${failed} failed, ${expiredEndpoints.length} deactivated)`);

      const logType = typeof req.body.type === 'string' && req.body.type
        ? `broadcast-${req.body.type}`
        : 'broadcast-other';
      const { error: logErr } = await supabase.from('reminder_log').insert({
        type: logType,
        title: req.body.title || null,
        body: req.body.body || null,
        recipients_count: notifications.length,
        succeeded_count: succeeded,
        expired_count: expiredEndpoints.length,
      });
      if (logErr) {
        logger.warn(`reminder_log insert failed: ${logErr.message}`);
      }

      res.json({
        success: true,
        sent: succeeded,
        failed: failed,
        deactivated: expiredEndpoints.length,
        total: notifications.length,
      });
    } catch (error) {
      logger.error('sendPushToAll failed', error);
      res.status(500).json({ success: false, message: 'Error sending push notifications' });
    }
  }
);
