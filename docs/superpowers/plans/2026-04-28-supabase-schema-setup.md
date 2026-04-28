# Supabase schema-ontwerp en project setup — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Supabase free-project opzetten, het volledige domein-schema via een CLI-migratie aanbrengen, TypeScript-types genereren en bevestigen dat de anon-key bij de tabellen kan — fundering voor de data-laag-refactor in sub-project 3.

**Architecture:** Eén `supabase/migrations/...sql`-bestand wordt via Supabase CLI naar het remote free-tier project gepusht. RLS staat aan, met `FOR ALL` policies voor de anon-rol (zelfde toegangsmodel als nu via Firebase Functions). TypeScript-types worden uit het live schema gegenereerd in `src/app/types/database.types.ts`. Validatie via SQL Editor in Supabase Studio en een Node-smoke-test met `@supabase/supabase-js`.

**Tech Stack:** Supabase (Postgres 15+), Supabase CLI (npm dev-dependency), `@supabase/supabase-js`, Node.js voor smoke test.

**Bron-spec:** `docs/superpowers/specs/2026-04-28-supabase-schema-design.md`.

---

### Task 1: Supabase project aanmaken (handmatig)

Geen code-stappen — dit is dashboard-werk. Het resultaat zijn credentials die volgende tasks gebruiken.

**Files:** geen.

- [ ] **Step 1: Project aanmaken op supabase.com**

Ga naar https://supabase.com/dashboard, klik **New project**. Vul in:
- Name: `zaalvoetbal-doorn`
- Database password: genereer sterk wachtwoord, sla op in password manager (nodig voor `pg_dump` later en voor `supabase link`)
- Region: `eu-central-1` (Frankfurt)
- Pricing plan: Free

Wacht tot project status `Active` is (~2 min).

- [ ] **Step 2: Project credentials verzamelen**

In het dashboard:
- **Project Settings → API**:
  - `Project URL` (bv. `https://abcdefg.supabase.co`)
  - `Project API keys → anon public` (mag in client)
  - `Project API keys → service_role` (NOOIT in client-code)
- **Project Settings → General**:
  - `Reference ID` (project-ref voor CLI)

Sla alles veilig op.

- [ ] **Step 3: Verifieer dat het project draait**

In Supabase Studio, open **SQL Editor** en draai:
```sql
SELECT version();
```

Expected: PostgreSQL versie verschijnt (15.x of hoger).

---

### Task 2: Supabase CLI installeren en project linken

**Files:**
- Modify: `package.json`, `package-lock.json`
- Create: `supabase/config.toml` (en bijbehorende files door `supabase init`)

- [ ] **Step 1: Supabase CLI installeren als dev-dependency**

Run:
```bash
npm install --save-dev supabase
```

Expected: `package.json` bevat `"supabase": "^x.y.z"` onder `devDependencies`. CLI bereikbaar via `npx supabase`.

- [ ] **Step 2: CLI initialiseren in de repo**

Run:
```bash
npx supabase init
```

Expected: maakt een `supabase/` folder met o.a. `config.toml`. Eventuele prompts (zoals "Generate VS Code workspace settings?") mag `n` zijn.

- [ ] **Step 3: Inloggen op Supabase**

Run:
```bash
npx supabase login
```

Browser opent, sign in, token wordt lokaal opgeslagen. Eénmalige actie per machine.

- [ ] **Step 4: Lokale repo aan remote project koppelen**

Run (vervang `<project-ref>` door het Reference ID uit Task 1 Step 2):
```bash
npx supabase link --project-ref <project-ref>
```

Prompt voor database password (uit Task 1 Step 1).

Expected output eindigt met: `Finished supabase link.`

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json supabase/
git commit -m "Supabase CLI installeren en project linken."
```

---

### Task 3: Initial schema migratie schrijven

Hele schema in één migratie-bestand. Granulair pushen heeft hier geen voordeel — het schema is een atomic baseline.

**Files:**
- Create: `supabase/migrations/<timestamp>_initial_schema.sql` (CLI bepaalt het timestamp-prefix automatisch)

- [ ] **Step 1: Lege migratie aanmaken**

Run:
```bash
npx supabase migration new initial_schema
```

Expected: nieuw bestand onder `supabase/migrations/`, naam vorm `YYYYMMDDHHmmSS_initial_schema.sql` (leeg). Onthoud de exacte filename voor de volgende stap.

- [ ] **Step 2: Schema-content schrijven**

Open de net aangemaakte migration file in een editor en plak de volgende SQL erin (in deze exacte volgorde — FK's vereisen dat tabellen eerst bestaan):

```sql
-- ============================================================================
-- 1. TABELLEN
-- ============================================================================

CREATE TABLE players (
  id          bigserial PRIMARY KEY,
  name        text UNIQUE NOT NULL,
  position    text NOT NULL CHECK (position IN ('Speler', 'Keeper')),
  actief      boolean NOT NULL DEFAULT true,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE matches (
  id                 bigserial PRIMARY KEY,
  date               date NOT NULL,
  location           text,
  season             text GENERATED ALWAYS AS (
    CASE
      WHEN extract(month from date) >= 8
        THEN extract(year from date)::text || '-' || (extract(year from date) + 1)::text
      ELSE (extract(year from date) - 1)::text || '-' || extract(year from date)::text
    END
  ) STORED,
  team_generation    text CHECK (team_generation IN ('Handmatig', 'Automatisch')),
  score_white        int,
  score_red          int,
  zlatan_player_id   bigint REFERENCES players(id) ON DELETE SET NULL,
  ventiel_player_id  bigint REFERENCES players(id) ON DELETE SET NULL,
  voorbeschouwing    text,
  created_at         timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_matches_date ON matches(date);
CREATE INDEX idx_matches_season ON matches(season);

CREATE TABLE match_lineups (
  match_id    bigint NOT NULL REFERENCES matches(id) ON DELETE CASCADE,
  player_id   bigint NOT NULL REFERENCES players(id) ON DELETE RESTRICT,
  team        text NOT NULL CHECK (team IN ('wit', 'rood')),
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (match_id, player_id)
);

CREATE INDEX idx_match_lineups_player ON match_lineups(player_id);

CREATE TABLE attendance (
  id          bigserial PRIMARY KEY,
  match_id    bigint NOT NULL REFERENCES matches(id) ON DELETE CASCADE,
  player_id   bigint NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  status      text NOT NULL CHECK (status IN ('Ja', 'Nee', 'Geen Reactie')),
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),
  UNIQUE (match_id, player_id)
);

CREATE INDEX idx_attendance_match ON attendance(match_id);
CREATE INDEX idx_attendance_player ON attendance(player_id);

CREATE TABLE latest_teams (
  match_id              bigint PRIMARY KEY REFERENCES matches(id) ON DELETE CASCADE,
  team_white_player_ids bigint[] NOT NULL,
  team_red_player_ids   bigint[] NOT NULL,
  generation_type       text CHECK (generation_type IN ('Handmatig', 'Automatisch')),
  generated_at          timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE push_subscriptions (
  id            bigserial PRIMARY KEY,
  player_id     bigint REFERENCES players(id) ON DELETE CASCADE,
  endpoint      text UNIQUE NOT NULL,
  keys_p256dh   text NOT NULL,
  keys_auth     text NOT NULL,
  user_agent    text,
  active        boolean NOT NULL DEFAULT true,
  created_at    timestamptz NOT NULL DEFAULT now(),
  last_seen_at  timestamptz
);

CREATE TABLE reminder_log (
  id                bigserial PRIMARY KEY,
  sent_at           timestamptz NOT NULL DEFAULT now(),
  type              text NOT NULL,
  title             text,
  body              text,
  recipients_count  int,
  succeeded_count   int,
  expired_count     int
);

CREATE INDEX idx_reminder_log_sent_at ON reminder_log(sent_at DESC);

-- ============================================================================
-- 2. TRIGGERS
-- ============================================================================

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_match_lineups_updated_at
  BEFORE UPDATE ON match_lineups
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_attendance_updated_at
  BEFORE UPDATE ON attendance
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================================
-- 3. VIEWS
-- ============================================================================

CREATE VIEW player_match_results AS
SELECT
  ml.player_id,
  m.id AS match_id,
  m.date,
  m.season,
  ml.team,
  CASE
    WHEN m.score_white IS NULL OR m.score_red IS NULL THEN NULL
    WHEN ml.team = 'wit'  AND m.score_white > m.score_red  THEN 'win'
    WHEN ml.team = 'rood' AND m.score_red   > m.score_white THEN 'win'
    WHEN m.score_white = m.score_red                       THEN 'tie'
    ELSE 'loss'
  END AS result
FROM match_lineups ml
JOIN matches m ON m.id = ml.match_id;

CREATE VIEW player_head_to_head AS
SELECT
  a.player_id          AS player_a_id,
  b.player_id          AS player_b_id,
  count(*) FILTER (WHERE pmr_a.result = 'win') AS a_wins,
  count(*) FILTER (WHERE pmr_b.result = 'win') AS b_wins,
  count(*) FILTER (WHERE pmr_a.result = 'tie') AS ties
FROM match_lineups a
JOIN match_lineups b ON b.match_id = a.match_id AND b.team <> a.team
JOIN player_match_results pmr_a
  ON pmr_a.match_id = a.match_id AND pmr_a.player_id = a.player_id
JOIN player_match_results pmr_b
  ON pmr_b.match_id = b.match_id AND pmr_b.player_id = b.player_id
WHERE a.player_id < b.player_id
GROUP BY a.player_id, b.player_id;

-- ============================================================================
-- 4. RLS POLICIES
-- ============================================================================

ALTER TABLE players            ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches            ENABLE ROW LEVEL SECURITY;
ALTER TABLE match_lineups      ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance         ENABLE ROW LEVEL SECURITY;
ALTER TABLE latest_teams       ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminder_log       ENABLE ROW LEVEL SECURITY;

CREATE POLICY anon_all ON players            FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON matches            FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON match_lineups      FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON attendance         FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON latest_teams       FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON push_subscriptions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON reminder_log       FOR ALL TO anon USING (true) WITH CHECK (true);
```

Sla het bestand op.

- [ ] **Step 3: Migratie syntax-check via dry-run**

Run:
```bash
npx supabase db push --dry-run
```

Expected: SQL output van de pending migratie zonder syntaxfouten. Niets wordt toegepast (dry-run).

Bij syntax-error: edit de migration file, fix, herhaal. Veelvoorkomend: dollar-quoted strings (`$$`) op de verkeerde plek bij `set_updated_at()` — paste exact zoals hierboven.

- [ ] **Step 4: Commit**

```bash
git add supabase/migrations/
git commit -m "Initial schema: tabellen, triggers, views, RLS-policies."
```

---

### Task 4: Migratie pushen naar remote en verifiëren

**Files:** geen wijzigingen lokaal — alleen remote DB.

- [ ] **Step 1: Migratie pushen**

Run:
```bash
npx supabase db push
```

Prompt voor database password. Expected output bevat: `Applying migration <timestamp>_initial_schema.sql...` en eindigt met `Finished supabase db push.`

- [ ] **Step 2: Verifieer in Supabase Studio**

Open https://supabase.com/dashboard/project/<project-ref>/editor.

Expected:
- Linker sidebar **Tables**: 7 tabellen — `players`, `matches`, `match_lineups`, `attendance`, `latest_teams`, `push_subscriptions`, `reminder_log`.
- Linker sidebar **Views**: 2 views — `player_match_results`, `player_head_to_head`.

Klik op `players` en check: kolommen `id`, `name`, `position`, `actief`, `created_at`. RLS-icoon moet aan staan op alle tabellen (slot-icoon naast tabelnaam).

- [ ] **Step 3: Smoke-test in SQL Editor — basic CRUD**

Open **SQL Editor** in Studio. Draai dit script:

```sql
-- Insert + select + delete
INSERT INTO players (name, position) VALUES ('SmokeTest', 'Speler') RETURNING id, name, actief, created_at;
SELECT * FROM players WHERE name = 'SmokeTest';
DELETE FROM players WHERE name = 'SmokeTest';
```

Expected:
- Insert returnt 1 rij met `id` (1, of hoger), `actief = true`, `created_at` ingevuld.
- Select returnt diezelfde rij.
- Delete returnt `1 row affected`.

- [ ] **Step 4: Smoke-test generated `season`-column**

```sql
INSERT INTO matches (date) VALUES ('2026-09-15') RETURNING id, date, season;
INSERT INTO matches (date) VALUES ('2026-03-15') RETURNING id, date, season;

SELECT date, season FROM matches WHERE date IN ('2026-09-15', '2026-03-15') ORDER BY date;

DELETE FROM matches WHERE date IN ('2026-09-15', '2026-03-15');
```

Expected uit de SELECT:
| date       | season    |
|------------|-----------|
| 2026-03-15 | 2025-2026 |
| 2026-09-15 | 2026-2027 |

(September valt na 1 augustus → nieuw seizoen 2026-2027. Maart valt vóór 1 augustus → lopend seizoen 2025-2026.)

- [ ] **Step 5: Smoke-test CHECK-constraint op `position`**

```sql
INSERT INTO players (name, position) VALUES ('BadPosition', 'Verdediger');
```

Expected: error `new row for relation "players" violates check constraint "players_position_check"`.

(Als deze insert wél lukt: de CHECK-constraint is niet correct toegepast. Migratie opnieuw bekijken.)

---

### Task 5: TypeScript-types genereren

**Files:**
- Create: `src/app/types/database.types.ts`

- [ ] **Step 1: Types-folder aanmaken indien nodig**

Run:
```bash
mkdir -p src/app/types
```

- [ ] **Step 2: Types genereren**

Run:
```bash
npx supabase gen types typescript --linked > src/app/types/database.types.ts
```

Expected: bestand `src/app/types/database.types.ts` aangemaakt met inhoud beginnend met `export type Json = ...` en daaronder `export type Database = { public: { Tables: { ... } } }`.

- [ ] **Step 3: Bestand verifiëren**

Open `src/app/types/database.types.ts` en bevestig dat de volgende paden bestaan in het `Database`-type:
- `Database['public']['Tables']['players']`
- `Database['public']['Tables']['matches']`
- `Database['public']['Tables']['match_lineups']`
- `Database['public']['Tables']['attendance']`
- `Database['public']['Tables']['latest_teams']`
- `Database['public']['Tables']['push_subscriptions']`
- `Database['public']['Tables']['reminder_log']`
- `Database['public']['Views']['player_match_results']`
- `Database['public']['Views']['player_head_to_head']`

(Visuele check — geen geautomatiseerde test in deze sub-project.)

- [ ] **Step 4: Project typechecken**

Run:
```bash
npx tsc --noEmit
```

Expected: geen errors. Het nieuwe types-bestand staat onder `src/app/` dus wordt door Angular's `tsconfig` meegenomen.

- [ ] **Step 5: Commit**

```bash
git add src/app/types/database.types.ts
git commit -m "Genereer TypeScript-types vanuit Supabase-schema."
```

---

### Task 6: Environment-files updaten

**Files:**
- Modify: `src/environments/environment.example.ts`
- Modify: `src/environments/environment.prod.example.ts`
- Modify: `src/environments/environment.ts` (lokaal, niet in git)
- Modify: `src/environments/environment.prod.ts` (lokaal, niet in git)

- [ ] **Step 1: `environment.example.ts` uitbreiden**

Open `src/environments/environment.example.ts` en voeg twee velden toe binnen het `environment`-object — kies een logische plek (bv. direct na `firebaseBaseUrl`):

```ts
supabaseUrl: 'https://YOUR_PROJECT_REF.supabase.co',
supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY',
```

- [ ] **Step 2: `environment.prod.example.ts` uitbreiden**

Open `src/environments/environment.prod.example.ts` en voeg dezelfde twee velden toe op dezelfde plek.

- [ ] **Step 3: Lokale environment-files invullen**

Open `src/environments/environment.ts` en `src/environments/environment.prod.ts` (deze staan in `.gitignore`). Voeg dezelfde twee velden toe en vul de echte waarden in (van Task 1 Step 2):

```ts
supabaseUrl: 'https://abcdefg.supabase.co',
supabaseAnonKey: 'eyJhbG...volledige_anon_key',
```

- [ ] **Step 4: Typecheck**

Run:
```bash
npx tsc --noEmit
```

Expected: geen errors.

- [ ] **Step 5: Commit (alleen example-bestanden, lokale files staan in `.gitignore`)**

```bash
git add src/environments/environment.example.ts src/environments/environment.prod.example.ts
git commit -m "Environment: supabaseUrl en supabaseAnonKey in example-bestanden."
```

---

### Task 7: Anon-key smoke test via Node-script

Acceptance: kan `supabase-js` met de anon-key bij de tabellen? Een Node-script is voor deze sub-project genoeg — Angular-integratie hoort bij sub-project 3.

**Files:**
- Modify: `package.json`, `package-lock.json`
- Create: `scripts/supabase-smoke-test.mjs`

- [ ] **Step 1: `@supabase/supabase-js` installeren als runtime-dependency**

Run:
```bash
npm install @supabase/supabase-js
```

Expected: `package.json` heeft `@supabase/supabase-js` onder `dependencies`.

- [ ] **Step 2: Smoke-test script schrijven**

Maak `scripts/` aan als die nog niet bestaat:
```bash
mkdir -p scripts
```

Maak `scripts/supabase-smoke-test.mjs` met deze inhoud:

```js
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.error('Set SUPABASE_URL and SUPABASE_ANON_KEY env vars.');
  process.exit(1);
}

const supabase = createClient(url, anonKey);

const { data, error } = await supabase.from('players').select('*');

if (error) {
  console.error('FAIL:', error);
  process.exit(1);
}

console.log('OK, rows returned:', data.length);
console.log(data);
```

- [ ] **Step 3: Smoke-test draaien**

Run (vervang door de echte URL/anon-key uit Task 1 Step 2):
```bash
SUPABASE_URL='https://YOUR_PROJECT_REF.supabase.co' SUPABASE_ANON_KEY='eyJhbG...' node scripts/supabase-smoke-test.mjs
```

Expected: `OK, rows returned: 0` gevolgd door `[]` — een lege array (geen spelers), maar geen error. Dit bewijst:
- Network reachability naar Supabase
- Anon-key is geldig
- RLS staat aan en laat anon-rol selects op `players` toe
- Tabel bestaat met juiste kolommen

Bij fout `permission denied for table players`: RLS-policy uit Task 3 niet correct toegepast — controleer in Studio onder Authentication → Policies dat `anon_all` op `players` zichtbaar is.

Bij fout `relation "players" does not exist`: migratie niet correct gepusht — herhaal Task 4.

- [ ] **Step 4: Commit smoke-test**

```bash
git add scripts/supabase-smoke-test.mjs package.json package-lock.json
git commit -m "Anon-key smoke test + supabase-js installeren."
```

(De smoke-test mag in de repo blijven als handmatig debug-tool; sub-project 3 vervangt 'm door echte integratie. Als je 'm niet wilt: `git rm` en herstel package.json.)

---

## Acceptance verification

Loop door de acceptance criteria uit de spec; elk moet aangevinkt zijn:

- [ ] Supabase free-project draait in `eu-central-1` met een werkende database. → Task 1.
- [ ] Schema is via Supabase CLI migration aangebracht. → Tasks 3-4.
- [ ] `supabase migration new` produceert een `.sql`-bestand in `supabase/migrations/`. → Task 3 Step 1.
- [ ] TypeScript-types gegenereerd in `src/app/types/database.types.ts`. → Task 5.
- [ ] RLS staat aan op alle tabellen, met policies voor anon. → Task 3 Step 2 (RLS-sectie), Studio-check Task 4 Step 2, runtime-check Task 7.
- [ ] Een handmatige insert + select via SQL Editor werkt (smoke-test). → Task 4 Steps 3-5.
- [ ] Een select via `supabase-js` met de anon-key werkt vanuit een Node-omgeving. → Task 7 Step 3.

(Spec-criterium "vanaf de Angular dev-server" is bewust uitgesteld naar sub-project 3 — daar gebeurt de echte integratie. Een Node-smoke-test bewijst hetzelfde over de schema/auth-laag.)

## Push naar remote git

Na alle tasks: `git push` om de schema-baseline te delen. Vanaf hier kunnen sub-projecten 2 (`IDataService`-refactor) en 3 (`SupabaseDataService`-implementatie) starten.
