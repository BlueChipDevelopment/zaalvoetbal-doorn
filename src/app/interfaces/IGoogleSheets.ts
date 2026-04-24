export interface GoogleSheetsResponse {
  range: string;
  majorDimension: string;
  values: string[][];
}

export interface GoogleSheetsCellResponse {
  range: string;
  majorDimension: string;
  values: [[string]];
}

export type SheetCell = string | number | boolean | null;
export type SheetRow = SheetCell[];

export interface SheetUpdateValuesResponse {
  spreadsheetId: string;
  updatedRange?: string;
  updatedRows?: number;
  updatedColumns?: number;
  updatedCells?: number;
}

export interface SheetAppendValuesResponse {
  spreadsheetId: string;
  tableRange?: string;
  updates?: SheetUpdateValuesResponse;
}

export interface SheetBatchUpdateResponse {
  spreadsheetId: string;
  totalUpdatedRows?: number;
  totalUpdatedColumns?: number;
  totalUpdatedCells?: number;
  totalUpdatedSheets?: number;
  responses?: SheetUpdateValuesResponse[];
}

export interface SheetBatchUpdateRange {
  range: string;
  values: SheetRow[];
}
