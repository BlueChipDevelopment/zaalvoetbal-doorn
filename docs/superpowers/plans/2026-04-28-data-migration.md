# Data-migratie Sheets → Supabase — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bouw een one-shot Node-script dat live data uit Google Sheets ophaalt (via de bestaande Firebase Functions) en in de Supabase-tabellen schrijft, met `--dry-run` als veilige default, `--wipe-first` voor herhaalbaarheid, sanity-checks na de import, en auto-flip van de feature-flag in de environment-files.

**Architecture:** Eén script in `scripts/migrate-sheets-to-supabase.mjs` (ESM, Node 18+). Reads via HTTP fetch tegen `firebaseBaseUrl/getSheetData`, writes via `@supabase/supabase-js` met service-role-key (bypassed RLS). Migration-volgorde respecteert FK's: `players` → `matches` → `match_lineups` → `attendance` → `push_subscriptions`. ID-preservering voor players (1-based dataRow-index) en matches (Sheets-kolom-A). `setval(seq, max(id))` na elke explicit-id insert. Foutafhandeling is best-effort: warning + skip per probleemrij, geen abort.

**Tech Stack:** Node.js 18+ (built-in fetch), `@supabase/supabase-js`, ESM, `node:fs/promises` voor de feature-flag-rewrite.

**Bron-spec:** `docs/superpowers/specs/2026-04-28-data-migration-design.md`.

---

## File overview

Nieuw:
- `scripts/migrate-sheets-to-supabase.mjs`

Aangepast (alleen door de script-run, niet handmatig):
- `src/environments/environment.ts` (gitignored — auto-flip van `dataSource`)
- `src/environments/environment.prod.ts` (gitignored — auto-flip)

## Test-strategie

Geen unit-tests voor het script — het is een one-shot CLI-tool met externe dependencies (HTTP, Supabase service-role) die fragiel zijn om te mocken. Verificatie per task is manueel:
- Dry-run output review.
- Sanity-checks aan het eind (count-comparisons).
- Steekproef in Supabase Studio.
- UI-smoke-test na de migratie via de feature-flag.

Iedere task bouwt het script verder uit; het draait altijd minstens in dry-run-mode na elke task. Pas vanaf de laatste task wordt een echte write uitgevoerd.

---

### Task 1: Script-skeleton — args, env vars, clients, mode-banner

**Files:**
- Create: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Script aanmaken**

Maak `scripts/migrate-sheets-to-supabase.mjs`:

```js
#!/usr/bin/env node
/**
 * Eenmalig data-migratie van Google Sheets naar Supabase.
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
 *   FIREBASE_BASE_URL=... SPREADSHEET_ID=... \
 *   node scripts/migrate-sheets-to-supabase.mjs [--write] [--wipe-first]
 *
 * Default mode is --dry-run: alle reads en transforms draaien, geen Supabase-writes.
 * Use --write om echt te schrijven.
 * Use --wipe-first (alleen samen met --write) om bestaande target-data te wissen.
 */

import { createClient } from '@supabase/supabase-js';

function parseArgs() {
  const flags = new Set(process.argv.slice(2));
  return {
    write: flags.has('--write'),
    wipeFirst: flags.has('--wipe-first'),
  };
}

function loadEnv() {
  const required = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'FIREBASE_BASE_URL', 'SPREADSHEET_ID'];
  const missing = required.filter(k => !process.env[k]);
  if (missing.length > 0) {
    console.error(`Missing required env vars: ${missing.join(', ')}`);
    process.exit(1);
  }
  return {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    FIREBASE_BASE_URL: process.env.FIREBASE_BASE_URL,
    SPREADSHEET_ID: process.env.SPREADSHEET_ID,
  };
}

function printBanner(args) {
  const lines = [
    '',
    '=== Sheets → Supabase migratie ===',
    `Mode:  ${args.write ? 'WRITE' : 'DRY-RUN'}`,
    `Wipe:  ${args.wipeFirst ? 'YES (target data wordt eerst gewist)' : 'NO'}`,
    '',
  ];
  console.log(lines.join('\n'));
}

async function main() {
  const args = parseArgs();
  const env = loadEnv();
  printBanner(args);

  if (args.wipeFirst && !args.write) {
    console.error('--wipe-first vereist --write. Niets gedaan.');
    process.exit(1);
  }

  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

  // Connectivity smoke-check
  const { error } = await supabase.from('players').select('id', { count: 'exact', head: true });
  if (error) {
    console.error('Supabase connectivity failed:', error.message);
    process.exit(1);
  }
  console.log('Supabase connectivity OK.');

  // Volgende tasks vullen hier de migratie-stappen in.
  console.log('\n(stub: nog geen migratie-logica geïmplementeerd)');
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
```

- [ ] **Step 2: Script runnable maken**

Bestand is via Node aanroepbaar; geen `chmod` nodig op Windows. Verifieer met:

```bash
node scripts/migrate-sheets-to-supabase.mjs
```

Expected: error "Missing required env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, FIREBASE_BASE_URL, SPREADSHEET_ID".

- [ ] **Step 3: Met env vars runnen (dummy/echt)**

Run met de echte waardes uit `environment.ts`:

```bash
SUPABASE_URL='https://tfbwkmqnzwbsvgscixsg.supabase.co' \
SUPABASE_SERVICE_ROLE_KEY='<paste from password manager>' \
FIREBASE_BASE_URL='https://europe-west1-zaalvoetbal-doorn-74a8c.cloudfunctions.net' \
SPREADSHEET_ID='11xN1m371F8Tj0bX6TTRgnL_x_1_pXipox3giBuuUK1I' \
node scripts/migrate-sheets-to-supabase.mjs
```

Expected output:
```
=== Sheets → Supabase migratie ===
Mode:  DRY-RUN
Wipe:  NO

Supabase connectivity OK.

(stub: nog geen migratie-logica geïmplementeerd)
```

- [ ] **Step 4: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: skeleton + env-loading + Supabase connect."
```

---

### Task 2: Read-helpers per Sheets-tab

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Read-helpers toevoegen**

Open `scripts/migrate-sheets-to-supabase.mjs`. Voeg vóór `async function main()` toe:

```js
async function readSheet(env, sheetName) {
  const url = `${env.FIREBASE_BASE_URL}/getSheetData?spreadsheetId=${env.SPREADSHEET_ID}&sheetName=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Sheet read failed for ${sheetName}: HTTP ${res.status}`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error(`Sheet read for ${sheetName} returned non-array: ${typeof data}`);
  }
  return data;
}

function sanitize(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function parseBoolean(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const v = value.toLowerCase().trim();
    return v === 'ja' || v === 'true' || v === '1';
  }
  if (typeof value === 'number') return value === 1;
  return false;
}

function parseScore(value) {
  if (value === null || value === undefined || value === '') return null;
  const parsed = parseInt(String(value), 10);
  return isNaN(parsed) ? null : parsed;
}
```

- [ ] **Step 2: Read-helpers in `main()` aanroepen om te verifiëren**

In `main()`, vervang de regel `// Volgende tasks vullen ...` en de stub-log door:

```js
  console.log('Reading source data from Sheets...');
  const rawSpelers = await readSheet(env, 'Spelers');
  const rawWedstrijden = await readSheet(env, 'Wedstrijden');
  const rawAanwezigheid = await readSheet(env, 'Aanwezigheid');
  const rawNotificaties = await readSheet(env, 'Notificaties');
  console.log(`  Spelers:       ${rawSpelers.length - 1} rijen (excl. header)`);
  console.log(`  Wedstrijden:   ${rawWedstrijden.length - 1} rijen (excl. header)`);
  console.log(`  Aanwezigheid:  ${rawAanwezigheid.length - 1} rijen (excl. header)`);
  console.log(`  Notificaties:  ${rawNotificaties.length - 1} rijen (excl. header)`);

  console.log('\n(stub: nog geen migratie-logica geïmplementeerd)');
```

- [ ] **Step 3: Run en verifieer**

Run het script met env vars (zie Task 1 Step 3):

```bash
SUPABASE_URL='...' SUPABASE_SERVICE_ROLE_KEY='...' \
FIREBASE_BASE_URL='...' SPREADSHEET_ID='...' \
node scripts/migrate-sheets-to-supabase.mjs
```

Expected: connectivity OK, gevolgd door 4 regels met read-counts. Counts moeten plausibel zijn (~30 spelers, paar honderd wedstrijden, paar duizend attendance, tientallen notificaties).

- [ ] **Step 4: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: read-helpers + source-data inventarisatie."
```

---

### Task 3: Pre-flight checks + wipe-first logic

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Pre-flight + wipe toevoegen**

Voeg vóór `async function main()` deze functies toe (na de helpers uit Task 2):

```js
async function tableCount(supabase, table) {
  const { count, error } = await supabase.from(table).select('*', { count: 'exact', head: true });
  if (error) throw new Error(`Could not count ${table}: ${error.message}`);
  return count ?? 0;
}

async function preFlight(supabase, args) {
  const tables = ['players', 'matches', 'match_lineups', 'attendance', 'push_subscriptions'];
  const counts = {};
  for (const t of tables) {
    counts[t] = await tableCount(supabase, t);
  }
  const nonEmpty = tables.filter(t => counts[t] > 0);
  console.log('Doel-tabellen huidige counts:');
  for (const t of tables) {
    console.log(`  ${t}: ${counts[t]}`);
  }
  if (args.write && nonEmpty.length > 0 && !args.wipeFirst) {
    console.error('\nERROR: doel-tabellen niet leeg en --wipe-first niet meegegeven.');
    console.error('Tabellen met data:', nonEmpty.join(', '));
    console.error('Run met --wipe-first om eerst te wissen, of leeg ze handmatig in Studio.');
    process.exit(1);
  }
}

async function wipeAll(supabase) {
  console.log('\nWipe: bestaande data verwijderen...');
  // Volgorde respecteert FK's: kinderen eerst.
  const order = ['attendance', 'match_lineups', 'push_subscriptions', 'matches', 'players'];
  for (const t of order) {
    const { error } = await supabase.from(t).delete().not('id', 'is', null);
    if (error) throw new Error(`Wipe ${t} failed: ${error.message}`);
    console.log(`  ${t} gewist`);
  }
}
```

(`match_lineups` heeft geen `id`-kolom maar wel een composite PK. De `delete().not('id', 'is', null)` filtert op een non-existing column en zou error geven. Aanpassen voor match_lineups specifiek:)

Vervang het `for`-blok in `wipeAll` door:

```js
  for (const t of order) {
    const filterColumn = t === 'match_lineups' ? 'match_id' : 'id';
    const { error } = await supabase.from(t).delete().not(filterColumn, 'is', null);
    if (error) throw new Error(`Wipe ${t} failed: ${error.message}`);
    console.log(`  ${t} gewist`);
  }
```

(Trick: Supabase weigert een `delete()` zonder filter als safety-net; `not(col, is, null)` matcht alle rows zonder een echte filter te zijn.)

- [ ] **Step 2: Pre-flight + wipe in `main()` invoegen**

Open `main()` en voeg deze regels toe direct ná de connectivity-check ("Supabase connectivity OK."):

```js
  await preFlight(supabase, args);
  if (args.wipeFirst && args.write) {
    await wipeAll(supabase);
  }
```

- [ ] **Step 3: Run dry-run om counts te zien**

```bash
SUPABASE_URL='...' SUPABASE_SERVICE_ROLE_KEY='...' \
FIREBASE_BASE_URL='...' SPREADSHEET_ID='...' \
node scripts/migrate-sheets-to-supabase.mjs
```

Expected:
```
Mode:  DRY-RUN
Wipe:  NO
Supabase connectivity OK.
Doel-tabellen huidige counts:
  players: 0
  matches: 0
  match_lineups: 0
  attendance: 0
  push_subscriptions: 0
Reading source data from Sheets...
  Spelers:       30 rijen (excl. header)
  ...
```

- [ ] **Step 4: Run met `--write` zonder `--wipe-first` op niet-lege DB (optioneel verifiëren)**

Als de DB nog leeg is mag je deze stap skippen. Anders: run met `--write` en zonder `--wipe-first` en controleer dat 'ie weigert.

- [ ] **Step 5: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: pre-flight + wipe-first logic."
```

---

### Task 4: Players migration

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Players-transform en write toevoegen**

Voeg deze functies toe na `wipeAll`:

```js
const SPELER_COLUMNS = { NAME: 0, POSITION: 1, ACTIEF: 2 };

function transformPlayers(rawSpelers) {
  // Skip header (index 0). Id = 1-based dataRow-index, vóór filter.
  const players = rawSpelers.slice(1)
    .map((row, idx) => ({ row, dataRowIndex: idx + 1 }))
    .filter(({ row }) => row && row[SPELER_COLUMNS.NAME])
    .map(({ row, dataRowIndex }) => ({
      id: dataRowIndex,
      name: sanitize(row[SPELER_COLUMNS.NAME]),
      position: sanitize(row[SPELER_COLUMNS.POSITION]) || '',
      actief: parseBoolean(row[SPELER_COLUMNS.ACTIEF]),
    }));

  // Sanity: position moet 'Speler' of 'Keeper' zijn (CHECK constraint in schema).
  for (const p of players) {
    if (p.position !== 'Speler' && p.position !== 'Keeper') {
      console.warn(`  Player "${p.name}" heeft ongeldige position "${p.position}", forceer naar 'Speler'`);
      p.position = 'Speler';
    }
  }

  // Sanity: duplicate names (UNIQUE in schema).
  const names = new Set();
  for (const p of players) {
    if (names.has(p.name.toLowerCase())) {
      throw new Error(`Duplicate player name (case-insensitive): "${p.name}". Kan niet importeren — fix de Spelers-sheet eerst.`);
    }
    names.add(p.name.toLowerCase());
  }

  return players;
}

async function writePlayers(supabase, players, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${players.length} players inserten`);
    return players.length;
  }
  const { error } = await supabase.from('players').insert(players);
  if (error) throw new Error(`Insert players failed: ${error.message}`);

  // Sequence vooruit zetten voor toekomstige inserts vanuit de app.
  const maxId = Math.max(...players.map(p => p.id));
  const { error: seqErr } = await supabase.rpc('setval_seq', { seq_name: 'players_id_seq', new_value: maxId });
  // setval-RPC bestaat misschien niet — fallback via raw SQL niet beschikbaar via supabase-js.
  // Workaround: Postgres serial-sequence corrigeert zichzelf bij volgende NEXTVAL als max(id) hoger is dan currval —
  // niet altijd waar. Beter: doe deze stap handmatig na de migratie via SQL Editor.
  if (seqErr) {
    console.warn(`  Sequence-update via RPC niet beschikbaar (${seqErr.message}).`);
    console.warn(`  Run handmatig in Studio: SELECT setval('players_id_seq', ${maxId});`);
  } else {
    console.log(`  Sequence players_id_seq → ${maxId}`);
  }

  return players.length;
}
```

- [ ] **Step 2: Players-write integreren in `main()`**

Voeg in `main()` na het inlezen van de ruwe sheets, vóór de stub-log, toe:

```js
  console.log('\n=== Players ===');
  const players = transformPlayers(rawSpelers);
  console.log(`  Getransformeerd: ${players.length} players`);
  const playersWritten = await writePlayers(supabase, players, args);
  console.log(`  Geschreven: ${playersWritten}`);
```

Verwijder de stub-log (`console.log('\n(stub: ...');`).

- [ ] **Step 3: Dry-run-test**

```bash
SUPABASE_URL='...' SUPABASE_SERVICE_ROLE_KEY='...' \
FIREBASE_BASE_URL='...' SPREADSHEET_ID='...' \
node scripts/migrate-sheets-to-supabase.mjs
```

Expected: regelsetje met "(dry-run) zou X players inserten". Geen daadwerkelijke writes.

- [ ] **Step 4: Echte run + verificatie in Studio**

Run met `--write --wipe-first`:

```bash
... node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```

Open Supabase Studio → Table Editor → players. Verifieer:
- Aantal rijen matcht.
- IDs zijn 1, 2, 3, ... (sequentieel, gebaseerd op sheet-order).
- Names trimmed.
- Position alleen 'Speler' of 'Keeper'.

Als de RPC-warning komt: run in SQL Editor:
```sql
SELECT setval('players_id_seq', (SELECT max(id) FROM players));
```

- [ ] **Step 5: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: players-import met id-preservering."
```

---

### Task 5: Matches + match_lineups migration

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Wedstrijd-helpers toevoegen**

Voeg toe na `writePlayers`:

```js
const WEDSTRIJD_COLUMNS = {
  ID: 0, SEIZOEN: 1, DATUM: 2, TEAM_WIT: 3, TEAM_ROOD: 4,
  TEAM_GENERATIE: 5, SCORE_WIT: 6, SCORE_ROOD: 7,
  ZLATAN: 8, VENTIEL: 9, VOORBESCHOUWING: 10,
};

/**
 * Convert "DD-MM-YYYY" naar ISO "YYYY-MM-DD". Returnt null bij parse-failure.
 */
function parseDateToIso(value) {
  if (!value) return null;
  const s = String(value).trim();
  // Verwacht DD-MM-YYYY
  const m = s.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (!m) return null;
  const dd = m[1].padStart(2, '0');
  const mm = m[2].padStart(2, '0');
  const yyyy = m[3];
  return `${yyyy}-${mm}-${dd}`;
}

function nameToId(name, players) {
  if (!name) return null;
  const trimmed = String(name).trim().toLowerCase();
  if (!trimmed) return null;
  const found = players.find(p => p.name.trim().toLowerCase() === trimmed);
  return found ? found.id : null;
}

function transformMatches(rawWedstrijden, players) {
  const warnings = [];
  const matches = [];
  rawWedstrijden.slice(1).forEach((row, idx) => {
    if (!row || row.length === 0) return;
    const id = parseScore(row[WEDSTRIJD_COLUMNS.ID]);
    if (id === null || id <= 0) {
      warnings.push(`rij ${idx + 2}: geen geldig id, geskipt`);
      return;
    }
    const dateIso = parseDateToIso(row[WEDSTRIJD_COLUMNS.DATUM]);
    if (!dateIso) {
      warnings.push(`rij ${idx + 2} (id=${id}): geen geldige datum "${row[WEDSTRIJD_COLUMNS.DATUM]}", geskipt`);
      return;
    }

    const zlatanName = sanitize(row[WEDSTRIJD_COLUMNS.ZLATAN]);
    const ventielName = sanitize(row[WEDSTRIJD_COLUMNS.VENTIEL]);
    const zlatanPlayerId = zlatanName ? nameToId(zlatanName, players) : null;
    const ventielPlayerId = ventielName ? nameToId(ventielName, players) : null;
    if (zlatanName && zlatanPlayerId === null) {
      warnings.push(`match ${id}: zlatan-naam "${zlatanName}" niet gevonden in players`);
    }
    if (ventielName && ventielPlayerId === null) {
      warnings.push(`match ${id}: ventiel-naam "${ventielName}" niet gevonden in players`);
    }

    matches.push({
      id,
      date: dateIso,
      location: 'Sporthal Steinheim',
      // season is GENERATED ALWAYS — niet meesturen
      team_generation: sanitize(row[WEDSTRIJD_COLUMNS.TEAM_GENERATIE]) || null,
      score_white: parseScore(row[WEDSTRIJD_COLUMNS.SCORE_WIT]),
      score_red: parseScore(row[WEDSTRIJD_COLUMNS.SCORE_ROOD]),
      zlatan_player_id: zlatanPlayerId,
      ventiel_player_id: ventielPlayerId,
      voorbeschouwing: sanitize(row[WEDSTRIJD_COLUMNS.VOORBESCHOUWING]) || null,
      // Bewaar de raw team-strings tijdelijk voor lineup-extractie:
      _teamWitNames: sanitize(row[WEDSTRIJD_COLUMNS.TEAM_WIT]),
      _teamRoodNames: sanitize(row[WEDSTRIJD_COLUMNS.TEAM_ROOD]),
    });
  });
  return { matches, warnings };
}

function buildMatchLineups(matches, players) {
  const lineups = [];
  const warnings = [];
  for (const m of matches) {
    const parseTeam = (raw, team) => {
      if (!raw) return [];
      const names = String(raw).split(',').map(n => n.trim()).filter(Boolean);
      const ids = [];
      for (const n of names) {
        const pid = nameToId(n, players);
        if (pid === null) {
          warnings.push(`match ${m.id} ${team}: naam "${n}" niet gevonden in players`);
        } else {
          ids.push(pid);
        }
      }
      return ids;
    };
    const witIds = parseTeam(m._teamWitNames, 'wit');
    const roodIds = parseTeam(m._teamRoodNames, 'rood');
    for (const pid of witIds) lineups.push({ match_id: m.id, player_id: pid, team: 'wit' });
    for (const pid of roodIds) lineups.push({ match_id: m.id, player_id: pid, team: 'rood' });
  }
  return { lineups, warnings };
}

async function writeMatches(supabase, matches, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${matches.length} matches inserten`);
    return matches.length;
  }
  // Strip de _teamX velden uit het te-inserten object — supabase-js fail anders met kolom-niet-gevonden.
  const cleaned = matches.map(m => {
    const { _teamWitNames, _teamRoodNames, ...rest } = m;
    return rest;
  });
  // Insert in chunks van 200 voor stabiliteit.
  for (let i = 0; i < cleaned.length; i += 200) {
    const chunk = cleaned.slice(i, i + 200);
    const { error } = await supabase.from('matches').insert(chunk);
    if (error) throw new Error(`Insert matches chunk ${i} failed: ${error.message}`);
  }
  // Sequence
  const maxId = Math.max(...matches.map(m => m.id));
  const { error: seqErr } = await supabase.rpc('setval_seq', { seq_name: 'matches_id_seq', new_value: maxId });
  if (seqErr) {
    console.warn(`  Sequence-update via RPC niet beschikbaar (${seqErr.message}).`);
    console.warn(`  Run handmatig in Studio: SELECT setval('matches_id_seq', ${maxId});`);
  } else {
    console.log(`  Sequence matches_id_seq → ${maxId}`);
  }
  return matches.length;
}

async function writeMatchLineups(supabase, lineups, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${lineups.length} lineup-rijen inserten`);
    return lineups.length;
  }
  for (let i = 0; i < lineups.length; i += 500) {
    const chunk = lineups.slice(i, i + 500);
    const { error } = await supabase.from('match_lineups').insert(chunk);
    if (error) throw new Error(`Insert match_lineups chunk ${i} failed: ${error.message}`);
  }
  return lineups.length;
}
```

- [ ] **Step 2: Matches-blok in `main()` toevoegen**

Voeg na het Players-blok in `main()` toe:

```js
  console.log('\n=== Matches ===');
  const { matches, warnings: matchWarnings } = transformMatches(rawWedstrijden, players);
  console.log(`  Getransformeerd: ${matches.length} matches`);
  for (const w of matchWarnings) console.warn(`  WARN: ${w}`);
  const matchesWritten = await writeMatches(supabase, matches, args);
  console.log(`  Geschreven: ${matchesWritten}`);

  console.log('\n=== Match lineups ===');
  const { lineups, warnings: lineupWarnings } = buildMatchLineups(matches, players);
  console.log(`  Getransformeerd: ${lineups.length} lineup-rijen`);
  for (const w of lineupWarnings) console.warn(`  WARN: ${w}`);
  const lineupsWritten = await writeMatchLineups(supabase, lineups, args);
  console.log(`  Geschreven: ${lineupsWritten}`);
```

- [ ] **Step 3: Dry-run + echte run**

Dry-run eerst:
```bash
... node scripts/migrate-sheets-to-supabase.mjs
```

Expected: counts plausibel, wellicht een paar warnings voor onvindbare namen.

Echte run:
```bash
... node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```

Verifieer in Studio:
- `matches` rijen kloppen.
- `match_lineups` rijen kloppen (~aantal_wedstrijden × ~9 spelers = paar duizend).
- Spot-check één match: scores en zlatan-FK kloppen.

Run de sequence-fix in SQL Editor als de RPC-warning kwam:
```sql
SELECT setval('matches_id_seq', (SELECT max(id) FROM matches));
```

- [ ] **Step 4: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: matches + match_lineups (incl. zlatan/ventiel resolution)."
```

---

### Task 6: Attendance migration

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Attendance-helpers toevoegen**

Voeg toe na `writeMatchLineups`:

```js
const AANWEZIGHEID_COLUMNS = { DATE: 0, PLAYER_NAME: 1, STATUS: 2, TIMESTAMP: 3 };

function transformAttendance(rawAanwezigheid, matches, players) {
  const warnings = [];
  const records = [];
  // Bouw lookup-maps voor performance.
  const matchByDate = new Map();
  for (const m of matches) {
    matchByDate.set(m.date, m.id);
  }
  const playerByName = new Map();
  for (const p of players) {
    playerByName.set(p.name.trim().toLowerCase(), p.id);
  }

  rawAanwezigheid.slice(1).forEach((row, idx) => {
    if (!row || row.length < 3) return;
    const dateRaw = sanitize(row[AANWEZIGHEID_COLUMNS.DATE]);
    const playerName = sanitize(row[AANWEZIGHEID_COLUMNS.PLAYER_NAME]);
    const status = sanitize(row[AANWEZIGHEID_COLUMNS.STATUS]);
    if (!dateRaw || !playerName || !status) return;

    // dateRaw is al "YYYY-MM-DD" in de Aanwezigheid-tab (bevestigd in CLAUDE.md).
    // Maar val terug op DD-MM-YYYY-parse als 't formaat anders blijkt.
    let dateIso = dateRaw;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateRaw)) {
      const parsed = parseDateToIso(dateRaw);
      if (!parsed) {
        warnings.push(`rij ${idx + 2}: ongeldig datum-formaat "${dateRaw}"`);
        return;
      }
      dateIso = parsed;
    }
    const matchId = matchByDate.get(dateIso);
    if (!matchId) {
      warnings.push(`rij ${idx + 2}: geen match gevonden voor datum ${dateIso}`);
      return;
    }
    const playerId = playerByName.get(playerName.toLowerCase());
    if (!playerId) {
      warnings.push(`rij ${idx + 2}: speler "${playerName}" niet gevonden`);
      return;
    }
    if (status !== 'Ja' && status !== 'Nee' && status !== 'Geen Reactie') {
      warnings.push(`rij ${idx + 2}: ongeldige status "${status}"`);
      return;
    }
    records.push({ match_id: matchId, player_id: playerId, status });
  });
  return { records, warnings };
}

async function writeAttendance(supabase, records, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${records.length} attendance-rijen inserten`);
    return records.length;
  }
  for (let i = 0; i < records.length; i += 500) {
    const chunk = records.slice(i, i + 500);
    const { error } = await supabase.from('attendance').insert(chunk);
    if (error) throw new Error(`Insert attendance chunk ${i} failed: ${error.message}`);
  }
  return records.length;
}
```

- [ ] **Step 2: Attendance-blok in `main()` toevoegen**

Na het Match-lineups-blok:

```js
  console.log('\n=== Attendance ===');
  const { records: attendance, warnings: attendanceWarnings } = transformAttendance(rawAanwezigheid, matches, players);
  console.log(`  Getransformeerd: ${attendance.length} attendance-rijen`);
  if (attendanceWarnings.length > 0) {
    console.warn(`  ${attendanceWarnings.length} warnings:`);
    for (const w of attendanceWarnings.slice(0, 10)) console.warn(`    ${w}`);
    if (attendanceWarnings.length > 10) console.warn(`    ... en ${attendanceWarnings.length - 10} meer`);
  }
  const attendanceWritten = await writeAttendance(supabase, attendance, args);
  console.log(`  Geschreven: ${attendanceWritten}`);
```

- [ ] **Step 3: Dry-run en echte run**

Dry-run:
```bash
... node scripts/migrate-sheets-to-supabase.mjs
```

Een paar warnings zijn normaal (legacy-rijen met namen die niet meer in Spelers staan — ze worden geskipt). Counts moeten kloppen op enkele tientallen na.

Echte run:
```bash
... node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```

Verifieer in Studio: `attendance` rijen kloppen, FK's resolven, geen UNIQUE-conflicten.

- [ ] **Step 4: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: attendance import via match+player FK-lookup."
```

---

### Task 7: Push subscriptions migration

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Push-helpers toevoegen**

Voeg toe na `writeAttendance`:

```js
const NOTIFICATIES_COLUMNS = {
  ENDPOINT: 0, P256DH: 1, AUTH: 2,
  USER_AGENT: 3, TIMESTAMP: 4, ACTIVE: 5, PLAYER_NAME: 6,
};

function transformPushSubscriptions(rawNotificaties, players) {
  const warnings = [];
  const records = [];
  const playerByName = new Map();
  for (const p of players) {
    playerByName.set(p.name.trim().toLowerCase(), p.id);
  }
  rawNotificaties.slice(1).forEach((row, idx) => {
    if (!row || !row[NOTIFICATIES_COLUMNS.ENDPOINT]) return;
    const endpoint = sanitize(row[NOTIFICATIES_COLUMNS.ENDPOINT]);
    if (!endpoint) return;
    const playerName = sanitize(row[NOTIFICATIES_COLUMNS.PLAYER_NAME]);
    const playerId = playerName ? playerByName.get(playerName.toLowerCase()) ?? null : null;
    if (playerName && playerId === null) {
      warnings.push(`rij ${idx + 2}: speler "${playerName}" niet gevonden, player_id wordt null`);
    }
    records.push({
      endpoint,
      keys_p256dh: sanitize(row[NOTIFICATIES_COLUMNS.P256DH]),
      keys_auth: sanitize(row[NOTIFICATIES_COLUMNS.AUTH]),
      user_agent: sanitize(row[NOTIFICATIES_COLUMNS.USER_AGENT]) || null,
      last_seen_at: sanitize(row[NOTIFICATIES_COLUMNS.TIMESTAMP]) || null,
      active: parseBoolean(row[NOTIFICATIES_COLUMNS.ACTIVE]),
      player_id: playerId,
    });
  });
  return { records, warnings };
}

async function writePushSubscriptions(supabase, records, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${records.length} push subs inserten`);
    return records.length;
  }
  // Endpoint is UNIQUE — gebruik upsert om dubbele runs idempotent te maken.
  const { error } = await supabase.from('push_subscriptions').upsert(records, { onConflict: 'endpoint' });
  if (error) throw new Error(`Upsert push_subscriptions failed: ${error.message}`);
  return records.length;
}
```

- [ ] **Step 2: Push-blok in `main()` toevoegen**

Na het Attendance-blok:

```js
  console.log('\n=== Push subscriptions ===');
  const { records: pushRecords, warnings: pushWarnings } = transformPushSubscriptions(rawNotificaties, players);
  console.log(`  Getransformeerd: ${pushRecords.length} push subs`);
  for (const w of pushWarnings) console.warn(`  WARN: ${w}`);
  const pushWritten = await writePushSubscriptions(supabase, pushRecords, args);
  console.log(`  Geschreven: ${pushWritten}`);
```

- [ ] **Step 3: Dry-run + echte run**

Dry-run:
```bash
... node scripts/migrate-sheets-to-supabase.mjs
```

Echte run:
```bash
... node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```

Verifieer in Studio: rijen in `push_subscriptions`, endpoints zijn unique.

- [ ] **Step 4: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: push_subscriptions import met endpoint-upsert."
```

---

### Task 8: Sanity-check summary

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Sanity-check-functie toevoegen**

Voeg toe na `writePushSubscriptions`:

```js
async function sanityChecks(supabase, expected, args) {
  if (!args.write) {
    console.log('\n=== Sanity checks (overgeslagen in dry-run) ===');
    return { ok: true };
  }
  console.log('\n=== Sanity checks ===');
  const checks = [
    { table: 'players', expected: expected.players },
    { table: 'matches', expected: expected.matches },
    { table: 'match_lineups', expected: expected.lineups },
    { table: 'attendance', expected: expected.attendance },
    { table: 'push_subscriptions', expected: expected.push },
  ];
  let allOk = true;
  for (const c of checks) {
    const actual = await tableCount(supabase, c.table);
    const ok = actual === c.expected;
    console.log(`  ${c.table}: expected ${c.expected}, got ${actual} ${ok ? '✓' : '✗'}`);
    if (!ok) allOk = false;
  }
  return { ok: allOk };
}
```

- [ ] **Step 2: Sanity-block in `main()` invoegen**

Voeg na het Push-block toe (voor de feature-flag-flip in Task 9):

```js
  const sanity = await sanityChecks(supabase, {
    players: playersWritten,
    matches: matchesWritten,
    lineups: lineupsWritten,
    attendance: attendanceWritten,
    push: pushWritten,
  }, args);
  if (args.write && !sanity.ok) {
    console.error('\nSanity checks faalden — feature-flag wordt NIET gefliped.');
    process.exit(1);
  }
```

- [ ] **Step 3: Echte run**

```bash
... node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```

Verifieer dat alle ✓-vinkjes verschijnen.

- [ ] **Step 4: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: sanity-check counts per tabel."
```

---

### Task 9: Auto-flip van feature-flag in environment-files

**Files:**
- Modify: `scripts/migrate-sheets-to-supabase.mjs`

- [ ] **Step 1: Flip-functie toevoegen**

Voeg bovenaan het bestand bij imports toe:

```js
import { readFile, writeFile } from 'node:fs/promises';
```

Voeg na `sanityChecks` toe:

```js
async function flipFeatureFlag(args) {
  if (!args.write) {
    console.log('\n=== Feature flag (overgeslagen in dry-run) ===');
    return;
  }
  console.log('\n=== Feature flag ===');
  const files = [
    'src/environments/environment.ts',
    'src/environments/environment.prod.ts',
  ];
  for (const file of files) {
    try {
      const content = await readFile(file, 'utf8');
      if (content.includes(`dataSource: 'supabase'`)) {
        console.log(`  ${file}: al 'supabase' — overgeslagen`);
        continue;
      }
      const updated = content.replace(
        /dataSource:\s*'sheets'/,
        `dataSource: 'supabase'`,
      );
      if (updated === content) {
        console.warn(`  ${file}: 'sheets'-pattern niet gevonden — handmatig aanpassen`);
        continue;
      }
      await writeFile(file, updated, 'utf8');
      console.log(`  ${file}: 'sheets' → 'supabase' ✓`);
    } catch (err) {
      console.warn(`  ${file}: kon niet aanpassen (${err.message})`);
    }
  }
}
```

- [ ] **Step 2: Flip-call in `main()` toevoegen**

Voeg toe direct na de sanity-check (na het `process.exit(1)`-block):

```js
  await flipFeatureFlag(args);

  console.log('\n=== Klaar ===');
  if (args.write) {
    console.log('Migratie voltooid. Restart de Angular app (npm start) om de nieuwe flag op te pakken.');
  } else {
    console.log('Dry-run klaar. Run met --write --wipe-first voor de echte migratie.');
  }
```

- [ ] **Step 3: Echte run + verifieer flag**

```bash
... node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```

Expected: flag-flip-regels in summary, `environment.ts` en `.prod.ts` op disk hebben nu `dataSource: 'supabase'`.

Verifieer met:
```bash
grep dataSource src/environments/environment.ts src/environments/environment.prod.ts
```

Expected: beide regels bevatten `dataSource: 'supabase'`.

Optioneel terug zetten naar 'sheets' om herhaalbaarheid te checken (zonder script):
```bash
sed -i "s/dataSource: 'supabase'/dataSource: 'sheets'/" src/environments/environment.ts src/environments/environment.prod.ts
```

(Op Windows zonder sed: handmatig in editor.)

Run het script nog eens — moet de flip nu opnieuw doen. Run het daarna een derde keer met de waarde al op 'supabase' — moet "al supabase, overgeslagen" loggen voor beide files.

- [ ] **Step 4: Commit**

```bash
git add scripts/migrate-sheets-to-supabase.mjs
git commit -m "Migration script: auto-flip feature flag in environment-files."
```

---

### Task 10: End-to-end verification + push

**Files:** geen wijzigingen.

- [ ] **Step 1: Volledige cyclus**

Reset de Supabase-DB door alle tabellen te legen via Studio of via een wipe-only run:
```bash
... node scripts/migrate-sheets-to-supabase.mjs --write --wipe-first
```
(Wipe gevolgd door opnieuw schrijven — schoon eindstate.)

- [ ] **Step 2: UI smoke-test**

Open de Angular dev-server:
```bash
npx ng serve
```

Open http://localhost:4200. About-page moet nu "Actieve data-backend: Supabase" tonen (na de auto-flip).

Klikpad:
- Klassement laadt met spelers en stats.
- Wedstrijden-overzicht toont historische wedstrijden incl. uitslagen.
- Kalender werkt.
- Aanwezigheid: een speler op aanwezig zetten → refresh → status blijft (live tegen Supabase).

- [ ] **Step 3: Sequence-fix indien RPC-warning kwam**

Als Tasks 4 en 5 een "Sequence-update via RPC niet beschikbaar"-warning gaven, draai in Supabase Studio SQL Editor:

```sql
SELECT setval('players_id_seq', (SELECT max(id) FROM players));
SELECT setval('matches_id_seq', (SELECT max(id) FROM matches));
```

Dat voorkomt dat een toekomstige insert-vanuit-de-app een id-conflict heeft.

- [ ] **Step 4: Push naar remote**

```bash
git push
```

(De flag-flip in `environment.ts`/`.prod.ts` zit niet in deze push omdat die files gitignored zijn — alleen het script en zijn 9 commits.)

---

## Acceptance verification

- [ ] `scripts/migrate-sheets-to-supabase.mjs` bestaat → Task 1.
- [ ] Default dry-run; `--write` triggert echte writes → Task 1.
- [ ] `--wipe-first` opt-in werkt → Task 3.
- [ ] Pre-flight refused mode bij niet-lege tabellen zonder `--wipe-first` → Task 3.
- [ ] Players, matches, match_lineups, attendance, push_subscriptions allemaal geïmporteerd → Tasks 4-7.
- [ ] ID-preservering voor players en matches met setval-warning → Tasks 4 + 5.
- [ ] Sanity-checks vergelijken counts → Task 8.
- [ ] Auto-flip beide environment-files → Task 9.
- [ ] End-to-end smoke-test groen → Task 10.
