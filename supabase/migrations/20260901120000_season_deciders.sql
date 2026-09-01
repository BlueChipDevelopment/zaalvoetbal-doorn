-- Seizoensbeslissingen: wie een gelijkstand aan kop van het klassement heeft
-- gewonnen. De app rekent alleen met punten en kan een beslissing buiten het
-- veld (strafschoppen) niet kennen; deze tabel legt die uitslag vast zodat de
-- MVP-titel en het kampioensachievement bij de juiste speler terechtkomen.

CREATE TABLE season_deciders (
  season           TEXT PRIMARY KEY,
  winner_player_id BIGINT NOT NULL REFERENCES players(id),
  note             TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE season_deciders ENABLE ROW LEVEL SECURITY;

CREATE POLICY anon_all ON season_deciders FOR ALL TO anon USING (true) WITH CHECK (true);

-- 2025-2026: Paul en Bo eindigden allebei op 66 punten; Paul won de
-- strafschoppenserie en is daarmee kampioen.
INSERT INTO season_deciders (season, winner_player_id, note)
SELECT '2025-2026', id, 'Beslist na strafschoppen'
FROM players
WHERE name = 'Paul'
ON CONFLICT (season) DO NOTHING;
