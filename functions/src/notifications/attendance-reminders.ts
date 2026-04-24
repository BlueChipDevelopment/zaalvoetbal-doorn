import { onSchedule } from "firebase-functions/v2/scheduler";
import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { getSheetsClient } from "../shared/sheets-client";
import { SPREADSHEET_ID, APP_URLS, FIREBASE_CONFIG, SCHEDULE_PATTERNS, SHEET_NAMES, SHEET_RANGES, COLUMN_INDICES } from "../config/constants";
import { parseMatchDateToISO, parseMatchDateWithTime, toISODateString } from "../shared/date-utils";

/**
 * Scheduled function: stuur automatisch reminders 24u, 12u en 4u voor de eerstvolgende wedstrijd.
 * Houdt bij in een 'ReminderLog' sheet of een reminder al is verstuurd.
 */
export const scheduledAttendanceReminders = onSchedule(
  { schedule: SCHEDULE_PATTERNS.HOURLY, region: FIREBASE_CONFIG.region, timeZone: FIREBASE_CONFIG.timeZone },
  async (_event) => {
    const spreadsheetId = SPREADSHEET_ID;
    const sheets = await getSheetsClient();
    const REMINDER_HOURS = [24, 12, 4];

    // Lees alle benodigde sheets één keer, parallel. Dat scheelt 4-5 sequentiële API-calls.
    const [aanwezigheidResult, wedstrijdenResult, reminderLogResult, spelersResult, notificatiesResult] =
      await Promise.all([
        sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${SHEET_NAMES.AANWEZIGHEID}!${SHEET_RANGES.FIRST_COLUMNS}`,
        }),
        sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${SHEET_NAMES.WEDSTRIJDEN}!A:F`,
        }),
        sheets.spreadsheets.values
          .get({
            spreadsheetId,
            range: `${SHEET_NAMES.REMINDER_LOG}!A2:C`,
          })
          .catch(() => ({ data: { values: [] as any[][] } })),
        sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${SHEET_NAMES.SPELERS}!${SHEET_RANGES.FIRST_COLUMNS}`,
        }),
        sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${SHEET_NAMES.NOTIFICATIES}!${SHEET_RANGES.FIRST_COLUMNS}`,
        }),
      ]);

    const aanwezigheidRows = aanwezigheidResult.data.values || [];
    const wedstrijdenRows = wedstrijdenResult.data.values || [];
    const reminderLogRows = reminderLogResult.data.values || [];
    const spelersRows = spelersResult.data.values || [];
    const notificatiesRows = notificatiesResult.data.values || [];

    // 1. Map van wedstrijddatums die al teams hebben
    const matchesWithTeams = new Set<string>();
    for (let i = 1; i < wedstrijdenRows.length; i++) {
      const row = wedstrijdenRows[i];
      const matchDateStr = row[COLUMN_INDICES.WEDSTRIJD_DATUM] || '';
      const teamWit = row[COLUMN_INDICES.TEAM_WIT] || '';
      const teamRood = row[COLUMN_INDICES.TEAM_ROOD] || '';
      if (matchDateStr && (teamWit.trim() || teamRood.trim())) {
        const isoDateStr = parseMatchDateToISO(matchDateStr);
        if (isoDateStr) matchesWithTeams.add(isoDateStr);
        matchesWithTeams.add(matchDateStr);
      }
    }

    // 2. Zoek eerste toekomstige wedstrijd ZONDER teams
    const dates = aanwezigheidRows.slice(1).map(r => r[COLUMN_INDICES.AANWEZIGHEID_DATUM]).filter(Boolean);
    const now = new Date();
    let nextMatchDate: Date | null = null;
    let nextMatchDateStr: string | null = null;

    for (const dateStr of dates) {
      const d = parseMatchDateWithTime(dateStr, '20:30:00');
      if (!d) {
        logger.warn(`Could not parse date: ${dateStr}`);
        continue;
      }
      if (d > now) {
        const isoDateStr = toISODateString(d);
        if (!matchesWithTeams.has(dateStr) && !matchesWithTeams.has(isoDateStr)) {
          nextMatchDate = d;
          nextMatchDateStr = dateStr;
          break;
        }
      }
    }

    if (!nextMatchDate || !nextMatchDateStr) {
      logger.info('No upcoming matches without teams found');
      return;
    }

    logger.info(`📧 Next match: ${nextMatchDateStr} at ${nextMatchDate.toISOString()}`);

    // 3. Pre-compute "wie moet een reminder krijgen?" éénmalig — dit is hetzelfde voor 24/12/4u.
    const respondedNames = new Set(
      aanwezigheidRows
        .filter(r => r[COLUMN_INDICES.AANWEZIGHEID_DATUM] === nextMatchDateStr)
        .map(r => r[COLUMN_INDICES.AANWEZIGHEID_NAAM])
    );

    const activeNotificationPlayers = new Set<string>();
    for (let i = 1; i < spelersRows.length; i++) {
      const row = spelersRows[i];
      const playerName = row[COLUMN_INDICES.NAME];
      const isActive = row[COLUMN_INDICES.ACTIEF] === 'TRUE' || row[COLUMN_INDICES.ACTIEF] === 'Ja';
      if (isActive && !respondedNames.has(playerName)) {
        activeNotificationPlayers.add(playerName);
      }
    }

    logger.info(`📧 ${activeNotificationPlayers.size} actieve spelers nog zonder reactie voor ${nextMatchDateStr}`);

    // 4. Voor elk reminder-moment: check of het tijd is én nog niet verstuurd
    for (const hoursBefore of REMINDER_HOURS) {
      const msBefore = hoursBefore * 60 * 60 * 1000;
      const reminderType = `${hoursBefore}u`;
      const alreadySent = reminderLogRows.some(
        row => row[COLUMN_INDICES.REMINDER_LOG_DATUM] === nextMatchDateStr
            && row[COLUMN_INDICES.REMINDER_LOG_TYPE] === reminderType
      );
      const msUntilMatch = nextMatchDate.getTime() - now.getTime();

      if (alreadySent) continue;
      if (msUntilMatch > msBefore) continue; // nog niet binnen target-window

      // 5. Stuur reminders
      const title = 'Aanwezigheidsreminder';
      const body = 'Laat even weten of je er bent bij de volgende wedstrijd.';
      const url = APP_URLS.AANWEZIGHEID;

      const notifications: Promise<any>[] = [];
      let skippedMissingData = 0;
      let skippedInactive = 0;
      let skippedNotTargeted = 0;

      for (let i = 1; i < notificatiesRows.length; i++) {
        const row = notificatiesRows[i];
        const endpoint = row[COLUMN_INDICES.NOTIFICATIES_ENDPOINT];
        const p256dh = row[COLUMN_INDICES.NOTIFICATIES_P256DH];
        const auth = row[COLUMN_INDICES.NOTIFICATIES_AUTH];
        if (!endpoint || !p256dh || !auth) {
          skippedMissingData++;
          continue;
        }

        const rawActive = row[COLUMN_INDICES.NOTIFICATIES_ACTIVE];
        const active = rawActive === true
          || rawActive === 'TRUE'
          || rawActive === 'true'
          || (typeof rawActive === 'string' && rawActive.toLowerCase() === 'true');
        if (!active) {
          skippedInactive++;
          continue;
        }

        const playerName = row[COLUMN_INDICES.NOTIFICATIES_PLAYER_NAME];
        if (!playerName || !activeNotificationPlayers.has(playerName)) {
          skippedNotTargeted++;
          continue;
        }

        try {
          const subscription = { endpoint, keys: { p256dh, auth } };
          const payload = JSON.stringify({ title, body, url });
          notifications.push(webpush.sendNotification(subscription, payload));
        } catch (err) {
          logger.error(`Invalid subscription for player ${playerName}`, err);
        }
      }

      logger.info(`📧 ${reminderType}-reminder: sturen naar ${notifications.length} (skipped: ${skippedMissingData} missing, ${skippedInactive} inactive, ${skippedNotTargeted} not targeted)`);

      try {
        await Promise.allSettled(notifications);
      } catch (error) {
        logger.error('Failed while sending reminder notifications', error);
      }

      // 6. Log reminder in ReminderLog
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${SHEET_NAMES.REMINDER_LOG}!A:C`,
        valueInputOption: 'RAW',
        requestBody: { values: [[nextMatchDateStr, reminderType, new Date().toISOString()]] },
      });
    }
  }
);
