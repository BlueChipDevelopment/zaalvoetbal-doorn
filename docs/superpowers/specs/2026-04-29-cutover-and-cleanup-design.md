# Supabase migratie — sub-project 6: complete cutover & cleanup

Zesde en laatste sub-project van de Supabase-migratie. Vouwt het oorspronkelijk
geplande sub-project 6 (cutover) en sub-project 7 (cleanup) samen tot één
traject: alle Sheets-runtime-paden weg én alle Sheets-code zelf weg, in één
deploy-cycle.

**Voorgangers:**
- Sub-project 1: schema
- Sub-project 2: data-source abstractielaag
- Sub-project 3: Supabase-implementaties
- Sub-project 4: feature flag
- Sub-project 5: data-migratie (Sheets → Supabase voltooid; productie-data staat in Supabase)

## Scope

**In scope:**
- Firebase Functions die nu Sheets gebruiken porten naar Supabase:
  - `notifications/send-push-to-all.ts` (broadcast push, gebruikt door app).
  - `notifications/attendance-reminders.ts` (scheduled hourly: 24/12/4u-reminders).
  - `teams/scheduled-generation.ts` (scheduled 17:00 op wedstrijddag).
  - `teams/team-generation.ts` (HTTP endpoint, getriggerd door scheduler).
  - `teams/team-logic.ts` (algoritme — alleen data-laag aanpassen, algoritme stays).
  - `teams/team-notification.ts` (push na auto-generation).
- Functions cleanup: hele `sheets/`-folder weg, `shared/sheets-client.ts` weg, `shared/validate-sheet-request.ts` weg.
- Functions config: `googleapis` dep eruit, `@supabase/supabase-js` erbij. Service-role-key als Firebase Secret. `SPREADSHEET_ID`, `SHEET_NAMES`, `SHEET_RANGES`, `COLUMN_INDICES` cleanup waar niet meer gebruikt.
- Frontend cleanup: 4 `Sheets…DataSource`-classes weg, `GoogleSheetsService` weg, `ActiveBackendService` weg, `dataSource`-flag uit alle 4 environment-files, `app.module.ts`-providers terug naar plain `useClass`, About-page `backendLabel`-getter + `backend-info`-paragraph weg, `pipes/player-name.pipe` blijft (die heeft niets met data-source te maken — verwart het hopelijk niet).
- Deploy: `firebase deploy --only functions` + `ng deploy` (GitHub Pages).
- Manual smoke-tests: app draait op productie-URL, scheduled-jobs lopen volgende dag.

**Out of scope:**
- `ai/generate-commentary.ts` — geen Sheets-dependency, ongewijzigd.
- `scripts/migrate-sheets-to-supabase.mjs` — blijft voor disaster-recovery.
- VAPID-key + push-subscription-flow naar de browser — werkt al, ongewijzigd.
- Roadmap-features (Beheer-Notificaties, spelersprofiel, stats & inzicht, gamification, backup-automatisering) — eigen sub-projecten/specs.

## Achtergrond

Sub-projecten 1-5 hebben Supabase als parallelle backend opgezet en alle data
gemigreerd. De Angular-app draait via de feature-flag op Supabase (lokaal en
straks na deploy ook in productie). Maar Firebase Functions die scheduled
jobs en push-broadcasts uitvoeren lezen/schrijven nog Sheets. Na cutover gaat
geen nieuwe data meer naar Sheets, dus die Functions zouden tegen stale data
draaien. Ze moeten mee-cutover.

De gebruiker heeft de strikte eis: "Sheets mag niet meer gebruikt worden" —
dus naast porten van runtime-Functions ook de Sheets-endpoint-Functions weg
en de Frontend Sheets-adapters weg.

## Belangrijkste ontwerpkeuzes

### Service-role-key als Firebase Secret

Functions praten met Supabase als admin (bypassen RLS). De service-role-key
mag niet in de repo en niet in environment-variables die in logs verschijnen.
Firebase v2 Functions ondersteunen `defineSecret('SUPABASE_SERVICE_ROLE_KEY')`,
opgeslagen via `firebase functions:secrets:set ...`. De secret wordt aan de
Function beschikbaar gemaakt via runtime-options.

### Algoritme blijft, alleen data-laag verschuift

`team-logic.ts` heeft een team-balance-algoritme dat speler-ratings en
posities meeweegt. Dat algoritme blijft 100% identiek; alleen de plekken
waar 't nu uit Sheets leest (spelers, attendance, vorige match) en schrijft
(match-lineups, scoreboard-cell) worden vervangen door Supabase-queries.
Geen functioneel verschil voor eindgebruikers.

### Eén Supabase-client-helper voor Functions

Net zoals het Angular-project een `SupabaseClientService` heeft, krijgen
de Functions een `shared/supabase-client.ts` die `createClient<Database>(...)`
levert met de service-role-key. Functions importeren deze helper.

### Generated Database-types delen

De Angular-app heeft `src/app/types/database.types.ts` (gegenereerd via
`supabase gen types`). Functions zijn een aparte TypeScript-project, dus
ze hebben een eigen kopie nodig. Optie: opnieuw genereren in
`functions/src/types/database.types.ts`. Gebruikers van die types: alle
ge-porte Functions.

### Frontend cleanup als losstaand commit-blok

Alle frontend-deletes (Sheets-adapters, GoogleSheetsService, feature-flag,
About-page indicator, environment-flag) gebeuren in één commit nadat de
backend-port + deploy voltooid is. Volgorde: backend eerst (zodat de
gedeployde productie-app meteen tegen Supabase praat), dan frontend cleanup
(geen runtime-impact omdat het al verbroken pad is).

### Deploy-volgorde

1. Functions porten + lokaal builden + lokaal testen waar mogelijk.
2. Service-role-key als Firebase Secret instellen.
3. `firebase deploy --only functions` — productie-Functions draaien op Supabase.
4. Frontend cleanup-commits.
5. `ng deploy` — productie-Angular-app gaat live met clean build.
6. Manual smoke + verifieer scheduled-jobs draaien volgende cyclus.

### Geen rollback-plan in code

We accepteren dat na deploy "rollback" een handwerk is: redeploy van vorige
git-commit. Geen feature-flag voor backend-keuze meer (die was sub-project 4).
Gegeven dat alles getest is en data al op Supabase staat: rollback-risico
is laag.

## Componenten

### Aangepast / nieuw in `functions/src/`

| Bestand | Status | Wat |
|---|---|---|
| `shared/supabase-client.ts` | **Nieuw** | `createSupabaseClient()`-helper met service-role-key uit Firebase Secret |
| `types/database.types.ts` | **Nieuw** | `supabase gen types` output voor Functions-context |
| `notifications/send-push-to-all.ts` | Aangepast | reads → Supabase |
| `notifications/attendance-reminders.ts` | Aangepast | 5 sheet-reads + reminder-log-write → Supabase (incl. `reminder_log`-tabel) |
| `teams/team-logic.ts` | Aangepast | 4 Sheets-API-calls → Supabase |
| `teams/team-notification.ts` | Aangepast | 2 Sheets-API-calls → Supabase |
| `teams/team-generation.ts` | Mogelijk aangepast | controleer of er Sheets-calls zijn (geen direct, alleen via team-logic) |
| `teams/scheduled-generation.ts` | Onveranderd | doet alleen HTTP-call naar `teamGeneration`-endpoint |
| `sheets/` (folder met 5 files) | **Verwijderd** | endpoints niet meer aangeroepen |
| `shared/sheets-client.ts` | **Verwijderd** | google-auth helper, niet meer nodig |
| `shared/validate-sheet-request.ts` | **Verwijderd** | alleen door sheets/-handlers gebruikt |
| `config/constants.ts` | Aangepast | `SPREADSHEET_ID`, `SHEET_NAMES`, etc. weg, behalve wat AI-commentary nog gebruikt |
| `index.ts` | Aangepast | `export * from './sheets'` weg |
| `package.json` | Aangepast | `googleapis` weg, `@supabase/supabase-js` erbij |

### Aangepast / verwijderd in `src/app/`

| Bestand | Status |
|---|---|
| `services/data-sources/player-data-source.sheets.ts` + `.spec.ts` | **Verwijderd** |
| `services/data-sources/match-data-source.sheets.ts` + `.spec.ts` | **Verwijderd** |
| `services/data-sources/attendance-data-source.sheets.ts` + `.spec.ts` | **Verwijderd** |
| `services/data-sources/notification-data-source.sheets.ts` + `.spec.ts` | **Verwijderd** |
| `services/google-sheets-service.ts` | **Verwijderd** |
| `services/data-sources/active-backend.service.ts` + `.spec.ts` | **Verwijderd** |
| `services/data-sources/index.ts` | Aangepast (exports trimmen) |
| `app.module.ts` | Aangepast (factory-providers → plain useClass; ActiveBackendService import weg) |
| `components/about/about.component.ts` + `.html` | Aangepast (backendLabel-getter + paragraph weg) |
| `interfaces/IGoogleSheets.ts` | **Verwijderd** (alleen door GoogleSheetsService gebruikt) |
| `environments/environment.ts` + `.prod.ts` + 2 example-files | Aangepast (`dataSource`-veld weg, `spreadsheetId` weg, `firebaseBaseUrl` mag blijven voor AI-commentary endpoint) |

### Behouden ongewijzigd

- `ai/`-folder in functions
- `pipes/player-name.pipe.ts` (display-only, geen data-source)
- VAPID-config en push-subscription-flow in browser
- Migration script `scripts/migrate-sheets-to-supabase.mjs`

## Acceptance criteria

- [ ] **Backend ported**: 6 Functions lezen/schrijven Supabase, 0 referenties naar `getSheetsClient()` of `googleapis` blijven over.
- [ ] **Backend cleaned**: `sheets/`-folder, `sheets-client.ts`, `validate-sheet-request.ts` verwijderd. `package.json` heeft geen `googleapis` meer.
- [ ] **Service-role-key als Firebase Secret** ingesteld via `firebase functions:secrets:set SUPABASE_SERVICE_ROLE_KEY`. Niet in repo, niet in `.env.local` van Functions.
- [ ] **Functions builden en deployen** zonder type-errors.
- [ ] **Scheduled jobs** lopen succesvol (verifieerbaar in Firebase logs of via Supabase data-mutaties).
- [ ] **Frontend cleaned**: alle 4 `*.sheets.ts`-files weg, `GoogleSheetsService` weg, `ActiveBackendService` weg, About-page indicator weg.
- [ ] **`environment`-files** hebben geen `dataSource`-flag en geen `spreadsheetId` meer.
- [ ] **Test-suite blijft groen** (`npm test`).
- [ ] **Production build slaagt** (`ng build --configuration production`). Bundle-size warning verdwenen of substantieel verminderd.
- [ ] **Manual smoke** op productie-URL: klassement, wedstrijden, kalender, score, team-generator, push-notificatie-broadcast werken end-to-end.
- [ ] **Verifieer scheduled-jobs** binnen 24u na deploy: attendance-reminder fired (volgende wedstrijd <24u) of geen errors in logs voor de uurlijkse scheduler.

## Risico's en open punten

- **Algoritme-drift tussen client en server**: `team-logic.ts` (server) en `team-generate.service.ts` (client) zijn aparte implementaties. Tijdens deze port nemen we het bestaande server-algoritme over (alleen data-laag wijzigen). Drift is een bestaande gegeven, niet door deze sub-project verergerd. Mogelijk roadmap-item: één bron-of-truth voor het algoritme.

- **`reminder_log`-tabel**: schema heeft 'm al, maar de Sheets-versie van `attendance-reminders.ts` schrijft nu in een Sheets-tab. Port impliceert: schrijf reminder-rij naar `reminder_log` ipv `ReminderLog`-sheet. Dit aligneert met sub-project "Beheer-Notificaties" op de roadmap; we vullen 'm alvast met de echte data.

- **`SPREADSHEET_ID` constant**: wordt na deze sub-project alleen nog evt. gebruikt door AI-commentary? Audit nodig om zeker te weten dat 'ie helemaal weg kan.

- **Bundle-size warning**: na verwijderen van Sheets-adapters zou de initial bundle ~240 kB lichter moeten zijn. Verifieer en pas `angular.json`-budget eventueel terug naar de oude grens.

- **Push-broadcast bij team-generation**: `sendTeamGenerationNotification` haalt momenteel actieve players uit Sheets. Port → uit Supabase. Risico: sub-project 5 heeft 5 push_subscriptions gemigreerd, en de mapping naar player-id is correct gezet. Dubbel-check: actieve subscriptions van de migratie + nieuwe subs van na-migratie samen verwerken.

- **Secret-rotation**: het is goede praktijk om de service-role-key te rotaten zodra deze in Firebase staat. Beschouwen als follow-up actie na deploy.

- **AI-commentary endpoint**: `firebaseBaseUrl` blijft in environment voor AI-commentary calls vanuit de Angular-app. Verifieer dat die endpoint nog werkt (raakt geen Sheets, dus zou onafhankelijk moeten zijn).

## Tasks (preview voor plan)

1. Functions: `shared/supabase-client.ts` + `database.types.ts` + service-role-key Secret setup.
2. Functions: port `notifications/send-push-to-all.ts`.
3. Functions: port `notifications/attendance-reminders.ts` (incl. `reminder_log`-write).
4. Functions: port `teams/team-logic.ts` + `team-notification.ts`.
5. Functions: cleanup `sheets/`-folder + `shared/sheets-client.ts` + index-exports + package.json.
6. Functions: lokaal builden + deploy.
7. Frontend: cleanup Sheets-adapters + `GoogleSheetsService` + `ActiveBackendService` + About-page indicator + environment-flag.
8. Frontend: production build + smoke + `ng deploy`.
9. Production smoke + scheduled-jobs verifiëren binnen 24u.
