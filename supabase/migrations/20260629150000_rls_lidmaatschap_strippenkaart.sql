-- RLS voor de lidmaatschap/strippenkaart-tabellen, consistent met de rest van
-- het schema (RLS aan + open anon_all-policy; autorisatie blijft client-side).

ALTER TABLE season_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE strip_transactions   ENABLE ROW LEVEL SECURITY;

CREATE POLICY anon_all ON season_subscriptions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY anon_all ON strip_transactions   FOR ALL TO anon USING (true) WITH CHECK (true);
