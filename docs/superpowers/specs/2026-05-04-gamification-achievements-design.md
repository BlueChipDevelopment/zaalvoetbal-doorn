# Gamification — Achievements (v1)

Datum: 2026-05-04

## Doel

Spelers krijgen automatisch toegekende badges/achievements op basis van bestaande wedstrijd- en aanwezigheidsdata. Versterkt betrokkenheid zonder extra data-invoer. Sluit aan op de bestaande Records/Hall of Fame-functionaliteit.

## Scope (v1)

Drie categorieën, in totaal ~25 unieke "te behalen" items per speler.

### Mijlpalen (met tiers)

| Key                | Bronze | Silver | Gold | Platinum |
| ------------------ | ------ | ------ | ---- | -------- |
| `matches_played`   | 10     | 50     | 100  | 250      |
| `matches_won`      | 10     | 50     | 100  | —        |
| `zlatan_points`    | 5      | 25     | 50   | —        |

Tier-progressie: één tegel per key. Tegel toont de **hoogste behaalde tier** als kleur/rand, en daaronder een progress-bar naar de **volgende tier** (of "max" als platinum/laatste tier behaald). Geen tier behaald → tegel is locked-stijl (greyed) met progress naar bronze.

### Streaks (lifetime, ooit gehaald)

| Key             | Drempel              |
| --------------- | -------------------- |
| `streak_3`      | 3 wedstrijden op rij gewonnen |
| `streak_5`      | 5 wedstrijden op rij gewonnen |
| `streak_7`      | 7 wedstrijden op rij gewonnen |

"Current streak" wordt niet als badge gemodelleerd — staat al elders op het profiel.

### Seizoens-prestaties (per afgerond seizoen)

| Key                   | Voorwaarde                                              |
| --------------------- | ------------------------------------------------------- |
| `season_champion`     | Top-1 klassement van een afgerond seizoen               |
| `season_podium`       | Top-3 klassement van een afgerond seizoen               |
| `season_full_attend`  | Gespeeld in elke wedstrijd van een afgerond seizoen     |

Lopend seizoen telt niet (zelfde regel als `RecordsService.getSeasonMVPs`). Een speler kan dezelfde seizoens-badge meerdere keren hebben (verschillende seizoenen) — in display tonen we het met een teller (`×3`) en lijst van seizoenen in tooltip.

## Niet in scope (v1)

- "Eerste keer"-badges (eerste wedstrijd / eerste Zlatan / etc.) — weinig zeggingskracht, "eerste wedstrijd" krijg je gratis.
- Curiosa-badges (hat-trick Zlatan in één match, ongeslagen met specifieke teammate) — moeilijk uit te leggen, lastig retroactief consistent.
- `/achievements`-overzichtspagina à la `/records`. Records vervult die rol al.
- Real-time notificaties bij behalen ("Je hebt zojuist badge X!"). Vereist persistence + push-flow; later als gewenst.

## Architectuur

### Nieuwe bestanden

- `src/app/interfaces/IAchievement.ts`
- `src/app/services/achievement-definitions.ts` — pure data: badge-keys → titel, beschrijving, icoon, drempels.
- `src/app/services/achievements.service.ts` (+ `.spec.ts`) — derivatie-service.
- `src/app/components/shared/achievement-badge/` — `AchievementBadgeComponent` (presentatie-only).
- `src/app/components/speler-profiel/achievements-grid/` — `AchievementsGridComponent` (gegroepeerd per categorie).

### Hergebruik

`AchievementsService` leunt op:

- `PlayerService.getPlayers()`
- `WedstrijdenService.getGespeeldeWedstrijden()`
- `GameStatisticsService.getFullPlayerStats(season)` en `getAvailableSeasons()` / `getCurrentSeason()`

Dezelfde bronnen als `RecordsService` — geen nieuwe Supabase-queries nodig.

### Interface

```ts
type AchievementCategory = 'milestone' | 'streak' | 'season';
type AchievementTier = 'bronze' | 'silver' | 'gold' | 'platinum';

interface AchievementDefinition {
  key: string;                      // unieke key, bv. 'matches_played'
  category: AchievementCategory;
  title: string;
  description: string;
  icon: string;                     // material-icon name
  tiers?: { tier: AchievementTier; threshold: number }[];
}

interface PlayerAchievement {
  key: string;
  category: AchievementCategory;
  tier: AchievementTier | null;
  title: string;                    // gegenereerd op basis van tier ("Veteraan – Goud")
  description: string;
  icon: string;
  earnedAt: Date | null;            // datum van de match waarin drempel voor het eerst werd gehaald
  progress?: { current: number; target: number }; // alleen voor locked-tegels
  occurrences?: { season: string; date: Date }[];  // alleen seizoens-badges met >1 voorkomen
}

interface AchievementSummary {
  // Voor "rarity" / chips-selectie en toekomstig overzicht.
  key: string;
  tier: AchievementTier | null;
  holdersCount: number;
  totalPlayers: number;
  rarity: number;                   // holdersCount / totalPlayers, 0..1
}
```

### Service API

```ts
class AchievementsService {
  getPlayerAchievements(playerId: number): Observable<PlayerAchievement[]>;
  getAllAchievements(): Observable<{
    perPlayer: Record<number, PlayerAchievement[]>;
    summaries: AchievementSummary[];
  }>;
  getTopChipsForPlayer(playerId: number, max: number): Observable<PlayerAchievement[]>;
}
```

`getTopChipsForPlayer` selecteert top-N zeldzaamste behaalde achievements, tie-break op tier (platinum > gold > silver > bronze), daarna alfabetisch op key voor stabiliteit.

## Display

### Spelersprofiel (`/speler/:id`)

Nieuwe sectie "Achievements" via `AchievementsGridComponent`, ergens onder de FIFA-card / quick-stats.

- Drie subsecties: Mijlpalen / Streaks / Seizoen.
- Per badge één tegel: icoon (groot), titel, tier-kleur op de rand.
- **Mijlpalen**: één tegel per key. Behaalde tier bepaalt kleur/rand; progress-bar onder icoon toont voortgang naar volgende tier (of "max" bij platinum).
- **Streaks**: één tegel per drempel (3 / 5 / 7). Behaald = vol gekleurd; locked = greyed met progress (`{huidige langste streak}/{target}`).
- **Seizoens-badges**: één tegel per key. Behaald: vol, tooltip toont aantal voorkomens (`×N`) + lijst seizoenen + datums. Een speler die nog nooit meedeed in een afgerond seizoen krijgt geen seizoens-tegels.
- Tooltip bevat altijd `description` + (indien behaald) "Behaald op {earnedAt}".

### Chips elders

V1: alleen het profiel-grid. Records-chips bestaan momenteel alleen op de profielpagina (niet op klassement/aanwezigheid), dus achievements volgen hetzelfde patroon. `getTopChipsForPlayer` is wel onderdeel van de service-API zodat een toekomstige uitbreiding naar klassement/aanwezigheid (samen met records-chips) low-cost is.

### Styling

- Tier-kleuren als nieuwe variabelen in `styles_variables.scss`:
  - `$tier-bronze: #cd7f32`
  - `$tier-silver: #c0c0c0`
  - `$tier-gold: #ffd700`
  - `$tier-platinum: #b9f2ff`
- Material icons (al gebruikt elders), geen nieuwe icon-pack.

## Edge cases

- **Streak over seizoens-grens** — telt door; streaks zijn lifetime, niet per seizoen.
- **Tie bij seizoenskampioen** — meerdere spelers kunnen dezelfde tegel krijgen voor hetzelfde seizoen (zelfde aanpak als MVP).
- **Lopend seizoen** — geen seizoens-badges toegekend totdat seizoen is afgerond (`getCurrentSeason()` overslaan).
- **`earnedAt` voor mijlpalen** — datum van de wedstrijd waarin de drempel voor het eerst werd gehaald.
- **`earnedAt` voor streak-badges** — datum van de winst waarmee de streak op de vereiste lengte kwam.
- **Speler zonder wedstrijden** — geen tegels (geen "stub" met 0 progress voor alles); pas zichtbaar zodra er ≥1 wedstrijd is.
- **Speler die alleen in lopend seizoen meedeed** — alleen mijlpaal- en streak-tegels relevant; seizoens-tegels niet zichtbaar (er is nog niets afgerond om in te scoren).

## Testing

- `achievements.service.spec.ts` — fixture-spelers en -matches, één testcase per categorie:
  - mijlpaal-tier-progressie (10 → 50 → 100 → 250)
  - streak-detectie inclusief grens-gevallen (precies 3, 4, 5)
  - streak over seizoens-grens
  - seizoen-kampioen ties
  - 100% aanwezigheid: één gemiste wedstrijd → geen badge
  - lopend seizoen wordt overgeslagen
  - `earnedAt` correct voor mijlpaal en streak
- `achievement-badge.component.spec.ts` — rendering: locked / unlocked / met progress / met `×N` occurrences.
- `achievements-grid.component.spec.ts` — groepering en filtering van niet-relevante locked-tegels.
- Geen e2e.

## Niet-doelen

Geen schema-wijzigingen, geen nieuwe Supabase-tabellen, geen Firebase Functions. Pure client-side derivatie, hergebruikt bestaande data-bronnen.

## Open beslissingen

Geen — alle keuzes vastgelegd in dit document.
