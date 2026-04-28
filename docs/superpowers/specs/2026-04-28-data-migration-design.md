# Supabase migratie — sub-project 5: eenmalige data-migratie Sheets → Supabase

Vijfde sub-project. Een Node-script dat live data uit Google Sheets
ophaalt (via de bestaande Firebase Functions) en in de Supabase-tabellen
schrijft. Sluit af met het automatisch omzetten van de data-source-flag
in `environment.ts`/`environment.prod.ts` van `'sheets'` naar `'supabase'`.

**Voorgangers:**
- Sub-project 1: schema (`docs/superpowers/specs/2026-04-28-supabase-schema-design.md`)
- Sub-project 2: data-source abstractielaag
- Sub-project 3: Supabase-implementaties
- Sub-project 4: feature flag (`docs/superpowers/specs/2026-04-28-data-source-feature-flag-design.md`)

## Scope

**In scope:**
- Een Node-script `scripts/migrate-sheets-to-supabase.mjs` dat:
  - Reads alle relevante Sheets-tabs via Firebase Functions (`/getSheetData`).
  - Transformeert naar Postgres-shape (id-resolve, lineup-parse, etc.).
  - Schrijft naar Supabase via `@supabase/supabase-js` met de service-role-key (bypassed RLS).
  - `--dry-run` (default) en `--write` modes.
  - `--wipe-first` als opt-in flag voor herhaalbare runs.
  - Pre-flight checks (env vars, doel-tabellen leeg of `--wipe-first`).
  - Sanity-check summary na succesvolle migratie.
  - Auto-flip van de feature-flag in beide environment-files na succes.
- Migratie-volgorde respecteert FK's: `players` → `matches` → `match_lineups` → `attendance` → `push_subscriptions`.
- ID-preservering: `players.id` matcht 1-based dataRow-index uit Sheets; `matches.id` matcht de waarde uit kolom A. `setval(seq, max(id))` na elke insert zodat nieuwe inserts vanaf max+1 doortellen.

**Out of scope:**
- Migratie van `latest_teams`-data (wordt opnieuw gegenereerd door team-generator).
- Migratie van `reminder_log` (geen bron-data; de tabel blijft leeg tot beheer-scherm gebouwd is).
- Live data-sync of bidirectional replication.
- Web UI voor de migratie — script is CLI-only.
- Cutover (testen + deployen) — sub-project 6.
- Sheets/Functions-cleanup — sub-project 7.

## Achtergrond

Sub-projecten 1-4 leveren een werkende Supabase-stack op naast de
Sheets-stack, met runtime-flag om te wisselen. Het Supabase-project is
nog leeg. Voor cutover moet alle bestaande data uit Sheets éénmalig
overgezet worden.

De data-volumes zijn klein: ~30 spelers, ~150-300 wedstrijden, ~3000
attendance-rijen, paar tientallen push-subscriptions. Een script dat
in seconden draait is voldoende. Geen streaming/batching nodig.

## Belangrijkste ontwerpkeuzes

### Live read uit Sheets via Firebase Functions

Hetzelfde pad als de Angular-app: HTTP-call naar `firebaseBaseUrl/getSheetData?spreadsheetId=...&sheetName=...`. Geen Google-Auth-setup, geen CSV-export-juggling. Vereiste env vars: `FIREBASE_BASE_URL`, `SPREADSHEET_ID`.

### Service-role-key voor Supabase-writes

Bulk-writes met expliciete id-waardes vereisen het bypassen van RLS. De service-role-key kan dat. Lees uit env var `SUPABASE_SERVICE_ROLE_KEY`. Niet committen, niet loggen, niet hardcoden.

### ID-preservering

- **Players**: id = sheet-dataRow-index (1-based, header overgeslagen, vóór filter op lege namen). Matcht wat `SheetsPlayerDataSource` doet.
- **Matches**: id = waarde uit Sheets-kolom A (`Wedstrijden.id`). Skip rijen zonder geldige id.
- **Match_lineups, attendance, push_subscriptions**: id = bigserial autoincrement (geen externe referenties).

Na inserts: `SELECT setval('players_id_seq', max(id))` en hetzelfde voor `matches_id_seq`. Geeft Postgres correcte volgnummers voor toekomstige inserts.

### Veilige defaults

- **`--dry-run` is de default**. Read en transform alle data, log wat geschreven zou worden, maar doe geen Supabase-writes. Eerst een dry-run, dan met `--write` echt.
- **`--wipe-first` is opt-in**. Zonder die flag: pre-flight checkt of doel-tabellen leeg zijn; zo niet, weigert. Met de flag: script wist eerst alles in veilige volgorde, dan import. Voorkomt onbedoelde wipes; maakt herhaalbare runs mogelijk.
- **Auto-flip is idempotent**. Alleen schrijven als de huidige waarde `'sheets'` is.

### Foutafhandeling — best-effort, geen abort

- **Onvindbare speler bij wedstrijd-mapping** (zlatan-naam matcht geen players-rij): warning, FK op `null`, doorgaan.
- **Onvindbare wedstrijd-datum bij attendance**: warning, skip die rij.
- **Wedstrijd-rij zonder geldige id**: warning, skip rij volledig (incl. lineup-parsing).
- **Onbekende speler in lineup-string**: warning, skip die player-id, andere players in dezelfde team blijven mee.

Aan het eind een **summary**:
```
=== Migratie summary ===
Players:       30 ingelezen, 30 geschreven, 0 warnings
Matches:      152 ingelezen, 151 geschreven, 1 warnings (1 zonder id geskipt)
Lineups:     2278 geschreven (uit 151 wedstrijden)
Attendance:  3047 ingelezen, 3045 geschreven, 2 warnings (2 onvindbare datums)
Push subs:     12 ingelezen, 12 geschreven
=== Sanity checks ===
players count match: ✓
matches count match: ✓
lineups count match: ✓
attendance count match: ✓
=== Feature flag ===
environment.ts:      'sheets' → 'supabase' ✓
environment.prod.ts: 'sheets' → 'supabase' ✓
```

### Geen rollback-mechaniek

Als het script halverwege faalt: fix het probleem, run opnieuw met `--wipe-first`. Geen complex savepoint-systeem nodig.

## Components

### Nieuw bestand

```
scripts/migrate-sheets-to-supabase.mjs
```

### Aangepaste bestanden (na succesvolle run)

```
src/environments/environment.ts        # dataSource: 'sheets' → 'supabase'
src/environments/environment.prod.ts   # idem
```

(Beide gitignored. De wijziging blijft op de lokale machine totdat de
gebruiker ze handmatig deployt.)

### Niet aangeraakt

```
package.json   # @supabase/supabase-js is al dep van sub-project 1
```

Geen extra npm-installs nodig.

## Data-flow

```
node scripts/migrate-sheets-to-supabase.mjs --write [--wipe-first]
  ↓
1. Pre-flight
   - Lees env vars (URL, service-role-key, firebase URL, spreadsheet id)
   - Connect Supabase met service-role
   - Check tabel-counts; weiger als niet-leeg en geen --wipe-first
   - Print "DRY-RUN" / "WRITE MODE" + "WIPE FIRST" banner
   ↓
2. Wipe (als flag)
   DELETE FROM attendance;
   DELETE FROM match_lineups;
   DELETE FROM push_subscriptions;
   DELETE FROM matches;
   DELETE FROM players;
   ↓
3. Players
   GET getSheetData?sheetName=Spelers
   transform naar { id, name, position, actief }
   INSERT INTO players (id, name, position, actief) VALUES (...) — explicit ids
   setval('players_id_seq', max(id))
   ↓
4. Matches
   GET getSheetData?sheetName=Wedstrijden
   transform naar { id, date, season-laat-Postgres-genereren, location, team_generation,
                    score_white, score_red, zlatan_player_id, ventiel_player_id, voorbeschouwing }
   (zlatan/ventiel: name → id-lookup tegen players)
   INSERT INTO matches — explicit ids, season weglaten (generated column)
   setval('matches_id_seq', max(id))
   ↓
5. Match_lineups
   Voor elke match: parse teamWit en teamRood (comma-split, trim, name-lookup)
   Build rows [{ match_id, player_id, team }, ...]
   INSERT INTO match_lineups (geen id; PK is composite (match_id, player_id))
   ↓
6. Attendance
   GET getSheetData?sheetName=Aanwezigheid
   transform per rij:
     - date string → match_id via lookup tegen matches
     - playerName → player_id
     - status passthrough
   INSERT INTO attendance (geen explicit id)
   ↓
7. Push subscriptions
   GET getSheetData?sheetName=Notificaties
   transform per rij:
     - playerName → player_id (nullable)
     - andere velden direct
   INSERT INTO push_subscriptions (geen explicit id; endpoint is unique)
   ↓
8. Sanity checks
   COUNT(*) per tabel vergelijken met source-counts
   Fail-loud als mismatch
   ↓
9. Auto-flip feature-flag
   Read environment.ts, vervang `dataSource: 'sheets'` → `dataSource: 'supabase'`
   Read environment.prod.ts, idem
   Skip als waarde al 'supabase'
   ↓
10. Final summary print
```

## Configuratie

Env vars die het script verwacht:

| Var | Bron |
|---|---|
| `SUPABASE_URL` | `environment.ts` value, of zelf invullen |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Studio → Project Settings → API |
| `FIREBASE_BASE_URL` | `environment.ts` value |
| `SPREADSHEET_ID` | `environment.ts` value |

Aan te roepen als:

```bash
SUPABASE_URL=https://xxx.supabase.co \
SUPABASE_SERVICE_ROLE_KEY=eyJ... \
FIREBASE_BASE_URL=https://europe-west1-zaalvoetbal-doorn-74a8c.cloudfunctions.net \
SPREADSHEET_ID=11xN1m371F8Tj0bX6TTRgnL_x_1_pXipox3giBuuUK1I \
node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```

(Of via een lokale `.env`-loader in het script — `dotenv` als devDep, `.env` gitignored.)

## Test-strategie

Script is een one-shot CLI-tool. Geen unit-tests; we vertrouwen op:

1. **Dry-run-output review**: voor de echte run, controleert de gebruiker
   visueel het summary en eventuele warnings.
2. **Sanity-checks na write**: counts matchen tussen bron en doel,
   anders failt het script luid.
3. **Smoke-test met UI**: na de migratie zet de gebruiker `localStorage.zd-backend = 'supabase'`,
   reload, en klikt door — verifieert visueel dat data klopt.

## Acceptance criteria

- [ ] Script `scripts/migrate-sheets-to-supabase.mjs` bestaat en draait via Node.
- [ ] `--dry-run` is default; `--write` triggert echte writes.
- [ ] `--wipe-first` wist tabellen in correcte volgorde voordat 'ie schrijft.
- [ ] Pre-flight refused mode wanneer `--write` zonder `--wipe-first` op niet-lege tabellen.
- [ ] Players krijgen ids = 1-based dataRow-index; sequence wordt gezet.
- [ ] Matches krijgen ids = Sheets-kolom-A waarde; sequence wordt gezet.
- [ ] Match_lineups bevat één rij per (match, player, team)-combinatie uit comma-separated teamWit/teamRood.
- [ ] Attendance bevat één rij per (match, player)-paar uit `Aanwezigheid`-tab.
- [ ] Push_subscriptions migreren met juiste FK naar player.
- [ ] Sanity-check summary toont counts per tabel + ✓/✗ per check.
- [ ] Bij succes: `dataSource: 'sheets'` → `'supabase'` in `environment.ts` én `environment.prod.ts`. Idempotent.
- [ ] Geen secrets in commit-history (service-role-key alleen via env var of lokale `.env`).
- [ ] Script werkt end-to-end op het remote Supabase-project; handmatige verificatie via Studio en de app.

## Risico's en open punten

- **Service-role-key in env**: jij beheert hem. Niet in repo, niet in transcript. Optioneel: `dotenv` met `.env` (gitignored).
- **Duplicate-name resolution**: als twee spelers identieke namen hebben (case-insensitive trim) wordt er één gevonden bij name-lookup. `players.name UNIQUE` in het schema voorkomt dit aan de Supabase-kant; bij schrijven faalt de tweede. Sheets kan ze in theorie wel hebben — pre-flight checkt op duplicates en weigert.
- **Datum-parsing in Aanwezigheid**: Sheets gebruikt `YYYY-MM-DD`-strings; Postgres `date`-kolom verwacht datzelfde. Direct passthrough zou moeten werken; bij Excel-serial-fallback (zoals beschreven in CLAUDE.md) failt de match-lookup en gaat de attendance-rij naar de skip-warning.
- **Sequence-collisions**: als max(id) uit de migratie hoger is dan de auto-allocated waarde, is `setval` essentieel; vergeten betekent dat de eerste insert van de app daarna probeert id 1 te gebruiken en op een conflict knalt. Tests dekken dit door na elke explicit-id-insert de setval te draaien.
- **Voorbeschouwing-velden**: `Wedstrijden`-kolom K kan AI-tekst bevatten. Lange waarden gewoon doorzetten naar `voorbeschouwing text`-kolom; geen truncation.
- **Push-subscription endpoints kunnen verlopen zijn**: dat is een runtime-fact; we migreren de `active`-vlag mee. Verlopen subs worden bij de eerstvolgende sendPush vanzelf gemarkeerd.
