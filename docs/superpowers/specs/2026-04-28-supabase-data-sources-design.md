# Supabase migratie — sub-project 3: Supabase data-source implementaties

Derde sub-project. Implementeert de vier `Supabase…DataSource`-adapters
naast de bestaande `Sheets…DataSource`-implementaties uit sub-project 2,
en hervormt het `WedstrijdData`-domein-type naar de Postgres-shape.

**Voorgangers:**
- Sub-project 1: schema (`docs/superpowers/specs/2026-04-28-supabase-schema-design.md`)
- Sub-project 2: data-source abstractielaag (`docs/superpowers/specs/2026-04-28-data-source-refactor-design.md`)

## Scope

**In scope:**
- `SupabaseClientService` als gedeelde singleton rond `createClient<Database>(url, anonKey)`.
- Vier `Supabase…DataSource`-implementaties (Player/Match/Attendance/Notification) die de bestaande abstract classes implementeren.
- Domein-type `WedstrijdData` wordt Postgres-native: zlatan/ventiel als FK-ids, team-rosters als `number[]`, geen `absoluteRowNumber`.
- Signatures van `MatchDataSource.updateScore` / `updateTeams` (en mirrors op `WedstrijdenService`) volgen de nieuwe shape.
- `Sheets…DataSource`-adapters worden geretrofit zodat ze óók de nieuwe shape leveren — id↔name-vertaling intern via een geïnjecteerde `PlayerDataSource`. Sheets-on-disk verandert niet.
- UI-aanpassingen: `PlayerNamePipe` + ~6-7 templates/components die zlatan/ventiel/team-rosters tonen of bewerken.
- `game.statistics.service.ts` koppelt Zlatan/ventiel-punten via id i.p.v. naam.
- Unit-tests per Supabase-adapter (mock client) en uitgebreide Sheets-adapter-tests voor de vertaal-laag.
- Een handmatige smoke-flow waarbij providers tijdelijk op Supabase staan, voor end-to-end verificatie tegen het remote project.

**Out of scope:**
- Provider-switch / feature flag in productie — sub-project 4.
- Data-migratie van Sheets naar Postgres — sub-project 5.
- Cutover en monitoring — sub-project 6.
- Sheets-Functions opruimen — sub-project 7.
- Realtime subscriptions, server-side caching, RLS-aanscherping — buiten dit traject.

## Achtergrond

Sub-project 2 heeft een domein-shaped abstractielaag opgeleverd, maar het
domein-type `WedstrijdData` is nog Sheets-shaped: zlatan/ventiel zijn
namen-strings, team-rosters zijn comma-separated strings, en
`absoluteRowNumber` is een Sheets-leak in een interface die geen Sheets
zou moeten kennen.

Met option B uit de brainstorm-fase (gekozen door de user: "we gaan toch
naar Supabase uiteindelijk") verschuift het domein-type naar Postgres-
native shape. De Sheets-adapter blijft compatibel via een interne
vertaal-laag, zodat de feature-flag in sub-project 4 nog beide kanten
kan testen.

## Belangrijkste ontwerpkeuzes

### Domein-shape volgt Postgres, niet Sheets

`zlatan: string` (naam) wordt `zlatanPlayerId: number | null` (FK).
Dito ventiel. `teamWit: string` ("A,B,C") wordt `teamWit: number[]` (player ids).
`absoluteRowNumber` verdwijnt.

Deze keuze maakt de Supabase-adapter triviaal en de Sheets-adapter
verbose. Voor een tijdelijke Sheets-implementatie is dat acceptabel.

### Gedeelde Supabase-client als service

```ts
@Injectable({ providedIn: 'root' })
export class SupabaseClientService {
  readonly client = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseAnonKey,
  );
}
```

Eén instance per app, ingejecteerd in elke Supabase-adapter. Zo voorkomen
we onnodige client-instantiaties en hebben tests één duidelijk
mock-punt.

### Sheets-adapter retrofit met `PlayerDataSource`-injectie

`SheetsMatchDataSource` krijgt `PlayerDataSource` erbij als ctor-injectie.
Voor zlatan/ventiel/teams-vertaling gebruikt 'ie de getypeerde
`PlayerSheetData[]` uit `getAll()` als lookup-tabel: name → id (write)
en id → name (read). Dit is een gerichte koppeling tussen twee adapters
en uitsluitend nodig zolang Sheets nog backend is — sub-project 7
verwijdert de hele `SheetsMatchDataSource` zodra Supabase gecutoverd is.

### `PlayerNamePipe` voor template-display

Een nieuwe pipe `playerName` accepteert een `number | null` en levert een
`Observable<string>` of synchrone string (uit een naam-cache). Templates
gebruiken `{{ id | playerName | async }}` zodat we de UI niet vol hoeven
te schrijven met inline `getPlayerById`-calls.

```ts
@Pipe({ name: 'playerName', standalone: true })
export class PlayerNamePipe implements PipeTransform {
  constructor(private players: PlayerService) {}
  transform(playerId: number | null): Observable<string> {
    if (!playerId) return of('');
    return this.players.getPlayerByName(/* ... */).pipe(...); // need getById; details in plan
  }
}
```

(Implementatie-details — zoals `PlayerService.getPlayerById` toevoegen of
de pipe direct `getPlayers()` laten filteren — komen in het
implementatieplan.)

### Foutafhandeling

`supabase-js` returnt `{ data, error }` per call. Adapter-helper:

```ts
function unwrap<T>(promise: Promise<{ data: T | null; error: any }>): Observable<T> {
  return from(promise).pipe(map(({ data, error }) => {
    if (error) throw error;
    return data as T;
  }));
}
```

Dezelfde semantiek als de bestaande adapters: errors komen omhoog als
`Observable`-errors, domeinservices vangen ze in hun `catchError`.

### Tests met gemockte client

Per Supabase-adapter een spec die de adapter aanmaakt met een nep-
`SupabaseClientService` waar `client.from(...)` een fluent spy retourneert.
Verbose maar isolerend. Geen netwerk-calls in CI.

## Componenten

### Nieuwe bestanden

```
src/app/services/data-sources/
  supabase-client.service.ts
  player-data-source.supabase.ts
  player-data-source.supabase.spec.ts
  match-data-source.supabase.ts
  match-data-source.supabase.spec.ts
  attendance-data-source.supabase.ts
  attendance-data-source.supabase.spec.ts
  notification-data-source.supabase.ts
  notification-data-source.supabase.spec.ts

src/app/pipes/
  player-name.pipe.ts
  player-name.pipe.spec.ts
```

### Te wijzigen bestanden

```
src/app/interfaces/IWedstrijd.ts             # WedstrijdData shape
src/app/services/data-sources/match-data-source.ts  # signatures + JSDoc
src/app/services/data-sources/match-data-source.sheets.ts  # retrofit
src/app/services/data-sources/match-data-source.sheets.spec.ts  # uitbreiden
src/app/services/data-sources/index.ts       # exports

src/app/services/wedstrijden.service.ts      # signature mirror
src/app/services/wedstrijden.service.spec.ts # mock-arg shape
src/app/services/game.statistics.service.ts  # match by id
src/app/services/player.service.ts           # getPlayerById toevoegen

src/app/components/score/score.component.ts  # selectedZlatanId
src/app/components/team-generator/team-generator.component.ts  # arrays i.p.v. strings
src/app/components/wedstrijden/wedstrijden.component.html  # PlayerNamePipe
src/app/components/opstelling/opstelling.component.ts en .html  # arrays
src/app/components/admin/admin-wedstrijden/wedstrijd-dialog/  # form bindt op id

src/app/app.module.ts                        # SupabaseClientService provider (autom. via providedIn)
```

### Behouden gedrag

- Alle bestaande domeinservice-API's blijven gelijk qua naam (alleen het type-argument van Zlatan/teams verschuift).
- Sheets-adapters blijven werken — feature-flag in sub-project 4 kan beide kanten op.
- Caching in `WedstrijdenService` / `PlayerService` / `AttendanceService` ongewijzigd.

## Data-flow

**Lezen wedstrijd via Supabase:**

```
Component
  → WedstrijdenService.getWedstrijden()
  → MatchDataSource (abstract)
  → SupabaseMatchDataSource
  → supabase.from('matches').select('*, match_lineups(player_id, team)')
  → map naar WedstrijdData (zlatanPlayerId, teamWit: number[], etc.)
  → Component, evt. via PlayerNamePipe voor display
```

**Lezen wedstrijd via Sheets (retrofit):**

```
Component
  → WedstrijdenService.getWedstrijden()
  → MatchDataSource (abstract)
  → SheetsMatchDataSource
    ├ this.sheets.getSheetData('Wedstrijden')
    └ this.players.getAll()  ← parallel of cached
  → mapping: voor elke wedstrijd-rij,
    parse zlatan-naam → zoek in players → zet zlatanPlayerId,
    parse teamWit-string → split(',') → trim → namen → zoek ids → number[]
  → return WedstrijdData met Postgres-shape
```

**Schrijven score via Supabase:**

```
Component
  → WedstrijdenService.updateScore(matchId, 4, 2, 5)  // 5 = playerId
  → SupabaseMatchDataSource.updateScore
  → supabase.from('matches').update({score_white: 4, score_red: 2, zlatan_player_id: 5}).eq('id', matchId)
```

**Schrijven score via Sheets (retrofit):**

```
Component
  → SheetsMatchDataSource.updateScore(matchId, 4, 2, 5)
  → lookup playerId 5 → name "Bob" via PlayerDataSource cache
  → bestaande batchUpdate op range G:I met [[4, 2, "Bob"]]
```

## RLS-context

Anon-rol heeft `FOR ALL` op alle tabellen (sub-project 1). Geen extra
checks in adapters; supabase-js gebruikt automatisch de anon-key uit
`SupabaseClientService`. Service-role-key wordt nooit aangeraakt.

## Acceptance criteria

- [ ] `SupabaseClientService` levert een gedeelde `SupabaseClient<Database>`-instance.
- [ ] Vier `Supabase…DataSource`-classes implementeren de bijbehorende abstract classes en zijn provided in `app.module.ts` (achter een tijdelijke commentaar/feature-flag indien aanwezig — daadwerkelijke wisseling in sub-project 4).
- [ ] `WedstrijdData` heeft `zlatanPlayerId`, `ventielPlayerId`, `teamWit: number[]`, `teamRood: number[]`. `absoluteRowNumber` is verwijderd.
- [ ] `MatchDataSource.updateScore` en `updateTeams` accepteren ids resp. id-arrays.
- [ ] `WedstrijdenService` mirrort die signatures.
- [ ] `SheetsMatchDataSource` blijft werken: alle bestaande tests groen (eventueel met aangepaste fixture-shapes), plus 1-2 nieuwe tests voor de id↔name-vertaling.
- [ ] `PlayerNamePipe` werkt en is toegepast op de templates die voorheen `wedstrijd.zlatan`/`wedstrijd.ventiel` toonden.
- [ ] `game.statistics.service.ts` matcht Zlatan-/ventiel-punten via `zlatanPlayerId === player.id`, niet meer via naam.
- [ ] Score-form en team-generator-form binden op ids; geen comma-joined strings meer in de submit-flow.
- [ ] Alle Supabase-adapter unit-tests pass met gemockte client.
- [ ] `npm test` slaagt volledig.
- [ ] `ng build --configuration production` slaagt zonder type-errors.
- [ ] Handmatige smoke-flow met providers tijdelijk op Supabase: kalender, klassement, score-invoer, team-save werken end-to-end tegen het remote project.

## Risico's en open punten

- **PlayerNamePipe-performance**: als `getPlayers()` bij elke pipe-call een nieuwe HTTP-fetch zou triggeren is dat onaanvaardbaar. De pipe leunt op de bestaande `PlayerService`-cache (5 min TTL) en `shareReplay(1)`. Implementatie-detail in het plan: pipe hergebruikt één Observable per `playerId`-input.
- **`PlayerService.getPlayerById`**: deze method bestaat nog niet; alleen `getPlayerByName`. Wordt toegevoegd. Triviaal: `getPlayers().pipe(map(ps => ps.find(p => p.id === id)))`.
- **`PlayerSheetData` heeft geen `id`-veld**: tot nu toe werden players geïdentificeerd op naam. Voor Postgres-id-koppeling moet `PlayerSheetData` óók een `id?: number` krijgen, ingevuld door beide adapters. Sheets-adapter mapt rij-index of zoekt id op, Supabase levert die direct.
- **`addSubscription` echte upsert**: Supabase-pad gebruikt `.upsert(record, { onConflict: 'endpoint' })` zodat re-subscribes geen duplicaten veroorzaken. Sheets-pad blijft appenden — bekende beperking, post-cutover irrelevant.
- **`match_lineups`-schrijven** bij `updateTeams` of `add`: pure delete-then-insert binnen een transactie via een Postgres `RPC`-functie zou ideaal zijn, maar voor jullie schaal is een `delete+insert` zonder transactie acceptabel. Documenteren als beperking.
- **`PushSubscriptionRecord` JSDoc-cleanup** uit de sub-project-2-final-review: nu meenemen, één regel.
- **Provider-DI strategie** (`useExisting` ipv `useClass`): dit komt logisch in sub-project 4, niet hier.
