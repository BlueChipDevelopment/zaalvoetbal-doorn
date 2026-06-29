/** Eén mutatie in het strippen-logboek. Saldo = som van amount per speler. */
export interface StripTransaction {
  id?: number;
  playerId: number;
  /** Gezet bij auto-aftrek (reason 'wedstrijd'); null bij handmatige mutatie. */
  matchId: number | null;
  amount: number;
  reason: string; // 'wedstrijd' | 'kaart gekocht' | 'correctie'
  createdAt?: string;
}
