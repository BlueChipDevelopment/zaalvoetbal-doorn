import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabaseAttendanceDataSource } from './attendance-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

describe('SupabaseAttendanceDataSource', () => {
  let dataSource: SupabaseAttendanceDataSource;
  let mockClient: any;
  let qb: any;

  beforeEach(() => {
    qb = {
      select: jasmine.createSpy('select').and.callFake(() => qb),
      upsert: jasmine.createSpy('upsert').and.callFake(() => qb),
      eq: jasmine.createSpy('eq').and.callFake(() => qb),
      limit: jasmine.createSpy('limit').and.callFake(() => qb),
      then: (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve),
    };
    mockClient = { from: jasmine.createSpy('from').and.returnValue(qb) };

    TestBed.configureTestingModule({
      providers: [
        SupabaseAttendanceDataSource,
        { provide: SupabaseClientService, useValue: { client: mockClient } },
      ],
    });
    dataSource = TestBed.inject(SupabaseAttendanceDataSource);
  });

  it('getAll mapt rows naar AttendanceRecord met date als YYYY-MM-DD', async () => {
    qb.then = (resolve: any) => Promise.resolve({
      data: [
        { match_id: 1, player_id: 5, status: 'Ja', match: { date: '2025-09-15' }, player: { name: 'Bob' }, updated_at: '2025-09-10T00:00:00.000Z' },
      ],
      error: null,
    }).then(resolve);

    const records = await lastValueFrom(dataSource.getAll());

    expect(mockClient.from).toHaveBeenCalledWith('attendance');
    expect(records.length).toBe(1);
    expect(records[0].date).toBe('2025-09-15');
    expect(records[0].playerName).toBe('Bob');
    expect(records[0].status).toBe('Ja');
  });

  it('upsert vertaalt date+playerName naar match_id+player_id en upsert', async () => {
    let callCount = 0;
    qb.then = (resolve: any) => {
      callCount++;
      let result;
      if (callCount === 1) {
        // player lookup
        result = { data: [{ id: 5, name: 'Bob' }], error: null };
      } else if (callCount === 2) {
        // match lookup
        result = { data: [{ id: 10 }], error: null };
      } else {
        // attendance upsert
        result = { data: null, error: null };
      }
      return Promise.resolve(result).then(resolve);
    };

    await lastValueFrom(dataSource.upsert({ date: '2025-09-15', playerName: 'Bob', status: 'Ja' }));

    expect(mockClient.from).toHaveBeenCalledWith('attendance');
    expect(qb.upsert).toHaveBeenCalled();
    const upsertArgs = qb.upsert.calls.mostRecent().args;
    expect(upsertArgs[0]).toEqual({ match_id: 10, player_id: 5, status: 'Ja' });
    expect(upsertArgs[1]).toEqual({ onConflict: 'match_id,player_id' });
  });
});
