# Supabase migratie — sub-project 1: schema-ontwerp en project setup

Eerste van zeven sub-projecten in de migratie van Google Sheets naar Supabase.
Dit document beschrijft het databaseschema, de naming-conventies, en de Supabase
project setup. Latere sub-projecten (`IDataService`-refactor, data-migratie,
feature-flag, cutover, cleanup) krijgen elk een eigen spec.

## Scope

**In scope**:
- Postgres-schema voor alle huidige domeindata (spelers, wedstrijden,
  aanwezigheid, opstellingen, push-subs, reminder-log).
- Supabase project setup (free tier).
- Supabase CLI inrichten voor migrations en TypeScript type-generatie.
- RLS-policies voor de anon-rol (zelfde toegang als via huidige Firebase Functions).

**Out of scope**:
- Backup-automatisering — eigen losstaand project, eigen spec.
- Auth-migratie — Firebase Auth blijft, anon-key + RLS voor data-access.
- Code-aanpassingen in de Angular-app — sub-projecten 2 en 3.
- Data-migratie van Sheets naar Postgres — sub-project 5.
- Cutover en feature flag — sub-projecten 4 en 6.

## Achtergrond

De app gebruikt nu Google Sheets als data-store via Firebase Functions
(`GoogleSheetsService`). Sheets is op de roadmap omdat:

- Geen echte SQL — alle filtering client-side, vol-tabel-scans.
- Geen realtime — kalender/aanwezigheid moet gepolld worden.
- Sheets-rate-limits (60 reads/min per user).
- Datakwaliteit-issues: Excel-datum-serials, trailing spaces, geen FK's.

Supabase (Postgres) lost dit op, en geeft je echte schema-garanties die de
roadmap-features (head-to-head, onverwachte combos, gamification, spelersprofiel)
makkelijker maken.

## Belangrijkste ontwerpkeuzes

### Geen Supabase Auth — Firebase Auth blijft

Firebase Auth + admin-whitelist (`environment.adminEmails`) blijft het
auth-model. De app praat met Supabase via de **anon-key**. RLS-policies
geven de anon-rol dezelfde toegang als de huidige Firebase Functions
hebben — in praktijk: lezen mag overal, schrijven mag overal, want het
huidige Sheets-model heeft ook geen harde server-side admin-grens.

Latere stap (eigen spec): admin-writes afschermen via een dunne Firebase
Function met service-role-key, of migreren naar Supabase Auth.

### Naming convention: `snake_case` in DB

Postgres-conventie wint in de DB. `SupabaseDataService` mapt naar de
bestaande `camelCase` interfaces, zelfde patroon als `GoogleSheetsService`
nu doet vanuit rauwe rij-arrays.

### Stats zijn computed, niet stored

`Spelers` op Sheets bevat enkel naam, positie, actief. Alle stats
(rating, wins, losses, totalPoints) worden runtime berekend in
`GameStatisticsService`. Dat blijft zo: schema is **facts only**,
geen denormalisatie.

### IDs: `bigserial`

Voor de schaal van deze app (~30 spelers, ~150-300 wedstrijden,
~3000 aanwezigheid-rijen) is UUID overkill en zijn natuurlijke keys
te fragiel. `bigserial` met `unique`-constraint op `players.name`.

### Soft delete voor spelers

`players.actief boolean` houden. Hard-delete zou historische W/V/G
voor andere spelers breken (een speler die mee heeft gespeeld in 50
wedstrijden kan niet zomaar weg).

### `season` als generated column

`matches.season` (`'2024-2025'`) automatisch afgeleid uit `date` via een
`GENERATED ALWAYS AS ... STORED` column. Kan niet uit sync raken.
`season_match_number` (running count binnen seizoen) komt in een view —
generated columns ondersteunen geen window-functions.

### Match-datum als `date`, geen `timestamp`

Wedstrijden zijn per dag, niet per uur. Lost meteen alle Excel-datum-serial-
issues op. Als ooit start-tijd nodig is, kolom toevoegen.

## Schema

### `players`

```sql
CREATE TABLE players (
  id          bigserial PRIMARY KEY,
  name        text UNIQUE NOT NULL,
  position    text NOT NULL CHECK (position IN ('Speler', 'Keeper')),
  actief      boolean NOT NULL DEFAULT true,
  created_at  timestamptz NOT NULL DEFAULT now()
);
```

### `matches`

```sql
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
```

### `match_lineups`

```sql
CREATE TABLE match_lineups (
  match_id    bigint NOT NULL REFERENCES matches(id) ON DELETE CASCADE,
  player_id   bigint NOT NULL REFERENCES players(id) ON DELETE RESTRICT,
  team        text NOT NULL CHECK (team IN ('wit', 'rood')),
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (match_id, player_id)
);

CREATE INDEX idx_match_lineups_player ON match_lineups(player_id);
```

### `attendance`

```sql
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
```

### `latest_teams`

Cache voor het meest recent gegenereerde team-voorstel per upcoming match.
Eén rij per match — opnieuw genereren overschrijft. Cross-device deling
blijft zo werken zonder dat je naar `localStorage` moet.

```sql
CREATE TABLE latest_teams (
  match_id              bigint PRIMARY KEY REFERENCES matches(id) ON DELETE CASCADE,
  team_white_player_ids bigint[] NOT NULL,
  team_red_player_ids   bigint[] NOT NULL,
  generation_type       text CHECK (generation_type IN ('Handmatig', 'Automatisch')),
  generated_at          timestamptz NOT NULL DEFAULT now()
);
```

### `push_subscriptions`

Eén speler kan meerdere devices hebben (telefoon + desktop). `endpoint` is
uniek (Web Push spec). `player_id` mag null voor anonieme subs.

```sql
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
```

### `reminder_log`

Voor het Beheer-Notificaties-scherm (geschiedenis-tab op de roadmap).

```sql
CREATE TABLE reminder_log (
  id                bigserial PRIMARY KEY,
  sent_at           timestamptz NOT NULL DEFAULT now(),
  type              text NOT NULL,    -- 'reminder', 'broadcast', 'attendance', etc.
  title             text,
  body              text,
  recipients_count  int,
  succeeded_count   int,
  expired_count     int
);

CREATE INDEX idx_reminder_log_sent_at ON reminder_log(sent_at DESC);
```

### `updated_at`-trigger

Generic trigger-function voor `match_lineups` en `attendance`:

```sql
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
```

## Voorbeeld-views

Niet definitief, maar laat zien hoe stats afleidbaar zijn:

```sql
-- W/V/G per speler over alle gespeelde wedstrijden
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

-- Lifetime head-to-head (Stats & inzicht roadmap-item)
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
```

## RLS-policies

Anon-rol moet alles kunnen wat de app nu doet. Per tabel:

```sql
ALTER TABLE players            ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches            ENABLE ROW LEVEL SECURITY;
ALTER TABLE match_lineups      ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance         ENABLE ROW LEVEL SECURITY;
ALTER TABLE latest_teams       ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminder_log       ENABLE ROW LEVEL SECURITY;

-- FOR ALL = SELECT/INSERT/UPDATE/DELETE — zelfde model als nu via Firebase
-- Functions (geen harde server-side admin-grens). Aanscherping is een latere
-- stap (admin-only writes via service-role of Supabase Auth-claims).
CREATE POLICY anon_all ON players            FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON matches            FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON match_lineups      FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON attendance         FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON latest_teams       FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON push_subscriptions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON reminder_log       FOR ALL TO anon USING (true) WITH CHECK (true);
```

## Project setup

### Supabase project

1. Project aanmaken op supabase.com (free tier).
2. Region: `eu-central-1` (Frankfurt) — laagste latency vanuit Nederland.
3. Database password veilig opslaan (nodig voor `pg_dump` later).
4. Anon-key en service-role-key opslaan in een password manager — anon-key komt
   in `environment.ts`, service-role-key NOOIT in client-code.

### Supabase CLI inrichten

`supabase` als dev-dependency via `npm install --save-dev supabase`.

```bash
npx supabase init                            # maakt supabase/-folder in de repo
npx supabase login                           # eenmalig
npx supabase link --project-ref <project-id> # koppelt aan remote
npx supabase migration new initial_schema    # creëert .sql-bestand
# vul migratie met bovenstaand schema, daarna:
npx supabase db push                         # apply naar remote
```

### TypeScript type-generatie

```bash
npx supabase gen types typescript --linked > src/app/types/database.types.ts
```

`SupabaseDataService` (sub-project 3) gebruikt deze types:

```ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database.types';

const supabase = createClient<Database>(url, anonKey);
const { data } = await supabase.from('players').select('*'); // volledig getypeerd
```

### Environment-uitbreiding

`environment.ts` (en `.example.ts`) krijgen er twee velden bij:

```ts
supabaseUrl: 'https://<project-id>.supabase.co',
supabaseAnonKey: 'eyJ...',
```

## Acceptance criteria

- [ ] Supabase free-project draait in `eu-central-1` met een werkende database.
- [ ] Schema is via Supabase CLI migration aangebracht (geen handmatige
  Table-Editor-clicks die niet in Git terecht komen).
- [ ] `supabase migration new` produceert een `.sql`-bestand in de repo onder
  `supabase/migrations/`.
- [ ] TypeScript-types gegenereerd in `src/app/types/database.types.ts`.
- [ ] RLS staat aan op alle tabellen, met read+write policies voor anon.
- [ ] Een handmatige insert + select via `psql` werkt (smoke-test).
- [ ] Een `select` via `supabase-js` met de anon-key werkt vanaf de Angular
  dev-server (smoke-test, geen integratie nog).

## Risico's en open punten

- **Free-tier project pauzeert na 7 dagen inactiviteit.** Niet relevant tijdens
  het seizoen, wel even unpausen na de zomerstop.
- **500 MB DB-limiet.** Voor jullie data ruim voldoende.
- **`season` generated column** start het seizoen op 1 augustus (`month >= 8`).
  Bevestigd: dit klopt met de huidige praktijk (eind augustus). Als seizoenen
  ooit verschuiven, schema-migratie nodig.
- **`zlatan_player_id` / `ventiel_player_id` zijn nullable FK's** — dat strookt
  met huidige praktijk dat een wedstrijd er ook géén kan hebben. Bestaande
  string-namen in Sheets moeten naar player IDs gemapt worden tijdens migratie
  (sub-project 5).
