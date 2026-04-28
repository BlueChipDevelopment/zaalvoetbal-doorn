import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabasePlayerDataSource } from './player-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

describe('SupabasePlayerDataSource', () => {
  let dataSource: SupabasePlayerDataSource;
  let mockClient: any;
  let queryBuilder: any;

  beforeEach(() => {
    queryBuilder = {
      select: jasmine.createSpy('select').and.callFake(() => queryBuilder),
      insert: jasmine.createSpy('insert').and.callFake(() => queryBuilder),
      update: jasmine.createSpy('update').and.callFake(() => queryBuilder),
      eq: jasmine.createSpy('eq').and.callFake(() => queryBuilder),
      order: jasmine.createSpy('order').and.callFake(() => queryBuilder),
      limit: jasmine.createSpy('limit').and.callFake(() => queryBuilder),
      then: undefined as any,
    };
    mockClient = {
      from: jasmine.createSpy('from').and.returnValue(queryBuilder),
    };

    TestBed.configureTestingModule({
      providers: [
        SupabasePlayerDataSource,
        { provide: SupabaseClientService, useValue: { client: mockClient } },
      ],
    });
    dataSource = TestBed.inject(SupabasePlayerDataSource);
  });

  it('getAll mapt rows van players-tabel naar PlayerSheetData', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: [
      { id: 1, name: 'Alice', position: 'Speler', actief: true, created_at: '...' },
      { id: 2, name: 'Bob', position: 'Keeper', actief: false, created_at: '...' },
    ], error: null }).then(resolve);

    const players = await lastValueFrom(dataSource.getAll());

    expect(mockClient.from).toHaveBeenCalledWith('players');
    expect(queryBuilder.order).toHaveBeenCalledWith('name');
    expect(players).toEqual([
      { id: 1, name: 'Alice', position: 'Speler', actief: true },
      { id: 2, name: 'Bob', position: 'Keeper', actief: false },
    ]);
  });

  it('add insert een rij in players', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.add({ name: 'Carl', position: 'Speler', actief: true }));

    expect(queryBuilder.insert).toHaveBeenCalledWith({
      name: 'Carl',
      position: 'Speler',
      actief: true,
    });
  });

  it('update by id update de bijbehorende rij', async () => {
    queryBuilder.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.update(5, { name: 'Updated', position: 'Keeper', actief: false }));

    expect(queryBuilder.update).toHaveBeenCalledWith({
      name: 'Updated',
      position: 'Keeper',
      actief: false,
    });
    expect(queryBuilder.eq).toHaveBeenCalledWith('id', 5);
  });

  it('update by name lookt id eerst op', async () => {
    let firstCall = true;
    queryBuilder.then = (resolve: any) => {
      const result = firstCall
        ? { data: [{ id: 7, name: 'Dan', position: 'Speler', actief: true }], error: null }
        : { data: null, error: null };
      firstCall = false;
      return Promise.resolve(result).then(resolve);
    };

    await lastValueFrom(dataSource.update('Dan', { name: 'Dan', position: 'Speler', actief: false }));

    expect(queryBuilder.eq).toHaveBeenCalledWith('id', 7);
  });

  it('error van Supabase wordt observable error', async () => {
    queryBuilder.then = (resolve: any) =>
      Promise.resolve({ data: null, error: { message: 'connection failure' } }).then(resolve);

    await expectAsync(lastValueFrom(dataSource.getAll()))
      .toBeRejected();
  });
});
