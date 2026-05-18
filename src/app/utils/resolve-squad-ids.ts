export interface SquadIdResolution {
  /** Gevonden speler-id's, in dezelfde volgorde als de squad. */
  ids: number[];
  /** Namen van spelers waarvoor geen id gevonden kon worden. */
  unresolved: string[];
}

interface NamedPlayer {
  id?: number | null;
  name?: string | null;
}

const norm = (n: string | null | undefined): string => (n ?? '').trim().toLowerCase();

/**
 * Resolve de speler-id's voor een squad.
 *
 * De team-generator bouwt speler-formulieren zonder `id`-veld, dus de
 * squad-objecten die uit het formulier komen dragen geen id. Deze functie
 * zoekt het ontbrekende id alsnog op via de spelersstatistieken, gematcht op
 * naam (case- en spatie-ongevoelig). Spelers die al een numeriek id hebben
 * worden direct overgenomen. Namen zonder match komen in `unresolved` terecht,
 * zodat de aanroeper de save kan afbreken in plaats van een lege opstelling
 * op te slaan.
 */
export function resolveSquadIds(
  squad: readonly NamedPlayer[],
  playerStats: readonly NamedPlayer[],
): SquadIdResolution {
  const ids: number[] = [];
  const unresolved: string[] = [];

  for (const player of squad) {
    if (typeof player.id === 'number') {
      ids.push(player.id);
      continue;
    }
    const playerName = norm(player.name);
    const match = playerName
      ? playerStats.find(p => norm(p.name) === playerName)
      : undefined;
    if (match && typeof match.id === 'number') {
      ids.push(match.id);
    } else {
      unresolved.push((player.name ?? '').trim() || '(onbekend)');
    }
  }

  return { ids, unresolved };
}
