/**
 * Interface representing the raw data structure from the "Spelers" Google Sheet
 */
export interface PlayerSheetData {
  /** Stable id voor cross-referencing. Bij Sheets-adapter komt dit uit de
   *  1-based dataRow-index (header overgeslagen); bij Supabase-adapter is het
   *  de bigserial PK. Optional zodat verse client-side constructies (bv.
   *  forms) niet hoeven te raden. */
  id?: number;
  /** Kolom A (0): Speler naam */
  name: string;
  /** Kolom B (1): Positie (Keeper, Speler, etc.) */
  position: string;
  /** Kolom C (2): Actief status ("Ja"/"Nee") */
  actief: boolean;
}

/**
 * Filter options for retrieving players
 */
export interface PlayerFilter {
  /** Only active players */
  activeOnly?: boolean;
  /** Specific positions to include */
  positions?: string[];
}
