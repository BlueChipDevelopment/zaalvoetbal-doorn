import { SeasonDecider } from '../interfaces/ISeasonDecider';

interface HasPlayerId {
  playerId: number;
}

/**
 * Past een vastgelegde seizoensbeslissing toe op de houders van een
 * seizoenstitel. Bij een gelijkstand blijft alleen de winnaar over, met de
 * toelichting waarom.
 *
 * De beslissing wordt genegeerd als er niets te beslechten valt (één houder) of
 * als de vastgelegde winnaar niet bij de houders zit — dat laatste kan gebeuren
 * nadat een uitslag is gecorrigeerd, en dan is de gedeelde titel het eerlijkste
 * antwoord dat we hebben.
 */
export function applySeasonDecider<T extends HasPlayerId>(
  holders: T[],
  decider: SeasonDecider | null | undefined,
): { holders: T[]; note?: string } {
  if (!decider || holders.length <= 1) return { holders };
  const winner = holders.find(h => h.playerId === decider.winnerPlayerId);
  if (!winner) return { holders };
  return { holders: [winner], note: decider.note ?? undefined };
}

/**
 * Comparator-hulp voor een klassement: bij exact gelijke punten staat de winnaar
 * van de seizoensbeslissing bovenaan. Geeft 0 als de beslissing niet van
 * toepassing is, zodat de bestaande volgorde intact blijft.
 */
export function compareByDecider(
  aPlayerId: number | undefined,
  bPlayerId: number | undefined,
  decider: SeasonDecider | null | undefined,
): number {
  if (!decider) return 0;
  if (aPlayerId === decider.winnerPlayerId) return -1;
  if (bPlayerId === decider.winnerPlayerId) return 1;
  return 0;
}
