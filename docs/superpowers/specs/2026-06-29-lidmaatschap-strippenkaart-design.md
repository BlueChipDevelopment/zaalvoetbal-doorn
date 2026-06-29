# Lidmaatschap & strippenkaart

**Datum:** 2026-06-29
**Status:** Ontwerp ter review

## Probleem

Er is geen administratie van lidmaatschap. We willen per speler bijhouden of
hij een **abonnement** heeft (per seizoen) of een **strippenkaart** (saldo dat
doorloopt over seizoenen), waarbij een strip **automatisch** wordt afgeschreven
als de speler meespeelt. Alles moet handmatig bijstelbaar blijven — we zijn niet
altijd even streng.

## Besluiten (uit brainstorm)

1. **Scope:** lidmaatschap (abonnement / strippenkaart / geen) + strippen-saldo
   met automatische aftrek en volledige handmatige bijstelbaarheid. De
   "eenmalig meespelen + tikkie"-administratie valt **buiten** deze iteratie.
2. **Aftrek-moment:** bij **score-invoeren** (de wedstrijd is dan gespeeld en de
   opstelling staat vast).
3. **Datamodel saldo:** een **mutatie-logboek** (geen losse teller); saldo = som
   van de mutaties.
4. **Abonnement** geldt **per seizoen**; **strippen** lopen **door** over
   seizoenen.
5. **Strip-eligibility:** een per-speler markering **`uses_strippenkaart`**.
   Staat die aan én geen abonnement voor dat seizoen → strip eraf (saldo mag
   negatief = "strippen op"). Gasten (markering uit) → geen aftrek.
6. **Aftrek draait client-side** in de score-opslagflow (past bij de
   data-source-architectuur), niet als Postgres-trigger.
7. **Zichtbaarheid:** beheer is admin-only; de speler ziet zijn eigen saldo +
   abonnementstatus read-only op zijn profielpagina.
8. **Beheer-UI:** een aparte **Lidmaatschap-dialog** per speler (de bestaande
   speler-dialog blijft gefocust op identiteit).

## Architectuur

### Datamodel (Supabase)

Drie wijzigingen:

1. **`players.uses_strippenkaart`** — `boolean not null default false`. Markeert
   of de speler op de strippenkaart zit.

2. **`season_subscriptions`** — abonnement per seizoen:
   | Kolom | Type | Constraint |
   |-------|------|------------|
   | `id` | `bigint generated always as identity` | PK |
   | `player_id` | `bigint` | FK → players(id) `on delete cascade` |
   | `season` | `text` | seizoen-string, bv. `"2024-2025"` |
   | `created_at` | `timestamptz` | default `now()` |
   Met `unique(player_id, season)`. Eén rij = abonnement voor dat seizoen.

3. **`strip_transactions`** — het mutatie-logboek:
   | Kolom | Type | Toelichting |
   |-------|------|-------------|
   | `id` | `bigint generated always as identity` | PK |
   | `player_id` | `bigint` | FK → players(id) `on delete cascade` |
   | `match_id` | `bigint null` | FK → matches(id) `on delete cascade`; gezet bij auto-aftrek, `null` bij handmatig |
   | `amount` | `int` | `-1` bij wedstrijd; `+5/+10` bij kaart kopen; `±n` bij correctie |
   | `reason` | `text` | `'wedstrijd'` \| `'kaart gekocht'` \| `'correctie'` |
   | `created_at` | `timestamptz` | default `now()` |

   Saldo van een speler = `sum(amount)`. `on delete cascade` op `match_id` geeft
   een afgeschreven strip automatisch terug als de wedstrijd wordt verwijderd.

Na de migratie `database.types.ts` opnieuw genereren.

### Aftreklogica (bij score-invoeren)

`applyMatchDeductions(matchId)` leest zelf de wedstrijd en past idempotent toe:

1. Lees `matches.season` voor `matchId`.
2. **Verwijder** bestaande auto-regels:
   `delete from strip_transactions where match_id = :matchId and reason = 'wedstrijd'`.
   (Handmatige regels met `match_id = null` blijven ongemoeid.)
3. Lees de opstelling: `match_lineups.player_id` voor `matchId`.
4. Bepaal de af-te-schrijven spelers: van die spelers degenen met
   `uses_strippenkaart = true` **en** zonder rij in `season_subscriptions` voor
   `(player_id, season)`.
5. **Insert** voor elk een regel `{player_id, match_id, amount: -1, reason: 'wedstrijd'}`.

Delete-then-insert (spiegelt het bestaande `replaceLineups`-patroon) maakt de
aftrek idempotent én verwerkt automatisch een gewijzigde opstelling bij een
hernieuwde score-opslag. Geen unieke index nodig.

> Net als `replaceLineups` draait dit niet in één transactie; voor de huidige
> schaal (1 wedstrijd/week, single-user write) acceptabel. Een Postgres-RPC die
> delete+insert atomair doet is een latere optimalisatie.

## Componenten & verantwoordelijkheden

| Unit | Wijziging |
|------|-----------|
| Supabase-migratie | `players.uses_strippenkaart`, tabellen `season_subscriptions` + `strip_transactions`. |
| `database.types.ts` | Hergenereren. |
| `IPlayerSheet.PlayerSheetData` | Veld `usesStrippenkaart?: boolean`. |
| `PlayerDataSource` / Supabase-impl | `uses_strippenkaart` in `getAll`/`add`/`update`. |
| `StrippenkaartDataSource` (nieuw, abstract) | `getBalances()`, `getLedger(playerId)`, `addTransaction(playerId, amount, reason)`, `getSubscriptions(season)`, `setSubscription(playerId, season, aan)`, `applyMatchDeductions(matchId)`. |
| `SupabaseStrippenkaartDataSource` (nieuw) | Supabase-implementatie van bovenstaande; geregistreerd in `app.module.ts`. |
| `StrippenkaartService` (nieuw) | Domeinservice met caching; saldo-aggregatie (som van mutaties, client-side), abonnement-toggle, strippen toevoegen/correctie. |
| `WedstrijdenService.updateScore` | Chaint `applyMatchDeductions(matchId)` ná een succesvolle score-write. |
| `AdminSpelersComponent` | Rij-actie "Lidmaatschap" + compacte statuskolom (`Abo` / `Strippen: N` / `—`). |
| `LidmaatschapDialogComponent` (nieuw) | Toggle strippenkaart, toggle abonnement huidig seizoen, saldo + "Strippen toevoegen (5/10/aangepast)" + "Correctie (±)", recente mutaties. |
| Spelersprofiel-pagina | Read-only weergave van saldo + abonnementstatus huidig seizoen. |

**Huidig seizoen** komt uit `GameStatisticsService.getCurrentSeason()` (meest
recente seizoen uit de wedstrijden). Is er nog geen seizoen (null), dan is de
abonnement-toggle uitgeschakeld met een hint.

**Saldo-aggregatie:** de service haalt de mutaties op en sommeert client-side
(`amount`). Datavolume is klein (clubschaal). Een Postgres-view `strip_balances`
is een mogelijke latere optimalisatie.

## Datastroom

1. Admin zet in de Lidmaatschap-dialog `uses_strippenkaart` aan en/of abonnement
   voor het huidige seizoen, en voegt eventueel een gekochte kaart toe
   (`+5`/`+10`).
2. Wedstrijd wordt gespeeld → admin voert de score in (`score.component` →
   `WedstrijdenService.updateScore`).
3. Na de score-write draait `applyMatchDeductions(matchId)`: strippenkaart-spelers
   zonder abonnement dat seizoen krijgen `-1`.
4. Saldo (= som mutaties) is zichtbaar in het beheer en read-only op het
   spelersprofiel.

## Foutafhandeling

- Mislukt de aftrek na een geslaagde score-write, dan blijft de score staan en
  toont de UI een snackbar-fout; de admin kan het opnieuw opslaan (idempotent)
  of handmatig corrigeren. De score-opslag wordt niet teruggedraaid.
- Negatief saldo is toegestaan en wordt als signaal "strippen op" getoond, niet
  als fout.
- Handmatige correctie/toevoeging vereist een geheel getal ≠ 0.

## Testen

- Unit: `SupabaseStrippenkaartDataSource.applyMatchDeductions` — alleen
  strippenkaart-spelers zonder abonnement krijgen `-1`; abonnement dekt; herhaald
  aanroepen blijft idempotent (delete-then-insert); gewijzigde opstelling
  herberekent.
- Unit: saldo-aggregatie in `StrippenkaartService` (som incl. negatief).
- Unit: `addTransaction` / `setSubscription` schrijven de juiste rijen.
- Unit: `WedstrijdenService.updateScore` roept `applyMatchDeductions` aan ná de
  score-write.
- Unit: `PlayerDataSource` mapt/schrijft `uses_strippenkaart`.
- Bestaande specs blijven groen.

## Buiten scope (YAGNI)

- "Eenmalig meespelen + tikkie"-administratie (gast-verrekening per wedstrijd).
- Server-side afdwinging (RLS / Postgres-trigger / atomaire RPC).
- Betaal-/tikkie-integratie, facturen, bedragen in euro's.
- Strippen-prijzen of -pakketten als configuratie (admin typt zelf het aantal).

## Open punten voor implementatie

- Bevestig de exacte huidige-seizoen-string die `getCurrentSeason()` teruggeeft
  en dat die overeenkomt met `matches.season` (string-gelijkheid).
- Spelersprofiel: bepaal de plek in de bestaande profiel-layout voor de
  read-only saldo/abonnement-weergave.
