import { TestBed } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { SupabaseNotificationDataSource } from './notification-data-source.supabase';
import { SupabaseClientService } from './supabase-client.service';

describe('SupabaseNotificationDataSource', () => {
  let dataSource: SupabaseNotificationDataSource;
  let mockClient: any;
  let qb: any;

  beforeEach(() => {
    qb = {
      select: jasmine.createSpy('select').and.callFake(() => qb),
      insert: jasmine.createSpy('insert').and.callFake(() => qb),
      upsert: jasmine.createSpy('upsert').and.callFake(() => qb),
      update: jasmine.createSpy('update').and.callFake(() => qb),
      eq: jasmine.createSpy('eq').and.callFake(() => qb),
      limit: jasmine.createSpy('limit').and.callFake(() => qb),
      then: (resolve: any) => Promise.resolve({ data: [], error: null }).then(resolve),
    };
    mockClient = { from: jasmine.createSpy('from').and.returnValue(qb) };

    TestBed.configureTestingModule({
      providers: [
        SupabaseNotificationDataSource,
        { provide: SupabaseClientService, useValue: { client: mockClient } },
      ],
    });
    dataSource = TestBed.inject(SupabaseNotificationDataSource);
  });

  it('getAllSubscriptions mapt rows naar PushSubscriptionRecord', async () => {
    qb.then = (resolve: any) => Promise.resolve({
      data: [{
        id: 1, endpoint: 'https://push/1',
        keys_p256dh: 'p1', keys_auth: 'a1',
        user_agent: 'Chrome', last_seen_at: '2026-01-01',
        active: true, player_id: 5,
        created_at: '2026-01-01',
        players: { name: 'Bob' },
      }],
      error: null,
    }).then(resolve);

    const subs = await lastValueFrom(dataSource.getAllSubscriptions());

    expect(mockClient.from).toHaveBeenCalledWith('push_subscriptions');
    expect(subs.length).toBe(1);
    expect(subs[0].endpoint).toBe('https://push/1');
    expect(subs[0].active).toBe(true);
    expect(subs[0].playerName).toBe('Bob');
  });

  it('addSubscription gebruikt upsert met onConflict: endpoint', async () => {
    let callCount = 0;
    qb.then = (resolve: any) => {
      callCount++;
      // First call: player lookup. Second call: upsert.
      const result = callCount === 1
        ? { data: [{ id: 7, name: 'Alice' }], error: null }
        : { data: null, error: null };
      return Promise.resolve(result).then(resolve);
    };

    await lastValueFrom(dataSource.addSubscription({
      endpoint: 'https://push/2',
      keysP256dh: 'p2', keysAuth: 'a2',
      userAgent: 'Firefox', timestamp: '2026-01-02',
      active: true, playerName: 'Alice',
    }));

    expect(qb.upsert).toHaveBeenCalled();
    const args = qb.upsert.calls.mostRecent().args;
    expect(args[1]).toEqual({ onConflict: 'endpoint' });
  });

  it('deactivateSubscription update active=false op endpoint', async () => {
    qb.then = (resolve: any) => Promise.resolve({ data: null, error: null }).then(resolve);

    await lastValueFrom(dataSource.deactivateSubscription('https://push/3'));

    expect(qb.update).toHaveBeenCalledWith({ active: false });
    expect(qb.eq).toHaveBeenCalledWith('endpoint', 'https://push/3');
  });
});
