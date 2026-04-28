# Data-source refactor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Vier domein-data-sources introduceren als abstract classes met Sheets-implementaties, vier domeinservices porten, twee components omleiden via `WedstrijdenService.updateScore`, dood DI verwijderen — zodat sub-project 3 een Supabase-implementatie naast de Sheets-versies kan zetten.

**Architecture:** Per domein een `abstract class …DataSource` als interface én Angular DI-token. Concrete `Sheets…DataSource`-implementaties wrappen de bestaande `GoogleSheetsService` en nemen de rij→object-mapping over die nu in de domeinservices zit. Domeinservices worden dunner: ze houden caching, filtering en business-logica, maar delegeren I/O aan de data-source.

**Tech Stack:** Angular 18, RxJS, TypeScript, Karma/Jasmine voor unit-tests.

**Bron-spec:** `docs/superpowers/specs/2026-04-28-data-source-refactor-design.md`.

---

## Bestanden — overzicht

Nieuw:
- `src/app/services/data-sources/player-data-source.ts`
- `src/app/services/data-sources/player-data-source.sheets.ts`
- `src/app/services/data-sources/player-data-source.sheets.spec.ts`
- `src/app/services/data-sources/match-data-source.ts`
- `src/app/services/data-sources/match-data-source.sheets.ts`
- `src/app/services/data-sources/match-data-source.sheets.spec.ts`
- `src/app/services/data-sources/attendance-data-source.ts`
- `src/app/services/data-sources/attendance-data-source.sheets.ts`
- `src/app/services/data-sources/attendance-data-source.sheets.spec.ts`
- `src/app/services/data-sources/notification-data-source.ts`
- `src/app/services/data-sources/notification-data-source.sheets.ts`
- `src/app/services/data-sources/notification-data-source.sheets.spec.ts`
- `src/app/services/data-sources/index.ts`
- `src/app/interfaces/IPushSubscription.ts`

Aangepast:
- `src/app/services/player.service.ts`
- `src/app/services/wedstrijden.service.ts`
- `src/app/services/wedstrijden.service.spec.ts`
- `src/app/services/attendance.service.ts`
- `src/app/services/attendance.service.spec.ts`
- `src/app/services/notification.service.ts`
- `src/app/services/team-generate.service.ts`
- `src/app/components/score/score.component.ts`
- `src/app/components/team-generator/team-generator.component.ts`
- `src/app/components/kalender/kalender.component.ts`
- `src/app/app.module.ts`

---

### Task 1: Player data-source — abstract class, Sheets-adapter, tests, provider

**Files:**
- Create: `src/app/services/data-sources/player-data-source.ts`
- Create: `src/app/services/data-sources/player-data-source.sheets.ts`
- Create: `src/app/services/data-sources/player-data-source.sheets.spec.ts`
- Create: `src/app/services/data-sources/index.ts`
- Modify: `src/app/app.module.ts`

- [ ] **Step 1: Abstract class aanmaken**

Maak `src/app/services/data-sources/player-data-source.ts`:

```ts
import { Observable } from 'rxjs';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';

/**
 * Abstract data-source voor spelers. Fungeert tegelijk als interface en
 * Angular DI-token. Implementaties (Sheets, Supabase) erven hiervan.
 */
export abstract class PlayerDataSource {
  abstract getAll(): Observable<PlayerSheetData[]>;
  abstract add(player: PlayerSheetData): Observable<void>;
  abstract update(name: string, player: PlayerSheetData): Observable<void>;
}
```

- [ ] **Step 2: Failing test schrijven voor de Sheets-adapter**

Maak `src/app/services/data-sources/player-data-source.sheets.spec.ts`:

```ts
import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsPlayerDataSource } from './player-data-source.sheets';

describe('SheetsPlayerDataSource', () => {
  let dataSource: SheetsPlayerDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService', ['getSheetData', 'appendSheetRow', 'updateSheetRow']);
    TestBed.configureTestingModule({
      providers: [
        SheetsPlayerDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsPlayerDataSource);
  });

  it('mapt rauwe rijen naar PlayerSheetData en sorteert alfabetisch', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Naam', 'Positie', 'Actief'],
      ['  Bob  ', 'Speler', 'Ja'],
      ['Alice', 'Keeper', 'Nee'],
      ['', 'Speler', 'Ja'], // lege naam wordt gefilterd
    ]));

    const players = await lastValueFrom(dataSource.getAll());

    expect(players).toEqual([
      { name: 'Alice', position: 'Keeper', actief: false },
      { name: 'Bob',   position: 'Speler', actief: true },
    ]);
    expect(sheets.getSheetData).toHaveBeenCalledWith('Spelers');
  });

  it('append schrijft de juiste rij in Spelers', async () => {
    sheets.appendSheetRow.and.returnValue(of({ updates: { updatedRows: 1 } } as any));

    await lastValueFrom(dataSource.add({ name: 'Carl', position: 'Speler', actief: true }));

    expect(sheets.appendSheetRow).toHaveBeenCalledWith('Spelers', ['Carl', 'Speler', 'Ja']);
  });

  it('update zoekt rij op naam en schrijft naar dat rijnummer', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Naam', 'Positie', 'Actief'],
      ['Alice', 'Keeper', 'Nee'],
      ['Bob',   'Speler', 'Ja'],
    ]));
    sheets.updateSheetRow.and.returnValue(of({ updatedRows: 1 } as any));

    await lastValueFrom(dataSource.update('Bob', { name: 'Bob', position: 'Keeper', actief: true }));

    // Bob staat op array-index 2 (header op 0, Alice op 1), dus sheet-rij 3 (1-based).
    expect(sheets.updateSheetRow).toHaveBeenCalledWith('Spelers', 3, ['Bob', 'Keeper', 'Ja']);
  });

  it('update gooit error als speler niet gevonden wordt', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Naam', 'Positie', 'Actief'],
      ['Alice', 'Keeper', 'Nee'],
    ]));

    await expectAsync(
      lastValueFrom(dataSource.update('Onbekend', { name: 'Onbekend', position: 'Speler', actief: true }))
    ).toBeRejectedWithError(/Onbekend/);
  });
});
```

- [ ] **Step 3: Run test om te bevestigen dat hij faalt**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-data-source.sheets.spec.ts' 2>&1 | tail -30
```

Expected: failure — `SheetsPlayerDataSource` bestaat nog niet.

- [ ] **Step 4: Sheets-adapter implementeren**

Maak `src/app/services/data-sources/player-data-source.sheets.ts`:

```ts
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';
import { SPELER_COLUMNS, SHEET_NAMES } from '../../constants/sheet-columns';
import { PlayerDataSource } from './player-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsPlayerDataSource extends PlayerDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAll(): Observable<PlayerSheetData[]> {
    return this.sheets.getSheetData(SHEET_NAMES.SPELERS).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  add(player: PlayerSheetData): Observable<void> {
    const row = [player.name, player.position, player.actief ? 'Ja' : 'Nee'];
    return this.sheets.appendSheetRow(SHEET_NAMES.SPELERS, row).pipe(map(() => undefined));
  }

  update(name: string, player: PlayerSheetData): Observable<void> {
    return this.sheets.getSheetData(SHEET_NAMES.SPELERS).pipe(
      switchMap(rows => {
        let foundRowIndex = -1;
        for (let i = 1; i < rows.length; i++) {
          const cell = rows[i]?.[SPELER_COLUMNS.NAME];
          if (typeof cell === 'string' && cell.toLowerCase().trim() === name.toLowerCase().trim()) {
            foundRowIndex = i;
            break;
          }
        }
        if (foundRowIndex === -1) {
          return throwError(() => new Error(`Player not found in sheet: ${name}`));
        }
        const updatedRow = [player.name, player.position, player.actief ? 'Ja' : 'Nee'];
        const sheetRowNumber = foundRowIndex + 1;
        return this.sheets.updateSheetRow(SHEET_NAMES.SPELERS, sheetRowNumber, updatedRow).pipe(map(() => undefined));
      }),
    );
  }

  private transformRows(rows: any[][]): PlayerSheetData[] {
    if (!rows || rows.length <= 1) {
      return [];
    }
    return rows.slice(1)
      .filter(row => row && row[SPELER_COLUMNS.NAME])
      .map(row => ({
        name: this.sanitize(row[SPELER_COLUMNS.NAME]),
        position: this.sanitize(row[SPELER_COLUMNS.POSITION]) || '',
        actief: this.parseBoolean(row[SPELER_COLUMNS.ACTIEF]),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private sanitize(value: any): string {
    if (value === null || value === undefined) return '';
    return String(value).trim();
  }

  private parseBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      const v = value.toLowerCase().trim();
      return v === 'ja' || v === 'true' || v === '1';
    }
    if (typeof value === 'number') return value === 1;
    return false;
  }
}
```

- [ ] **Step 5: Barrel-export aanmaken**

Maak `src/app/services/data-sources/index.ts`:

```ts
export * from './player-data-source';
export * from './player-data-source.sheets';
```

- [ ] **Step 6: Provider registreren in `app.module.ts`**

Open `src/app/app.module.ts` en voeg de import + provider toe binnen de `providers`-array (na `provideAuth`):

```ts
import { PlayerDataSource } from './services/data-sources/player-data-source';
import { SheetsPlayerDataSource } from './services/data-sources/player-data-source.sheets';
```

```ts
providers: [
  provideHttpClient(withInterceptorsFromDi()),
  TitleCasePipe,
  { provide: LOCALE_ID, useValue: 'nl' },
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => getAuth()),
  { provide: PlayerDataSource, useClass: SheetsPlayerDataSource },
]
```

- [ ] **Step 7: Run de tests om te bevestigen dat ze slagen**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-data-source.sheets.spec.ts' 2>&1 | tail -20
```

Expected: alle 4 tests pass.

- [ ] **Step 8: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds (compileert).

- [ ] **Step 9: Commit**

```bash
git add src/app/services/data-sources/ src/app/app.module.ts
git commit -m "PlayerDataSource: abstract class + Sheets-adapter + provider."
```

---

### Task 2: PlayerService porten naar PlayerDataSource

**Files:**
- Modify: `src/app/services/player.service.ts`

- [ ] **Step 1: PlayerService herschrijven**

Vervang de complete inhoud van `src/app/services/player.service.ts` door:

```ts
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, shareReplay } from 'rxjs/operators';
import { PlayerSheetData, PlayerFilter } from '../interfaces/IPlayerSheet';
import { PlayerDataSource } from './data-sources/player-data-source';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersCache$ = new BehaviorSubject<PlayerSheetData[] | null>(null);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000;

  constructor(private dataSource: PlayerDataSource) {}

  getPlayers(filter?: PlayerFilter): Observable<PlayerSheetData[]> {
    return this.getCachedPlayers().pipe(
      map(players => this.applyFilter(players, filter))
    );
  }

  getActivePlayers(): Observable<PlayerSheetData[]> {
    return this.getPlayers({ activeOnly: true });
  }

  getPlayerByName(name: string): Observable<PlayerSheetData | undefined> {
    return this.getCachedPlayers().pipe(
      map(players => players.find(player =>
        player.name.toLowerCase() === name.toLowerCase()
      ))
    );
  }

  refreshPlayers(): Observable<PlayerSheetData[]> {
    this.clearCache();
    return this.getCachedPlayers();
  }

  addPlayer(player: PlayerSheetData): Observable<void> {
    return this.dataSource.add(player).pipe(
      tap(() => this.clearCache()),
      catchError(error => {
        console.error('❌ PlayerService error adding player:', error);
        throw error;
      })
    );
  }

  updatePlayer(playerName: string, updatedPlayer: PlayerSheetData): Observable<void> {
    return this.dataSource.update(playerName, updatedPlayer).pipe(
      tap(() => this.clearCache()),
      catchError(error => {
        console.error('❌ PlayerService error updating player:', error);
        throw error;
      })
    );
  }

  private getCachedPlayers(): Observable<PlayerSheetData[]> {
    const now = Date.now();
    const cachedData = this.playersCache$.value;
    if (cachedData && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return of(cachedData);
    }
    return this.dataSource.getAll().pipe(
      tap(players => {
        this.playersCache$.next(players);
        this.cacheTimestamp = now;
      }),
      catchError(error => {
        console.error('Error fetching players:', error);
        return of(cachedData || []);
      }),
      shareReplay(1)
    );
  }

  private applyFilter(players: PlayerSheetData[], filter?: PlayerFilter): PlayerSheetData[] {
    if (!filter) return players;
    let filtered = players;
    if (filter.activeOnly) {
      filtered = filtered.filter(player => player.actief);
    }
    if (filter.positions && filter.positions.length > 0) {
      filtered = filtered.filter(player =>
        filter.positions!.some(pos =>
          player.position.toLowerCase() === pos.toLowerCase()
        )
      );
    }
    return filtered;
  }

  private clearCache(): void {
    this.playersCache$.next(null);
    this.cacheTimestamp = 0;
  }
}
```

Verschillen t.o.v. vorige versie: `transformSheetDataToPlayers`, `parseBoolean`, `sanitizeString` zijn weg (verhuisd naar adapter); imports voor `GoogleSheetsService`, `SHEET_NAMES`, `SPELER_COLUMNS`, en `switchMap` zijn weg.

- [ ] **Step 2: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 3: Run alle tests**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -15
```

Expected: bestaande tests slagen nog steeds. (Player heeft geen eigen spec; AttendanceService spec gebruikt een `PlayerService` spy die ongewijzigd blijft.)

- [ ] **Step 4: Commit**

```bash
git add src/app/services/player.service.ts
git commit -m "PlayerService: porten naar PlayerDataSource."
```

---

### Task 3: Match data-source — abstract class, Sheets-adapter, tests, provider

**Files:**
- Create: `src/app/services/data-sources/match-data-source.ts`
- Create: `src/app/services/data-sources/match-data-source.sheets.ts`
- Create: `src/app/services/data-sources/match-data-source.sheets.spec.ts`
- Modify: `src/app/services/data-sources/index.ts`
- Modify: `src/app/app.module.ts`

- [ ] **Step 1: Abstract class**

Maak `src/app/services/data-sources/match-data-source.ts`:

```ts
import { Observable } from 'rxjs';
import { WedstrijdData } from '../../interfaces/IWedstrijd';

export abstract class MatchDataSource {
  abstract getAll(): Observable<WedstrijdData[]>;
  abstract add(match: WedstrijdData): Observable<WedstrijdData>;
  abstract update(match: WedstrijdData): Observable<void>;
  /** Schrijft alleen score-kolommen + zlatan (kolommen G:I) — match het huidige
   * score.component-gedrag dat ventiel niet aanraakt. Ventiel wordt via de admin
   * wedstrijd-dialog geüpdatet (volledige `update`). */
  abstract updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatan: string,
  ): Observable<void>;
  /** Schrijft team-namen + generatietype (kolommen D:F), en optioneel
   * voorbeschouwing (kolom K). Gebruikt door team-generator. */
  abstract updateTeams(
    matchId: number,
    teamWit: string,
    teamRood: string,
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void>;
}
```

- [ ] **Step 2: Failing test**

Maak `src/app/services/data-sources/match-data-source.sheets.spec.ts`:

```ts
import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsMatchDataSource } from './match-data-source.sheets';

describe('SheetsMatchDataSource', () => {
  let dataSource: SheetsMatchDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService',
      ['getSheetData', 'appendSheetRow', 'updateSheetRow', 'batchUpdateSheet']);
    TestBed.configureTestingModule({
      providers: [
        SheetsMatchDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsMatchDataSource);
  });

  it('getAll mapt rauwe rijen en berekent seizoenWedstrijdNummer', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Automatisch', 3, 2, 'Bob', ''],
      [2, '2025-2026', '22-09-2025', 'Wit', 'Rood', 'Automatisch', '', '', '', ''],
    ]));

    const matches = await lastValueFrom(dataSource.getAll());

    expect(matches.length).toBe(2);
    expect(matches[0].id).toBe(1);
    expect(matches[0].seizoen).toBe('2025-2026');
    expect(matches[0].seizoenWedstrijdNummer).toBe(1);
    expect(matches[0].scoreWit).toBe(3);
    expect(matches[1].seizoenWedstrijdNummer).toBe(2);
    expect(matches[1].scoreWit).toBeNull();
  });

  it('updateScore schrijft G:I (scores + zlatan) via batchUpdateSheet', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Automatisch', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({ totalUpdatedCells: 3 } as any));

    await lastValueFrom(dataSource.updateScore(1, 4, 2, 'Bob'));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg.length).toBe(1);
    // ID=1 zit op array-index 1, sheet-rij 2
    expect(arg[0].range).toBe('Wedstrijden!G2:I2');
    expect(arg[0].values).toEqual([[4, 2, 'Bob']]);
  });

  it('updateScore gooit error als match-id niet bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Automatisch', '', '', '', ''],
    ]));

    await expectAsync(lastValueFrom(dataSource.updateScore(999, 1, 0, '')))
      .toBeRejectedWithError(/999/);
  });

  it('updateTeams schrijft D:F en optioneel K via batchUpdateSheet', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({ totalUpdatedCells: 4 } as any));

    await lastValueFrom(dataSource.updateTeams(1, 'Alice,Bob', 'Carl,Dan', 'Handmatig', 'Een tactische analyse'));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg.length).toBe(2);
    expect(arg[0].range).toBe('Wedstrijden!D2:F2');
    expect(arg[0].values).toEqual([['Alice,Bob', 'Carl,Dan', 'Handmatig']]);
    expect(arg[1].range).toBe('Wedstrijden!K2');
    expect(arg[1].values).toEqual([['Een tactische analyse']]);
  });

  it('updateTeams zonder voorbeschouwing schrijft alleen D:F', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({ totalUpdatedCells: 3 } as any));

    await lastValueFrom(dataSource.updateTeams(1, 'A', 'B', 'Automatisch'));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg.length).toBe(1);
    expect(arg[0].range).toBe('Wedstrijden!D2:F2');
  });
});
```

- [ ] **Step 3: Run test om te zien dat hij faalt**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/match-data-source.sheets.spec.ts' 2>&1 | tail -20
```

Expected: failure — `SheetsMatchDataSource` bestaat niet.

- [ ] **Step 4: Sheets-adapter implementeren**

Maak `src/app/services/data-sources/match-data-source.sheets.ts`:

```ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import { WedstrijdData } from '../../interfaces/IWedstrijd';
import { parseWedstrijdDateTime } from '../../utils/date-utils';
import {
  WEDSTRIJD_COLUMNS,
  WEDSTRIJD_RANGES,
  SHEET_NAMES,
} from '../../constants/sheet-columns';
import { MatchDataSource } from './match-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsMatchDataSource extends MatchDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAll(): Observable<WedstrijdData[]> {
    return this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  add(match: WedstrijdData): Observable<WedstrijdData> {
    const datumString = this.formatDate(match.datum);
    return this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN).pipe(
      switchMap(rows => {
        const matches = this.transformRows(rows);
        const maxId = matches.reduce((m, w) => Math.max(m, w.id || 0), 0);
        const nextId = maxId + 1;
        const row = [
          nextId,
          match.seizoen || '',
          datumString,
          match.teamWit || '',
          match.teamRood || '',
          match.teamGeneratie || '',
          match.scoreWit !== null && match.scoreWit !== undefined ? match.scoreWit : '',
          match.scoreRood !== null && match.scoreRood !== undefined ? match.scoreRood : '',
          match.zlatan || '',
          match.ventiel || '',
        ];
        return this.sheets.appendSheetRow(SHEET_NAMES.WEDSTRIJDEN, row).pipe(
          map(() => ({ ...match, id: nextId, datumString })),
        );
      }),
    );
  }

  update(match: WedstrijdData): Observable<void> {
    if (!match.absoluteRowNumber) {
      return throwError(() => new Error('Cannot update match: absoluteRowNumber is missing'));
    }
    const datumString = this.formatDate(match.datum);
    const row = [
      match.id || '',
      match.seizoen || '',
      datumString,
      match.teamWit || '',
      match.teamRood || '',
      match.teamGeneratie || '',
      match.scoreWit !== null && match.scoreWit !== undefined ? match.scoreWit : '',
      match.scoreRood !== null && match.scoreRood !== undefined ? match.scoreRood : '',
      match.zlatan || '',
      match.ventiel || '',
    ];
    return this.sheets.updateSheetRow(SHEET_NAMES.WEDSTRIJDEN, match.absoluteRowNumber, row).pipe(
      map(() => undefined),
    );
  }

  updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatan: string,
  ): Observable<void> {
    return this.findRowNumberForMatch(matchId).pipe(
      switchMap(rowNumber => {
        const data = [{
          range: WEDSTRIJD_RANGES.SCORES_AND_ZLATAN(rowNumber),
          values: [[scoreWhite, scoreRed, zlatan]],
        }];
        return this.sheets.batchUpdateSheet(data).pipe(map(() => undefined));
      }),
    );
  }

  updateTeams(
    matchId: number,
    teamWit: string,
    teamRood: string,
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void> {
    return this.findRowNumberForMatch(matchId).pipe(
      switchMap(rowNumber => {
        const data: { range: string; values: any[][] }[] = [{
          range: WEDSTRIJD_RANGES.TEAMS_WITH_GENERATIE(rowNumber),
          values: [[teamWit, teamRood, teamGeneration]],
        }];
        if (voorbeschouwing) {
          data.push({
            range: WEDSTRIJD_RANGES.VOORBESCHOUWING(rowNumber),
            values: [[voorbeschouwing]],
          });
        }
        return this.sheets.batchUpdateSheet(data).pipe(map(() => undefined));
      }),
    );
  }

  private findRowNumberForMatch(matchId: number): Observable<number> {
    return this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN).pipe(
      switchMap(rows => {
        for (let i = 1; i < rows.length; i++) {
          const cell = rows[i]?.[WEDSTRIJD_COLUMNS.ID];
          const id = typeof cell === 'number' ? cell : parseInt(cell, 10);
          if (id === matchId) {
            return of(i + 1); // 1-based sheet row
          }
        }
        return throwError(() => new Error(`Match not found: id=${matchId}`));
      }),
    );
  }

  private formatDate(date: Date | null | undefined): string {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  private parseScore(value: any): number | null {
    if (value === null || value === undefined || value === '') return null;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? null : parsed;
  }

  private transformRows(rawData: any[][]): WedstrijdData[] {
    if (!rawData || rawData.length <= 1) return [];

    const baseMatches = rawData.slice(1)
      .filter(row => row && row.length > 0)
      .map((row, index) => {
        const absoluteRowNumber = index + 2;
        const seizoen = (row[WEDSTRIJD_COLUMNS.SEIZOEN] || '').toString().trim();
        const datumString = row[WEDSTRIJD_COLUMNS.DATUM] || '';
        const parsedDatum = parseWedstrijdDateTime(datumString);

        let id: number;
        const sheetId = this.parseScore(row[WEDSTRIJD_COLUMNS.ID]);
        if (sheetId !== null && sheetId > 0) {
          id = sheetId;
        } else {
          id = index + 1;
          console.warn(`Wedstrijd rij ${absoluteRowNumber}: Geen geldig ID in kolom A (${row[WEDSTRIJD_COLUMNS.ID]}), gebruik fallback ${id}`);
        }

        return {
          id,
          seizoen,
          absoluteRowNumber,
          datum: parsedDatum,
          datumString,
          teamWit: row[WEDSTRIJD_COLUMNS.TEAM_WIT] || '',
          teamRood: row[WEDSTRIJD_COLUMNS.TEAM_ROOD] || '',
          teamGeneratie: row[WEDSTRIJD_COLUMNS.TEAM_GENERATIE] || '',
          scoreWit: this.parseScore(row[WEDSTRIJD_COLUMNS.SCORE_WIT]),
          scoreRood: this.parseScore(row[WEDSTRIJD_COLUMNS.SCORE_ROOD]),
          zlatan: row[WEDSTRIJD_COLUMNS.ZLATAN] || '',
          ventiel: row[WEDSTRIJD_COLUMNS.VENTIEL] || '',
          voorbeschouwing: row[WEDSTRIJD_COLUMNS.VOORBESCHOUWING] || undefined,
          locatie: 'Sporthal Steinheim',
        };
      });

    const seizoenCounters = new Map<string, number>();
    return baseMatches.map(m => {
      if (!m.seizoen) {
        console.warn(`Wedstrijd ${m.datumString}: Geen seizoen in kolom B gevonden`);
        return m;
      }
      const currentCount = seizoenCounters.get(m.seizoen) || 0;
      const seizoenWedstrijdNummer = currentCount + 1;
      seizoenCounters.set(m.seizoen, seizoenWedstrijdNummer);
      return { ...m, seizoenWedstrijdNummer };
    });
  }
}
```

- [ ] **Step 5: Barrel-export uitbreiden**

Open `src/app/services/data-sources/index.ts` en voeg toe:

```ts
export * from './match-data-source';
export * from './match-data-source.sheets';
```

- [ ] **Step 6: Provider registreren**

Open `src/app/app.module.ts`. Voeg imports toe:

```ts
import { MatchDataSource } from './services/data-sources/match-data-source';
import { SheetsMatchDataSource } from './services/data-sources/match-data-source.sheets';
```

En voeg toe aan `providers`-array:

```ts
{ provide: MatchDataSource, useClass: SheetsMatchDataSource },
```

- [ ] **Step 7: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/match-data-source.sheets.spec.ts' 2>&1 | tail -20
```

Expected: alle 3 tests pass.

- [ ] **Step 8: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 9: Commit**

```bash
git add src/app/services/data-sources/ src/app/app.module.ts
git commit -m "MatchDataSource: abstract class + Sheets-adapter + provider."
```

---

### Task 4: WedstrijdenService porten en `updateScore` toevoegen

**Files:**
- Modify: `src/app/services/wedstrijden.service.ts`
- Modify: `src/app/services/wedstrijden.service.spec.ts`

- [ ] **Step 1: WedstrijdenService herschrijven**

Vervang `src/app/services/wedstrijden.service.ts` door:

```ts
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, shareReplay } from 'rxjs/operators';
import { WedstrijdData, WedstrijdFilter, SeizoenData } from '../interfaces/IWedstrijd';
import { MatchDataSource } from './data-sources/match-data-source';

@Injectable({
  providedIn: 'root'
})
export class WedstrijdenService {
  private wedstrijdenCache$ = new BehaviorSubject<WedstrijdData[] | null>(null);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 3 * 60 * 1000;

  constructor(private dataSource: MatchDataSource) {}

  getWedstrijden(filter?: WedstrijdFilter): Observable<WedstrijdData[]> {
    return this.getCachedWedstrijden().pipe(
      map(wedstrijden => this.applyFilter(wedstrijden, filter))
    );
  }

  getGespeeldeWedstrijden(): Observable<WedstrijdData[]> {
    return this.getWedstrijden({ gespeeld: true });
  }

  getToekomstigeWedstrijden(): Observable<WedstrijdData[]> {
    return this.getWedstrijden({ gespeeld: false });
  }

  getBeschikbareSeizoen(): Observable<SeizoenData[]> {
    return this.getCachedWedstrijden().pipe(
      map(wedstrijden => {
        const seizoenMap = new Map<string, { totaal: number; gespeeld: number }>();
        wedstrijden
          .filter(w => w.datum !== null)
          .forEach(wedstrijd => {
            const seizoen = wedstrijd.seizoen;
            if (seizoen) {
              if (!seizoenMap.has(seizoen)) {
                seizoenMap.set(seizoen, { totaal: 0, gespeeld: 0 });
              }
              const stats = seizoenMap.get(seizoen)!;
              stats.totaal++;
              if (wedstrijd.scoreWit !== null && wedstrijd.scoreRood !== null) {
                stats.gespeeld++;
              }
            }
          });
        return Array.from(seizoenMap.entries())
          .map(([seizoen, stats]) => ({
            seizoen,
            aantalWedstrijden: stats.totaal,
            aantalGespeeld: stats.gespeeld
          }))
          .sort((a, b) => b.seizoen.localeCompare(a.seizoen));
      })
    );
  }

  getWedstrijdenVoorSeizoen(seizoen: string): Observable<WedstrijdData[]> {
    return this.getWedstrijden({ seizoen });
  }

  refreshCache(): Observable<WedstrijdData[]> {
    this.wedstrijdenCache$.next(null);
    this.cacheTimestamp = 0;
    return this.getCachedWedstrijden();
  }

  findWedstrijdBySeizoenAndNummer(seizoen: string, wedstrijdNummer: number): Observable<WedstrijdData | null> {
    return this.getCachedWedstrijden().pipe(
      map(wedstrijden => wedstrijden.find(w =>
        w.seizoen === seizoen && w.id === wedstrijdNummer
      ) || null)
    );
  }

  addWedstrijd(wedstrijd: WedstrijdData): Observable<WedstrijdData> {
    return this.dataSource.add(wedstrijd).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error adding wedstrijd:', error);
        throw error;
      })
    );
  }

  updateWedstrijd(wedstrijd: WedstrijdData): Observable<void> {
    return this.dataSource.update(wedstrijd).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error updating wedstrijd:', error);
        throw error;
      })
    );
  }

  /**
   * Bulk-update score + zlatan voor één wedstrijd. Vervangt de directe
   * `batchUpdateSheet`-aanroep in score.component.
   */
  updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatan: string,
  ): Observable<void> {
    return this.dataSource.updateScore(matchId, scoreWhite, scoreRed, zlatan).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error updating score:', error);
        throw error;
      })
    );
  }

  /**
   * Update team-namen + generatietype + optionele voorbeschouwing.
   * Vervangt de directe `batchUpdateSheet`-aanroep in team-generator.component.
   */
  updateTeams(
    matchId: number,
    teamWit: string,
    teamRood: string,
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void> {
    return this.dataSource.updateTeams(matchId, teamWit, teamRood, teamGeneration, voorbeschouwing).pipe(
      tap(() => {
        this.wedstrijdenCache$.next(null);
        this.cacheTimestamp = 0;
      }),
      catchError(error => {
        console.error('Error updating teams:', error);
        throw error;
      })
    );
  }

  private getCachedWedstrijden(): Observable<WedstrijdData[]> {
    const now = Date.now();
    const cachedData = this.wedstrijdenCache$.value;
    if (cachedData && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return of(cachedData);
    }
    return this.dataSource.getAll().pipe(
      tap(wedstrijden => {
        this.wedstrijdenCache$.next(wedstrijden);
        this.cacheTimestamp = now;
      }),
      catchError(error => {
        console.error('Error fetching wedstrijden data:', error);
        return of([]);
      }),
      shareReplay(1)
    );
  }

  private applyFilter(wedstrijden: WedstrijdData[], filter?: WedstrijdFilter): WedstrijdData[] {
    if (!filter) return wedstrijden;
    let filtered = wedstrijden;
    if (filter.seizoen) {
      filtered = filtered.filter(w => w.seizoen === filter.seizoen);
    }
    if (filter.gespeeld !== undefined) {
      filtered = filtered.filter(w => {
        const isGespeeld = w.scoreWit !== null && w.scoreRood !== null;
        return filter.gespeeld ? isGespeeld : !isGespeeld;
      });
    }
    if (filter.teamFilter) {
      const teamFilter = filter.teamFilter.toLowerCase();
      filtered = filtered.filter(w =>
        w.teamWit.toLowerCase().includes(teamFilter) ||
        w.teamRood.toLowerCase().includes(teamFilter)
      );
    }
    return filtered;
  }
}
```

Wijzigingen: `GoogleSheetsService`, `parseWedstrijdDateTime`, `WEDSTRIJD_COLUMNS`, `SHEET_NAMES`, en `switchMap` zijn weg uit imports. `transformRawData`, `parseScore`, datum-formatter zijn weg. Nieuw: `updateScore`.

- [ ] **Step 2: Bestaande spec aanpassen**

Open `src/app/services/wedstrijden.service.spec.ts` en lees 'm. De test moet nu de `MatchDataSource` mocken in plaats van `GoogleSheetsService`. Vervang de volledige inhoud door:

```ts
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WedstrijdenService } from './wedstrijden.service';
import { MatchDataSource } from './data-sources/match-data-source';
import { WedstrijdData } from '../interfaces/IWedstrijd';

describe('WedstrijdenService', () => {
  let service: WedstrijdenService;
  let mockDataSource: jasmine.SpyObj<MatchDataSource>;

  const mockMatches: WedstrijdData[] = [
    {
      id: 1,
      seizoen: '2025-2026',
      seizoenWedstrijdNummer: 1,
      datum: new Date('2025-09-15'),
      datumString: '15-09-2025',
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: 3,
      scoreRood: 2,
      zlatan: 'Bob',
      ventiel: '',
      absoluteRowNumber: 2,
      locatie: 'Sporthal Steinheim',
    },
    {
      id: 2,
      seizoen: '2025-2026',
      seizoenWedstrijdNummer: 2,
      datum: new Date('2025-09-22'),
      datumString: '22-09-2025',
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatan: '',
      ventiel: '',
      absoluteRowNumber: 3,
      locatie: 'Sporthal Steinheim',
    },
  ];

  beforeEach(() => {
    mockDataSource = jasmine.createSpyObj('MatchDataSource',
      ['getAll', 'add', 'update', 'updateScore', 'updateTeams']);
    TestBed.configureTestingModule({
      providers: [
        WedstrijdenService,
        { provide: MatchDataSource, useValue: mockDataSource },
      ],
    });
    service = TestBed.inject(WedstrijdenService);
    mockDataSource.getAll.and.returnValue(of(mockMatches));
  });

  it('getGespeeldeWedstrijden filtert op aanwezige scores', (done) => {
    service.getGespeeldeWedstrijden().subscribe(matches => {
      expect(matches.length).toBe(1);
      expect(matches[0].id).toBe(1);
      done();
    });
  });

  it('getToekomstigeWedstrijden filtert op afwezige scores', (done) => {
    service.getToekomstigeWedstrijden().subscribe(matches => {
      expect(matches.length).toBe(1);
      expect(matches[0].id).toBe(2);
      done();
    });
  });

  it('updateScore delegeert naar de data-source en clear de cache', (done) => {
    mockDataSource.updateScore.and.returnValue(of(undefined));
    service.updateScore(1, 4, 1, 'Bob').subscribe(() => {
      expect(mockDataSource.updateScore).toHaveBeenCalledWith(1, 4, 1, 'Bob');
      done();
    });
  });

  it('updateTeams delegeert naar de data-source met optionele voorbeschouwing', (done) => {
    mockDataSource.updateTeams.and.returnValue(of(undefined));
    service.updateTeams(1, 'A,B', 'C,D', 'Handmatig', 'tactiek').subscribe(() => {
      expect(mockDataSource.updateTeams).toHaveBeenCalledWith(1, 'A,B', 'C,D', 'Handmatig', 'tactiek');
      done();
    });
  });

  it('addWedstrijd geeft de uitgevulde match (incl. id) door', (done) => {
    const input: WedstrijdData = {
      seizoen: '2026-2027',
      datum: new Date('2026-08-30'),
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatan: '',
      ventiel: '',
    };
    mockDataSource.add.and.returnValue(of({ ...input, id: 42, datumString: '30-08-2026' }));
    service.addWedstrijd(input).subscribe(result => {
      expect(result.id).toBe(42);
      done();
    });
  });
});
```

- [ ] **Step 3: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/wedstrijden.service.spec.ts' 2>&1 | tail -20
```

Expected: alle 4 tests pass.

- [ ] **Step 4: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/wedstrijden.service.ts src/app/services/wedstrijden.service.spec.ts
git commit -m "WedstrijdenService: porten naar MatchDataSource + updateScore."
```

---

### Task 5: `score.component.ts` omleiden via `WedstrijdenService.updateScore`

**Files:**
- Modify: `src/app/components/score/score.component.ts`

- [ ] **Step 1: `performScoreUpdate` aanpassen**

Open `src/app/components/score/score.component.ts`. Vervang de complete `performScoreUpdate(rowIndexToUpdate: number)`-method (rond regels 215-253) door:

```ts
private performScoreUpdate(rowIndexToUpdate: number): void {
  const matchNumber = this.nextMatch?.matchNumber;
  const seizoen = this.nextMatchInfo?.wedstrijd?.seizoen;
  const matchId = this.nextMatchInfo?.wedstrijd?.id;
  console.log(`💾 Scores opslaan - Seizoen: ${seizoen || 'onbekend'}, Wedstrijd: ${matchNumber}, ID: ${matchId}`);

  if (!matchId) {
    console.error('❌ Geen match-id beschikbaar voor score-update');
    this._snackBar.open('Fout: kon wedstrijd niet identificeren.', 'Sluiten', {
      duration: 5000,
      panelClass: ['futsal-notification', 'futsal-notification-error']
    });
    return;
  }

  // Mutation: bewust GEEN takeUntilDestroyed zodat de save doorgaat ook als de
  // gebruiker wegnavigeert voor de response binnen is.
  this.wedstrijdenService.updateScore(
    matchId,
    this.whiteGoals,
    this.redGoals,
    this.selectedZlatan || '',
  ).subscribe({
    next: () => {
      console.log(`✅ Scores succesvol opgeslagen voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}`);
      this.wedstrijdenService.refreshCache().subscribe();
      this._snackBar.open('Scores en Zlatan succesvol opgeslagen!', 'OK', {
        duration: 3000,
        panelClass: ['futsal-notification', 'futsal-notification-success']
      }).afterDismissed().subscribe(() => {
        this.router.navigate(['/klassement']);
      });
    },
    error: error => {
      console.error(`❌ Fout bij opslaan scores voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}:`, error);
      this._snackBar.open('Fout bij opslaan. Probeer het opnieuw.', 'Sluiten', {
        duration: 5000,
        panelClass: ['futsal-notification', 'futsal-notification-error']
      });
    }
  });
}
```

Het method-signatuur blijft `(rowIndexToUpdate: number)` zodat callers ongewijzigd blijven, maar `rowIndexToUpdate` wordt nu alleen voor logging gebruikt — de daadwerkelijke schrijf-operatie gaat via match-id.

- [ ] **Step 2: Imports en constructor opschonen**

Verwijder bovenin het bestand:

```ts
import { GoogleSheetsService } from ...;
import { WEDSTRIJD_RANGES } from ...;
```

(Beide imports zijn na de wijziging niet meer nodig.)

In de constructor: verwijder `private googleSheetsService: GoogleSheetsService` als 'ie er staat. `WedstrijdenService` was al geïnjecteerd (zie de bestaande `this.wedstrijdenService.refreshCache()`-call), dus die hoeft niet toegevoegd.

- [ ] **Step 3: Verifieer dat `GoogleSheetsService` en range-imports niet meer nodig zijn**

Run:
```bash
grep -n "GoogleSheetsService\|WEDSTRIJD_RANGES\|batchUpdateSheet" src/app/components/score/score.component.ts
```

Expected: geen output meer (of alleen als ze elders in het bestand nog nodig zijn — als die output `<empty>` is, ga je verder).

Als er nog imports staan die niet meer gebruikt worden, verwijder ze.

- [ ] **Step 4: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 5: Bestaande tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -15
```

Expected: alle tests pass (`score.component` heeft geen eigen spec; we vertrouwen op de WedstrijdenService-spec voor `updateScore`-coverage).

- [ ] **Step 6: Commit**

```bash
git add src/app/components/score/score.component.ts
git commit -m "score-component: gebruik WedstrijdenService.updateScore i.p.v. batchUpdateSheet."
```

---

### Task 6: `team-generator.component.ts` omleiden via `WedstrijdenService.updateScore`

**Files:**
- Modify: `src/app/components/team-generator/team-generator.component.ts`

- [ ] **Step 1: De team-save-aanroep vervangen**

Open `src/app/components/team-generator/team-generator.component.ts`. De huidige code (rond regel 770-810) bouwt `updateData` op met `TEAMS_WITH_GENERATIE`-range en optioneel `VOORBESCHOUWING`, en roept `googleSheetsService.batchUpdateSheet(updateData)` aan. Dit is geen score-update — het schrijft team-namen + AI-voorbeschouwing. We gebruiken hiervoor `WedstrijdenService.updateTeams`.

Vervang het volledige blok van `const updateData: ... = [...]` t/m de afsluitende `})` van de `subscribe`-call door:

```ts
// Match-id opzoeken voor de updateTeams-aanroep
const matchId = this.nextMatchInfo?.wedstrijd?.id;
if (!matchId) {
  console.error('❌ Geen match-id beschikbaar voor team-update');
  this.isSavingTeams = false;
  this.loadingSubject.next(false);
  this.snackBar.open('Fout: kon wedstrijd niet identificeren.', 'Sluiten', {
    duration: 5000,
    panelClass: ['futsal-notification', 'futsal-notification-error'],
  });
  return;
}

// Mutation: bewust GEEN takeUntilDestroyed zodat de save doorgaat ook als de
// gebruiker wegnavigeert voor de response binnen is.
this.wedstrijdenService.updateTeams(
  matchId,
  teamWhiteNames,
  teamRedNames,
  'Handmatig',
  this.algorithmExplanation || undefined,
).subscribe({
  next: () => {
    console.log(`✅ Teams succesvol opgeslagen voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}`);
    this.wedstrijdenService.refreshCache().subscribe();
    this.isTeamsSaved = true;
    this.isSavingTeams = false;
    this.loadingSubject.next(false);
    this.snackBar.open('Teams opgeslagen!', 'Sluiten', { duration: 3000, panelClass: ['futsal-notification', 'futsal-notification-success'] });
    this.sendPushNotificationToAll(
      'Opstelling bekend ⚽',
      'Bekijk de teams voor de volgende wedstrijd.',
      window.location.origin + '/opstelling',
    );
  },
  error: (err) => {
    console.error(`❌ Fout bij opslaan teams voor ${seizoen || 'onbekend'} wedstrijd ${matchNumber}:`, err);
    this.isSavingTeams = false;
    this.loadingSubject.next(false);
    this.snackBar.open('Fout bij opslaan teams: ' + (err.message || err), 'Sluiten', { duration: 5000, panelClass: ['futsal-notification', 'futsal-notification-error'] });
  },
});
```

Belangrijke aanpassing op de huidige logica: de oude code gebruikte `sheetRowIndex` als locatie. De nieuwe versie identificeert de wedstrijd via `matchId` (uit `this.nextMatchInfo?.wedstrijd?.id`). De `sheetRowIndex`-berekening blijft eventueel staan voor andere doeleinden of mag weg als 'ie alleen voor deze call gebruikt werd.

- [ ] **Step 2: Imports en constructor opschonen**

Verwijder uit de imports:

```ts
import { GoogleSheetsService } from ...;
import { WEDSTRIJD_RANGES } from ...;
```

(Beide worden niet meer gebruikt na deze wijziging.) Verwijder ook `private googleSheetsService: GoogleSheetsService` uit de constructor. `WedstrijdenService` was al geïnjecteerd.

- [ ] **Step 3: Verifieer**

Run:
```bash
grep -n "GoogleSheetsService\|WEDSTRIJD_RANGES\|batchUpdateSheet" src/app/components/team-generator/team-generator.component.ts
```

Expected: geen output. Als wel: opruimen.

- [ ] **Step 4: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 5: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -15
```

Expected: alle tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/app/components/team-generator/team-generator.component.ts
git commit -m "team-generator: gebruik WedstrijdenService.updateScore i.p.v. batchUpdateSheet."
```

---

### Task 7: Attendance data-source — abstract + Sheets-adapter + tests + provider

**Files:**
- Create: `src/app/services/data-sources/attendance-data-source.ts`
- Create: `src/app/services/data-sources/attendance-data-source.sheets.ts`
- Create: `src/app/services/data-sources/attendance-data-source.sheets.spec.ts`
- Modify: `src/app/services/data-sources/index.ts`
- Modify: `src/app/app.module.ts`

- [ ] **Step 1: Abstract class**

Maak `src/app/services/data-sources/attendance-data-source.ts`:

```ts
import { Observable } from 'rxjs';
import { AttendanceRecord, AttendanceUpdate } from '../../interfaces/IAttendance';

export abstract class AttendanceDataSource {
  abstract getAll(): Observable<AttendanceRecord[]>;
  abstract upsert(record: AttendanceUpdate): Observable<void>;
}
```

- [ ] **Step 2: Failing test**

Maak `src/app/services/data-sources/attendance-data-source.sheets.spec.ts`:

```ts
import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsAttendanceDataSource } from './attendance-data-source.sheets';

describe('SheetsAttendanceDataSource', () => {
  let dataSource: SheetsAttendanceDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService',
      ['getSheetData', 'appendSheetRow', 'updateSheetRow']);
    TestBed.configureTestingModule({
      providers: [
        SheetsAttendanceDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsAttendanceDataSource);
  });

  it('getAll mapt rauwe rijen naar AttendanceRecord en trimt namen', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Datum', 'Speler', 'Status'],
      ['2026-09-15', 'Bob ', 'Ja'],
      ['2026-09-15', 'Alice', 'Nee'],
    ]));

    const records = await lastValueFrom(dataSource.getAll());

    expect(records.length).toBe(2);
    expect(records[0].playerName).toBe('Bob');
    expect(records[0].status).toBe('Ja');
  });

  it('upsert appendt een nieuwe rij wanneer record nog niet bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([['Datum', 'Speler', 'Status']]));
    sheets.appendSheetRow.and.returnValue(of({ updates: { updatedRows: 1 } } as any));

    await lastValueFrom(dataSource.upsert({ date: '2026-09-15', playerName: 'Bob', status: 'Ja' }));

    expect(sheets.appendSheetRow).toHaveBeenCalledWith('Aanwezigheid', ['2026-09-15', 'Bob', 'Ja']);
    expect(sheets.updateSheetRow).not.toHaveBeenCalled();
  });

  it('upsert update bestaande rij wanneer (datum, naam) al bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Datum', 'Speler', 'Status'],
      ['2026-09-15', 'Bob', 'Ja'],
    ]));
    sheets.updateSheetRow.and.returnValue(of({ updatedRows: 1 } as any));

    await lastValueFrom(dataSource.upsert({ date: '2026-09-15', playerName: 'Bob', status: 'Nee' }));

    // Bob is array-index 1, dus sheet-rij 2
    expect(sheets.updateSheetRow).toHaveBeenCalledWith('Aanwezigheid', 2, ['2026-09-15', 'Bob', 'Nee']);
    expect(sheets.appendSheetRow).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 3: Run om te falen**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/attendance-data-source.sheets.spec.ts' 2>&1 | tail -20
```

Expected: failure — adapter bestaat niet.

- [ ] **Step 4: Sheets-adapter implementeren**

Maak `src/app/services/data-sources/attendance-data-source.sheets.ts`:

```ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import {
  AttendanceRecord,
  AttendanceStatus,
  AttendanceUpdate,
} from '../../interfaces/IAttendance';
import { AANWEZIGHEID_COLUMNS, SHEET_NAMES } from '../../constants/sheet-columns';
import { AttendanceDataSource } from './attendance-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsAttendanceDataSource extends AttendanceDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAll(): Observable<AttendanceRecord[]> {
    return this.sheets.getSheetData(SHEET_NAMES.AANWEZIGHEID).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  upsert(record: AttendanceUpdate): Observable<void> {
    const date = record.date.trim();
    const name = record.playerName.trim();
    const rowData = [date, name, record.status];

    return this.sheets.getSheetData(SHEET_NAMES.AANWEZIGHEID).pipe(
      switchMap(rows => {
        let foundIndex = -1;
        for (let i = 1; i < rows.length; i++) {
          const r = rows[i];
          const rDate = (r?.[AANWEZIGHEID_COLUMNS.DATE] ?? '').toString().trim();
          const rName = (r?.[AANWEZIGHEID_COLUMNS.PLAYER_NAME] ?? '').toString().trim();
          if (rDate === date && rName === name) {
            foundIndex = i;
            break;
          }
        }
        if (foundIndex >= 0) {
          const sheetRow = foundIndex + 1; // 1-based
          return this.sheets.updateSheetRow(SHEET_NAMES.AANWEZIGHEID, sheetRow, rowData)
            .pipe(map(() => undefined));
        }
        return this.sheets.appendSheetRow(SHEET_NAMES.AANWEZIGHEID, rowData)
          .pipe(map(() => undefined));
      }),
    );
  }

  private transformRows(rawData: any[][]): AttendanceRecord[] {
    if (!rawData || rawData.length <= 1) return [];
    return rawData
      .slice(1)
      .filter(row =>
        row && row.length >= 3
        && row[AANWEZIGHEID_COLUMNS.DATE]
        && row[AANWEZIGHEID_COLUMNS.PLAYER_NAME]
        && row[AANWEZIGHEID_COLUMNS.STATUS])
      .map(row => ({
        date: row[AANWEZIGHEID_COLUMNS.DATE].toString().trim(),
        playerName: row[AANWEZIGHEID_COLUMNS.PLAYER_NAME].toString().trim(),
        status: row[AANWEZIGHEID_COLUMNS.STATUS] as AttendanceStatus,
        timestamp: row[AANWEZIGHEID_COLUMNS.TIMESTAMP]
          ? row[AANWEZIGHEID_COLUMNS.TIMESTAMP].toString()
          : undefined,
      }));
  }
}
```

- [ ] **Step 5: Barrel-export**

Voeg toe aan `src/app/services/data-sources/index.ts`:

```ts
export * from './attendance-data-source';
export * from './attendance-data-source.sheets';
```

- [ ] **Step 6: Provider registreren**

In `src/app/app.module.ts`, imports:

```ts
import { AttendanceDataSource } from './services/data-sources/attendance-data-source';
import { SheetsAttendanceDataSource } from './services/data-sources/attendance-data-source.sheets';
```

In `providers`:

```ts
{ provide: AttendanceDataSource, useClass: SheetsAttendanceDataSource },
```

- [ ] **Step 7: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/attendance-data-source.sheets.spec.ts' 2>&1 | tail -20
```

Expected: alle 3 tests pass.

- [ ] **Step 8: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 9: Commit**

```bash
git add src/app/services/data-sources/ src/app/app.module.ts
git commit -m "AttendanceDataSource: abstract class + Sheets-adapter + provider."
```

---

### Task 8: AttendanceService porten naar AttendanceDataSource

**Files:**
- Modify: `src/app/services/attendance.service.ts`
- Modify: `src/app/services/attendance.service.spec.ts`

- [ ] **Step 1: AttendanceService herschrijven**

Vervang `src/app/services/attendance.service.ts` door:

```ts
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap, catchError, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { formatDateISO, getCurrentDateISO } from '../utils/date-utils';
import {
  AttendanceRecord,
  AttendanceStatus,
  MatchAttendanceOverview,
  MatchAttendanceDetails,
  MatchAttendanceDetailsWithPlayerStatus,
  AttendanceFilter,
  AttendanceUpdate,
  AttendancePlayerInfo
} from '../interfaces/IAttendance';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { AttendanceDataSource } from './data-sources/attendance-data-source';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendanceCache$ = new BehaviorSubject<AttendanceRecord[] | null>(null);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 2 * 60 * 1000;

  constructor(
    private dataSource: AttendanceDataSource,
    private playerService: PlayerService
  ) {}

  getAttendanceRecords(filter?: AttendanceFilter): Observable<AttendanceRecord[]> {
    return this.getCachedAttendance().pipe(
      map(records => this.applyFilter(records, filter))
    );
  }

  getAttendanceForDate(date: string): Observable<AttendanceRecord[]> {
    return this.getAttendanceRecords({ date });
  }

  getAttendanceForPlayer(playerName: string): Observable<AttendanceRecord[]> {
    return this.getAttendanceRecords({ playerName });
  }

  getMatchAttendanceOverviews(filter?: AttendanceFilter): Observable<MatchAttendanceOverview[]> {
    return this.getAttendanceRecords(filter).pipe(
      map(records => {
        const dateGroups = this.groupByDate(records);
        return Object.entries(dateGroups).map(([date, dateRecords]) => ({
          date,
          presentCount: dateRecords.filter(r => r.status === 'Ja').length,
          absentCount: dateRecords.filter(r => r.status === 'Nee').length,
          totalResponses: dateRecords.length
        })).sort((a, b) => a.date.localeCompare(b.date));
      })
    );
  }

  getMatchAttendanceDetails(date: string): Observable<MatchAttendanceDetails> {
    return combineLatest([
      this.getAttendanceForDate(date),
      this.playerService.getPlayers()
    ]).pipe(
      map(([attendanceRecords, allPlayers]) => {
        const attendanceMap = new Map<string, AttendanceRecord>();
        attendanceRecords.forEach(record => {
          attendanceMap.set(record.playerName, record);
        });
        const present: AttendancePlayerInfo[] = [];
        const absent: AttendancePlayerInfo[] = [];
        const noResponse: AttendancePlayerInfo[] = [];
        const categorizePlayer = (playerInfo: AttendancePlayerInfo) => {
          switch (playerInfo.status) {
            case 'Ja': present.push(playerInfo); break;
            case 'Nee': absent.push(playerInfo); break;
            case 'Geen Reactie': noResponse.push(playerInfo); break;
          }
        };
        allPlayers.forEach((player: PlayerSheetData) => {
          const attendance = attendanceMap.get(player.name);
          const playerInfo: AttendancePlayerInfo = {
            name: player.name,
            position: player.position,
            status: attendance?.status || (player.actief ? 'Geen Reactie' : undefined),
            playerData: player
          };
          if (playerInfo.status) {
            categorizePlayer(playerInfo);
          }
        });
        attendanceRecords.forEach(record => {
          const playerExists = allPlayers.some(p => p.name === record.playerName);
          if (!playerExists) {
            const playerInfo: AttendancePlayerInfo = {
              name: record.playerName,
              position: '',
              status: record.status,
              playerData: {
                name: record.playerName,
                position: '',
                actief: false,
              } as PlayerSheetData,
            };
            categorizePlayer(playerInfo);
          }
        });
        const sortByName = (a: AttendancePlayerInfo, b: AttendancePlayerInfo) =>
          a.name.localeCompare(b.name);
        return {
          date,
          present: present.sort(sortByName),
          absent: absent.sort(sortByName),
          noResponse: noResponse.sort(sortByName)
        };
      })
    );
  }

  getPlayerAttendanceStatus(playerName: string, date: string): Observable<AttendanceStatus | null> {
    return this.getAttendanceRecords({ playerName: playerName.trim(), date }).pipe(
      map(records => records.length > 0 ? records[0].status : null)
    );
  }

  getMatchAttendanceDetailsWithPlayerStatus(date: string, playerName?: string): Observable<MatchAttendanceDetailsWithPlayerStatus> {
    const normalizedName = playerName?.trim();
    return this.getMatchAttendanceDetails(date).pipe(
      map(details => {
        let playerStatus: AttendanceStatus | null = null;
        if (normalizedName) {
          const allPlayers = [...details.present, ...details.absent, ...details.noResponse];
          const player = allPlayers.find(p => p.name.trim() === normalizedName);
          playerStatus = player?.status || null;
        }
        return { ...details, playerStatus };
      })
    );
  }

  getPresentPlayers(date: string): Observable<AttendancePlayerInfo[]> {
    return this.getMatchAttendanceDetails(date).pipe(
      map(details => details.present)
    );
  }

  setAttendance(update: AttendanceUpdate): Observable<void> {
    const normalizedName = update.playerName.trim();
    const normalizedDate = update.date.trim();
    return this.getAttendanceRecords().pipe(
      switchMap(records => {
        return this.dataSource.upsert({
          date: normalizedDate,
          playerName: normalizedName,
          status: update.status,
        }).pipe(
          tap(() => {
            const existingIndex = records.findIndex(r =>
              r.date === normalizedDate && r.playerName === normalizedName
            );
            const updatedRecords = [...records];
            const newRecord: AttendanceRecord = {
              date: normalizedDate,
              playerName: normalizedName,
              status: update.status,
            };
            if (existingIndex >= 0) {
              updatedRecords[existingIndex] = newRecord;
            } else {
              updatedRecords.push(newRecord);
            }
            this.attendanceCache$.next(updatedRecords);
          })
        );
      })
    );
  }

  getPlayersWithoutResponse(date: string): Observable<AttendancePlayerInfo[]> {
    return this.getMatchAttendanceDetails(date).pipe(
      map(details => details.noResponse)
    );
  }

  refreshCache(): Observable<AttendanceRecord[]> {
    this.attendanceCache$.next(null);
    this.cacheTimestamp = 0;
    return this.getCachedAttendance();
  }

  private getCachedAttendance(): Observable<AttendanceRecord[]> {
    const now = Date.now();
    const cachedData = this.attendanceCache$.value;
    if (cachedData && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return of(cachedData);
    }
    return this.dataSource.getAll().pipe(
      tap(attendance => {
        this.attendanceCache$.next(attendance);
        this.cacheTimestamp = now;
      }),
      shareReplay(1),
      catchError(error => {
        console.error('Error loading attendance data:', error);
        return of([]);
      })
    );
  }

  private applyFilter(records: AttendanceRecord[], filter?: AttendanceFilter): AttendanceRecord[] {
    if (!filter) return records;
    return records.filter(record => {
      if (filter.date && record.date !== filter.date) return false;
      if (filter.fromDate && record.date < filter.fromDate) return false;
      if (filter.toDate && record.date > filter.toDate) return false;
      if (filter.futureOnly) {
        const today = getCurrentDateISO();
        if (record.date <= today) return false;
      }
      if (filter.playerName && record.playerName !== filter.playerName.trim()) return false;
      if (filter.status && record.status !== filter.status) return false;
      return true;
    });
  }

  private groupByDate(records: AttendanceRecord[]): { [date: string]: AttendanceRecord[] } {
    return records.reduce((groups, record) => {
      if (!groups[record.date]) groups[record.date] = [];
      groups[record.date].push(record);
      return groups;
    }, {} as { [date: string]: AttendanceRecord[] });
  }

  formatDate(date: Date): string {
    return formatDateISO(date);
  }
}
```

Wijzigingen: `GoogleSheetsService`, `finalize`, `AANWEZIGHEID_COLUMNS` zijn weg. `parseAttendanceData` is weg (verhuisd). `setAttendance` delegeert nu naar `dataSource.upsert`; cache-update logica blijft hier.

- [ ] **Step 2: Spec aanpassen**

Vervang de TestBed-setup en mocks in `src/app/services/attendance.service.spec.ts`. Pas alleen het bovenste deel (imports + beforeEach) aan zodat we `AttendanceDataSource` mocken in plaats van `GoogleSheetsService`. Open het bestand en vervang de eerste ~50 regels (tot en met de `beforeEach`-end) door:

```ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AttendanceService } from './attendance.service';
import { AttendanceDataSource } from './data-sources/attendance-data-source';
import { PlayerService } from './player.service';
import { AttendanceRecord, AttendanceStatus } from '../interfaces/IAttendance';

describe('AttendanceService', () => {
  let service: AttendanceService;
  let mockDataSource: jasmine.SpyObj<AttendanceDataSource>;
  let mockPlayerService: jasmine.SpyObj<PlayerService>;

  const mockRecords: AttendanceRecord[] = [
    { date: '2025-08-30', playerName: 'John Doe', status: 'Ja' },
    { date: '2025-08-30', playerName: 'Jane Smith', status: 'Nee' },
    { date: '2025-08-30', playerName: 'Charlie Brown', status: 'Nee' },
    { date: '2025-09-06', playerName: 'John Doe', status: 'Nee' },
  ];

  const mockPlayers = [
    { name: 'John Doe', position: 'Speler', actief: true },
    { name: 'Jane Smith', position: 'Keeper', actief: true },
    { name: 'Charlie Brown', position: 'Speler', actief: true },
    { name: 'Alice Brown', position: 'Speler', actief: true },
  ];

  beforeEach(() => {
    mockDataSource = jasmine.createSpyObj('AttendanceDataSource', ['getAll', 'upsert']);
    mockPlayerService = jasmine.createSpyObj('PlayerService', ['getActivePlayers', 'getPlayers']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AttendanceService,
        { provide: AttendanceDataSource, useValue: mockDataSource },
        { provide: PlayerService, useValue: mockPlayerService },
      ],
    });

    service = TestBed.inject(AttendanceService);
    mockDataSource.getAll.and.returnValue(of(mockRecords));
    mockPlayerService.getActivePlayers.and.returnValue(of(mockPlayers));
    mockPlayerService.getPlayers.and.returnValue(of(mockPlayers));
  });
```

Laat de bestaande `it(...)`-blokken na de `beforeEach` staan, maar pas waar nodig de assertions aan: testen die `mockGoogleSheetsService.appendSheetRow` of `updateSheetRow` checkten worden vervangen door `mockDataSource.upsert`-checks. Specifiek:

- Voor elke `expect(mockGoogleSheetsService.appendSheetRow).toHaveBeenCalled...` of `updateSheetRow` → vervang door `expect(mockDataSource.upsert).toHaveBeenCalledWith({ date: ..., playerName: ..., status: ... })`.
- Returns waar `mockGoogleSheetsService.appendSheetRow.and.returnValue(of({ success: true }))` stond → `mockDataSource.upsert.and.returnValue(of(undefined))`.

Doe dit per test door het bestand. Het aantal en de functionele intent van de tests blijft hetzelfde.

- [ ] **Step 3: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/attendance.service.spec.ts' 2>&1 | tail -30
```

Expected: alle bestaande tests pass.

Als een test faalt vanwege impliciete dependencies op de oude SpyObj-vorm: pas alleen die ene test aan. Doel is dat de specs blijven testen wat ze testten, alleen via de nieuwe abstractie.

- [ ] **Step 4: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/attendance.service.ts src/app/services/attendance.service.spec.ts
git commit -m "AttendanceService: porten naar AttendanceDataSource."
```

---

### Task 9: Notification data-source — abstract + Sheets-adapter + tests + provider

**Files:**
- Create: `src/app/interfaces/IPushSubscription.ts`
- Create: `src/app/services/data-sources/notification-data-source.ts`
- Create: `src/app/services/data-sources/notification-data-source.sheets.ts`
- Create: `src/app/services/data-sources/notification-data-source.sheets.spec.ts`
- Modify: `src/app/services/data-sources/index.ts`
- Modify: `src/app/app.module.ts`

- [ ] **Step 1: Domein-type voor push subscription**

Maak `src/app/interfaces/IPushSubscription.ts`:

```ts
/**
 * Domein-representatie van een Web Push subscription, los van het browser-
 * `PushSubscription`-object. Mapt 1:1 op de kolommen in de Notificaties-sheet.
 */
export interface PushSubscriptionRecord {
  endpoint: string;
  keysP256dh: string;
  keysAuth: string;
  userAgent: string;
  timestamp: string;
  active: boolean;
  playerName: string;
}
```

- [ ] **Step 2: Abstract class**

Maak `src/app/services/data-sources/notification-data-source.ts`:

```ts
import { Observable } from 'rxjs';
import { PushSubscriptionRecord } from '../../interfaces/IPushSubscription';

export abstract class NotificationDataSource {
  abstract getAllSubscriptions(): Observable<PushSubscriptionRecord[]>;
  abstract addSubscription(record: PushSubscriptionRecord): Observable<void>;
  abstract deactivateSubscription(endpoint: string): Observable<void>;
}
```

- [ ] **Step 3: Failing test**

Maak `src/app/services/data-sources/notification-data-source.sheets.spec.ts`:

```ts
import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsNotificationDataSource } from './notification-data-source.sheets';

describe('SheetsNotificationDataSource', () => {
  let dataSource: SheetsNotificationDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService',
      ['getSheetData', 'appendSheetRow', 'updateSheetRow']);
    TestBed.configureTestingModule({
      providers: [
        SheetsNotificationDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsNotificationDataSource);
  });

  it('getAllSubscriptions mapt rijen naar PushSubscriptionRecord', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Endpoint', 'p256dh', 'auth', 'UA', 'Timestamp', 'Active', 'PlayerName'],
      ['https://push/1', 'p1', 'a1', 'Chrome', '2026-01-01', 'true', 'Bob'],
      ['https://push/2', 'p2', 'a2', 'Firefox', '2026-01-02', 'false', 'Alice'],
    ]));

    const subs = await lastValueFrom(dataSource.getAllSubscriptions());

    expect(subs.length).toBe(2);
    expect(subs[0].endpoint).toBe('https://push/1');
    expect(subs[0].active).toBeTrue();
    expect(subs[1].active).toBeFalse();
    expect(subs[1].playerName).toBe('Alice');
  });

  it('addSubscription appendt de juiste rij', async () => {
    sheets.appendSheetRow.and.returnValue(of({ updates: { updatedRows: 1 } } as any));

    await lastValueFrom(dataSource.addSubscription({
      endpoint: 'https://push/3', keysP256dh: 'p3', keysAuth: 'a3',
      userAgent: 'UA', timestamp: '2026-01-03', active: true, playerName: 'Carl',
    }));

    expect(sheets.appendSheetRow).toHaveBeenCalledWith('Notificaties',
      ['https://push/3', 'p3', 'a3', 'UA', '2026-01-03', true, 'Carl']);
  });

  it('deactivateSubscription zoekt rij op endpoint en zet active=false', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Endpoint', 'p256dh', 'auth', 'UA', 'Timestamp', 'Active', 'PlayerName'],
      ['https://push/1', 'p1', 'a1', 'Chrome', '2026-01-01', 'true', 'Bob'],
    ]));
    sheets.updateSheetRow.and.returnValue(of({ updatedRows: 1 } as any));

    await lastValueFrom(dataSource.deactivateSubscription('https://push/1'));

    // Bob is array-index 1, dus sheet-rij 2; active-kolom (index 5) op false
    expect(sheets.updateSheetRow).toHaveBeenCalled();
    const args = sheets.updateSheetRow.calls.mostRecent().args;
    expect(args[0]).toBe('Notificaties');
    expect(args[1]).toBe(2);
    expect(args[2][5]).toBeFalse();
  });

  it('deactivateSubscription doet niks als endpoint niet bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Endpoint', 'p256dh', 'auth', 'UA', 'Timestamp', 'Active', 'PlayerName'],
    ]));
    await lastValueFrom(dataSource.deactivateSubscription('https://nope'));
    expect(sheets.updateSheetRow).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 4: Run om te falen**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/notification-data-source.sheets.spec.ts' 2>&1 | tail -20
```

Expected: failure.

- [ ] **Step 5: Sheets-adapter implementeren**

Maak `src/app/services/data-sources/notification-data-source.sheets.ts`:

```ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import { NOTIFICATIES_COLUMNS, SHEET_NAMES } from '../../constants/sheet-columns';
import { PushSubscriptionRecord } from '../../interfaces/IPushSubscription';
import { NotificationDataSource } from './notification-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsNotificationDataSource extends NotificationDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAllSubscriptions(): Observable<PushSubscriptionRecord[]> {
    return this.sheets.getSheetData(SHEET_NAMES.NOTIFICATIES).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  addSubscription(record: PushSubscriptionRecord): Observable<void> {
    const row = [
      record.endpoint,
      record.keysP256dh,
      record.keysAuth,
      record.userAgent,
      record.timestamp,
      record.active,
      record.playerName,
    ];
    return this.sheets.appendSheetRow(SHEET_NAMES.NOTIFICATIES, row).pipe(map(() => undefined));
  }

  deactivateSubscription(endpoint: string): Observable<void> {
    return this.sheets.getSheetData(SHEET_NAMES.NOTIFICATIES).pipe(
      switchMap(rows => {
        let foundIndex = -1;
        for (let i = 1; i < rows.length; i++) {
          if (rows[i]?.[NOTIFICATIES_COLUMNS.ENDPOINT] === endpoint) {
            foundIndex = i;
            break;
          }
        }
        if (foundIndex === -1) {
          console.warn('Could not find subscription to deactivate:', endpoint);
          return of(undefined);
        }
        const sheetRow = foundIndex + 1;
        const original = rows[foundIndex];
        const updated = [...original];
        updated[NOTIFICATIES_COLUMNS.ACTIVE] = false;
        return this.sheets.updateSheetRow(SHEET_NAMES.NOTIFICATIES, sheetRow, updated)
          .pipe(map(() => undefined));
      }),
    );
  }

  private transformRows(rawData: any[][]): PushSubscriptionRecord[] {
    if (!rawData || rawData.length <= 1) return [];
    return rawData.slice(1)
      .filter(row => row && row[NOTIFICATIES_COLUMNS.ENDPOINT])
      .map(row => ({
        endpoint: row[NOTIFICATIES_COLUMNS.ENDPOINT],
        keysP256dh: row[NOTIFICATIES_COLUMNS.P256DH] ?? '',
        keysAuth: row[NOTIFICATIES_COLUMNS.AUTH] ?? '',
        userAgent: (row[NOTIFICATIES_COLUMNS.USER_AGENT] ?? '').toString(),
        timestamp: (row[NOTIFICATIES_COLUMNS.TIMESTAMP] ?? '').toString(),
        active: this.parseBoolean(row[NOTIFICATIES_COLUMNS.ACTIVE]),
        playerName: (row[NOTIFICATIES_COLUMNS.PLAYER_NAME] ?? '').toString().trim(),
      }));
  }

  private parseBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      return value === 'true' || value === 'TRUE';
    }
    return false;
  }
}
```

**Belangrijk:** check eerst in `src/app/constants/sheet-columns.ts` welke kolom-namen `NOTIFICATIES_COLUMNS` daadwerkelijk heeft (zoek `NOTIFICATIES_COLUMNS = `). Pas de property-namen `P256DH`, `AUTH`, `USER_AGENT` aan in bovenstaande code als ze in dat bestand anders heten. De kolom-volgorde in `addSubscription` moet matchen met de bestaande sheet-volgorde — die is af te leiden uit `notification.service.ts:178-186` (de huidige `row`-array).

- [ ] **Step 6: Barrel-export**

Voeg toe aan `src/app/services/data-sources/index.ts`:

```ts
export * from './notification-data-source';
export * from './notification-data-source.sheets';
```

- [ ] **Step 7: Provider registreren**

In `src/app/app.module.ts`, imports:

```ts
import { NotificationDataSource } from './services/data-sources/notification-data-source';
import { SheetsNotificationDataSource } from './services/data-sources/notification-data-source.sheets';
```

In `providers`:

```ts
{ provide: NotificationDataSource, useClass: SheetsNotificationDataSource },
```

- [ ] **Step 8: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/notification-data-source.sheets.spec.ts' 2>&1 | tail -20
```

Expected: alle 4 tests pass.

- [ ] **Step 9: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 10: Commit**

```bash
git add src/app/interfaces/IPushSubscription.ts src/app/services/data-sources/ src/app/app.module.ts
git commit -m "NotificationDataSource: abstract class + Sheets-adapter + provider."
```

---

### Task 10: NotificationService porten naar NotificationDataSource

**Files:**
- Modify: `src/app/services/notification.service.ts`

- [ ] **Step 1: NotificationService aanpassen**

Open `src/app/services/notification.service.ts`. Vervang:
- De import `import { GoogleSheetsService } from './google-sheets-service';`
  → `import { NotificationDataSource } from './data-sources/notification-data-source';`
  → `import { PushSubscriptionRecord } from '../interfaces/IPushSubscription';`
- De import van `NOTIFICATIES_COLUMNS, SHEET_NAMES` is na deze refactor niet meer nodig in dit bestand — verwijder.
- De constructor `constructor(private googleSheetsService: GoogleSheetsService)`
  → `constructor(private dataSource: NotificationDataSource)`

- [ ] **Step 2: `saveSubscriptionToServer` herschrijven**

Vervang het hele `saveSubscriptionToServer`-method door:

```ts
private async saveSubscriptionToServer(subscription: PushSubscription, playerName?: string): Promise<void> {
  try {
    const record: PushSubscriptionRecord = {
      endpoint: subscription.endpoint,
      keysP256dh: this.arrayBufferToBase64(subscription.getKey('p256dh')),
      keysAuth: this.arrayBufferToBase64(subscription.getKey('auth')),
      userAgent: navigator.userAgent,
      timestamp: getCurrentDateTimeISO(),
      active: true,
      playerName: (playerName || '').trim(),
    };

    console.log('💾 Saving subscription to server:', record);
    await firstValueFrom(this.dataSource.addSubscription(record));
    console.log('✅ Subscription saved successfully');
  } catch (error) {
    console.error('❌ Error saving subscription to server:', error);
    if (error instanceof TypeError) {
      console.error('Network error - check if backend is accessible');
    }
    throw error;
  }
}
```

- [ ] **Step 3: `removeSubscriptionFromServer` herschrijven**

Vervang het hele method door:

```ts
private async removeSubscriptionFromServer(subscription: PushSubscription): Promise<void> {
  try {
    console.log('🗑️ Removing subscription from server:', subscription.endpoint);
    await firstValueFrom(this.dataSource.deactivateSubscription(subscription.endpoint));
    console.log('✅ Subscription marked as inactive on server');
  } catch (error) {
    console.error('❌ Error removing subscription from server:', error);
    // Don't throw — local state already updated
  }
}
```

- [ ] **Step 4: `checkPlayerNotificationStatus` herschrijven**

Vervang het hele method door:

```ts
async checkPlayerNotificationStatus(playerName: string): Promise<boolean> {
  const normalizedPlayerName = playerName.trim();
  try {
    if (!this.isSupported$.value) {
      return false;
    }
    const registration = await navigator.serviceWorker.ready;
    const browserSubscription = await registration.pushManager.getSubscription();
    if (!browserSubscription) {
      console.log(`❌ No browser subscription found for ${normalizedPlayerName}`);
      return false;
    }
    const subs = await firstValueFrom(this.dataSource.getAllSubscriptions());
    const match = subs.find(s =>
      s.endpoint === browserSubscription.endpoint
      && s.active
      && s.playerName === normalizedPlayerName
    );
    if (match) {
      console.log(`✅ Found active notification subscription for ${normalizedPlayerName}`);
      return true;
    }
    console.log(`❌ No active subscription found for ${normalizedPlayerName}`);
    return false;
  } catch (error) {
    console.error('Error checking player notification status:', error);
    return false;
  }
}
```

- [ ] **Step 5: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 6: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -15
```

Expected: alle tests pass. (`NotificationService` heeft geen eigen spec; we vertrouwen op de adapter-tests voor de schrijf-paden.)

- [ ] **Step 7: Commit**

```bash
git add src/app/services/notification.service.ts
git commit -m "NotificationService: porten naar NotificationDataSource."
```

---

### Task 11: Dood DI verwijderen uit `team-generate.service.ts` en `kalender.component.ts`

**Files:**
- Modify: `src/app/services/team-generate.service.ts`
- Modify: `src/app/components/kalender/kalender.component.ts`

- [ ] **Step 1: `team-generate.service.ts` opschonen**

Open `src/app/services/team-generate.service.ts`. Verwijder de import:

```ts
import { GoogleSheetsService } from './google-sheets-service';
```

En haal `private googleSheetsService: GoogleSheetsService` uit de constructor-parameters. De rest van de constructor en service-body blijft ongewijzigd.

- [ ] **Step 2: `kalender.component.ts` opschonen**

Open `src/app/components/kalender/kalender.component.ts`. Verwijder de import:

```ts
import { GoogleSheetsService } from '../../services/google-sheets-service';
```

En haal `private googleSheetsService: GoogleSheetsService` uit de constructor-parameters.

- [ ] **Step 3: Build-check**

Run:
```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 4: Tests draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -15
```

Expected: alle tests pass.

- [ ] **Step 5: Verifieer dat `GoogleSheetsService` alleen nog adapter-consumers heeft**

Run:
```bash
grep -rn "GoogleSheetsService" src/app | grep -v ".spec.ts" | grep -v "google-sheets-service.ts" | grep -v "data-sources/"
```

Expected: geen output. Als wel: er is nog een dwaal-consument; maak die ook leeg.

- [ ] **Step 6: Commit**

```bash
git add src/app/services/team-generate.service.ts src/app/components/kalender/kalender.component.ts
git commit -m "Dood DI op GoogleSheetsService verwijderen."
```

---

### Task 12: Hand-rooktest in dev-server en final verificatie

**Files:** geen.

- [ ] **Step 1: Volledige test-suite draaien**

Run:
```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -20
```

Expected: alle suites pass.

- [ ] **Step 2: Production-build**

Run:
```bash
npx ng build --configuration production 2>&1 | tail -15
```

Expected: build succeeds, geen type-errors.

- [ ] **Step 3: Dev-server starten**

Run (in achtergrond of aparte terminal):
```bash
npx ng serve
```

Open http://localhost:4200.

- [ ] **Step 4: Klikpad doorlopen**

Verifieer handmatig:
- [ ] Klassement laadt en toont spelers met stats.
- [ ] Kalender toont upcoming wedstrijden.
- [ ] Aanwezigheid: een speler op aanwezig/afwezig zetten en refreshen — status blijft.
- [ ] Wedstrijden-overzicht toont gespeelde wedstrijden incl. uitslag.
- [ ] Score-invoer (admin): score aanpassen en opslaan, daarna terug naar overzicht — score is bijgewerkt.
- [ ] Team-generator: teams genereren werkt; opslaan van uitslag werkt.
- [ ] Notificaties (indien praktisch): aanvragen + deactiveren werkt.

Een functionele regressie betekent dat de adapter of service-port een bug heeft. Spotcheck de gewijzigde files; meestal is het de mapping (kolom-volgorde) of een argument-volgorde in `dataSource.upsert/add/update`.

- [ ] **Step 5: Push naar remote**

Run:
```bash
git push
```

---

## Acceptance verification

Loop door de criteria uit de spec:

- [ ] Vier abstract classes onder `src/app/services/data-sources/` — Tasks 1, 3, 7, 9.
- [ ] Vier `Sheets…DataSource`-implementaties — idem.
- [ ] Vier domeinservices injecteren de abstract class — Tasks 2, 4, 8, 10.
- [ ] `score.component` en `team-generator.component` gebruiken `WedstrijdenService.updateScore` — Tasks 5, 6.
- [ ] `team-generate.service.ts` en `kalender.component.ts` injecteren `GoogleSheetsService` niet meer — Task 11.
- [ ] `app.module.ts` koppelt elk abstract class aan z'n Sheets-implementatie — Tasks 1, 3, 7, 9.
- [ ] `npm test` draait groen — Task 12 Step 1.
- [ ] `ng build --configuration production` slaagt — Task 12 Step 2.
- [ ] Handmatige rooktest groen — Task 12 Step 4.
- [ ] `GoogleSheetsService` heeft alleen nog adapters als consumenten — Task 11 Step 5.
