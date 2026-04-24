import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { getSheetsClient } from "../shared/sheets-client";
import { setCorsHeaders } from "../shared/cors";
import { isAllowedRange, validateSpreadsheetId } from "../shared/validate-sheet-request";
import { FIREBASE_CONFIG } from "../config/constants";

/**
 * batchUpdateSheet: Meerdere updates in één keer uitvoeren
 */
export const batchUpdateSheet = onRequest(
  { region: FIREBASE_CONFIG.region },
  async (req, res) => {
    setCorsHeaders(res, req);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    try {
      const spreadsheetValidation = validateSpreadsheetId(req.body?.spreadsheetId);
      if (!spreadsheetValidation.ok) {
        res.status(spreadsheetValidation.status).json({ error: spreadsheetValidation.message });
        return;
      }
      const { spreadsheetId } = spreadsheetValidation;
      const { data } = req.body;
      if (!Array.isArray(data) || data.length === 0) {
        res.status(400).json({ error: "data must be a non-empty array" });
        return;
      }
      for (const entry of data) {
        if (!entry || !isAllowedRange(entry.range)) {
          res.status(403).json({ error: "range references a sheet that is not allowed" });
          return;
        }
        if (!Array.isArray(entry.values)) {
          res.status(400).json({ error: "each entry.values must be an array" });
          return;
        }
      }
      const sheets = await getSheetsClient();
      const result = await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId,
        requestBody: { data, valueInputOption: "RAW" },
      });
      res.json(result.data);
    } catch (error) {
      logger.error(error);
      res.status(500).send("Error batch updating");
    }
  }
);