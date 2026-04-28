# Data-source feature flag — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Voeg een runtime-flag toe (environment + localStorage-override) die bepaalt welke `…DataSource`-implementatie Angular DI uitlevert. Sheets blijft default; Supabase wordt activeerbaar zonder rebuild via `localStorage`. About-page toont welke backend actief is.

**Architecture:** `ActiveBackendService` (provided in root) resolved bij instantiatie de actieve backend uit `localStorage.getItem('zd-backend')` of `environment.dataSource`. `app.module.ts` providers worden factory-providers die de juiste implementatie injecteren op basis van die service. About-page injecteert dezelfde service en toont de waarde.

**Tech Stack:** Angular 18, NgModule (4 abstract data-source tokens), Karma/Jasmine, standalone `AboutComponent`.

**Bron-spec:** `docs/superpowers/specs/2026-04-28-data-source-feature-flag-design.md`.

---

## File overview

Nieuw:
- `src/app/services/data-sources/active-backend.service.ts`
- `src/app/services/data-sources/active-backend.service.spec.ts`

Aangepast:
- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`
- `src/environments/environment.example.ts`
- `src/environments/environment.prod.example.ts`
- `src/app/services/data-sources/index.ts`
- `src/app/app.module.ts`
- `src/app/components/about/about.component.ts`
- `src/app/components/about/about.component.html`

---

### Task 1: `environment.dataSource` toevoegen aan alle 4 environment-files

Pure config-task, additief, geen consumenten. Default `'sheets'`.

**Files:**
- Modify: `src/environments/environment.ts`
- Modify: `src/environments/environment.prod.ts`
- Modify: `src/environments/environment.example.ts`
- Modify: `src/environments/environment.prod.example.ts`

- [ ] **Step 1: `environment.example.ts` uitbreiden**

Open `src/environments/environment.example.ts`. Voeg binnen het `environment`-object toe (bv. direct na `supabaseAnonKey`):

```ts
dataSource: 'sheets', // 'sheets' | 'supabase'
```

- [ ] **Step 2: `environment.prod.example.ts` op dezelfde manier uitbreiden**

Voeg dezelfde regel toe in `src/environments/environment.prod.example.ts`.

- [ ] **Step 3: Lokale environment-files invullen**

Open `src/environments/environment.ts` en voeg toe:

```ts
dataSource: 'sheets',
```

Open `src/environments/environment.prod.ts` en voeg dezelfde regel toe.

- [ ] **Step 4: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds. Geen consumer raakt deze velden nog, dus type-check is wat we verifiëren.

- [ ] **Step 5: Commit (alleen example-files; `.ts`/`.prod.ts` staan in .gitignore)**

```bash
git add src/environments/environment.example.ts src/environments/environment.prod.example.ts
git commit -m "Environment: dataSource-flag (default 'sheets') in example-files."
```

---

### Task 2: `ActiveBackendService` + spec

**Files:**
- Create: `src/app/services/data-sources/active-backend.service.ts`
- Create: `src/app/services/data-sources/active-backend.service.spec.ts`
- Modify: `src/app/services/data-sources/index.ts`

- [ ] **Step 1: Failing spec**

Maak `src/app/services/data-sources/active-backend.service.spec.ts`:

```ts
import { TestBed } from '@angular/core/testing';
import { ActiveBackendService } from './active-backend.service';

describe('ActiveBackendService', () => {
  beforeEach(() => {
    localStorage.removeItem('zd-backend');
  });

  afterEach(() => {
    localStorage.removeItem('zd-backend');
  });

  it('valt terug op environment.dataSource (default sheets in test) als geen localStorage', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('sheets');
  });

  it('localStorage "supabase" wint van environment', () => {
    localStorage.setItem('zd-backend', 'supabase');
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('supabase');
  });

  it('localStorage "sheets" wint van environment', () => {
    localStorage.setItem('zd-backend', 'sheets');
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('sheets');
  });

  it('ongeldige localStorage-waarde valt terug op environment', () => {
    localStorage.setItem('zd-backend', 'rubbish');
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('sheets');
  });
});
```

- [ ] **Step 2: Run om te falen**

```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/active-backend.service.spec.ts' 2>&1 | tail -20
```

Expected: failure — class bestaat niet.

- [ ] **Step 3: Service implementeren**

Maak `src/app/services/data-sources/active-backend.service.ts`:

```ts
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export type BackendKind = 'sheets' | 'supabase';

const STORAGE_KEY = 'zd-backend';
const VALID: ReadonlyArray<BackendKind> = ['sheets', 'supabase'];

/**
 * Bepaalt welke data-source-implementatie Angular DI uitlevert.
 *
 * Resolutie-volgorde bij instantiatie:
 *   1. localStorage.getItem('zd-backend') — als geldige BackendKind, wint.
 *   2. environment.dataSource.
 *   3. Fallback: 'sheets'.
 *
 * Niet reactief — switch via localStorage + F5, of environment + rebuild.
 */
@Injectable({ providedIn: 'root' })
export class ActiveBackendService {
  readonly current: BackendKind = this.resolve();

  private resolve(): BackendKind {
    const override = this.readLocalStorage();
    if (override) return override;
    const fromEnv = (environment as any).dataSource;
    if (this.isValid(fromEnv)) return fromEnv;
    return 'sheets';
  }

  private readLocalStorage(): BackendKind | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return this.isValid(raw) ? raw : null;
    } catch {
      // localStorage kan niet beschikbaar zijn (private browsing, SSR, etc.)
      return null;
    }
  }

  private isValid(value: unknown): value is BackendKind {
    return typeof value === 'string' && (VALID as ReadonlyArray<string>).includes(value);
  }
}
```

- [ ] **Step 4: Barrel-export**

Open `src/app/services/data-sources/index.ts`. Voeg toe:

```ts
export * from './active-backend.service';
```

- [ ] **Step 5: Tests draaien**

```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/active-backend.service.spec.ts' 2>&1 | tail -20
```

Expected: 4 tests pass.

- [ ] **Step 6: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/app/services/data-sources/active-backend.service.ts \
        src/app/services/data-sources/active-backend.service.spec.ts \
        src/app/services/data-sources/index.ts
git commit -m "ActiveBackendService: localStorage-override + environment fallback."
```

---

### Task 3: Factory-providers in `app.module.ts`

**Files:**
- Modify: `src/app/app.module.ts`

- [ ] **Step 1: Imports voor Supabase-implementaties + `ActiveBackendService` toevoegen**

Open `src/app/app.module.ts`. Naast de bestaande imports voor `Sheets…DataSource`, voeg toe (boven aan, bij de andere data-source imports):

```ts
import { ActiveBackendService } from './services/data-sources/active-backend.service';
import { SupabasePlayerDataSource } from './services/data-sources/player-data-source.supabase';
import { SupabaseMatchDataSource } from './services/data-sources/match-data-source.supabase';
import { SupabaseAttendanceDataSource } from './services/data-sources/attendance-data-source.supabase';
import { SupabaseNotificationDataSource } from './services/data-sources/notification-data-source.supabase';
```

- [ ] **Step 2: Factory-providers vervangen**

Vervang in de `providers`-array de 4 huidige hardcoded provider-regels:

```ts
{ provide: PlayerDataSource, useClass: SheetsPlayerDataSource },
{ provide: MatchDataSource, useClass: SheetsMatchDataSource },
{ provide: AttendanceDataSource, useClass: SheetsAttendanceDataSource },
{ provide: NotificationDataSource, useClass: SheetsNotificationDataSource }
```

door:

```ts
{
  provide: PlayerDataSource,
  useFactory: (sheets: SheetsPlayerDataSource, supabase: SupabasePlayerDataSource, backend: ActiveBackendService) =>
    backend.current === 'supabase' ? supabase : sheets,
  deps: [SheetsPlayerDataSource, SupabasePlayerDataSource, ActiveBackendService],
},
{
  provide: MatchDataSource,
  useFactory: (sheets: SheetsMatchDataSource, supabase: SupabaseMatchDataSource, backend: ActiveBackendService) =>
    backend.current === 'supabase' ? supabase : sheets,
  deps: [SheetsMatchDataSource, SupabaseMatchDataSource, ActiveBackendService],
},
{
  provide: AttendanceDataSource,
  useFactory: (sheets: SheetsAttendanceDataSource, supabase: SupabaseAttendanceDataSource, backend: ActiveBackendService) =>
    backend.current === 'supabase' ? supabase : sheets,
  deps: [SheetsAttendanceDataSource, SupabaseAttendanceDataSource, ActiveBackendService],
},
{
  provide: NotificationDataSource,
  useFactory: (sheets: SheetsNotificationDataSource, supabase: SupabaseNotificationDataSource, backend: ActiveBackendService) =>
    backend.current === 'supabase' ? supabase : sheets,
  deps: [SheetsNotificationDataSource, SupabaseNotificationDataSource, ActiveBackendService],
},
```

- [ ] **Step 3: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 4: Volledige testsuite draaien**

```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -15
```

Expected: alle bestaande tests pass. (Geen unit-test voor de factory-providers zelf — dat verifiëren we via build + smoke-test in Task 5.)

- [ ] **Step 5: Commit**

```bash
git add src/app/app.module.ts
git commit -m "AppModule: factory-providers voor data-sources via ActiveBackendService."
```

---

### Task 4: Backend-indicator op about-page

**Files:**
- Modify: `src/app/components/about/about.component.ts`
- Modify: `src/app/components/about/about.component.html`

- [ ] **Step 1: `AboutComponent` ts-bestand updaten**

Open `src/app/components/about/about.component.ts`. Vervang de inhoud door:

```ts
import { Component } from '@angular/core';
import { ActiveBackendService } from '../../services/data-sources/active-backend.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public readonly backend: ActiveBackendService) {}

  get backendLabel(): string {
    return this.backend.current === 'supabase' ? 'Supabase' : 'Google Sheets';
  }
}
```

- [ ] **Step 2: Template updaten**

Open `src/app/components/about/about.component.html`. Zoek de `<h3>Technische features</h3>`-sectie en de bijbehorende `<ul>`. Direct na het sluitende `</ul>` van die lijst, voeg toe:

```html
<p class="backend-info">
  Actieve data-backend: <b>{{ backendLabel }}</b>.
</p>
```

(Plaatsing: tussen het einde van de "Technische features"-`<ul>` en de `<div class="copyright">`.)

- [ ] **Step 3: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 4: Bestaande tests draaien**

```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -15
```

Expected: alle tests pass. (`AboutComponent` heeft geen eigen spec; dat hoeft niet voor deze trivial wijziging.)

- [ ] **Step 5: Commit**

```bash
git add src/app/components/about/about.component.ts \
        src/app/components/about/about.component.html
git commit -m "About-page: actieve data-backend tonen."
```

---

### Task 5: Final verificatie + manual switch-test

**Files:** geen.

- [ ] **Step 1: Volledige test-suite**

```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -20
```

Expected: alle suites pass.

- [ ] **Step 2: Production build**

```bash
npx ng build --configuration production 2>&1 | tail -15
```

Expected: build slaagt zonder type-errors. Bundle-size-warning is pre-existing.

- [ ] **Step 3: Default-flow testen (Sheets)**

```bash
npx ng serve
```

Open http://localhost:4200. Default `environment.dataSource` is `'sheets'`.

- [ ] **Step 4: About-page check**

Navigeer naar de about-page. Verifieer:
- De regel "Actieve data-backend: **Google Sheets**." is zichtbaar onder "Technische features".

- [ ] **Step 5: Klassement laadt (Sheets-pad)**

Navigeer naar het klassement. Verifieer dat het laadt — bestaande Sheets-data wordt getoond.

- [ ] **Step 6: localStorage-override testen**

Open dev-console (F12). Run:

```js
localStorage.setItem('zd-backend', 'supabase');
location.reload();
```

- [ ] **Step 7: About-page toont nu Supabase**

Navigeer terug naar about-page. Verifieer:
- De regel toont nu "Actieve data-backend: **Supabase**."

- [ ] **Step 8: App draait nu tegen Supabase**

Navigeer naar het klassement / wedstrijden / kalender. Het Supabase-project is leeg dus lege lijsten verwacht. Geen JS-errors in de console rond data-fetches.

- [ ] **Step 9: Terugschakelen**

In dev-console:

```js
localStorage.removeItem('zd-backend');
location.reload();
```

About-page toont weer "Google Sheets". Klassement toont weer Sheets-data.

- [ ] **Step 10: Push naar remote**

```bash
git push
```

---

## Acceptance verification

- [ ] `dataSource` flag in alle 4 environment-files → Task 1.
- [ ] `ActiveBackendService` met correcte resolve-volgorde → Task 2.
- [ ] `app.module.ts` factory-providers → Task 3.
- [ ] About-page toont actieve backend → Task 4.
- [ ] Unit-tests `ActiveBackendService` slagen → Task 2 step 5.
- [ ] `npm test` blijft volledig groen → Task 5 step 1.
- [ ] `ng build --configuration production` slaagt → Task 5 step 2.
- [ ] Handmatige switch-test groen (sheets→supabase→sheets) → Task 5 stappen 3-9.
