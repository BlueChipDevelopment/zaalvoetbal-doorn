/**
 * Interface representing the raw data structure from the "Spelers" Google Sheet
 */
export interface PlayerSheetData {
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
