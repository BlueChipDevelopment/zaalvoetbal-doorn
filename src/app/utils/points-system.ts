/**
 * Puntentelling per seizoen.
 *
 * Vanaf seizoen 2026-2027 weegt winst zwaarder (4 i.p.v. 3), zodat de rating
 * minder door aanwezigheid alleen wordt verklaard. Afgeronde seizoenen houden
 * hun oorspronkelijke telling — die uitslagen mogen nooit herwaardeerd worden.
 */

export type MatchOutcome = 'win' | 'draw' | 'loss';

export interface PointsSystem {
  win: number;
  draw: number;
  loss: number;
  zlatan: number;
}

/** Eerste seizoen met de nieuwe telling. Seizoenen hebben het formaat YYYY-YYYY. */
export const NEW_POINTS_FROM_SEASON = '2026-2027';

export const LEGACY_POINTS: PointsSystem = { win: 3, draw: 2, loss: 1, zlatan: 1 };
export const CURRENT_POINTS: PointsSystem = { win: 4, draw: 2, loss: 1, zlatan: 1 };

/**
 * Geeft de puntentelling die geldt voor een wedstrijd uit dit seizoen.
 * Onbekend of ontbrekend seizoen valt terug op de oude telling.
 */
export function pointsSystemForSeason(seizoen?: string | null): PointsSystem {
  if (!seizoen) return LEGACY_POINTS;
  return seizoen >= NEW_POINTS_FROM_SEASON ? CURRENT_POINTS : LEGACY_POINTS;
}

/** Punten voor één wedstrijduitslag, volgens de telling van dat seizoen. */
export function pointsForOutcome(seizoen: string | null | undefined, outcome: MatchOutcome): number {
  return pointsSystemForSeason(seizoen)[outcome];
}
