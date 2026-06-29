-- Voeg admin-rol-velden toe aan players: email (Google-login) + is_admin vlag.
-- Beheerders worden hiermee vanuit de app beheerbaar i.p.v. een hardcoded
-- environment-whitelist. Zie spec 2026-06-29-admin-rol-beheer-design.md.

ALTER TABLE players ADD COLUMN IF NOT EXISTS email text;
ALTER TABLE players ADD COLUMN IF NOT EXISTS is_admin boolean NOT NULL DEFAULT false;

-- Seed de drie bestaande beheerders op naam (records heten exact Chris/Hans/Ward).
UPDATE players SET email = 'cs.de.kok@gmail.com',    is_admin = true WHERE name = 'Chris';
UPDATE players SET email = 'davids.hans@gmail.com',  is_admin = true WHERE name = 'Hans';
UPDATE players SET email = 'wardnoorland@gmail.com', is_admin = true WHERE name = 'Ward';
