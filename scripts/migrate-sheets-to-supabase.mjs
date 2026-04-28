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
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
