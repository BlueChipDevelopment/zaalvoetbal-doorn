import * as webpush from 'web-push';
import * as logger from 'firebase-functions/logger';
import { VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_EMAIL } from './constants';

/**
 * Configureer web-push met VAPID details.
 *
 * Probeer eerst de private key uit environment variables / Firebase secrets te lezen
 * (`VAPID_PRIVATE_KEY` — zet deze via `firebase functions:secrets:set VAPID_PRIVATE_KEY`).
 * Valt terug op de constante in `constants.ts` voor backwards compatibility tijdens migratie.
 *
 * TODO (security): Rouleer de VAPID private key en verwijder de fallback uit `constants.ts`
 * zodra productie de secret gebruikt. De huidige waarde staat namelijk in git history.
 */
let configured = false;

export function ensureWebpushConfigured(): void {
  if (configured) return;
  const privateKey = process.env.VAPID_PRIVATE_KEY || VAPID_PRIVATE_KEY;
  const publicKey = process.env.VAPID_PUBLIC_KEY || VAPID_PUBLIC_KEY;
  const email = process.env.VAPID_EMAIL || VAPID_EMAIL;

  if (!process.env.VAPID_PRIVATE_KEY) {
    logger.warn('VAPID_PRIVATE_KEY env var niet gezet — fallback op hardcoded constant wordt gebruikt. Configureer de secret en rouleer de sleutel zodra mogelijk.');
  }

  webpush.setVapidDetails(email, publicKey, privateKey);
  configured = true;
}

// Voor code die nog verwacht dat dit module side-effects had: roep helper direct aan.
ensureWebpushConfigured();
