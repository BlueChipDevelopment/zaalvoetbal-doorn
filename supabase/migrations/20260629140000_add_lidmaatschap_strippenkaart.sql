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
