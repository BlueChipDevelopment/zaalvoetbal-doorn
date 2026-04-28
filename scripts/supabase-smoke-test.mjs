import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.error('Set SUPABASE_URL and SUPABASE_ANON_KEY env vars.');
  process.exit(1);
}

const supabase = createClient(url, anonKey);

let failed = 0;

async function check(name, fn) {
  try {
    await fn();
    console.log('OK  ', name);
  } catch (err) {
    console.error('FAIL', name, '\n     ', err.message ?? err);
    failed++;
  }
}

await check('connect + select players', async () => {
  const { data, error } = await supabase.from('players').select('*');
  if (error) throw error;
  if (!Array.isArray(data)) throw new Error('expected array');
});

await check('insert + select + delete on players', async () => {
  const insert = await supabase
    .from('players')
    .insert({ name: 'SmokeTest', position: 'Speler' })
    .select()
    .single();
  if (insert.error) throw insert.error;
  if (insert.data.actief !== true) throw new Error('actief should default to true');

  const select = await supabase.from('players').select('*').eq('name', 'SmokeTest').single();
  if (select.error) throw select.error;
  if (select.data.id !== insert.data.id) throw new Error('id mismatch');

  const del = await supabase.from('players').delete().eq('name', 'SmokeTest');
  if (del.error) throw del.error;
});

await check('generated season column (september → next season)', async () => {
  const { data, error } = await supabase
    .from('matches')
    .insert({ date: '2026-09-15' })
    .select('id, date, season')
    .single();
  if (error) throw error;
  if (data.season !== '2026-2027') throw new Error(`expected 2026-2027, got ${data.season}`);
  await supabase.from('matches').delete().eq('id', data.id);
});

await check('generated season column (march → current season)', async () => {
  const { data, error } = await supabase
    .from('matches')
    .insert({ date: '2026-03-15' })
    .select('id, date, season')
    .single();
  if (error) throw error;
  if (data.season !== '2025-2026') throw new Error(`expected 2025-2026, got ${data.season}`);
  await supabase.from('matches').delete().eq('id', data.id);
});

await check('position CHECK constraint rejects invalid value', async () => {
  const { error } = await supabase
    .from('players')
    .insert({ name: 'BadPosition', position: 'Verdediger' });
  if (!error) {
    await supabase.from('players').delete().eq('name', 'BadPosition');
    throw new Error('expected CHECK violation, but insert succeeded');
  }
  if (!error.message.includes('check constraint')) {
    throw new Error(`expected check constraint error, got: ${error.message}`);
  }
});

if (failed > 0) {
  console.error(`\n${failed} check(s) failed.`);
  process.exit(1);
}
console.log('\nAll smoke tests passed.');
