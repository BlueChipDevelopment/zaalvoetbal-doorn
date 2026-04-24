import { SPREADSHEET_ID, SHEET_NAMES } from "../config/constants";

/**
 * Whitelist van toegestane spreadsheet IDs.
 * In productie is er één sheet — extra IDs kunnen hier worden toegevoegd
 * als er ooit een staging/testspreadsheet komt.
 */
const ALLOWED_SPREADSHEET_IDS: ReadonlySet<string> = new Set([SPREADSHEET_ID]);

/**
 * Whitelist van toegestane sheet-namen (tabbladen).
 */
const ALLOWED_SHEET_NAMES: ReadonlySet<string> = new Set(Object.values(SHEET_NAMES));

export type SheetRequestValidation =
  | { ok: true; spreadsheetId: string; sheetName: string }
  | { ok: false; status: number; message: string };

/**
 * Valideer spreadsheetId + sheetName tegen een vaste allowlist.
 * Voorkomt dat aanvallers verzoeken doen naar willekeurige spreadsheets/tabbladen
 * waartoe de service account toegang heeft.
 */
/**
 * Valideer een spreadsheetId tegen de allowlist.
 */
export function validateSpreadsheetId(rawSpreadsheetId: unknown):
  | { ok: true; spreadsheetId: string }
  | { ok: false; status: number; message: string } {
  if (typeof rawSpreadsheetId !== "string" || !rawSpreadsheetId) {
    return { ok: false, status: 400, message: "spreadsheetId is required" };
  }
  if (!ALLOWED_SPREADSHEET_IDS.has(rawSpreadsheetId)) {
    return { ok: false, status: 403, message: "spreadsheetId is not allowed" };
  }
  return { ok: true, spreadsheetId: rawSpreadsheetId };
}

/**
 * Valideer een A1-notatie range ("SheetName!A1:Z10") door de sheet-naam
 * uit het prefix te extraheren en te checken tegen de allowlist.
 */
export function isAllowedRange(range: unknown): range is string {
  if (typeof range !== "string" || !range) return false;
  const bangIndex = range.indexOf("!");
  if (bangIndex <= 0) return false;
  const rawName = range.substring(0, bangIndex);
  // Sheet-namen kunnen tussen enkele quotes staan als ze spaties bevatten.
  const sheetName = rawName.replace(/^'|'$/g, "").replace(/''/g, "'");
  return ALLOWED_SHEET_NAMES.has(sheetName);
}

export function validateSheetRequest(
  rawSpreadsheetId: unknown,
  rawSheetName: unknown
): SheetRequestValidation {
  if (typeof rawSpreadsheetId !== "string" || !rawSpreadsheetId) {
    return { ok: false, status: 400, message: "spreadsheetId is required" };
  }
  if (typeof rawSheetName !== "string" || !rawSheetName) {
    return { ok: false, status: 400, message: "sheetName is required" };
  }
  if (!ALLOWED_SPREADSHEET_IDS.has(rawSpreadsheetId)) {
    return { ok: false, status: 403, message: "spreadsheetId is not allowed" };
  }
  if (!ALLOWED_SHEET_NAMES.has(rawSheetName)) {
    return { ok: false, status: 403, message: "sheetName is not allowed" };
  }
  return { ok: true, spreadsheetId: rawSpreadsheetId, sheetName: rawSheetName };
}
