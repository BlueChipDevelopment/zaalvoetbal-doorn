import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabaseStrippenkaartDataSource } from './strippenkaart-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

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
