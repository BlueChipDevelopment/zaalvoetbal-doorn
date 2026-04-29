import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { APP_URLS } from "../config/constants";
import { createSupabaseClient } from "../shared/supabase-client";

/**
 * Verstuur push notification dat de teams gegenereerd zijn.
 * Wordt aangeroepen vanuit team-logic na een succesvolle (auto-)generation.
 */
export async function sendTeamGenerationNotification(
  teamWhiteNames: string,
  teamRedNames: string,
  trigger: string,
) {
  const supabase = createSupabaseClient();

  // Read active push_subscriptions voor active players.
  const { data: subs, error } = await supabase
    .from('push_subscriptions')
    .select('endpoint, keys_p256dh, keys_auth, player_id, players!inner(actief)')
    .eq('active', true)
    .eq('players.actief', true);

  if (error) {
    logger.error('team-notification: could not load subscriptions', error);
    return;
  }

  if (!subs || subs.length === 0) {
    logger.info('team-notification: no eligible subscriptions');
    return;
  }

  const title = 'Opstelling bekend ⚽';
  const body = `Wit: ${teamWhiteNames}\nRood: ${teamRedNames}`;
  const url = APP_URLS.OPSTELLING;

  const sends = subs.map(s => {
    const subscription = {
      endpoint: s.endpoint,
      keys: { p256dh: s.keys_p256dh, auth: s.keys_auth },
    };
    const payload = JSON.stringify({ title, body, url });
    return webpush.sendNotification(subscription, payload);
  });

  const results = await Promise.allSettled(sends);
  const succeeded = results.filter(r => r.status === 'fulfilled').length;
  const expired: string[] = [];
  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      const reason = r.reason as { statusCode?: number } | undefined;
      if (reason?.statusCode === 404 || reason?.statusCode === 410) {
        expired.push(subs[i].endpoint);
      }
    }
  });

  if (expired.length > 0) {
    await supabase.from('push_subscriptions').update({ active: false }).in('endpoint', expired);
  }

  logger.info(`team-notification (${trigger}): sent ${succeeded}/${subs.length} (expired ${expired.length})`);
}
