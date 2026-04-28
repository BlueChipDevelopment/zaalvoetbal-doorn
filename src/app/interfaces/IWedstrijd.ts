export interface WedstrijdData {
  id?: number;
  seizoen?: string | null;
  seizoenWedstrijdNummer?: number;
  datum: Date | null;
  datumString?: string;
  /** Player-ids in team Wit. Sheets-adapter vertaalt namen ↔ ids intern. */
  teamWit: number[];
  /** Player-ids in team Rood. */
  teamRood: number[];
  teamGeneratie?: string;
  scoreWit: number | null;
  scoreRood: number | null;
  zlatanPlayerId: number | null;
  ventielPlayerId: number | null;
  locatie?: string;
  voorbeschouwing?: string;
}

export interface WedstrijdFilter {
  seizoen?: string;
  gespeeld?: boolean; // true = alleen gespeelde wedstrijden, false = alleen toekomstige
}

export interface SeizoenData {
  seizoen: string;
  aantalWedstrijden: number;
  aantalGespeeld: number;
}
