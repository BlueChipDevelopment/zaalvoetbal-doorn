-- Add nullable photo_url column to players for the player profile page.
-- UI shows a photo when set, otherwise falls back to initials avatar.

ALTER TABLE players ADD COLUMN IF NOT EXISTS photo_url text;
