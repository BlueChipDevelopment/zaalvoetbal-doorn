import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabaseStrippenkaartDataSource } from './strippenkaart-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

/** Mock-client die per tabel/operatie een resultaat teruggeeft en inserts/deletes vastlegt. */
function makeDeductionClient(dataset: {
  matchSeason: string | null;
  lineup: number[];        // player_ids in de opstelling
  stripPlayers: number[];  // van lineup: uses_strippenkaart = true
  subscribed: number[];    // van stripPlayers: abonnement dat seizoen
}) {
  const inserted: any[] = [];
  const deletes: any[] = [];
  function builder(table: string) {
    const state: any = { table, op: 'select', filters: {} };
    const b: any = {
      select: () => { state.op = 'select'; return b; },
      insert: (rows: any) => { state.op = 'insert'; state.rows = rows; return b; },
      delete: () => { state.op = 'delete'; return b; },
      eq: (c: string, v: any) => { state.filters[c] = v; return b; },
      in: (c: string, v: any) => { state.filters[c + '__in'] = v; return b; },
      single: () => { state.single = true; return b; },
      then: (resolve: any) => Promise.resolve(result(state)).then(resolve),
    };
    return b;
  }
  function result(state: any) {
    if (state.table === 'matches') return { data: { season: dataset.matchSeason }, error: null };
    if (state.table === 'match_lineups') return { data: dataset.lineup.map(id => ({ player_id: id })), error: null };
    if (state.table === 'players') return { data: dataset.stripPlayers.map(id => ({ id })), error: null };
    if (state.table === 'season_subscriptions') return { data: dataset.subscribed.map(id => ({ player_id: id })), error: null };
    if (state.table === 'strip_transactions') {
      if (state.op === 'insert') { inserted.push(...state.rows); return { data: null, error: null }; }
      if (state.op === 'delete') { deletes.push(state.filters); return { data: null, error: null }; }
    }
    return { data: [], error: null };
  }
  return { client: { from: (t: string) => builder(t) }, inserted, deletes };
}

describe('SupabaseStrippenkaartDataSource.applyMatchDeductions', () => {
  function makeDataSource(mock: any) {
    TestBed.configureTestingModule({
      providers: [
        SupabaseStrippenkaartDataSource,
        { provide: SupabaseClientService, useValue: { client: mock.client } },
      ],
    });
    return TestBed.inject(SupabaseStrippenkaartDataSource);
  }

  it('schrijft -1 voor strippenkaart-spelers zonder abonnement; abonnement dekt', async () => {
    // lineup 1,2,3 — strippenkaart 2,3 — abonnement (dat seizoen) 3 -> alleen 2 krijgt -1
    const mock = makeDeductionClient({ matchSeason: '2024-2025', lineup: [1, 2, 3], stripPlayers: [2, 3], subscribed: [3] });
    const ds = makeDataSource(mock);

    await lastValueFrom(ds.applyMatchDeductions(7));

    expect(mock.deletes.length).toBe(1);            // bestaande wedstrijd-regels eerst verwijderd
    expect(mock.deletes[0]).toEqual({ match_id: 7, reason: 'wedstrijd' });
    expect(mock.inserted).toEqual([{ player_id: 2, match_id: 7, amount: -1, reason: 'wedstrijd' }]);
  });

  it('geen strippenkaart-spelers -> wel delete, geen insert', async () => {
    const mock = makeDeductionClient({ matchSeason: '2024-2025', lineup: [1, 2], stripPlayers: [], subscribed: [] });
    const ds = makeDataSource(mock);

    await lastValueFrom(ds.applyMatchDeductions(7));

    expect(mock.deletes.length).toBe(1);
    expect(mock.inserted).toEqual([]);
  });

  it('herhaald aanroepen blijft idempotent (delete dan insert)', async () => {
    const mock = makeDeductionClient({ matchSeason: '2024-2025', lineup: [2], stripPlayers: [2], subscribed: [] });
    const ds = makeDataSource(mock);

    await lastValueFrom(ds.applyMatchDeductions(7));
    await lastValueFrom(ds.applyMatchDeductions(7));

    expect(mock.deletes.length).toBe(2);                 // elke run verwijdert eerst
    expect(mock.inserted.filter((r: any) => r.player_id === 2).length).toBe(2); // elke run één nieuwe regel na delete
  });
});

describe('SupabaseStrippenkaartDataSource', () => {
  let dataSource: SupabaseStrippenkaartDataSource;
  let queryBuilder: any;
  let mockClient: any;

  beforeEach(() => {
    queryBuilder = {
      select: jasmine.createSpy('select').and.callFake(() => queryBuilder),
      insert: jasmine.createSpy('insert').and.callFake(() => queryBuilder),
      delete: jasmine.createSpy('delete').and.callFake(() => queryBuilder),
      eq: jasmine.createSpy('eq').and.callFake(() => queryBuilder),
      order: jasmine.createSpy('order').and.callFake(() => queryBuilder),
      then: undefined as any,
    };
    mockClient = { from: jasmine.createSpy('from').and.returnValue(queryBuilder) };
    TestBed.configureTestingModule({
      providers: [
        SupabaseStrippenkaartDataSource,
        { provide: SupabaseClientService, useValue: { client: mockClient } },
      ],
    });
    dataSource = TestBed.inject(SupabaseStrippenkaartDataSource);
  });

  it('getAllTransactions mapt rows naar StripTransaction', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: [
      { id: 1, player_id: 3, match_id: 7, amount: -1, reason: 'wedstrijd', created_at: 'a' },
      { id: 2, player_id: 3, match_id: null, amount: 10, reason: 'kaart gekocht', created_at: 'b' },
    ], error: null }).then(resolve);

    const txs = await lastValueFrom(dataSource.getAllTransactions());

    expect(mockClient.from).toHaveBeenCalledWith('strip_transactions');
    expect(txs).toEqual([
      { id: 1, playerId: 3, matchId: 7, amount: -1, reason: 'wedstrijd', createdAt: 'a' },
      { id: 2, playerId: 3, matchId: null, amount: 10, reason: 'kaart gekocht', createdAt: 'b' },
    ]);
  });

  it('addTransaction insert een rij met match_id null', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.addTransaction(3, 10, 'kaart gekocht'));

    expect(mockClient.from).toHaveBeenCalledWith('strip_transactions');
    expect(queryBuilder.insert).toHaveBeenCalledWith({
      player_id: 3, match_id: null, amount: 10, reason: 'kaart gekocht',
    });
  });

  it('getSubscriptions geeft player_ids voor een seizoen', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: [
      { player_id: 3 }, { player_id: 9 },
    ], error: null }).then(resolve);

    const ids = await lastValueFrom(dataSource.getSubscriptions('2024-2025'));

    expect(mockClient.from).toHaveBeenCalledWith('season_subscriptions');
    expect(queryBuilder.eq).toHaveBeenCalledWith('season', '2024-2025');
    expect(ids).toEqual([3, 9]);
  });

  it('setSubscription(on=true) inserts (player, season)', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.setSubscription(3, '2024-2025', true));

    expect(queryBuilder.insert).toHaveBeenCalledWith({ player_id: 3, season: '2024-2025' });
  });

  it('setSubscription(on=false) verwijdert (player, season)', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.setSubscription(3, '2024-2025', false));

    expect(queryBuilder.delete).toHaveBeenCalled();
    expect(queryBuilder.eq).toHaveBeenCalledWith('player_id', 3);
    expect(queryBuilder.eq).toHaveBeenCalledWith('season', '2024-2025');
  });
});
