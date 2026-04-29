-- Drop unused latest_teams table.
-- De tabel was bedoeld als cache voor cross-device team-concept-deling
-- maar is na de Supabase-migratie nooit door applicatiecode gevuld of
-- gelezen. match_lineups dekt team-opslag voor gespeelde wedstrijden.

DROP TABLE IF EXISTS latest_teams;
