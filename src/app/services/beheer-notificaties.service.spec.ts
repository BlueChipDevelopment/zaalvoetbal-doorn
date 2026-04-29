import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { lastValueFrom } from 'rxjs';
import { BeheerNotificatiesService } from './beheer-notificaties.service';
import { SupabaseClientService } from './data-sources/supabase-client.service';
import { environment } from '../../environments/environment';

describe('BeheerNotificatiesService', () => {
  let service: BeheerNotificatiesService;
  let httpMock: HttpTestingController;
  let qb: any;

  beforeEach(() => {
    qb = {
      select: jasmine.createSpy('select').and.callFake(() => qb),
      eq: jasmine.createSpy('eq').and.callFake(() => qb),
      gte: jasmine.createSpy('gte').and.callFake(() => qb),
      order: jasmine.createSpy('order').and.callFake(() => qb),
      limit: jasmine.createSpy('limit').and.callFake(() => qb),
      then: (resolve: any) => Promise.resolve({ data: [], error: null }).then(resolve),
    };
    const mockClient = {
      from: jasmine.createSpy('from').and.returnValue(qb),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BeheerNotificatiesService,
        { provide: SupabaseClientService, useValue: { client: mockClient } },
      ],
    });
    service = TestBed.inject(BeheerNotificatiesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('getSubscriptionsForAdmin mapt rows + parsedt UA', async () => {
    qb.then = (resolve: any) => Promise.resolve({
      data: [{
        id: 1, endpoint: 'https://push/1',
        user_agent: 'Mozilla/5.0 (Windows NT 10.0) Chrome/119.0.0.0 Safari/537.36',
        active: true, created_at: '2026-01-01', last_seen_at: '2026-04-01',
        player_id: 5, players: { id: 5, name: 'Bob' },
      }],
      error: null,
    }).then(resolve);

    const subs = await lastValueFrom(service.getSubscriptionsForAdmin());
    expect(subs.length).toBe(1);
    expect(subs[0].playerName).toBe('Bob');
    expect(subs[0].device).toContain('Chrome');
    expect(subs[0].device).toContain('Windows');
  });

  it('getReminderHistory mapt en limiteert', async () => {
    qb.then = (resolve: any) => Promise.resolve({
      data: [{
        id: 1, sent_at: '2026-04-29T17:00:00Z', type: 'attendance-reminder-4h',
        title: 'X', body: 'match=42', recipients_count: 22, succeeded_count: 21, expired_count: 1,
      }],
      error: null,
    }).then(resolve);

    const history = await lastValueFrom(service.getReminderHistory(50));
    expect(history.length).toBe(1);
    expect(history[0].sentAt).toBe('2026-04-29T17:00:00Z');
    expect(qb.limit).toHaveBeenCalledWith(50);
  });

  it('sendTestBroadcast POSTet naar Functions endpoint met type=broadcast-test', async () => {
    const promise = lastValueFrom(service.sendTestBroadcast('Hello', 'Body'));
    const req = httpMock.expectOne(`${environment.firebaseBaseUrl}/sendPushToAll`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ type: 'broadcast-test', title: 'Hello', body: 'Body', url: undefined });
    req.flush({ sent: 5, failed: 0, deactivated: 0, total: 5 });
    const result = await promise;
    expect(result.sent).toBe(5);
  });
});
