/**
 * Allowlist van toegestane origins voor CORS.
 * Pas aan bij nieuwe domeinen (bijv. preview-omgevingen).
 */
const ALLOWED_ORIGINS = [
  'https://www.zaalvoetbal-doorn.nl',
  'https://zaalvoetbal-doorn.nl',
  'https://zaalvoetbal-doorn-74a8c.web.app',
  'https://zaalvoetbal-doorn-74a8c.firebaseapp.com',
  'http://localhost:4200',
  'http://localhost:8080',
];

/**
 * Helper: Set CORS headers for all responses.
 * Reflecteert alleen de origin terug als die op de allowlist staat.
 */
export function setCorsHeaders(res: any, req?: { headers?: { origin?: string | string[] } }) {
  const rawOrigin = req?.headers?.origin;
  const origin = Array.isArray(rawOrigin) ? rawOrigin[0] : rawOrigin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Vary', 'Origin');
  }
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
}
