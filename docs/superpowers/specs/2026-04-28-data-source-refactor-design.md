# Supabase migratie — sub-project 2: data-source refactor

Tweede van zeven sub-projecten in de migratie van Google Sheets naar Supabase.
Dit document beschrijft hoe we een dunne abstractielaag introduceren tussen
domeinservices en de Sheets-data-store, zodat sub-project 3 een Supabase-
implementatie ernaast kan hangen zonder dat de domeinservices opnieuw geraakt
hoeven worden.

**Voorganger:** sub-project 1 — `docs/superpowers/specs/2026-04-28-supabase-schema-design.md`

## Scope

**In scope:**
- Per domein een data-source-abstractie als Angular abstract class.
- Sheets-implementaties die de bestaande lees/schrijf-logica overnemen
  (verhuizen, niet herschrijven).
- Domeinservices porten zodat ze de abstractie injecteren in plaats van
  `GoogleSheetsService` direct.
- Twee components (`score`, `team-generator`) die nu `batchUpdateSheet` direct
  aanroepen, omleiden via een nieuwe `WedstrijdenService.updateScore(...)`.
- Dood DI opruimen in `team-generate.service.ts` en `kalender.component.ts`.
- Unit-tests uitbreiden voor zowel domeinservices (met gemockte abstract class)
  als de Sheets-adapters (met gemockte `GoogleSheetsService`).

**Out of scope:**
- Supabase-implementaties van de adapters → sub-project 3.
- Feature flag tussen Sheets en Supabase → sub-project 4.
- Data-migratie van Sheets naar Postgres → sub-project 5.
- Cutover en monitoring → sub-project 6.
- `GoogleSheetsService` en Sheets-Functions verwijderen → sub-project 7.
- `LaatsteTeams`-data komt niet expliciet voor in domeinservices op een manier
  die deze refactor raakt — adapters daarvoor pakken we mee in sub-project 3
  als ze nodig blijken.

## Achtergrond

`GoogleSheetsService` heeft 4 actief gebruikte methodes (`getSheetData`,
`appendSheetRow`, `updateSheetRow`, `batchUpdateSheet`) en 1 dode (`querySheetData`).
Vier domeinservices roepen 'm direct aan, en twee components doen
`batchUpdateSheet` zelf — dat laatste hoort eigenlijk via `WedstrijdenService` te lopen.

De array→object-mapping zit nu in elke domeinservice (bv. `transformSheetDataToPlayers`
in `PlayerService`). Bij een naïeve abstractie die de Sheets-API spiegelt zou een
Supabase-implementatie typed Postgres-rijen moeten omvormen naar geordende
cell-arrays — een lekkende abstractie die types weggooit. Daarom kiezen we voor
domein-shaped adapters: elke implementatie levert al typed domeinobjecten af.

## Belangrijkste ontwerpkeuzes

### Abstract class als interface en DI-token

Angular DI werkt rommelig met TypeScript-`interface` (geen runtime-type). Een
`abstract class` is zowel het contract als het injectie-token, zonder
`InjectionToken<...>`-boilerplate. Dat is consistent met hoe Angular-services
hier al worden geïnjecteerd.

```ts
export abstract class PlayerDataSource {
  abstract getAll(): Observable<PlayerSheetData[]>;
  abstract add(player: PlayerSheetData): Observable<void>;
  abstract update(name: string, player: PlayerSheetData): Observable<void>;
}

@Injectable({ providedIn: 'root' })
export class SheetsPlayerDataSource extends PlayerDataSource { ... }

// in app.config.ts:
{ provide: PlayerDataSource, useClass: SheetsPlayerDataSource }
```

### Eén abstractie per domein, niet één centrale `IDataService`

Per domein een eigen interface (`PlayerDataSource`, `MatchDataSource`,
`AttendanceDataSource`, `NotificationDataSource`). Dat geeft kleine,
focused interfaces met domein-typed methodes. Een centrale `IDataService`
wordt onvermijdelijk lange-jas-met-alle-zakken en lekt sheet-/tabel-shape
naar consumenten.

### Mapping-logica verhuist van domeinservice naar adapter

Wat nu in `PlayerService.transformSheetDataToPlayers` zit verhuist naar
`SheetsPlayerDataSource`. De domeinservice wordt dunner — alleen caching,
filtering en business-logica blijven daar. De Supabase-adapter (sub-project 3)
hoeft die mapping niet uit te voeren omdat `supabase-js` al typed objecten
returnt.

### Returntypes blijven `Observable`

Het bestaande codebase is RxJS-gebaseerd. We blijven bij `Observable<T>`
voor consistency, ook al gebruikt `supabase-js` Promises onder de motorkap
— dan wikkelen we via `from(promise)` in de Supabase-adapter (sub-project 3).

### Components doen geen storage meer

`score.component.ts` en `team-generator.component.ts` roepen nu
`googleSheetsService.batchUpdateSheet` direct aan. Dat wordt vervangen
door een aanroep naar `WedstrijdenService.updateScore(...)`, die intern
de `MatchDataSource.updateScore(...)` aanroept. Components praten alleen
nog met domeinservices — schoner én een voorwaarde voor de feature-flag,
omdat anders één component buiten de abstractie blijft.

## Interfaces per domein

```ts
// player-data-source.ts
export abstract class PlayerDataSource {
  abstract getAll(): Observable<PlayerSheetData[]>;
  abstract add(player: PlayerSheetData): Observable<void>;
  abstract update(name: string, player: PlayerSheetData): Observable<void>;
}

// match-data-source.ts
export abstract class MatchDataSource {
  abstract getAll(): Observable<WedstrijdData[]>;
  abstract add(match: WedstrijdData): Observable<WedstrijdData>; // returnt incl. id
  abstract update(match: WedstrijdData): Observable<void>;
  abstract updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatan: string,
    ventiel: string,
  ): Observable<void>;
}

// attendance-data-source.ts
export abstract class AttendanceDataSource {
  abstract getAll(): Observable<AttendanceRecord[]>;
  abstract upsert(record: AttendanceUpdate): Observable<void>;
}

// notification-data-source.ts
export abstract class NotificationDataSource {
  abstract getAllSubscriptions(): Observable<PushSubscriptionRecord[]>;
  abstract addOrUpdateSubscription(sub: PushSubscriptionRecord): Observable<void>;
  abstract deactivateSubscription(endpoint: string): Observable<void>;
}
```

`PushSubscriptionRecord` is een nieuwe of hernoemde domein-interface — de
huidige `NotificationService` werkt met losse strings; tijdens de refactor
geven we het een eigen vorm. Definitieve velden komen in het implementatieplan.

## File-structuur

```
src/app/services/data-sources/
  player-data-source.ts           # abstract class
  player-data-source.sheets.ts    # SheetsPlayerDataSource
  match-data-source.ts
  match-data-source.sheets.ts
  attendance-data-source.ts
  attendance-data-source.sheets.ts
  notification-data-source.ts
  notification-data-source.sheets.ts
  index.ts                        # barrel-export
```

In sub-project 3 komen daar `*.supabase.ts`-files bij; in sub-project 4 wisselt
de provider in `app.config.ts` tussen `Sheets…` en `Supabase…`.

## Wijzigingen per consument

| Bestand | Wijziging |
|---|---|
| `player.service.ts` | Injecteer `PlayerDataSource` i.p.v. `GoogleSheetsService`. Verwijder `transformSheetDataToPlayers` (verhuist). Behoudt cache, filtering, sanitize-helpers. |
| `wedstrijden.service.ts` | Injecteer `MatchDataSource`. Voeg public `updateScore(...)` toe. Bestaande mapping naar `WedstrijdData` verhuist. |
| `attendance.service.ts` | Injecteer `AttendanceDataSource`. Mapping verhuist. |
| `notification.service.ts` | Injecteer `NotificationDataSource`. Mapping verhuist. |
| `score.component.ts` | `batchUpdateSheet`-call vervangen door `wedstrijdenService.updateScore(...)`. |
| `team-generator.component.ts` | Idem. |
| `team-generate.service.ts` | Dood DI op `GoogleSheetsService` weghalen. |
| `kalender.component.ts` | Idem. |
| `app.config.ts` | Vier providers toevoegen die elke abstract class aan de Sheets-implementatie koppelen. |

## Test-strategie

Twee lagen:

1. **Domeinservice-tests** — gebruiken een gemockte abstract class:
   ```ts
   const mockPlayerDataSource = jasmine.createSpyObj<PlayerDataSource>(
     'PlayerDataSource', ['getAll', 'add', 'update']
   );
   TestBed.configureTestingModule({
     providers: [{ provide: PlayerDataSource, useValue: mockPlayerDataSource }],
   });
   ```
   Bestaande spec-bestanden (`attendance.service.spec.ts`, `wedstrijden.service.spec.ts`)
   worden simpeler — geen `SheetRow`-arrays meer mocken, alleen domein-objecten.

2. **Adapter-tests** — Sheets-adapters krijgen eigen specs die `GoogleSheetsService`
   mocken. Hier verhuist de huidige test-coverage van mapping-logica heen.

Beide soorten tests zijn unit-tests in Karma; we voegen geen e2e of integratie-
tests toe in deze sub-project.

## Acceptance criteria

- [ ] Vier abstract classes bestaan onder `src/app/services/data-sources/`.
- [ ] Vier `Sheets…DataSource`-implementaties leveren hetzelfde gedrag als nu,
  inclusief de array→object-mapping.
- [ ] Vier domeinservices injecteren de abstract class in plaats van
  `GoogleSheetsService` direct.
- [ ] `score.component.ts` en `team-generator.component.ts` roepen
  `WedstrijdenService.updateScore(...)` aan in plaats van `batchUpdateSheet`.
- [ ] `team-generate.service.ts` en `kalender.component.ts` injecteren
  `GoogleSheetsService` niet meer.
- [ ] `app.config.ts` koppelt elk abstract class aan z'n Sheets-implementatie.
- [ ] `npm test` (Karma) draait groen, met aangepaste/uitgebreide specs voor
  zowel domeinservices als adapters.
- [ ] `ng build --configuration production` slaagt zonder type-errors.
- [ ] Handmatige rooktest in dev-server: app gedraagt zich identiek aan
  voor de refactor (kalender vult, klassement laadt, score-invoer schrijft door).
- [ ] `GoogleSheetsService` heeft alleen nog adapters als consumenten —
  geen domeinservice/component verwijst er nog naartoe.

## Risico's en open punten

- **Notification-data was minder typed dan andere domeinen** — `NotificationService`
  gebruikt nu losse strings en JSON-stringified subs. We vormen `PushSubscriptionRecord`
  als domein-type tijdens de refactor; exacte velden komen in het implementatieplan
  na 'n korte verkenning van de huidige mapping.
- **`querySheetData` in `GoogleSheetsService`** is dood. Wordt bewust *niet*
  in de adapters opgenomen. Mag in sub-project 7 weg uit het Functions-backend.
- **Match-id-handling**: `WedstrijdData.id?` is optional in het huidige type
  (afgeleid uit rij-index). Tijdens de refactor blijft die semantiek staan,
  maar in sub-project 3 (Supabase) wordt het een echt Postgres-id. De
  `MatchDataSource.add(...)` returnt straks de ingevulde `WedstrijdData`
  zodat callers het id krijgen — dit is anders dan de huidige
  `appendSheetRow`-flow waar caller geen id terugkrijgt. Caller-code (in
  `WedstrijdenService.addWedstrijd`) accommodeert dit.
- **Test-uitbreiding kost werk**. Voor adapters die niet bestaan vandaag
  schrijven we tests vanaf nul; bestaande domeinservice-tests worden
  vereenvoudigd door domain-mocks i.p.v. cell-arrays.
