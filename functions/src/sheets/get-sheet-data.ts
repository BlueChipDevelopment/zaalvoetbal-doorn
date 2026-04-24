import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { getSheetsClient } from "../shared/sheets-client";
import { setCorsHeaders } from "../shared/cors";
import { validateSheetRequest } from "../shared/validate-sheet-request";
import { FIREBASE_CONFIG, SHEET_RANGES } from "../config/constants";

/**
 * getSheetData: Ruwe data ophalen uit een specifiek tabblad
 */
export const getSheetData = onRequest(
  { region: FIREBASE_CONFIG.region },
  async (req, res) => {
    setCorsHeaders(res, req);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    try {
      const validation = validateSheetRequest(req.query.spreadsheetId, req.query.sheetName);
      if (!validation.ok) {
        res.status(validation.status).json({ error: validation.message });
        return;
      }
      const { spreadsheetId, sheetName } = validation;
      const sheets = await getSheetsClient();
      const result = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!${SHEET_RANGES.EXTENDED_COLUMNS}`,
      });
      res.json(result.data.values || []);
    } catch (error) {
      logger.error(error);
      res.status(500).send("Error fetching sheet data");
    }
  }
);