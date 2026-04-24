import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as webpush from 'web-push';
import { getSheetsClient } from "../shared/sheets-client";
import { setCorsHeaders } from "../shared/cors";
import { SPREADSHEET_ID, FIREBASE_CONFIG, SHEET_NAMES, SHEET_RANGES, COLUMN_INDICES } from "../config/constants";
import { parseMatchDate } from "../shared/date-utils";

/**
 * Push notification functie: stuurt een bericht naar alle spelers met toestemming
 */
export const sendPushToAll = onRequest(
  { region: FIREBASE_CONFIG.region },
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

      const spreadsheetId = SPREADSHEET_ID;
      const sheets = await getSheetsClient();

      // Alle sheets parallel ophalen — scheelt 200-500ms per call.
      const spelersRangePromise = sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${SHEET_NAMES.SPELERS}!${SHEET_RANGES.FIRST_COLUMNS}`,
      });
      const notificatiesRangePromise = sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${SHEET_NAMES.NOTIFICATIES}!${SHEET_RANGES.FIRST_COLUMNS}`,
      });
      const aanwezigheidRangePromise = isReminder
        ? sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${SHEET_NAMES.AANWEZIGHEID}!${SHEET_RANGES.FIRST_COLUMNS}`,
          })
        : Promise.resolve(null);

      const [spelersResult, notificatiesResult, aanwezigheidResult] = await Promise.all([
        spelersRangePromise,
        notificatiesRangePromise,
        aanwezigheidRangePromise,
      ]);

      const rows = spelersResult.data.values || [];
      const notificatiesRows = notificatiesResult.data.values || [];
      const actiefCol = COLUMN_INDICES.ACTIEF;
      const nameCol = COLUMN_INDICES.NAME;

      let targetRows = rows;
      if (isReminder && aanwezigheidResult) {
        const aanwezigheidRows = aanwezigheidResult.data.values || [];
        const today = new Date();
        let nextDate: string | null = null;
        for (let i = 1; i < aanwezigheidRows.length; i++) {
          const row = aanwezigheidRows[i];
          const dateStr = row[COLUMN_INDICES.AANWEZIGHEID_DATUM];
          if (dateStr) {
            const rowDate = parseMatchDate(dateStr);
            if (rowDate && rowDate >= today) {
              nextDate = dateStr;
              break;
            }
          }
        }
        const respondedNames = new Set(
          aanwezigheidRows.filter(r => r[COLUMN_INDICES.AANWEZIGHEID_DATUM] === nextDate).map(r => r[COLUMN_INDICES.AANWEZIGHEID_NAAM])
        );
        targetRows = rows.filter((row, i) =>
          i > 0 &&
          (row[actiefCol] === 'TRUE' || row[actiefCol] === 'Ja') &&
          !respondedNames.has(row[nameCol])
        );
      } else {
        targetRows = rows.filter((row, i) =>
          i > 0 && (row[actiefCol] === 'TRUE' || row[actiefCol] === 'Ja')
        );
      }

      const targetPlayerNames = new Set(targetRows.map(row => row[nameCol]));
      logger.info(`📧 Target players: ${targetPlayerNames.size}, notification rows: ${notificatiesRows.length - 1}`);

      const notifications: Promise<any>[] = [];
      // Houd per notification-promise de bijbehorende sheet-rij bij voor cleanup
      const notificationRowIndices: number[] = [];
      let skippedMissingData = 0;
      let skippedInactive = 0;
      let skippedNotTargeted = 0;

      for (let i = 1; i < notificatiesRows.length; i++) {
        const row = notificatiesRows[i];

        // Valideer alleen de essentiële subscription-velden i.p.v. row-lengte.
        // Google Sheets API strikt trailing lege cellen, dus row.length < 7 sloot stil rijen uit
        // waar playerName leeg was.
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

        // Reminder: player-name is verplicht én moet in de target-set zitten.
        // Broadcast/test: stuur naar alle actieve subscriptions ook zonder bekende playerName,
        //   omdat oudere subscripties soms geen naam hebben.
        let shouldSend: boolean;
        if (isReminder) {
          shouldSend = !!playerName && targetPlayerNames.has(playerName);
          if (!shouldSend) skippedNotTargeted++;
        } else if (isTestMessage) {
          shouldSend = true;
        } else {
          shouldSend = !playerName || targetPlayerNames.has(playerName);
          if (!shouldSend) skippedNotTargeted++;
        }

        if (shouldSend) {
          try {
            const subscription = { endpoint, keys: { p256dh, auth } };
            const payload = JSON.stringify({
              title: req.body.title || 'Zaalvoetbal Doorn',
              body: req.body.body || 'Er is nieuws van Zaalvoetbal Doorn!',
              url: req.body.url || undefined
            });
            notifications.push(webpush.sendNotification(subscription, payload));
            notificationRowIndices.push(i); // sheet-rij = i + 1 (1-based)
          } catch (err) {
            logger.error(`Invalid subscription (row ${i + 1}, player=${playerName || '(none)'})`, err);
          }
        }
      }

      logger.info(`📧 Sending ${notifications.length} — skipped: ${skippedMissingData} missing data, ${skippedInactive} inactive, ${skippedNotTargeted} not targeted`);

      const results = await Promise.allSettled(notifications);
      const succeeded = results.filter(r => r.status === 'fulfilled').length;
      const failed = results.filter(r => r.status === 'rejected').length;

      // Verzamel expired subscriptions (HTTP 404/410) en deactiveer ze in de sheet
      const expiredRowIndices: number[] = [];
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          const reason = result.reason as { statusCode?: number } | undefined;
          const statusCode = reason?.statusCode;
          if (statusCode === 404 || statusCode === 410) {
            expiredRowIndices.push(notificationRowIndices[index]);
          } else {
            logger.error(`Push failed (row ${notificationRowIndices[index] + 1}, status ${statusCode ?? 'unknown'})`);
          }
        }
      });

      if (expiredRowIndices.length > 0) {
        const batchData = expiredRowIndices.map(rowIndex => ({
          range: `${SHEET_NAMES.NOTIFICATIES}!F${rowIndex + 1}`, // 1-based
          values: [[false]]
        }));
        try {
          await sheets.spreadsheets.values.batchUpdate({
            spreadsheetId,
            requestBody: { data: batchData, valueInputOption: 'RAW' }
          });
          logger.info(`🧹 Deactivated ${expiredRowIndices.length} expired push subscription(s)`);
        } catch (cleanupErr) {
          logger.error('Failed to deactivate expired subscriptions', cleanupErr);
        }
      }

      logger.info(`📧 Sent ${succeeded}/${notifications.length} push notifications (${failed} failed, ${expiredRowIndices.length} deactivated)`);
      res.json({ success: true, sent: succeeded, failed: failed, deactivated: expiredRowIndices.length, total: notifications.length });
    } catch (error) {
      logger.error('sendPushToAll failed', error);
      res.status(500).json({ success: false, message: 'Error sending push notifications' });
    }
  }
);
