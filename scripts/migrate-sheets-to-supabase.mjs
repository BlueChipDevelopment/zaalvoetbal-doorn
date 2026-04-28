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

async function tableCount(supabase, table) {
  const { count, error } = await supabase.from(table).select('*', { count: 'exact', head: true });
  if (error) throw new Error(`Could not count ${table}: ${error.message}`);
  return count ?? 0;
}

async function preFlight(supabase, args) {
  const tables = ['players', 'matches', 'match_lineups', 'attendance', 'push_subscriptions'];
  const counts = {};
  for (const t of tables) {
    counts[t] = await tableCount(supabase, t);
  }
  const nonEmpty = tables.filter(t => counts[t] > 0);
  console.log('Doel-tabellen huidige counts:');
  for (const t of tables) {
    console.log(`  ${t}: ${counts[t]}`);
  }
  if (args.write && nonEmpty.length > 0 && !args.wipeFirst) {
    console.error('\nERROR: doel-tabellen niet leeg en --wipe-first niet meegegeven.');
    console.error('Tabellen met data:', nonEmpty.join(', '));
    console.error('Run met --wipe-first om eerst te wissen, of leeg ze handmatig in Studio.');
    process.exit(1);
  }
}

async function wipeAll(supabase) {
  console.log('\nWipe: bestaande data verwijderen...');
  // Volgorde respecteert FK's: kinderen eerst.
  const order = ['attendance', 'match_lineups', 'push_subscriptions', 'matches', 'players'];
  for (const t of order) {
    const filterColumn = t === 'match_lineups' ? 'match_id' : 'id';
    const { error } = await supabase.from(t).delete().not(filterColumn, 'is', null);
    if (error) throw new Error(`Wipe ${t} failed: ${error.message}`);
    console.log(`  ${t} gewist`);
  }
}

const SPELER_COLUMNS = { NAME: 0, POSITION: 1, ACTIEF: 2 };

function transformPlayers(rawSpelers) {
  // Skip header (index 0). Id = 1-based dataRow-index, vóór filter.
  const players = rawSpelers.slice(1)
    .map((row, idx) => ({ row, dataRowIndex: idx + 1 }))
    .filter(({ row }) => row && row[SPELER_COLUMNS.NAME])
    .map(({ row, dataRowIndex }) => ({
      id: dataRowIndex,
      name: sanitize(row[SPELER_COLUMNS.NAME]),
      position: sanitize(row[SPELER_COLUMNS.POSITION]) || '',
      actief: parseBoolean(row[SPELER_COLUMNS.ACTIEF]),
    }));

  // Sanity: position moet 'Speler' of 'Keeper' zijn (CHECK constraint in schema).
  for (const p of players) {
    if (p.position !== 'Speler' && p.position !== 'Keeper') {
      console.warn(`  Player "${p.name}" heeft ongeldige position "${p.position}", forceer naar 'Speler'`);
      p.position = 'Speler';
    }
  }

  // Sanity: duplicate names (UNIQUE in schema).
  const names = new Set();
  for (const p of players) {
    if (names.has(p.name.toLowerCase())) {
      throw new Error(`Duplicate player name (case-insensitive): "${p.name}". Kan niet importeren — fix de Spelers-sheet eerst.`);
    }
    names.add(p.name.toLowerCase());
  }

  return players;
}

async function writePlayers(supabase, players, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${players.length} players inserten`);
    return players.length;
  }
  const { error } = await supabase.from('players').insert(players);
  if (error) throw new Error(`Insert players failed: ${error.message}`);

  // Sequence vooruit zetten voor toekomstige inserts vanuit de app.
  const maxId = Math.max(...players.map(p => p.id));
  const { error: seqErr } = await supabase.rpc('setval_seq', { seq_name: 'players_id_seq', new_value: maxId });
  if (seqErr) {
    console.warn(`  Sequence-update via RPC niet beschikbaar (${seqErr.message}).`);
    console.warn(`  Run handmatig in Studio: SELECT setval('players_id_seq', ${maxId});`);
  } else {
    console.log(`  Sequence players_id_seq → ${maxId}`);
  }

  return players.length;
}

const WEDSTRIJD_COLUMNS = {
  ID: 0, SEIZOEN: 1, DATUM: 2, TEAM_WIT: 3, TEAM_ROOD: 4,
  TEAM_GENERATIE: 5, SCORE_WIT: 6, SCORE_ROOD: 7,
  ZLATAN: 8, VENTIEL: 9, VOORBESCHOUWING: 10,
};

/**
 * Convert "DD-MM-YYYY" naar ISO "YYYY-MM-DD". Returnt null bij parse-failure.
 */
function parseDateToIso(value) {
  if (!value) return null;
  const s = String(value).trim();
  // Verwacht DD-MM-YYYY
  const m = s.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (!m) return null;
  const dd = m[1].padStart(2, '0');
  const mm = m[2].padStart(2, '0');
  const yyyy = m[3];
  return `${yyyy}-${mm}-${dd}`;
}

function nameToId(name, players) {
  if (!name) return null;
  const trimmed = String(name).trim().toLowerCase();
  if (!trimmed) return null;
  const found = players.find(p => p.name.trim().toLowerCase() === trimmed);
  return found ? found.id : null;
}

function transformMatches(rawWedstrijden, players) {
  const warnings = [];
  const matches = [];
  rawWedstrijden.slice(1).forEach((row, idx) => {
    if (!row || row.length === 0) return;
    const id = parseScore(row[WEDSTRIJD_COLUMNS.ID]);
    if (id === null || id <= 0) {
      warnings.push(`rij ${idx + 2}: geen geldig id, geskipt`);
      return;
    }
    const dateIso = parseDateToIso(row[WEDSTRIJD_COLUMNS.DATUM]);
    if (!dateIso) {
      warnings.push(`rij ${idx + 2} (id=${id}): geen geldige datum "${row[WEDSTRIJD_COLUMNS.DATUM]}", geskipt`);
      return;
    }

    const zlatanName = sanitize(row[WEDSTRIJD_COLUMNS.ZLATAN]);
    const ventielName = sanitize(row[WEDSTRIJD_COLUMNS.VENTIEL]);
    const zlatanPlayerId = zlatanName ? nameToId(zlatanName, players) : null;
    const ventielPlayerId = ventielName ? nameToId(ventielName, players) : null;
    if (zlatanName && zlatanPlayerId === null) {
      warnings.push(`match ${id}: zlatan-naam "${zlatanName}" niet gevonden in players`);
    }
    if (ventielName && ventielPlayerId === null) {
      warnings.push(`match ${id}: ventiel-naam "${ventielName}" niet gevonden in players`);
    }

    matches.push({
      id,
      date: dateIso,
      location: 'Sporthal Steinheim',
      // season is GENERATED ALWAYS — niet meesturen
      team_generation: sanitize(row[WEDSTRIJD_COLUMNS.TEAM_GENERATIE]) || null,
      score_white: parseScore(row[WEDSTRIJD_COLUMNS.SCORE_WIT]),
      score_red: parseScore(row[WEDSTRIJD_COLUMNS.SCORE_ROOD]),
      zlatan_player_id: zlatanPlayerId,
      ventiel_player_id: ventielPlayerId,
      voorbeschouwing: sanitize(row[WEDSTRIJD_COLUMNS.VOORBESCHOUWING]) || null,
      // Bewaar de raw team-strings tijdelijk voor lineup-extractie:
      _teamWitNames: sanitize(row[WEDSTRIJD_COLUMNS.TEAM_WIT]),
      _teamRoodNames: sanitize(row[WEDSTRIJD_COLUMNS.TEAM_ROOD]),
    });
  });
  return { matches, warnings };
}

function buildMatchLineups(matches, players) {
  const lineups = [];
  const warnings = [];
  for (const m of matches) {
    const parseTeam = (raw, team) => {
      if (!raw) return [];
      const names = String(raw).split(',').map(n => n.trim()).filter(Boolean);
      const ids = [];
      for (const n of names) {
        const pid = nameToId(n, players);
        if (pid === null) {
          warnings.push(`match ${m.id} ${team}: naam "${n}" niet gevonden in players`);
        } else {
          ids.push(pid);
        }
      }
      return ids;
    };
    const witIds = parseTeam(m._teamWitNames, 'wit');
    const roodIds = parseTeam(m._teamRoodNames, 'rood');
    for (const pid of witIds) lineups.push({ match_id: m.id, player_id: pid, team: 'wit' });
    for (const pid of roodIds) lineups.push({ match_id: m.id, player_id: pid, team: 'rood' });
  }
  return { lineups, warnings };
}

async function writeMatches(supabase, matches, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${matches.length} matches inserten`);
    return matches.length;
  }
  // Strip de _teamX velden uit het te-inserten object — supabase-js fail anders met kolom-niet-gevonden.
  const cleaned = matches.map(m => {
    const { _teamWitNames, _teamRoodNames, ...rest } = m;
    return rest;
  });
  // Insert in chunks van 200 voor stabiliteit.
  for (let i = 0; i < cleaned.length; i += 200) {
    const chunk = cleaned.slice(i, i + 200);
    const { error } = await supabase.from('matches').insert(chunk);
    if (error) throw new Error(`Insert matches chunk ${i} failed: ${error.message}`);
  }
  // Sequence
  const maxId = Math.max(...matches.map(m => m.id));
  const { error: seqErr } = await supabase.rpc('setval_seq', { seq_name: 'matches_id_seq', new_value: maxId });
  if (seqErr) {
    console.warn(`  Sequence-update via RPC niet beschikbaar (${seqErr.message}).`);
    console.warn(`  Run handmatig in Studio: SELECT setval('matches_id_seq', ${maxId});`);
  } else {
    console.log(`  Sequence matches_id_seq → ${maxId}`);
  }
  return matches.length;
}

async function writeMatchLineups(supabase, lineups, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${lineups.length} lineup-rijen inserten`);
    return lineups.length;
  }
  for (let i = 0; i < lineups.length; i += 500) {
    const chunk = lineups.slice(i, i + 500);
    const { error } = await supabase.from('match_lineups').insert(chunk);
    if (error) throw new Error(`Insert match_lineups chunk ${i} failed: ${error.message}`);
  }
  return lineups.length;
}

const AANWEZIGHEID_COLUMNS = { DATE: 0, PLAYER_NAME: 1, STATUS: 2, TIMESTAMP: 3 };

function transformAttendance(rawAanwezigheid, matches, players) {
  const warnings = [];
  // Bouw lookup-maps voor performance.
  const matchByDate = new Map();
  for (const m of matches) {
    matchByDate.set(m.date, m.id);
  }
  const playerByName = new Map();
  for (const p of players) {
    playerByName.set(p.name.trim().toLowerCase(), p.id);
  }

  // Dedupe op (match_id, player_id) — last-wins (latere rijen in de sheet overschrijven eerdere).
  const byKey = new Map();
  let duplicateCount = 0;

  rawAanwezigheid.slice(1).forEach((row, idx) => {
    if (!row || row.length < 3) return;
    const dateRaw = sanitize(row[AANWEZIGHEID_COLUMNS.DATE]);
    const playerName = sanitize(row[AANWEZIGHEID_COLUMNS.PLAYER_NAME]);
    const status = sanitize(row[AANWEZIGHEID_COLUMNS.STATUS]);
    if (!dateRaw || !playerName || !status) return;

    // dateRaw is al "YYYY-MM-DD" in de Aanwezigheid-tab (bevestigd in CLAUDE.md).
    // Maar val terug op DD-MM-YYYY-parse als 't formaat anders blijkt.
    let dateIso = dateRaw;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateRaw)) {
      const parsed = parseDateToIso(dateRaw);
      if (!parsed) {
        warnings.push(`rij ${idx + 2}: ongeldig datum-formaat "${dateRaw}"`);
        return;
      }
      dateIso = parsed;
    }
    const matchId = matchByDate.get(dateIso);
    if (!matchId) {
      warnings.push(`rij ${idx + 2}: geen match gevonden voor datum ${dateIso}`);
      return;
    }
    const playerId = playerByName.get(playerName.toLowerCase());
    if (!playerId) {
      warnings.push(`rij ${idx + 2}: speler "${playerName}" niet gevonden`);
      return;
    }
    if (status !== 'Ja' && status !== 'Nee' && status !== 'Geen Reactie') {
      warnings.push(`rij ${idx + 2}: ongeldige status "${status}"`);
      return;
    }
    const key = `${matchId}::${playerId}`;
    if (byKey.has(key)) duplicateCount++;
    byKey.set(key, { match_id: matchId, player_id: playerId, status });
  });

  if (duplicateCount > 0) {
    warnings.push(`${duplicateCount} duplicate (match,player)-rijen gededupliceerd (last-wins)`);
  }

  return { records: Array.from(byKey.values()), warnings };
}

async function writeAttendance(supabase, records, args) {
  if (!args.write) {
    console.log(`  (dry-run) zou ${records.length} attendance-rijen inserten`);
    return records.length;
  }
  for (let i = 0; i < records.length; i += 500) {
    const chunk = records.slice(i, i + 500);
    const { error } = await supabase.from('attendance').insert(chunk);
    if (error) throw new Error(`Insert attendance chunk ${i} failed: ${error.message}`);
  }
  return records.length;
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

  await preFlight(supabase, args);
  if (args.wipeFirst && args.write) {
    await wipeAll(supabase);
  }

  console.log('Reading source data from Sheets...');
  const rawSpelers = await readSheet(env, 'Spelers');
  const rawWedstrijden = await readSheet(env, 'Wedstrijden');
  const rawAanwezigheid = await readSheet(env, 'Aanwezigheid');
  const rawNotificaties = await readSheet(env, 'Notificaties');
  console.log(`  Spelers:       ${rawSpelers.length - 1} rijen (excl. header)`);
  console.log(`  Wedstrijden:   ${rawWedstrijden.length - 1} rijen (excl. header)`);
  console.log(`  Aanwezigheid:  ${rawAanwezigheid.length - 1} rijen (excl. header)`);
  console.log(`  Notificaties:  ${rawNotificaties.length - 1} rijen (excl. header)`);

  console.log('\n=== Players ===');
  const players = transformPlayers(rawSpelers);
  console.log(`  Getransformeerd: ${players.length} players`);
  const playersWritten = await writePlayers(supabase, players, args);
  console.log(`  Geschreven: ${playersWritten}`);

  console.log('\n=== Matches ===');
  const { matches, warnings: matchWarnings } = transformMatches(rawWedstrijden, players);
  console.log(`  Getransformeerd: ${matches.length} matches`);
  for (const w of matchWarnings) console.warn(`  WARN: ${w}`);
  const matchesWritten = await writeMatches(supabase, matches, args);
  console.log(`  Geschreven: ${matchesWritten}`);

  console.log('\n=== Match lineups ===');
  const { lineups, warnings: lineupWarnings } = buildMatchLineups(matches, players);
  console.log(`  Getransformeerd: ${lineups.length} lineup-rijen`);
  for (const w of lineupWarnings) console.warn(`  WARN: ${w}`);
  const lineupsWritten = await writeMatchLineups(supabase, lineups, args);
  console.log(`  Geschreven: ${lineupsWritten}`);

  console.log('\n=== Attendance ===');
  const { records: attendance, warnings: attendanceWarnings } = transformAttendance(rawAanwezigheid, matches, players);
  console.log(`  Getransformeerd: ${attendance.length} attendance-rijen`);
  if (attendanceWarnings.length > 0) {
    console.warn(`  ${attendanceWarnings.length} warnings:`);
    for (const w of attendanceWarnings.slice(0, 10)) console.warn(`    ${w}`);
    if (attendanceWarnings.length > 10) console.warn(`    ... en ${attendanceWarnings.length - 10} meer`);
  }
  const attendanceWritten = await writeAttendance(supabase, attendance, args);
  console.log(`  Geschreven: ${attendanceWritten}`);
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
