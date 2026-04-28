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
