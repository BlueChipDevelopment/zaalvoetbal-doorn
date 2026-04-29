// VAPID keys for web push notifications.
// De public key mag publiek zijn (wordt ook in de frontend gebruikt).
// De private key SHOULD come from env/secret (process.env.VAPID_PRIVATE_KEY) —
// de constante hieronder blijft alleen als fallback tijdens migratie.
// TODO (security): rouleer deze sleutel en verwijder deze constante zodra
//   `firebase functions:secrets:set VAPID_PRIVATE_KEY` is uitgevoerd.
export const VAPID_PUBLIC_KEY = 'BJPF_ap7zo3m8LviC3mOKVEW-ks2BgudLf6ZQxkoECTxcR5f6KBwCavpd2X7bcIjwTaDn8fZio1Pm5lmNtCWmhU';
export const VAPID_PRIVATE_KEY = 'MmqsDhqOisjg9RoOlZHkwCW4gVNzUJ6tATLmt4jGgB8';

// Application URLs
export const APP_URLS = {
  OPSTELLING: 'https://zaalvoetbal-doorn.nl/opstelling',
  AANWEZIGHEID: 'https://zaalvoetbal-doorn.nl/aanwezigheid'
} as const;

// Email for VAPID details
export const VAPID_EMAIL = 'mailto:info@zaalvoetbaldoorn.nl';

// Firebase Functions Configuration
export const FIREBASE_CONFIG = {
  region: 'europe-west1',
  timeZone: 'Europe/Amsterdam',
  baseUrl: 'https://europe-west1-zaalvoetbal-doorn-74a8c.cloudfunctions.net'
} as const;

export const SCHEDULE_PATTERNS = {
  HOURLY: 'every 60 minutes',
  DAILY_17H: '0 17 * * *'
} as const;