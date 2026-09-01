/**
 * Uitslag van een beslissing buiten het veld (bijvoorbeeld strafschoppen) die
 * een gelijkstand aan kop van het seizoensklassement heeft beslecht.
 */
export interface SeasonDecider {
  season: string;
  winnerPlayerId: number;
  note: string | null;
}
