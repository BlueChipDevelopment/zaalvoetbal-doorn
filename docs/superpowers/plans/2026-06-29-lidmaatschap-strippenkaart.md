# Lidmaatschap & strippenkaart — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Per speler abonnement (per seizoen) en/of strippenkaart bijhouden, met automatische strip-aftrek bij score-invoeren en volledige handmatige bijstelbaarheid.

**Architecture:** Drie schema-toevoegingen (`players.uses_strippenkaart`, `season_subscriptions`, `strip_transactions`). Een nieuwe `StrippenkaartDataSource` (abstractie + Supabase-impl) levert het mutatie-logboek, abonnementen en de idempotente aftrek; een `StrippenkaartService` aggregeert saldo's client-side. `WedstrijdenService.updateScore` triggert de aftrek na een geslaagde score-write. Beheer via een aparte Lidmaatschap-dialog; saldo read-only op het spelersprofiel.

**Tech Stack:** Angular 18, Supabase (Postgres) via supabase-js, Angular Material, RxJS, Jasmine/Karma.

## Global Constraints

- Beveiliging blijft **client-side** (geen RLS/triggers/RPC-afdwinging).
- Strippen-saldo = **som** van `strip_transactions.amount`; saldo mag **negatief** zijn ("strippen op").
- Auto-aftrek is **idempotent** via delete-then-insert van `reason='wedstrijd'`-regels per wedstrijd; handmatige regels hebben `match_id = null` en blijven ongemoeid.
- Aftrek-eligibility: `uses_strippenkaart = true` **én** geen `season_subscriptions`-rij voor `(player_id, match.season)`.
- Abonnement geldt **per seizoen**; strippen lopen **door** over seizoenen.
- Alle data-toegang via de data-source-abstracties; geen `SupabaseClient` rechtstreeks in componenten/domeinservices.
- Mutaties (writes) gebruiken **geen** `takeUntilDestroyed`.
- Reason-waarden: `'wedstrijd'`, `'kaart gekocht'`, `'correctie'`.
- Volg bestaande Material-/codeconventies.

---

## File Structure

- Create: `supabase/migrations/20260629140000_add_lidmaatschap_strippenkaart.sql`
- Modify: `src/app/types/database.types.ts` (hergenereren)
- Modify: `src/app/interfaces/IPlayerSheet.ts` (`usesStrippenkaart?`)
- Create: `src/app/interfaces/IStrippenkaart.ts` (DTO's)
- Modify: `src/app/services/data-sources/player-data-source.supabase.ts` + `.spec.ts`
- Create: `src/app/services/data-sources/strippenkaart-data-source.ts` (abstract)
- Create: `src/app/services/data-sources/strippenkaart-data-source.supabase.ts` + `.spec.ts`
- Modify: `src/app/app.module.ts` (provider)
- Create: `src/app/services/strippenkaart.service.ts` + `.spec.ts`
- Modify: `src/app/services/wedstrijden.service.ts` + `.spec.ts`
- Create: `src/app/components/admin/admin-spelers/lidmaatschap-dialog/lidmaatschap-dialog.component.ts` + `.html` + `.scss`
- Modify: `src/app/components/admin/admin.module.ts` (declare dialog)
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.ts` + `.html` (actie + statuskolom)
- Modify: `src/app/components/speler-profiel/speler-profiel.component.ts` + `.html` (read-only weergave)

---

### Task 1: DB-migratie + types hergenereren

**Files:**
- Create: `supabase/migrations/20260629140000_add_lidmaatschap_strippenkaart.sql`
- Modify: `src/app/types/database.types.ts`

**Interfaces:**
- Produces: `players.uses_strippenkaart boolean`; tabellen `season_subscriptions(id, player_id, season, created_at)` en `strip_transactions(id, player_id, match_id, amount, reason, created_at)`.

- [ ] **Step 1: Schrijf de migratie**

`supabase/migrations/20260629140000_add_lidmaatschap_strippenkaart.sql`:

```sql
-- Lidmaatschap & strippenkaart. Zie spec 2026-06-29-lidmaatschap-strippenkaart-design.md.

ALTER TABLE players ADD COLUMN IF NOT EXISTS uses_strippenkaart boolean NOT NULL DEFAULT false;

CREATE TABLE IF NOT EXISTS season_subscriptions (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id bigint NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  season text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (player_id, season)
);

CREATE TABLE IF NOT EXISTS strip_transactions (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  player_id bigint NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  match_id bigint REFERENCES matches(id) ON DELETE CASCADE,
  amount int NOT NULL,
  reason text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS strip_transactions_player_id_idx ON strip_transactions (player_id);
CREATE INDEX IF NOT EXISTS strip_transactions_match_id_idx ON strip_transactions (match_id);
```

- [ ] **Step 2: Pas toe op het gelinkte project**

Run: `npx supabase db push --yes`
Expected: migratie toegepast zonder fouten.

- [ ] **Step 3: Hergenereer de types**

Run: `npx supabase gen types typescript --linked > src/app/types/database.types.ts`
Expected: `players` heeft `uses_strippenkaart: boolean`; nieuwe blokken `season_subscriptions` en `strip_transactions` aanwezig.

- [ ] **Step 4: Commit**

```bash
git add supabase/migrations/20260629140000_add_lidmaatschap_strippenkaart.sql src/app/types/database.types.ts
git commit -m "DB: uses_strippenkaart + season_subscriptions + strip_transactions"
```

---

### Task 2: PlayerSheetData + PlayerDataSource `uses_strippenkaart`

**Files:**
- Modify: `src/app/interfaces/IPlayerSheet.ts`
- Modify: `src/app/services/data-sources/player-data-source.supabase.ts`
- Test: `src/app/services/data-sources/player-data-source.supabase.spec.ts`

**Interfaces:**
- Produces: `PlayerSheetData.usesStrippenkaart?: boolean`; `getAll` levert het; `add`/`update` schrijven `uses_strippenkaart`.

- [ ] **Step 1: Voeg het veld toe aan de DTO**

In `IPlayerSheet.ts`, binnen `interface PlayerSheetData`, na `isAdmin?: boolean;`:

```typescript
  /** Staat deze speler op de strippenkaart? Afwezig = nee. */
  usesStrippenkaart?: boolean;
```

- [ ] **Step 2: Pas de spec aan (failing)**

In `player-data-source.supabase.spec.ts`, breid de `getAll`-test uit zodat rows `uses_strippenkaart` bevatten en de mapping `usesStrippenkaart` teruggeeft. Vervang de getAll-test door:

```typescript
  it('getAll mapt rows van players-tabel naar PlayerSheetData', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: [
      { id: 1, name: 'Alice', position: 'Speler', actief: true, email: 'alice@x.nl', is_admin: true, uses_strippenkaart: true, created_at: '...' },
      { id: 2, name: 'Bob', position: 'Keeper', actief: false, email: null, is_admin: false, uses_strippenkaart: false, created_at: '...' },
    ], error: null }).then(resolve);

    const players = await lastValueFrom(dataSource.getAll());

    expect(mockClient.from).toHaveBeenCalledWith('players');
    expect(players).toEqual([
      { id: 1, name: 'Alice', position: 'Speler', actief: true, email: 'alice@x.nl', isAdmin: true, usesStrippenkaart: true },
      { id: 2, name: 'Bob', position: 'Keeper', actief: false, email: undefined, isAdmin: false, usesStrippenkaart: false },
    ]);
  });
```

En breid de `add`-test uit zodat de insert `uses_strippenkaart` bevat:

```typescript
  it('add insert een rij in players', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.add({ name: 'Carl', position: 'Speler', actief: true, email: 'Carl@X.nl', isAdmin: true, usesStrippenkaart: true }));

    expect(queryBuilder.insert).toHaveBeenCalledWith({
      name: 'Carl',
      position: 'Speler',
      actief: true,
      email: 'carl@x.nl',
      is_admin: true,
      uses_strippenkaart: true,
    });
  });
```

En de `update by id`-test:

```typescript
  it('update by id update de bijbehorende rij', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.update(5, { name: 'Updated', position: 'Keeper', actief: false }));

    expect(queryBuilder.update).toHaveBeenCalledWith({
      name: 'Updated',
      position: 'Keeper',
      actief: false,
      email: null,
      is_admin: false,
      uses_strippenkaart: false,
    });
    expect(queryBuilder.eq).toHaveBeenCalledWith('id', 5);
  });
```

- [ ] **Step 3: Run de spec om falen te bevestigen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-data-source.supabase.spec.ts'`
Expected: FAIL op de payload/mapping-asserties.

- [ ] **Step 4: Implementeer in de Supabase-adapter**

In `player-data-source.supabase.ts`:

In `getAll`, breid de select uit en map het veld:
```typescript
        .select('id, name, position, actief, email, is_admin, uses_strippenkaart')
```
en in de map-callback voeg toe na `isAdmin: row.is_admin ?? false,`:
```typescript
          usesStrippenkaart: row.uses_strippenkaart ?? false,
```

In `add`, voeg toe aan het insert-object na `is_admin: player.isAdmin ?? false,`:
```typescript
        uses_strippenkaart: player.usesStrippenkaart ?? false,
```

In `update` (binnen `updateById`), voeg toe aan het update-object na `is_admin: player.isAdmin ?? false,`:
```typescript
          uses_strippenkaart: player.usesStrippenkaart ?? false,
```

- [ ] **Step 5: Run de spec om te slagen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-data-source.supabase.spec.ts'`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app/interfaces/IPlayerSheet.ts src/app/services/data-sources/player-data-source.supabase.ts src/app/services/data-sources/player-data-source.supabase.spec.ts
git commit -m "PlayerDataSource: uses_strippenkaart read-write"
```

---

### Task 3: StrippenkaartDataSource — logboek + abonnementen

**Files:**
- Create: `src/app/interfaces/IStrippenkaart.ts`
- Create: `src/app/services/data-sources/strippenkaart-data-source.ts`
- Create: `src/app/services/data-sources/strippenkaart-data-source.supabase.ts`
- Test: `src/app/services/data-sources/strippenkaart-data-source.supabase.spec.ts`
- Modify: `src/app/app.module.ts`

**Interfaces:**
- Produces:
  - `StripTransaction { id?: number; playerId: number; matchId: number | null; amount: number; reason: string; createdAt?: string }`
  - `abstract StrippenkaartDataSource` met `getAllTransactions(): Observable<StripTransaction[]>`, `addTransaction(playerId: number, amount: number, reason: string): Observable<void>`, `getSubscriptions(season: string): Observable<number[]>`, `setSubscription(playerId: number, season: string, on: boolean): Observable<void>`, `applyMatchDeductions(matchId: number): Observable<void>` (laatste in Task 4).

- [ ] **Step 1: Maak de DTO's**

`src/app/interfaces/IStrippenkaart.ts`:
```typescript
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
```

- [ ] **Step 2: Maak de abstracte data-source**

`src/app/services/data-sources/strippenkaart-data-source.ts`:
```typescript
import { Observable } from 'rxjs';
import { StripTransaction } from '../../interfaces/IStrippenkaart';

export abstract class StrippenkaartDataSource {
  /** Alle strip-mutaties (voor client-side saldo-aggregatie). */
  abstract getAllTransactions(): Observable<StripTransaction[]>;
  /** Voegt een handmatige mutatie toe (match_id null). */
  abstract addTransaction(playerId: number, amount: number, reason: string): Observable<void>;
  /** player_ids met een abonnement voor het gegeven seizoen. */
  abstract getSubscriptions(season: string): Observable<number[]>;
  /** Zet abonnement voor (player, season) aan of uit. */
  abstract setSubscription(playerId: number, season: string, on: boolean): Observable<void>;
  /** Idempotente strip-aftrek voor een gespeelde wedstrijd. */
  abstract applyMatchDeductions(matchId: number): Observable<void>;
}
```

- [ ] **Step 3: Schrijf de spec (failing)**

`src/app/services/data-sources/strippenkaart-data-source.supabase.spec.ts`:
```typescript
import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabaseStrippenkaartDataSource } from './strippenkaart-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

describe('SupabaseStrippenkaartDataSource', () => {
  let dataSource: SupabaseStrippenkaartDataSource;
  let queryBuilder: any;
  let mockClient: any;

  beforeEach(() => {
    queryBuilder = {
      select: jasmine.createSpy('select').and.callFake(() => queryBuilder),
      insert: jasmine.createSpy('insert').and.callFake(() => queryBuilder),
      delete: jasmine.createSpy('delete').and.callFake(() => queryBuilder),
      eq: jasmine.createSpy('eq').and.callFake(() => queryBuilder),
      order: jasmine.createSpy('order').and.callFake(() => queryBuilder),
      then: undefined as any,
    };
    mockClient = { from: jasmine.createSpy('from').and.returnValue(queryBuilder) };
    TestBed.configureTestingModule({
      providers: [
        SupabaseStrippenkaartDataSource,
        { provide: SupabaseClientService, useValue: { client: mockClient } },
      ],
    });
    dataSource = TestBed.inject(SupabaseStrippenkaartDataSource);
  });

  it('getAllTransactions mapt rows naar StripTransaction', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: [
      { id: 1, player_id: 3, match_id: 7, amount: -1, reason: 'wedstrijd', created_at: 'a' },
      { id: 2, player_id: 3, match_id: null, amount: 10, reason: 'kaart gekocht', created_at: 'b' },
    ], error: null }).then(resolve);

    const txs = await lastValueFrom(dataSource.getAllTransactions());

    expect(mockClient.from).toHaveBeenCalledWith('strip_transactions');
    expect(txs).toEqual([
      { id: 1, playerId: 3, matchId: 7, amount: -1, reason: 'wedstrijd', createdAt: 'a' },
      { id: 2, playerId: 3, matchId: null, amount: 10, reason: 'kaart gekocht', createdAt: 'b' },
    ]);
  });

  it('addTransaction insert een rij met match_id null', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.addTransaction(3, 10, 'kaart gekocht'));

    expect(mockClient.from).toHaveBeenCalledWith('strip_transactions');
    expect(queryBuilder.insert).toHaveBeenCalledWith({
      player_id: 3, match_id: null, amount: 10, reason: 'kaart gekocht',
    });
  });

  it('getSubscriptions geeft player_ids voor een seizoen', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: [
      { player_id: 3 }, { player_id: 9 },
    ], error: null }).then(resolve);

    const ids = await lastValueFrom(dataSource.getSubscriptions('2024-2025'));

    expect(mockClient.from).toHaveBeenCalledWith('season_subscriptions');
    expect(queryBuilder.eq).toHaveBeenCalledWith('season', '2024-2025');
    expect(ids).toEqual([3, 9]);
  });

  it('setSubscription(on=true) inserts (player, season)', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.setSubscription(3, '2024-2025', true));

    expect(queryBuilder.insert).toHaveBeenCalledWith({ player_id: 3, season: '2024-2025' });
  });

  it('setSubscription(on=false) verwijdert (player, season)', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.setSubscription(3, '2024-2025', false));

    expect(queryBuilder.delete).toHaveBeenCalled();
    expect(queryBuilder.eq).toHaveBeenCalledWith('player_id', 3);
    expect(queryBuilder.eq).toHaveBeenCalledWith('season', '2024-2025');
  });
});
```

- [ ] **Step 4: Run de spec om falen te bevestigen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/strippenkaart-data-source.supabase.spec.ts'`
Expected: FAIL — klasse bestaat nog niet.

- [ ] **Step 5: Implementeer de Supabase-adapter (zonder applyMatchDeductions; die komt in Task 4)**

`src/app/services/data-sources/strippenkaart-data-source.supabase.ts`:
```typescript
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StripTransaction } from '../../interfaces/IStrippenkaart';
import { StrippenkaartDataSource } from './strippenkaart-data-source';
import { SupabaseClientService } from './supabase-client.service';

@Injectable({ providedIn: 'root' })
export class SupabaseStrippenkaartDataSource extends StrippenkaartDataSource {
  constructor(private supabase: SupabaseClientService) {
    super();
  }

  getAllTransactions(): Observable<StripTransaction[]> {
    return from(
      this.supabase.client
        .from('strip_transactions')
        .select('id, player_id, match_id, amount, reason, created_at')
        .order('created_at'),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          id: row.id,
          playerId: row.player_id,
          matchId: row.match_id ?? null,
          amount: row.amount,
          reason: row.reason,
          createdAt: row.created_at ?? undefined,
        } as StripTransaction));
      }),
    );
  }

  addTransaction(playerId: number, amount: number, reason: string): Observable<void> {
    return from(
      this.supabase.client.from('strip_transactions').insert({
        player_id: playerId, match_id: null, amount, reason,
      }),
    ).pipe(
      map(({ error }) => { if (error) throw error; return undefined; }),
    );
  }

  getSubscriptions(season: string): Observable<number[]> {
    return from(
      this.supabase.client.from('season_subscriptions').select('player_id').eq('season', season),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => row.player_id);
      }),
    );
  }

  setSubscription(playerId: number, season: string, on: boolean): Observable<void> {
    if (on) {
      return from(
        this.supabase.client.from('season_subscriptions').insert({ player_id: playerId, season }),
      ).pipe(map(({ error }) => { if (error) throw error; return undefined; }));
    }
    return from(
      this.supabase.client.from('season_subscriptions').delete().eq('player_id', playerId).eq('season', season),
    ).pipe(map(({ error }) => { if (error) throw error; return undefined; }));
  }

  applyMatchDeductions(_matchId: number): Observable<void> {
    // Geïmplementeerd in Task 4.
    return of(undefined);
  }
}
```

- [ ] **Step 6: Registreer de provider**

In `app.module.ts`: voeg de imports toe (bij de andere data-source-imports):
```typescript
import { StrippenkaartDataSource } from './services/data-sources/strippenkaart-data-source';
import { SupabaseStrippenkaartDataSource } from './services/data-sources/strippenkaart-data-source.supabase';
```
en in `providers`, na de `NotificationDataSource`-regel:
```typescript
    { provide: StrippenkaartDataSource, useClass: SupabaseStrippenkaartDataSource },
```

- [ ] **Step 7: Run de spec om te slagen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/strippenkaart-data-source.supabase.spec.ts'`
Expected: PASS (5 tests).

- [ ] **Step 8: Commit**

```bash
git add src/app/interfaces/IStrippenkaart.ts src/app/services/data-sources/strippenkaart-data-source.ts src/app/services/data-sources/strippenkaart-data-source.supabase.ts src/app/services/data-sources/strippenkaart-data-source.supabase.spec.ts src/app/app.module.ts
git commit -m "StrippenkaartDataSource: logboek + abonnementen + provider"
```

---

### Task 4: applyMatchDeductions (idempotente aftrek)

**Files:**
- Modify: `src/app/services/data-sources/strippenkaart-data-source.supabase.ts`
- Test: `src/app/services/data-sources/strippenkaart-data-source.supabase.spec.ts`

**Interfaces:**
- Consumes: tabellen `matches`, `match_lineups`, `players`, `season_subscriptions`, `strip_transactions`.
- Produces: `applyMatchDeductions(matchId)` doet delete-then-insert van `reason='wedstrijd'`-regels voor enkel eligible spelers.

- [ ] **Step 1: Voeg een table-aware mock + tests toe (failing)**

Voeg bovenaan `strippenkaart-data-source.supabase.spec.ts` een tweede `describe` toe met een mock die per tabel reageert (de aftrek raakt meerdere tabellen):

```typescript
import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabaseStrippenkaartDataSource } from './strippenkaart-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

/** Mock-client die per tabel/operatie een resultaat teruggeeft en inserts/deletes vastlegt. */
function makeDeductionClient(dataset: {
  matchSeason: string | null;
  lineup: number[];        // player_ids in de opstelling
  stripPlayers: number[];  // van lineup: uses_strippenkaart = true
  subscribed: number[];    // van stripPlayers: abonnement dat seizoen
}) {
  const inserted: any[] = [];
  const deletes: any[] = [];
  function builder(table: string) {
    const state: any = { table, op: 'select', filters: {} };
    const b: any = {
      select: () => { state.op = 'select'; return b; },
      insert: (rows: any) => { state.op = 'insert'; state.rows = rows; return b; },
      delete: () => { state.op = 'delete'; return b; },
      eq: (c: string, v: any) => { state.filters[c] = v; return b; },
      in: (c: string, v: any) => { state.filters[c + '__in'] = v; return b; },
      single: () => { state.single = true; return b; },
      then: (resolve: any) => Promise.resolve(result(state)).then(resolve),
    };
    return b;
  }
  function result(state: any) {
    if (state.table === 'matches') return { data: { season: dataset.matchSeason }, error: null };
    if (state.table === 'match_lineups') return { data: dataset.lineup.map(id => ({ player_id: id })), error: null };
    if (state.table === 'players') return { data: dataset.stripPlayers.map(id => ({ id })), error: null };
    if (state.table === 'season_subscriptions') return { data: dataset.subscribed.map(id => ({ player_id: id })), error: null };
    if (state.table === 'strip_transactions') {
      if (state.op === 'insert') { inserted.push(...state.rows); return { data: null, error: null }; }
      if (state.op === 'delete') { deletes.push(state.filters); return { data: null, error: null }; }
    }
    return { data: [], error: null };
  }
  return { client: { from: (t: string) => builder(t) }, inserted, deletes };
}

describe('SupabaseStrippenkaartDataSource.applyMatchDeductions', () => {
  function makeDataSource(mock: any) {
    TestBed.configureTestingModule({
      providers: [
        SupabaseStrippenkaartDataSource,
        { provide: SupabaseClientService, useValue: { client: mock.client } },
      ],
    });
    return TestBed.inject(SupabaseStrippenkaartDataSource);
  }

  it('schrijft -1 voor strippenkaart-spelers zonder abonnement; abonnement dekt', async () => {
    // lineup 1,2,3 — strippenkaart 2,3 — abonnement (dat seizoen) 3 -> alleen 2 krijgt -1
    const mock = makeDeductionClient({ matchSeason: '2024-2025', lineup: [1, 2, 3], stripPlayers: [2, 3], subscribed: [3] });
    const ds = makeDataSource(mock);

    await lastValueFrom(ds.applyMatchDeductions(7));

    expect(mock.deletes.length).toBe(1);            // bestaande wedstrijd-regels eerst verwijderd
    expect(mock.deletes[0]).toEqual({ match_id: 7, reason: 'wedstrijd' });
    expect(mock.inserted).toEqual([{ player_id: 2, match_id: 7, amount: -1, reason: 'wedstrijd' }]);
  });

  it('geen strippenkaart-spelers -> wel delete, geen insert', async () => {
    const mock = makeDeductionClient({ matchSeason: '2024-2025', lineup: [1, 2], stripPlayers: [], subscribed: [] });
    const ds = makeDataSource(mock);

    await lastValueFrom(ds.applyMatchDeductions(7));

    expect(mock.deletes.length).toBe(1);
    expect(mock.inserted).toEqual([]);
  });

  it('herhaald aanroepen blijft idempotent (delete dan insert)', async () => {
    const mock = makeDeductionClient({ matchSeason: '2024-2025', lineup: [2], stripPlayers: [2], subscribed: [] });
    const ds = makeDataSource(mock);

    await lastValueFrom(ds.applyMatchDeductions(7));
    await lastValueFrom(ds.applyMatchDeductions(7));

    expect(mock.deletes.length).toBe(2);                 // elke run verwijdert eerst
    expect(mock.inserted.filter(r => r.player_id === 2).length).toBe(2); // elke run één nieuwe regel na delete
  });
});
```

- [ ] **Step 2: Run om falen te bevestigen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/strippenkaart-data-source.supabase.spec.ts'`
Expected: FAIL — `applyMatchDeductions` is nog een no-op (`inserted`/`deletes` leeg).

- [ ] **Step 3: Implementeer applyMatchDeductions**

Vervang in `strippenkaart-data-source.supabase.ts` de no-op `applyMatchDeductions` door:
```typescript
  applyMatchDeductions(matchId: number): Observable<void> {
    return from(
      this.supabase.client.from('matches').select('season').eq('id', matchId).single(),
    ).pipe(
      switchMap(({ data: matchRow, error: matchErr }) => {
        if (matchErr) throw matchErr;
        const season: string | null = (matchRow as any)?.season ?? null;
        // 1. verwijder bestaande auto-regels voor deze wedstrijd
        return from(
          this.supabase.client.from('strip_transactions').delete().eq('match_id', matchId).eq('reason', 'wedstrijd'),
        ).pipe(
          switchMap(({ error: delErr }) => {
            if (delErr) throw delErr;
            // 2. lees de opstelling
            return from(
              this.supabase.client.from('match_lineups').select('player_id').eq('match_id', matchId),
            ).pipe(
              switchMap(({ data: lineup, error: luErr }) => {
                if (luErr) throw luErr;
                const playerIds = (lineup ?? []).map((r: any) => r.player_id);
                if (playerIds.length === 0) return of(undefined);
                // 3. strippenkaart-spelers binnen de opstelling
                return from(
                  this.supabase.client.from('players').select('id').in('id', playerIds).eq('uses_strippenkaart', true),
                ).pipe(
                  switchMap(({ data: stripRows, error: spErr }) => {
                    if (spErr) throw spErr;
                    const stripIds: number[] = (stripRows ?? []).map((r: any) => r.id);
                    if (stripIds.length === 0) return of(undefined);
                    // 4. abonnementen dat seizoen (binnen de strippenkaart-spelers)
                    const subs$ = season
                      ? from(this.supabase.client.from('season_subscriptions').select('player_id').eq('season', season).in('player_id', stripIds))
                      : of({ data: [] as any[], error: null });
                    return subs$.pipe(
                      switchMap((subsRes: any) => {
                        if (subsRes.error) throw subsRes.error;
                        const subscribed = new Set((subsRes.data ?? []).map((r: any) => r.player_id));
                        const eligible = stripIds.filter(id => !subscribed.has(id));
                        if (eligible.length === 0) return of(undefined);
                        const rows = eligible.map(id => ({ player_id: id, match_id: matchId, amount: -1, reason: 'wedstrijd' }));
                        return from(this.supabase.client.from('strip_transactions').insert(rows)).pipe(
                          map(({ error: insErr }) => { if (insErr) throw insErr; return undefined; }),
                        );
                      }),
                    );
                  }),
                );
              }),
            );
          }),
        );
      }),
    );
  }
```

- [ ] **Step 4: Run om te slagen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/strippenkaart-data-source.supabase.spec.ts'`
Expected: PASS (alle tests, incl. de 3 nieuwe).

- [ ] **Step 5: Commit**

```bash
git add src/app/services/data-sources/strippenkaart-data-source.supabase.ts src/app/services/data-sources/strippenkaart-data-source.supabase.spec.ts
git commit -m "Strippenkaart: idempotente applyMatchDeductions"
```

---

### Task 5: StrippenkaartService (saldo-aggregatie + acties)

**Files:**
- Create: `src/app/services/strippenkaart.service.ts`
- Test: `src/app/services/strippenkaart.service.spec.ts`

**Interfaces:**
- Consumes: `StrippenkaartDataSource`.
- Produces: `StrippenkaartService` met `getBalance(playerId: number): Observable<number>`, `getLedger(playerId: number): Observable<StripTransaction[]>`, `addStrips(playerId: number, amount: number): Observable<void>`, `correct(playerId: number, amount: number): Observable<void>`, `isSubscribed(playerId: number, season: string): Observable<boolean>`, `setSubscription(playerId: number, season: string, on: boolean): Observable<void>`, `refresh(): void`.

- [ ] **Step 1: Schrijf de spec (failing)**

`src/app/services/strippenkaart.service.spec.ts`:
```typescript
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { StrippenkaartService } from './strippenkaart.service';
import { StrippenkaartDataSource } from './data-sources/strippenkaart-data-source';
import { StripTransaction } from '../interfaces/IStrippenkaart';

describe('StrippenkaartService', () => {
  let service: StrippenkaartService;
  let ds: jasmine.SpyObj<StrippenkaartDataSource>;

  const txs: StripTransaction[] = [
    { id: 1, playerId: 3, matchId: 7, amount: -1, reason: 'wedstrijd' },
    { id: 2, playerId: 3, matchId: null, amount: 10, reason: 'kaart gekocht' },
    { id: 3, playerId: 5, matchId: 8, amount: -1, reason: 'wedstrijd' },
  ];

  beforeEach(() => {
    ds = jasmine.createSpyObj<StrippenkaartDataSource>('StrippenkaartDataSource',
      ['getAllTransactions', 'addTransaction', 'getSubscriptions', 'setSubscription', 'applyMatchDeductions']);
    ds.getAllTransactions.and.returnValue(of(txs));
    ds.addTransaction.and.returnValue(of(undefined));
    ds.getSubscriptions.and.returnValue(of([3]));
    ds.setSubscription.and.returnValue(of(undefined));
    TestBed.configureTestingModule({
      providers: [
        StrippenkaartService,
        { provide: StrippenkaartDataSource, useValue: ds },
      ],
    });
    service = TestBed.inject(StrippenkaartService);
  });

  it('getBalance sommeert mutaties van de speler', async () => {
    expect(await lastValueFrom(service.getBalance(3))).toBe(9);  // -1 + 10
    expect(await lastValueFrom(service.getBalance(5))).toBe(-1);
    expect(await lastValueFrom(service.getBalance(99))).toBe(0); // geen mutaties
  });

  it('getLedger geeft alleen de mutaties van de speler', async () => {
    const ledger = await lastValueFrom(service.getLedger(3));
    expect(ledger.map(t => t.id)).toEqual([1, 2]);
  });

  it('addStrips voegt een positieve "kaart gekocht"-mutatie toe', async () => {
    await lastValueFrom(service.addStrips(3, 10));
    expect(ds.addTransaction).toHaveBeenCalledWith(3, 10, 'kaart gekocht');
  });

  it('correct voegt een "correctie"-mutatie toe', async () => {
    await lastValueFrom(service.correct(3, -2));
    expect(ds.addTransaction).toHaveBeenCalledWith(3, -2, 'correctie');
  });

  it('isSubscribed checkt het seizoen', async () => {
    expect(await lastValueFrom(service.isSubscribed(3, '2024-2025'))).toBeTrue();
    expect(await lastValueFrom(service.isSubscribed(9, '2024-2025'))).toBeFalse();
  });
});
```

- [ ] **Step 2: Run om falen te bevestigen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/strippenkaart.service.spec.ts'`
Expected: FAIL — service bestaat nog niet.

- [ ] **Step 3: Implementeer de service**

`src/app/services/strippenkaart.service.ts`:
```typescript
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, switchMap, shareReplay } from 'rxjs/operators';
import { StrippenkaartDataSource } from './data-sources/strippenkaart-data-source';
import { StripTransaction } from '../interfaces/IStrippenkaart';

@Injectable({ providedIn: 'root' })
export class StrippenkaartService {
  private txCache$ = new BehaviorSubject<StripTransaction[] | null>(null);
  private timestamp = 0;
  private readonly CACHE_MS = 5 * 60 * 1000;

  constructor(private dataSource: StrippenkaartDataSource) {}

  private transactions(): Observable<StripTransaction[]> {
    const now = Date.now();
    const cached = this.txCache$.value;
    if (cached && (now - this.timestamp) < this.CACHE_MS) {
      return of(cached);
    }
    return this.dataSource.getAllTransactions().pipe(
      tap(txs => { this.txCache$.next(txs); this.timestamp = now; }),
      shareReplay(1),
    );
  }

  refresh(): void {
    this.txCache$.next(null);
    this.timestamp = 0;
  }

  getBalance(playerId: number): Observable<number> {
    return this.transactions().pipe(
      map(txs => txs.filter(t => t.playerId === playerId).reduce((sum, t) => sum + t.amount, 0)),
    );
  }

  getLedger(playerId: number): Observable<StripTransaction[]> {
    return this.transactions().pipe(
      map(txs => txs.filter(t => t.playerId === playerId)),
    );
  }

  addStrips(playerId: number, amount: number): Observable<void> {
    return this.dataSource.addTransaction(playerId, amount, 'kaart gekocht').pipe(
      tap(() => this.refresh()),
    );
  }

  correct(playerId: number, amount: number): Observable<void> {
    return this.dataSource.addTransaction(playerId, amount, 'correctie').pipe(
      tap(() => this.refresh()),
    );
  }

  isSubscribed(playerId: number, season: string): Observable<boolean> {
    return this.dataSource.getSubscriptions(season).pipe(
      map(ids => ids.includes(playerId)),
    );
  }

  setSubscription(playerId: number, season: string, on: boolean): Observable<void> {
    return this.dataSource.setSubscription(playerId, season, on);
  }
}
```

- [ ] **Step 4: Run om te slagen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/strippenkaart.service.spec.ts'`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/strippenkaart.service.ts src/app/services/strippenkaart.service.spec.ts
git commit -m "StrippenkaartService: saldo-aggregatie + acties"
```

---

### Task 6: Aftrek koppelen aan score-invoeren

**Files:**
- Modify: `src/app/services/wedstrijden.service.ts`
- Test: `src/app/services/wedstrijden.service.spec.ts`

**Interfaces:**
- Consumes: `StrippenkaartDataSource.applyMatchDeductions`.
- Produces: `WedstrijdenService.updateScore` roept ná de score-write `applyMatchDeductions(matchId)` aan.

- [ ] **Step 1: Pas de spec aan (failing)**

In `wedstrijden.service.spec.ts`: voeg een spy voor `StrippenkaartDataSource` toe in de providers en een test. Voeg bovenin (bij de andere imports):
```typescript
import { StrippenkaartDataSource } from './data-sources/strippenkaart-data-source';
```
In de `beforeEach` providers-array, voeg toe:
```typescript
        { provide: StrippenkaartDataSource, useValue: strippenkaartDsSpy },
```
en declareer + initialiseer `strippenkaartDsSpy` (naast de bestaande `mockDataSource`):
```typescript
  let strippenkaartDsSpy: jasmine.SpyObj<StrippenkaartDataSource>;
  // in beforeEach, vóór TestBed.configureTestingModule:
  strippenkaartDsSpy = jasmine.createSpyObj<StrippenkaartDataSource>('StrippenkaartDataSource',
    ['getAllTransactions', 'addTransaction', 'getSubscriptions', 'setSubscription', 'applyMatchDeductions']);
  strippenkaartDsSpy.applyMatchDeductions.and.returnValue(of(undefined));
```
Voeg de test toe:
```typescript
  it('updateScore triggert applyMatchDeductions ná de score-write', (done) => {
    mockDataSource.updateScore.and.returnValue(of(undefined));
    service.updateScore(7, 4, 1, 2).subscribe(() => {
      expect(mockDataSource.updateScore).toHaveBeenCalledWith(7, 4, 1, 2);
      expect(strippenkaartDsSpy.applyMatchDeductions).toHaveBeenCalledWith(7);
      done();
    });
  });
```

- [ ] **Step 2: Run om falen te bevestigen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/wedstrijden.service.spec.ts'`
Expected: FAIL — `applyMatchDeductions` wordt niet aangeroepen.

- [ ] **Step 3: Bekabel de service**

In `wedstrijden.service.ts`: importeer en injecteer de data-source en chain de aftrek.

Voeg bij de imports toe:
```typescript
import { switchMap } from 'rxjs/operators';
import { StrippenkaartDataSource } from './data-sources/strippenkaart-data-source';
```
(Als `switchMap` al geïmporteerd is uit `rxjs/operators`, voeg het alleen toe aan de bestaande import.)

Voeg `StrippenkaartDataSource` toe aan de constructor-parameters, bijvoorbeeld:
```typescript
  constructor(
    private dataSource: MatchDataSource,
    private strippenkaart: StrippenkaartDataSource,
  ) {}
```
(Behoud bestaande constructor-parameters; voeg `strippenkaart` toe.)

Vervang de body van `updateScore` door:
```typescript
  updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatanPlayerId: number | null,
  ): Observable<void> {
    return this.dataSource.updateScore(matchId, scoreWhite, scoreRed, zlatanPlayerId).pipe(
      switchMap(() => this.strippenkaart.applyMatchDeductions(matchId)),
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
```

- [ ] **Step 4: Run om te slagen**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless --include='**/wedstrijden.service.spec.ts'`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/wedstrijden.service.ts src/app/services/wedstrijden.service.spec.ts
git commit -m "WedstrijdenService: strip-aftrek na score-invoeren"
```

---

### Task 7: Lidmaatschap-dialog + Spelerbeheer-integratie

**Files:**
- Create: `src/app/components/admin/admin-spelers/lidmaatschap-dialog/lidmaatschap-dialog.component.ts`
- Create: `src/app/components/admin/admin-spelers/lidmaatschap-dialog/lidmaatschap-dialog.component.html`
- Create: `src/app/components/admin/admin-spelers/lidmaatschap-dialog/lidmaatschap-dialog.component.scss` (leeg toegestaan)
- Modify: `src/app/components/admin/admin.module.ts`
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.ts`
- Modify: `src/app/components/admin/admin-spelers/admin-spelers.component.html`

**Interfaces:**
- Consumes: `PlayerService.updatePlayer`, `StrippenkaartService`, `GameStatisticsService.getCurrentSeason()`, `PlayerSheetData`.

- [ ] **Step 1: Maak de dialog-component**

`lidmaatschap-dialog.component.ts`:
```typescript
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerSheetData } from '../../../../interfaces/IPlayerSheet';
import { PlayerService } from '../../../../services/player.service';
import { StrippenkaartService } from '../../../../services/strippenkaart.service';
import { GameStatisticsService } from '../../../../services/game.statistics.service';
import { StripTransaction } from '../../../../interfaces/IStrippenkaart';
import { SnackbarService } from '../../../../services/snackbar.service';

export interface LidmaatschapDialogData {
  player: PlayerSheetData;
}

@Component({
  selector: 'app-lidmaatschap-dialog',
  templateUrl: './lidmaatschap-dialog.component.html',
  styleUrls: ['./lidmaatschap-dialog.component.scss'],
})
export class LidmaatschapDialogComponent implements OnInit {
  player: PlayerSheetData;
  season: string | null = null;
  usesStrippenkaart = false;
  hasSubscription = false;
  balance = 0;
  ledger: StripTransaction[] = [];
  customAmount: number | null = null;
  loading = true;

  constructor(
    public dialogRef: MatDialogRef<LidmaatschapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LidmaatschapDialogData,
    private playerService: PlayerService,
    private strippenkaart: StrippenkaartService,
    private stats: GameStatisticsService,
    private snackbar: SnackbarService,
  ) {
    this.player = data.player;
    this.usesStrippenkaart = !!data.player.usesStrippenkaart;
  }

  ngOnInit(): void {
    this.stats.getCurrentSeason().subscribe(season => {
      this.season = season;
      this.reload();
    });
  }

  private reload(): void {
    const id = this.player.id!;
    this.loading = true;
    this.strippenkaart.refresh();
    this.strippenkaart.getBalance(id).subscribe(b => (this.balance = b));
    this.strippenkaart.getLedger(id).subscribe(l => {
      this.ledger = [...l].reverse();
      this.loading = false;
    });
    if (this.season) {
      this.strippenkaart.isSubscribed(id, this.season).subscribe(s => (this.hasSubscription = s));
    }
  }

  toggleStrippenkaart(): void {
    const updated: PlayerSheetData = { ...this.player, usesStrippenkaart: !this.usesStrippenkaart };
    this.playerService.updatePlayer(this.player.name, updated).subscribe({
      next: () => {
        this.usesStrippenkaart = !this.usesStrippenkaart;
        this.player = updated;
      },
      error: () => this.snackbar.error('Kon strippenkaart-status niet opslaan'),
    });
  }

  toggleSubscription(): void {
    if (!this.season) return;
    const target = !this.hasSubscription;
    this.strippenkaart.setSubscription(this.player.id!, this.season, target).subscribe({
      next: () => (this.hasSubscription = target),
      error: () => this.snackbar.error('Kon abonnement niet opslaan'),
    });
  }

  addStrips(amount: number): void {
    if (!amount) return;
    this.strippenkaart.addStrips(this.player.id!, amount).subscribe({
      next: () => this.reload(),
      error: () => this.snackbar.error('Kon strippen niet toevoegen'),
    });
  }

  correct(amount: number | null): void {
    if (!amount) return;
    this.strippenkaart.correct(this.player.id!, amount).subscribe({
      next: () => { this.customAmount = null; this.reload(); },
      error: () => this.snackbar.error('Kon correctie niet opslaan'),
    });
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
```

- [ ] **Step 2: Maak het template**

`lidmaatschap-dialog.component.html`:
```html
<h2 mat-dialog-title>Lidmaatschap — {{ player.name }}</h2>

<mat-dialog-content>
  <div class="toggle-field">
    <label>Op de strippenkaart</label>
    <mat-slide-toggle [checked]="usesStrippenkaart" (change)="toggleStrippenkaart()"></mat-slide-toggle>
  </div>

  <div class="toggle-field">
    <label>Abonnement dit seizoen{{ season ? ' (' + season + ')' : '' }}</label>
    <mat-slide-toggle [checked]="hasSubscription" [disabled]="!season" (change)="toggleSubscription()"></mat-slide-toggle>
  </div>
  <p class="hint" *ngIf="!season">Nog geen seizoen bekend (geen wedstrijden) — abonnement is nu niet instelbaar.</p>

  <div class="saldo">
    <strong>Strippen-saldo:</strong> {{ balance }}
    <span class="op" *ngIf="balance <= 0">— strippen op</span>
  </div>

  <div class="acties">
    <button mat-stroked-button (click)="addStrips(5)">+5 strippen</button>
    <button mat-stroked-button (click)="addStrips(10)">+10 strippen</button>
  </div>

  <div class="correctie">
    <mat-form-field appearance="outline">
      <mat-label>Correctie (±)</mat-label>
      <input matInput type="number" [(ngModel)]="customAmount" [ngModelOptions]="{standalone: true}">
    </mat-form-field>
    <button mat-stroked-button (click)="correct(customAmount)" [disabled]="!customAmount">Toepassen</button>
  </div>

  <h3>Recente mutaties</h3>
  <div *ngIf="!loading">
    <p *ngIf="ledger.length === 0">Nog geen mutaties.</p>
    <ul class="ledger">
      <li *ngFor="let t of ledger">
        {{ t.amount > 0 ? '+' : '' }}{{ t.amount }} — {{ t.reason }}
        <span class="datum" *ngIf="t.createdAt">({{ t.createdAt | date:'dd-MM-yyyy' }})</span>
      </li>
    </ul>
  </div>
</mat-dialog-content>

<mat-dialog-actions align="end">
  <button mat-raised-button color="primary" (click)="close()">Sluiten</button>
</mat-dialog-actions>
```

- [ ] **Step 3: Declareer de dialog + FormsModule in de admin-module**

In `admin.module.ts`:
- Voeg de import toe: `import { FormsModule } from '@angular/forms';`
- Voeg `import { LidmaatschapDialogComponent } from './admin-spelers/lidmaatschap-dialog/lidmaatschap-dialog.component';`
- Voeg `LidmaatschapDialogComponent` toe aan `declarations`.
- Voeg `FormsModule` toe aan `imports` (naast `ReactiveFormsModule`; nodig voor `[(ngModel)]` in de dialog).

- [ ] **Step 4: Voeg de rij-actie + statuskolom toe aan AdminSpelers (component)**

In `admin-spelers.component.ts`:
- Importeer: `import { LidmaatschapDialogComponent } from './lidmaatschap-dialog/lidmaatschap-dialog.component';` en `import { StrippenkaartService } from '../../../services/strippenkaart.service';`
- Voeg `'lidmaatschap'` toe aan `displayedColumns` (vóór `'actions'`):
  ```typescript
  displayedColumns: string[] = ['name', 'position', 'actief', 'isAdmin', 'lidmaatschap', 'actions'];
  ```
- Injecteer `private strippenkaart: StrippenkaartService` in de constructor.
- Houd een saldo-map bij en open de dialog. Voeg toe:
  ```typescript
  balances: Record<number, number> = {};

  // in loadPlayers(), in de next-callback ná `this.dataSource.data = players;`:
  //   this.loadBalances(players);

  private loadBalances(players: PlayerSheetData[]): void {
    this.strippenkaart.refresh();
    players.forEach(p => {
      if (p.id != null) {
        this.strippenkaart.getBalance(p.id).subscribe(b => (this.balances[p.id!] = b));
      }
    });
  }

  openLidmaatschap(player: PlayerSheetData): void {
    const ref = this.dialog.open(LidmaatschapDialogComponent, {
      width: '520px',
      data: { player: { ...player } },
    });
    ref.afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadPlayers());
  }
  ```
  En voeg in `loadPlayers()` de aanroep `this.loadBalances(players);` toe in de `next`-callback (ná `this.dataSource.data = players;`).

- [ ] **Step 5: Voeg de kolom + actieknop toe aan het template**

In `admin-spelers.component.html`, vóór de `actions`-`ng-container`:
```html
      <ng-container matColumnDef="lidmaatschap">
        <th mat-header-cell *matHeaderCellDef>Lidmaatschap</th>
        <td mat-cell *matCellDef="let player">
          <span *ngIf="player.usesStrippenkaart">Strippen: {{ balances[player.id] ?? '…' }}</span>
          <span *ngIf="!player.usesStrippenkaart">—</span>
        </td>
      </ng-container>
```
En in de bestaande `actions`-cel, naast de edit-knop, een knop toe:
```html
          <button mat-icon-button color="primary" (click)="openLidmaatschap(player)" aria-label="Lidmaatschap">
            <mat-icon>card_membership</mat-icon>
          </button>
```

- [ ] **Step 6: Build verifiëren**

Run: `npx ng build --configuration development`
Expected: build slaagt.

- [ ] **Step 7: Commit**

```bash
git add src/app/components/admin/admin-spelers/lidmaatschap-dialog/ src/app/components/admin/admin.module.ts src/app/components/admin/admin-spelers/admin-spelers.component.ts src/app/components/admin/admin-spelers/admin-spelers.component.html
git commit -m "Spelerbeheer: Lidmaatschap-dialog + statuskolom"
```

---

### Task 8: Read-only weergave op het spelersprofiel

**Files:**
- Modify: `src/app/components/speler-profiel/speler-profiel.component.ts`
- Modify: `src/app/components/speler-profiel/speler-profiel.component.html`
- Modify: `src/app/components/speler-profiel/speler-profiel.module.ts` (alleen als een benodigde Material-module nog ontbreekt)

**Interfaces:**
- Consumes: `StrippenkaartService`, `GameStatisticsService.getCurrentSeason()`, de speler-id die het profiel al kent.

- [ ] **Step 1: Lees het component om de speler-id en layout te vinden**

Open `speler-profiel.component.ts` en `.html`. Bepaal (a) de property die de huidige speler-id bevat (het profiel laadt op `speler/:id`), en (b) een plek in het template ná de bestaande spelerinfo (bv. na `app-player-card`) voor een nieuw blok. Noteer de id-property-naam voor de volgende stap.

- [ ] **Step 2: Voeg de data toe aan het component**

In `speler-profiel.component.ts`:
- Importeer: `import { StrippenkaartService } from '../../services/strippenkaart.service';` en `import { GameStatisticsService } from '../../services/game.statistics.service';`
- Injecteer beide in de constructor.
- Voeg properties toe: `stripBalance: number | null = null;` en `heeftAbonnement = false;` en `lidSeizoen: string | null = null;` en `usesStrippenkaart = false;`
- Op het moment dat de speler-id bekend is (waar het profiel zijn data laadt voor die id — gebruik dezelfde id-property uit Step 1, hier `playerId` genoemd), voeg toe:
  ```typescript
  this.stats.getCurrentSeason().subscribe(season => {
    this.lidSeizoen = season;
    if (season) {
      this.strippenkaart.isSubscribed(playerId, season).subscribe(s => (this.heeftAbonnement = s));
    }
  });
  this.strippenkaart.getBalance(playerId).subscribe(b => (this.stripBalance = b));
  ```
  Bepaal `usesStrippenkaart` uit de speler die het profiel al ophaalt (zet `this.usesStrippenkaart = !!speler.usesStrippenkaart` waar dat object beschikbaar komt). Als het profiel de speler als `Player`-interface laadt zonder dit veld, lees het dan via `PlayerService.getPlayerById(playerId)` (al geïnjecteerd of injecteer `PlayerService`) en zet `usesStrippenkaart` + gebruik dat object.

- [ ] **Step 3: Voeg het read-only blok toe aan het template**

In `speler-profiel.component.html`, op de in Step 1 gekozen plek:
```html
<mat-card class="lidmaatschap-card" *ngIf="heeftAbonnement || usesStrippenkaart">
  <mat-card-content>
    <div *ngIf="heeftAbonnement">
      Abonnement{{ lidSeizoen ? ' (' + lidSeizoen + ')' : '' }}: actief
    </div>
    <div *ngIf="usesStrippenkaart">
      Strippen-saldo: {{ stripBalance ?? '…' }}
      <span *ngIf="stripBalance !== null && stripBalance <= 0">— strippen op</span>
    </div>
  </mat-card-content>
</mat-card>
```
Als `mat-card` nog niet beschikbaar is in `speler-profiel.module.ts`, voeg `MatCardModule` toe aan de imports (controleer eerst — het profiel gebruikt waarschijnlijk al cards).

- [ ] **Step 4: Build verifiëren**

Run: `npx ng build --configuration development`
Expected: build slaagt.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/speler-profiel/
git commit -m "Spelersprofiel: read-only strippen-saldo + abonnementstatus"
```

---

### Task 9: Eindverificatie + whole-branch review

**Files:** geen wijziging — verificatie.

- [ ] **Step 1: Volledige testsuite**

Run: `CHROME_BIN="/c/Program Files/Google/Chrome/Application/chrome.exe" npx ng test --watch=false --browsers=ChromeHeadless`
Expected: alle specs groen.

- [ ] **Step 2: Productie-build**

Run: `npx ng build --configuration production`
Expected: build slaagt (bestaande bundle-budget-waarschuwing is geen fout).

- [ ] **Step 3: Handmatige rooktest (door de gebruiker)**

- Zet bij een speler in Spelerbeheer "Op de strippenkaart" aan en voeg +10 strippen toe → statuskolom toont `Strippen: 10`.
- Voer voor een wedstrijd met die speler in de opstelling de score in → saldo wordt 9.
- Sla dezelfde score opnieuw op → saldo blijft 9 (idempotent).
- Geef die speler een abonnement voor het huidige seizoen, voer een nieuwe wedstrijd-score in → geen aftrek.
- Bekijk het spelersprofiel → saldo + abonnementstatus zichtbaar (read-only).

> Deploy (`ng deploy`) gebeurt door de gebruiker, na een verse productie-build.

---

## Self-Review

**Spec coverage:**
- `players.uses_strippenkaart` + `season_subscriptions` + `strip_transactions` → Task 1. ✅
- DTO + player read/write → Task 2. ✅
- Logboek + abonnementen data-source → Task 3. ✅
- Idempotente aftrek (delete-then-insert, eligibility, abonnement dekt, negatief saldo) → Task 4. ✅
- Saldo-aggregatie + strippen toevoegen + correctie + abonnement-toggle → Task 5. ✅
- Aftrek bij score-invoeren → Task 6. ✅
- Beheer-UI (dialog + statuskolom) → Task 7. ✅
- Read-only op profiel → Task 8. ✅
- Tests + verificatie → in elke taak + Task 9. ✅
- Buiten scope (tikkie/gast, server-side, euro's) → niet geïmplementeerd, correct. ✅

**Placeholder scan:** geen TBD/TODO; UI-taken (7, 8) bevatten concrete code. Task 8 Step 1-2 bevat een geleide "lees component"-stap omdat de exacte id-property/template-plek niet vooraf vaststaat; de toe te voegen code is wél concreet gegeven.

**Type consistency:** `StripTransaction` (playerId/matchId/amount/reason) consistent in DTO, data-source, service, spec. `applyMatchDeductions(matchId)`, `getAllTransactions`, `addTransaction`, `getSubscriptions`, `setSubscription` consistent over abstract/impl/service/wedstrijden-wiring. `usesStrippenkaart` consistent in DTO, player-data-source, dialog, statuskolom, profiel.
