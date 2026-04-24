import * as logger from "firebase-functions/logger";

/**
 * Helper: Authorize Google Sheets API.
 * Cached op module-niveau — Firebase Functions hergebruikt een warm instance
 * meerdere invocations lang, dus de auth hoeft niet per request opnieuw.
 */
type SheetsClient = Awaited<ReturnType<typeof createSheetsClient>>;
let cachedClient: SheetsClient | null = null;
let cachedClientPromise: Promise<SheetsClient> | null = null;

async function createSheetsClient() {
  const { google } = await import("googleapis");
  const authOptions: any = {
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  };

  // Alleen lokaal een keyfile gebruiken
  if (process.env.FUNCTIONS_EMULATOR === 'true' || process.env.NODE_ENV === 'development') {
    authOptions.keyFile = "assets/service-account-key.json";
  }

  const auth = new google.auth.GoogleAuth(authOptions);
  const authClient = await auth.getClient();
  const projectId = await auth.getProjectId();
  let clientEmail: string | undefined;

  if (authClient && typeof authClient === 'object' && 'email' in authClient) {
    clientEmail = (authClient as any).email;
  }

  if (!clientEmail) {
    try {
      const res = await fetch(
        'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/email',
        { headers: { 'Metadata-Flavor': 'Google' } }
      );
      if (res.ok) {
        clientEmail = await res.text();
      }
    } catch {
      // negeer — metadata niet bereikbaar (bijv. lokaal)
    }
  }

  logger.info(`Google Sheets client initialized: projectId=${projectId}, clientEmail=${clientEmail}`);
  return google.sheets({ version: "v4", auth: authClient as any });
}

export async function getSheetsClient(): Promise<SheetsClient> {
  if (cachedClient) return cachedClient;
  // Zorg dat meerdere gelijktijdige calls tijdens cold start dezelfde init-belofte krijgen
  // i.p.v. de (dure) initialisatie parallel te draaien.
  if (!cachedClientPromise) {
    cachedClientPromise = createSheetsClient().catch(err => {
      cachedClientPromise = null; // laat een volgende call opnieuw proberen
      throw err;
    });
  }
  cachedClient = await cachedClientPromise;
  return cachedClient;
}
