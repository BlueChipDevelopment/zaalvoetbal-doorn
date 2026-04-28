# Supabase migratie — sub-project 4: data-source feature flag

Vierde sub-project. Voegt een runtime-flag toe die bepaalt welke
`…DataSource`-implementatie Angular DI uitlevert. Sheets blijft default;
Supabase wordt activeerbaar via environment-flag of localStorage-override
voor per-browser testing.

**Voorgangers:**
- Sub-project 1: schema (`docs/superpowers/specs/2026-04-28-supabase-schema-design.md`)
- Sub-project 2: data-source abstractielaag (`docs/superpowers/specs/2026-04-28-data-source-refactor-design.md`)
- Sub-project 3: Supabase-implementaties (`docs/superpowers/specs/2026-04-28-supabase-data-sources-design.md`)

## Scope

**In scope:**
- Een `dataSource: 'sheets' | 'supabase'` flag in `environment.ts`/`environment.prod.ts`/example-files. Default: `'sheets'`.
- Een kleine `ActiveBackendService` die de flag resolved via een `resolveDataSource()`-helper. Die helper checkt eerst `localStorage.getItem('zd-backend')`, en valt terug op `environment.dataSource`. Eén keer evalueren bij service-instantiatie; geen reactiviteit op runtime-wijziging (refresh op switch is voldoende).
- `app.module.ts` providers voor de 4 abstracte data-sources worden factory-providers die op basis van `ActiveBackendService.current` resolven naar de Sheets- of Supabase-implementatie.
- Een regel op de about-page (`about.component.html`) die de actieve backend toont — onder "Technische features".

**Out of scope:**
- Admin-UI met toggle (overkill voor 1 user; localStorage volstaat).
- Live cache-flush zonder reload (F5 doet het werk).
- Per-data-source flags (geen use-case).
- Telemetry of analytics over backend-keuze.
- Cleanup van Sheets-adapters of Functions — sub-project 7.

## Achtergrond

Sub-projecten 2 en 3 hebben de `…DataSource`-abstractielaag opgeleverd
inclusief beide implementaties (Sheets en Supabase). Tot nu toe wordt
in `app.module.ts` per provider hardcoded `useClass: Sheets…DataSource`
opgegeven. Voor cutover-validatie en als veiligheidsschakelaar tijdens
de migratie willen we kunnen wisselen zonder code te wijzigen.

De gebruiker (single-user dev/admin) wil:
- Standaard nog op Sheets blijven werken zolang data niet gemigreerd is.
- Per-browser kunnen omschakelen naar Supabase voor validatie tegen
  het remote project (zonder rebuild).
- Visueel kunnen zien welke backend actief is — op de about-page,
  geen prominent UI-element.

## Belangrijkste ontwerpkeuzes

### Eén globale flag

Géén per-data-source granulariteit (4 losse flags). Eén `dataSource`-keuze
geldt voor de hele app. Splitsen geeft testbaarheid die we niet nodig
hebben en breekt makkelijk omdat domeinservices een coherente backend
verwachten.

### Resolve-volgorde: localStorage > environment

`ActiveBackendService` resolved bij instantiatie:
1. `localStorage.getItem('zd-backend')` — als 'sheets' of 'supabase', wint.
2. Anders: `environment.dataSource`.
3. Fallback: `'sheets'` (mocht er ooit een ongeldige waarde staan).

Resultaat is `readonly current` — niet reactief. Switch via
`localStorage.setItem(...) + F5` voor per-browser testen, of via
`environment.ts` aanpassen + rebuild voor de echte cutover.

### Factory-providers in `app.module.ts`

Vier providers die op `ActiveBackendService.current` switchen naar de
juiste implementatie. Beide implementatie-classes zijn `providedIn: 'root'`,
dus Angular instantieert sowieso één van elke; de factory kiest welke
het abstracte token oplevert.

```ts
function dataSourceProvider<T>(
  token: Type<T>,
  sheetsImpl: Type<T>,
  supabaseImpl: Type<T>,
) {
  return {
    provide: token,
    useFactory: (sheets: T, supabase: T, backend: ActiveBackendService) =>
      backend.current === 'supabase' ? supabase : sheets,
    deps: [sheetsImpl, supabaseImpl, ActiveBackendService],
  };
}
```

Dit hoeft maar één keer geschreven te worden; de 4 providers zijn dan
één regel elk.

### About-page indicator

Eén regel onder "Technische features" in `about.component.html`:

> Actieve data-backend: **Supabase** _(of Sheets)_.

Geen kleur-coding, geen badge, geen icoon — gewoon tekst. Subtiel.
Zodra sub-project 7 de Sheets-adapter verwijdert kan deze regel weg.
De about-component injecteert `ActiveBackendService` en leest `current`.

### Geen cache-invalidatie-mechaniek

Domeinservices (`PlayerService`, `WedstrijdenService`, etc.) hebben
in-memory caches met TTL. Bij een backend-switch zijn die caches
stale. We accepteren dat: na een localStorage-override + F5 starten
caches sowieso leeg. En een environment-flip vereist rebuild +
deploy, dus daar is sowieso een verse load.

## Componenten

### Nieuwe bestanden

```
src/app/services/data-sources/
  active-backend.service.ts
  active-backend.service.spec.ts
```

### Te wijzigen bestanden

```
src/environments/environment.ts
src/environments/environment.prod.ts
src/environments/environment.example.ts
src/environments/environment.prod.example.ts
src/app/app.module.ts                                # factory-providers
src/app/components/about/about.component.ts          # injecteer service, expose value
src/app/components/about/about.component.html        # toon backend
src/app/services/data-sources/index.ts               # barrel-export
```

## Data-flow

```
App boot
  → ActiveBackendService.constructor
    → resolveDataSource()
      → localStorage.getItem('zd-backend') ?? environment.dataSource ?? 'sheets'
    → this.current = '...'
  → app.module.ts providers (4× useFactory)
    → backend.current === 'supabase' ? SupabaseXDataSource : SheetsXDataSource
  → Domeinservices injecteren de abstract token, krijgen de gekozen impl
  → AboutComponent injecteert ActiveBackendService en toont this.backend.current
```

Switching:
```
User in dev-console: localStorage.setItem('zd-backend', 'supabase'); location.reload();
  → service re-resolved → providers re-resolven → app draait nu op Supabase
  → about-page toont "Supabase"
```

## Test-strategie

- **`ActiveBackendService` unit-test** — mockt `localStorage` en `environment`; verifieert dat:
  - localStorage `'supabase'` → current = `'supabase'`.
  - localStorage `'sheets'` → current = `'sheets'`.
  - localStorage missing → environment.dataSource wint.
  - Onbekende waardes vallen terug op default.
- **Geen DI-tests voor de factory-providers** — Angular DI testen is gepruts; we vertrouwen op het type-systeem en de handmatige smoke-test.
- **Manual smoke-test** als final task: env op `'supabase'` zetten, app starten, klikpad doorlopen tegen Supabase. Daarna `'sheets'` terugzetten en hetzelfde controleren.

## Acceptance criteria

- [ ] `environment.dataSource: 'sheets' | 'supabase'` aanwezig in alle 4 environment-files (live + example).
- [ ] `ActiveBackendService` levert `current` correct uit localStorage of environment.
- [ ] `app.module.ts` heeft 4 factory-providers; de gekozen adapter komt door bij injectie.
- [ ] About-page toont een regel "Actieve data-backend: …".
- [ ] Unit-tests voor `ActiveBackendService` slagen.
- [ ] `npm test` blijft volledig groen.
- [ ] `ng build --configuration production` slaagt.
- [ ] Handmatige switch-test groen: localStorage-flip → F5 → app draait op de andere backend, about-page toont nieuwe waarde.

## Risico's en open punten

- **`localStorage` is per-browser**: switchen op je telefoon vergt opnieuw de override. Voor de cutover is dit prima (Bird's eye: env-flip is voor iedereen, localStorage is alleen voor jou-de-tester).
- **Verkeerde flag-waarde**: handmatig in localStorage typo's zetten leidt tot fallback op default. Logging niet nodig.
- **App-bundle-size**: beide adapters worden meegebundled — de tree-shaker zal het Sheets-pad niet kunnen weglaten. Voor de duur van het project is dat OK; sub-project 7 verwijdert Sheets en daarmee verdwijnt het.
- **Race-condities bij switch**: niet relevant — `location.reload()` herinitialiseert alles.
