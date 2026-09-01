/**
 * Vergelijkt een opgeslagen opstelling met een nieuwe.
 *
 * Wordt gebruikt om te bepalen of er een nieuwe voorbeschouwing nodig is: staat
 * er al een verhaal bij precies deze opstelling, dan hoeft er geen AI-call te
 * gebeuren. Volgorde binnen een team maakt niet uit, maar de kleur wél — wie van
 * wit naar rood verhuist, trekt een ander shirt aan en hoort in een ander verhaal.
 */
export function lineupChanged(
  storedWhite: number[] | null | undefined,
  storedRed: number[] | null | undefined,
  newWhite: number[],
  newRed: number[],
): boolean {
  if (!storedWhite?.length || !storedRed?.length) return true;
  return !sameSquad(storedWhite, newWhite) || !sameSquad(storedRed, newRed);
}

function sameSquad(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  const setA = new Set(a);
  if (setA.size !== new Set(b).size) return false;
  return b.every(id => setA.has(id));
}
