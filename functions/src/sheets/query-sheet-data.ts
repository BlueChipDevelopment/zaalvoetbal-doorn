import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { getSheetsClient } from "../shared/sheets-client";
import { setCorsHeaders } from "../shared/cors";
import { validateSheetRequest } from "../shared/validate-sheet-request";
import { FIREBASE_CONFIG, SHEET_RANGES } from "../config/constants";

/**
 * querySheetData: Zoeken/filteren in een tabblad (eenvoudig, client-side filter)
 */
export const querySheetData = onRequest(
  { region: FIREBASE_CONFIG.region },
  async (req, res) => {
    setCorsHeaders(res, req);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    try {
      const validation = validateSheetRequest(req.body?.spreadsheetId, req.body?.sheetName);
      if (!validation.ok) {
        res.status(validation.status).json({ error: validation.message });
        return;
      }
      const { spreadsheetId, sheetName } = validation;
      const { query } = req.body;
      const sheets = await getSheetsClient();
      const result = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!${SHEET_RANGES.ALL_COLUMNS}`,
      });
      const values = result.data.values || [];
      // Eenvoudig filteren op basis van query (object: {colIndex, value})
      const filtered = query && typeof query.colIndex === "number"
        ? values.filter((row) => row[query.colIndex] === query.value)
        : values;
      res.json(filtered);
    } catch (error) {
      logger.error(error);
      res.status(500).send("Error querying data");
    }
  }
);