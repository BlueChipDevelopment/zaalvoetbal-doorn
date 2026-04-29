# Beheer-Notificaties scherm — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bouw een admin-scherm onder `/admin` met derde tab "Notificatiebeheer" dat drie sub-tabs heeft: Abonnementen (lijst push_subscriptions), Geschiedenis (reminder_log), Analytics (bereik + groei + 30d-stats). Inclusief test-broadcast-knop. Plus backend-tweak: `sendPushToAll` schrijft elke call naar `reminder_log`.

**Architecture:** Nieuwe `AdminNotificatiesComponent` als child van bestaande `AdminComponent`. Dedicated `BeheerNotificatiesService` doet alle Supabase-reads via `SupabaseClientService` en wrapt de bestaande `sendPushToAll`-Function-call voor test-broadcasts. Pure `userAgentParser`-util voor leesbare device-namen. Nested mat-tabs (admin-niveau + sub-tabs binnen Notificatiebeheer).

**Tech Stack:** Angular 18, Material (`MatTabs`, `MatTable`, `MatDialog`, `MatSnackBar`), `@supabase/supabase-js`, Karma/Jasmine.

**Bron-spec:** `docs/superpowers/specs/2026-04-29-beheer-notificaties-design.md`.

---

## File overview

Nieuw:
- `src/app/utils/user-agent-parser.ts`
- `src/app/utils/user-agent-parser.spec.ts`
- `src/app/services/beheer-notificaties.service.ts`
- `src/app/services/beheer-notificaties.service.spec.ts`
- `src/app/components/admin/admin-notificaties/admin-notificaties.component.ts`
- `src/app/components/admin/admin-notificaties/admin-notificaties.component.html`
- `src/app/components/admin/admin-notificaties/admin-notificaties.component.scss`
- `src/app/components/admin/admin-notificaties/test-broadcast-dialog.component.ts`
- `src/app/components/admin/admin-notificaties/test-broadcast-dialog.component.html`

Aangepast:
- `src/app/components/admin/admin.component.html`
- `src/app/components/admin/admin.module.ts`
- `functions/src/notifications/send-push-to-all.ts`

---

### Task 1: UserAgent-parser util

**Files:**
- Create: `src/app/utils/user-agent-parser.ts`
- Create: `src/app/utils/user-agent-parser.spec.ts`

- [ ] **Step 1: Failing tests schrijven**

Maak `src/app/utils/user-agent-parser.spec.ts`:

```ts
import { parseUserAgent } from './user-agent-parser';

describe('parseUserAgent', () => {
  it('Chrome op Windows', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36';
    expect(parseUserAgent(ua)).toBe('Chrome op Windows');
  });

  it('Safari op iPhone', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1';
    expect(parseUserAgent(ua)).toBe('Safari op iPhone');
  });

  it('Firefox op Mac', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:120.0) Gecko/20100101 Firefox/120.0';
    expect(parseUserAgent(ua)).toBe('Firefox op Mac');
  });

  it('Edge op Windows', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0';
    expect(parseUserAgent(ua)).toBe('Edge op Windows');
  });

  it('Chrome op Android', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36';
    expect(parseUserAgent(ua)).toBe('Chrome op Android');
  });

  it('lege string returnt Onbekend', () => {
    expect(parseUserAgent('')).toBe('Onbekend');
  });

  it('null/undefined returnt Onbekend', () => {
    expect(parseUserAgent(null)).toBe('Onbekend');
    expect(parseUserAgent(undefined)).toBe('Onbekend');
  });

  it('onbekende UA returnt Onbekend', () => {
    expect(parseUserAgent('Mozilla/5.0 (PlayStation 5)')).toBe('Onbekend');
  });
});
```

- [ ] **Step 2: Run om te falen**

```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/user-agent-parser.spec.ts' 2>&1 | tail -10
```

Expected: failure — module bestaat niet.

- [ ] **Step 3: Implementeren**

Maak `src/app/utils/user-agent-parser.ts`:

```ts
/**
 * Vertaalt een browser user-agent string naar een leesbare "<browser> op <os>" string.
 * Returnt 'Onbekend' bij lege/null/onbekende input.
 *
 * Volgorde van detectie is belangrijk:
 *  - Edge moet vóór Chrome (Edg/ string staat ook 'Chrome' in)
 *  - iPhone vóór Mac (iPhone-UA bevat 'Mac OS X')
 *  - Android vóór Linux
 */
export function parseUserAgent(ua: string | null | undefined): string {
  if (!ua) return 'Onbekend';

  let browser: string | null = null;
  if (/\bEdg\//.test(ua)) browser = 'Edge';
  else if (/\bChrome\//.test(ua)) browser = 'Chrome';
  else if (/\bFirefox\//.test(ua)) browser = 'Firefox';
  else if (/\bSafari\//.test(ua) && /\bVersion\//.test(ua)) browser = 'Safari';

  let os: string | null = null;
  if (/iPhone|iPod/.test(ua)) os = 'iPhone';
  else if (/iPad/.test(ua)) os = 'iPad';
  else if (/Android/.test(ua)) os = 'Android';
  else if (/Windows NT/.test(ua)) os = 'Windows';
  else if (/Mac OS X/.test(ua)) os = 'Mac';
  else if (/Linux/.test(ua)) os = 'Linux';

  if (!browser || !os) return 'Onbekend';
  return `${browser} op ${os}`;
}
```

- [ ] **Step 4: Run tests**

```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/user-agent-parser.spec.ts' 2>&1 | tail -10
```

Expected: 8 tests pass.

- [ ] **Step 5: Stage**

```bash
git add src/app/utils/user-agent-parser.ts src/app/utils/user-agent-parser.spec.ts
git status --short
```

Expected: 2 new files. Geen xlsx.

**Niet zelf committen — controller commit.**

## Report

- Status, test result, files staged.

---

### Task 2: BeheerNotificatiesService

**Files:**
- Create: `src/app/services/beheer-notificaties.service.ts`
- Create: `src/app/services/beheer-notificaties.service.spec.ts`

- [ ] **Step 1: Service en types schrijven**

Maak `src/app/services/beheer-notificaties.service.ts`:

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SupabaseClientService } from './data-sources/supabase-client.service';
import { parseUserAgent } from '../utils/user-agent-parser';

export interface AdminSubscription {
  id: number;
  endpoint: string;
  playerName: string | null;
  playerId: number | null;
  device: string;
  active: boolean;
  createdAt: string | null;
  lastSeenAt: string | null;
}

export interface ReminderLogEntry {
  id: number;
  sentAt: string;
  type: string;
  title: string | null;
  body: string | null;
  recipientsCount: number | null;
  succeededCount: number | null;
  expiredCount: number | null;
}

export interface UnreachablePlayer {
  id: number;
  name: string;
}

export interface MonthBucket {
  month: string;        // YYYY-MM
  newSubsCount: number;
}

export interface NotificationsAnalytics {
  reachableCount: number;
  totalActiveCount: number;
  unreachablePlayers: UnreachablePlayer[];
  growthByMonth: MonthBucket[];
  last30DaysStats: {
    reminders: number;
    recipients: number;
    succeeded: number;
    expired: number;
  };
}

export interface BroadcastResult {
  sent: number;
  failed: number;
  deactivated: number;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class BeheerNotificatiesService {
  constructor(
    private supabase: SupabaseClientService,
    private http: HttpClient,
  ) {}

  getSubscriptionsForAdmin(): Observable<AdminSubscription[]> {
    return from(
      this.supabase.client
        .from('push_subscriptions')
        .select('id, endpoint, user_agent, active, created_at, last_seen_at, player_id, players:player_id(id, name)')
        .order('active', { ascending: false })
        .order('last_seen_at', { ascending: false, nullsFirst: false }),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          id: row.id,
          endpoint: row.endpoint,
          playerName: row.players?.name ?? null,
          playerId: row.player_id ?? null,
          device: parseUserAgent(row.user_agent),
          active: !!row.active,
          createdAt: row.created_at ?? null,
          lastSeenAt: row.last_seen_at ?? null,
        } as AdminSubscription));
      }),
    );
  }

  getReminderHistory(limit = 50): Observable<ReminderLogEntry[]> {
    return from(
      this.supabase.client
        .from('reminder_log')
        .select('id, sent_at, type, title, body, recipients_count, succeeded_count, expired_count')
        .order('sent_at', { ascending: false })
        .limit(limit),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return (data ?? []).map((row: any) => ({
          id: row.id,
          sentAt: row.sent_at,
          type: row.type,
          title: row.title,
          body: row.body,
          recipientsCount: row.recipients_count,
          succeededCount: row.succeeded_count,
          expiredCount: row.expired_count,
        } as ReminderLogEntry));
      }),
    );
  }

  getAnalytics(): Observable<NotificationsAnalytics> {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    return combineLatest([
      from(this.supabase.client.from('players').select('id, name, actief').eq('actief', true)),
      from(this.supabase.client.from('push_subscriptions').select('player_id, active, created_at')),
      from(
        this.supabase.client
          .from('reminder_log')
          .select('recipients_count, succeeded_count, expired_count, sent_at')
          .gte('sent_at', thirtyDaysAgo),
      ),
    ]).pipe(
      map(([playersRes, subsRes, logRes]) => {
        if (playersRes.error) throw playersRes.error;
        if (subsRes.error) throw subsRes.error;
        if (logRes.error) throw logRes.error;

        const activePlayers = (playersRes.data ?? []) as { id: number; name: string }[];
        const subs = (subsRes.data ?? []) as { player_id: number | null; active: boolean; created_at: string }[];
        const log = (logRes.data ?? []) as { recipients_count: number | null; succeeded_count: number | null; expired_count: number | null }[];

        // Reach
        const reachablePlayerIds = new Set(
          subs.filter(s => s.active && s.player_id !== null).map(s => s.player_id as number),
        );
        const reachableCount = activePlayers.filter(p => reachablePlayerIds.has(p.id)).length;
        const unreachablePlayers = activePlayers
          .filter(p => !reachablePlayerIds.has(p.id))
          .map(p => ({ id: p.id, name: p.name }));

        // Growth: tellen per YYYY-MM voor laatste 12 maanden.
        const monthBuckets = new Map<string, number>();
        const now = new Date();
        for (let i = 11; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
          monthBuckets.set(key, 0);
        }
        for (const s of subs) {
          if (!s.created_at) continue;
          const d = new Date(s.created_at);
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
          if (monthBuckets.has(key)) {
            monthBuckets.set(key, (monthBuckets.get(key) ?? 0) + 1);
          }
        }
        const growthByMonth = Array.from(monthBuckets.entries()).map(([month, newSubsCount]) => ({ month, newSubsCount }));

        // Last30
        const last30DaysStats = log.reduce(
          (acc, r) => ({
            reminders: acc.reminders + 1,
            recipients: acc.recipients + (r.recipients_count ?? 0),
            succeeded: acc.succeeded + (r.succeeded_count ?? 0),
            expired: acc.expired + (r.expired_count ?? 0),
          }),
          { reminders: 0, recipients: 0, succeeded: 0, expired: 0 },
        );

        return {
          reachableCount,
          totalActiveCount: activePlayers.length,
          unreachablePlayers,
          growthByMonth,
          last30DaysStats,
        };
      }),
    );
  }

  sendTestBroadcast(title: string, body: string, url?: string): Observable<BroadcastResult> {
    const endpoint = `${environment.firebaseBaseUrl}/sendPushToAll`;
    return this.http.post<BroadcastResult>(endpoint, {
      type: 'broadcast-test',
      title,
      body,
      url: url || undefined,
    });
  }
}
```

- [ ] **Step 2: Spec schrijven (lichte tests, focus op key transformations)**

Maak `src/app/services/beheer-notificaties.service.spec.ts`:

```ts
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
```

- [ ] **Step 3: Run tests**

```bash
npx ng test --watch=false --browsers=ChromeHeadless --include='**/beheer-notificaties.service.spec.ts' 2>&1 | tail -15
```

Expected: 3 tests pass.

- [ ] **Step 4: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -5
```

Expected: succeeds.

- [ ] **Step 5: Stage**

```bash
git add src/app/services/beheer-notificaties.service.ts src/app/services/beheer-notificaties.service.spec.ts
git status --short
```

**Niet committen — controller commit.**

---

### Task 3: AdminNotificatiesComponent skeleton + Tab 1 (Abonnementen)

**Files:**
- Create: `src/app/components/admin/admin-notificaties/admin-notificaties.component.ts`
- Create: `src/app/components/admin/admin-notificaties/admin-notificaties.component.html`
- Create: `src/app/components/admin/admin-notificaties/admin-notificaties.component.scss`

- [ ] **Step 1: Component-class**

Maak `admin-notificaties.component.ts`:

```ts
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AdminSubscription,
  BeheerNotificatiesService,
  NotificationsAnalytics,
  ReminderLogEntry,
} from '../../../services/beheer-notificaties.service';

@Component({
  selector: 'app-admin-notificaties',
  templateUrl: './admin-notificaties.component.html',
  styleUrls: ['./admin-notificaties.component.scss'],
})
export class AdminNotificatiesComponent implements OnInit {
  private readonly refresh$ = new BehaviorSubject<void>(undefined);

  subscriptions$!: Observable<AdminSubscription[]>;
  history$!: Observable<ReminderLogEntry[]>;
  analytics$!: Observable<NotificationsAnalytics>;

  readonly subscriptionColumns = ['playerName', 'device', 'createdAt', 'lastSeenAt', 'active'];
  readonly historyColumns = ['sentAt', 'type', 'title', 'recipientsCount', 'succeededCount', 'expiredCount'];

  constructor(private beheer: BeheerNotificatiesService) {}

  ngOnInit(): void {
    this.subscriptions$ = this.refresh$.pipe(switchMap(() => this.beheer.getSubscriptionsForAdmin()));
    this.history$ = this.refresh$.pipe(switchMap(() => this.beheer.getReminderHistory(50)));
    this.analytics$ = this.refresh$.pipe(switchMap(() => this.beheer.getAnalytics()));
  }

  refreshAll(): void {
    this.refresh$.next();
  }
}
```

- [ ] **Step 2: Template (alleen Tab 1, andere tabs als placeholders)**

Maak `admin-notificaties.component.html`:

```html
<div class="notif-admin">
  <div class="header-actions">
    <button mat-stroked-button (click)="refreshAll()">
      <mat-icon>refresh</mat-icon>
      Verversen
    </button>
  </div>

  <mat-tab-group>
    <!-- Tab 1: Abonnementen -->
    <mat-tab label="Abonnementen">
      <ng-container *ngIf="subscriptions$ | async as subs; else loadingSubs">
        <p class="hint">Totaal: {{ subs.length }} abonnement(en).</p>
        <table mat-table [dataSource]="subs" class="full-width">
          <ng-container matColumnDef="playerName">
            <th mat-header-cell *matHeaderCellDef>Speler</th>
            <td mat-cell *matCellDef="let row">{{ row.playerName || '—' }}</td>
          </ng-container>
          <ng-container matColumnDef="device">
            <th mat-header-cell *matHeaderCellDef>Device</th>
            <td mat-cell *matCellDef="let row">{{ row.device }}</td>
          </ng-container>
          <ng-container matColumnDef="createdAt">
            <th mat-header-cell *matHeaderCellDef>Aangemeld</th>
            <td mat-cell *matCellDef="let row">{{ row.createdAt | date:'dd-MM-yyyy' }}</td>
          </ng-container>
          <ng-container matColumnDef="lastSeenAt">
            <th mat-header-cell *matHeaderCellDef>Laatst gezien</th>
            <td mat-cell *matCellDef="let row">{{ row.lastSeenAt ? (row.lastSeenAt | date:'dd-MM-yyyy') : '—' }}</td>
          </ng-container>
          <ng-container matColumnDef="active">
            <th mat-header-cell *matHeaderCellDef>Status</th>
            <td mat-cell *matCellDef="let row">
              <span [class.active]="row.active" [class.inactive]="!row.active">
                {{ row.active ? '✓ Actief' : '✗ Inactief' }}
              </span>
            </td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="subscriptionColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: subscriptionColumns;"></tr>
        </table>
      </ng-container>
      <ng-template #loadingSubs><p>Laden…</p></ng-template>
    </mat-tab>

    <!-- Tab 2: Geschiedenis (placeholder, vult Task 4) -->
    <mat-tab label="Geschiedenis">
      <p>(volgende task)</p>
    </mat-tab>

    <!-- Tab 3: Analytics (placeholder, vult Task 5) -->
    <mat-tab label="Analytics">
      <p>(volgende task)</p>
    </mat-tab>
  </mat-tab-group>
</div>
```

- [ ] **Step 3: Styles**

Maak `admin-notificaties.component.scss`:

```scss
.notif-admin {
  padding: 1rem;

  .header-actions {
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .hint {
    color: rgba(0, 0, 0, 0.6);
    margin: 0.5rem 0;
  }

  .full-width { width: 100%; }

  .active { color: #43a047; font-weight: 500; }
  .inactive { color: #9e9e9e; }
}
```

- [ ] **Step 4: Build-check (component nog niet in module gewired, dus compile-only)**

```bash
npx ng build --configuration development 2>&1 | tail -5
```

Expected: build slaagt (component nog niet declared, dus geen runtime check nodig).

- [ ] **Step 5: Stage**

```bash
git add src/app/components/admin/admin-notificaties/
git status --short
```

**Niet committen — controller commit.**

---

### Task 4: Tab 2 (Geschiedenis)

**Files:**
- Modify: `src/app/components/admin/admin-notificaties/admin-notificaties.component.html`

- [ ] **Step 1: Vervang Tab 2 placeholder**

Open `admin-notificaties.component.html`. Vervang het Tab 2-blok (`<mat-tab label="Geschiedenis">…</mat-tab>`) door:

```html
    <mat-tab label="Geschiedenis">
      <ng-container *ngIf="history$ | async as history; else loadingHistory">
        <p class="hint">Laatste {{ history.length }} verzonden notificatie(s).</p>
        <table mat-table [dataSource]="history" class="full-width">
          <ng-container matColumnDef="sentAt">
            <th mat-header-cell *matHeaderCellDef>Verstuurd</th>
            <td mat-cell *matCellDef="let row">{{ row.sentAt | date:'dd-MM-yyyy HH:mm' }}</td>
          </ng-container>
          <ng-container matColumnDef="type">
            <th mat-header-cell *matHeaderCellDef>Type</th>
            <td mat-cell *matCellDef="let row">{{ row.type }}</td>
          </ng-container>
          <ng-container matColumnDef="title">
            <th mat-header-cell *matHeaderCellDef>Titel</th>
            <td mat-cell *matCellDef="let row">{{ row.title || '—' }}</td>
          </ng-container>
          <ng-container matColumnDef="recipientsCount">
            <th mat-header-cell *matHeaderCellDef>Ontvangers</th>
            <td mat-cell *matCellDef="let row">{{ row.recipientsCount ?? 0 }}</td>
          </ng-container>
          <ng-container matColumnDef="succeededCount">
            <th mat-header-cell *matHeaderCellDef>Geslaagd</th>
            <td mat-cell *matCellDef="let row">{{ row.succeededCount ?? 0 }}</td>
          </ng-container>
          <ng-container matColumnDef="expiredCount">
            <th mat-header-cell *matHeaderCellDef>Verlopen</th>
            <td mat-cell *matCellDef="let row">{{ row.expiredCount ?? 0 }}</td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="historyColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: historyColumns;"></tr>
        </table>
      </ng-container>
      <ng-template #loadingHistory><p>Laden…</p></ng-template>
    </mat-tab>
```

- [ ] **Step 2: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -5
```

Expected: succeeds.

- [ ] **Step 3: Stage**

```bash
git add src/app/components/admin/admin-notificaties/admin-notificaties.component.html
```

**Niet committen.**

---

### Task 5: Tab 3 (Analytics)

**Files:**
- Modify: `src/app/components/admin/admin-notificaties/admin-notificaties.component.html`
- Modify: `src/app/components/admin/admin-notificaties/admin-notificaties.component.scss`

- [ ] **Step 1: Vervang Tab 3 placeholder**

Open `admin-notificaties.component.html`. Vervang het Tab 3-blok door:

```html
    <mat-tab label="Analytics">
      <ng-container *ngIf="analytics$ | async as a; else loadingAnalytics">
        <section class="analytics-block">
          <h3>Bereik nu</h3>
          <p class="big-number">{{ a.reachableCount }} / {{ a.totalActiveCount }}</p>
          <p class="hint">actieve spelers met werkende push-subscription</p>
          <ng-container *ngIf="a.unreachablePlayers.length > 0">
            <p>Nog niet bereikbaar:</p>
            <ul>
              <li *ngFor="let p of a.unreachablePlayers">{{ p.name }}</li>
            </ul>
          </ng-container>
        </section>

        <section class="analytics-block">
          <h3>Groei laatste 12 maanden</h3>
          <div class="bar-chart">
            <div class="bar-row" *ngFor="let m of a.growthByMonth">
              <span class="bar-label">{{ m.month }}</span>
              <span class="bar-fill" [style.width.%]="m.newSubsCount * 20"></span>
              <span class="bar-value">{{ m.newSubsCount }}</span>
            </div>
          </div>
        </section>

        <section class="analytics-block">
          <h3>Push-resultaten 30 dagen</h3>
          <div class="stats-row">
            <div class="stat-cell">
              <span class="stat-value">{{ a.last30DaysStats.reminders }}</span>
              <span class="stat-label">verzonden notificaties</span>
            </div>
            <div class="stat-cell">
              <span class="stat-value">{{ a.last30DaysStats.recipients }}</span>
              <span class="stat-label">totale ontvangers</span>
            </div>
            <div class="stat-cell">
              <span class="stat-value">{{ a.last30DaysStats.succeeded }}</span>
              <span class="stat-label">geslaagd</span>
            </div>
            <div class="stat-cell">
              <span class="stat-value">{{ a.last30DaysStats.expired }}</span>
              <span class="stat-label">verlopen</span>
            </div>
          </div>
        </section>
      </ng-container>
      <ng-template #loadingAnalytics><p>Laden…</p></ng-template>
    </mat-tab>
```

- [ ] **Step 2: Styles uitbreiden**

Open `admin-notificaties.component.scss`. Voeg toe (onderaan):

```scss
.analytics-block {
  margin: 1.5rem 0;

  h3 { margin-bottom: 0.5rem; }

  .big-number {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.25rem 0;
  }

  .bar-chart {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .bar-row {
    display: grid;
    grid-template-columns: 5rem 1fr 2rem;
    align-items: center;
    gap: 0.5rem;

    .bar-label { font-size: 0.85rem; color: rgba(0,0,0,0.6); }
    .bar-fill { background: #1976d2; height: 1rem; min-width: 2px; border-radius: 2px; max-width: 100%; }
    .bar-value { font-variant-numeric: tabular-nums; text-align: right; }
  }

  .stats-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .stat-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 1rem;
    background: rgba(25, 118, 210, 0.06);
    border-radius: 6px;
    min-width: 7rem;

    .stat-value { font-size: 1.5rem; font-weight: 600; color: #1976d2; }
    .stat-label { font-size: 0.85rem; color: rgba(0,0,0,0.6); }
  }
}
```

- [ ] **Step 3: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -5
```

- [ ] **Step 4: Stage**

```bash
git add src/app/components/admin/admin-notificaties/admin-notificaties.component.html \
        src/app/components/admin/admin-notificaties/admin-notificaties.component.scss
```

**Niet committen.**

---

### Task 6: Test-broadcast dialog + button

**Files:**
- Create: `src/app/components/admin/admin-notificaties/test-broadcast-dialog.component.ts`
- Create: `src/app/components/admin/admin-notificaties/test-broadcast-dialog.component.html`
- Modify: `src/app/components/admin/admin-notificaties/admin-notificaties.component.ts`
- Modify: `src/app/components/admin/admin-notificaties/admin-notificaties.component.html`

- [ ] **Step 1: Dialog component-class**

Maak `test-broadcast-dialog.component.ts`:

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test-broadcast-dialog',
  templateUrl: './test-broadcast-dialog.component.html',
})
export class TestBroadcastDialogComponent {
  readonly form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TestBroadcastDialogComponent>) {
    this.form = this.fb.group({
      title: ['Test broadcast', Validators.required],
      body: ['Dit is een test van Zaalvoetbal Doorn.', Validators.required],
      confirm: [false, Validators.requiredTrue],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  send(): void {
    if (this.form.invalid) return;
    const { title, body } = this.form.value;
    this.dialogRef.close({ title, body });
  }
}
```

- [ ] **Step 2: Dialog template**

Maak `test-broadcast-dialog.component.html`:

```html
<h2 mat-dialog-title>Test-broadcast versturen</h2>
<form [formGroup]="form" (ngSubmit)="send()">
  <mat-dialog-content>
    <p>Dit verstuurt een echte push-notificatie naar <b>alle actieve abonnementen</b>. Gebruik dit alleen als je echt wilt testen.</p>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Titel</mat-label>
      <input matInput formControlName="title" maxlength="80" />
    </mat-form-field>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Bericht</mat-label>
      <textarea matInput formControlName="body" maxlength="200" rows="3"></textarea>
    </mat-form-field>
    <mat-checkbox formControlName="confirm">
      Ja, ik weet wat ik doe — verstuur naar alle actieve gebruikers.
    </mat-checkbox>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button type="button" (click)="cancel()">Annuleren</button>
    <button mat-flat-button color="primary" type="submit" [disabled]="form.invalid">Versturen</button>
  </mat-dialog-actions>
</form>
```

- [ ] **Step 3: Voeg knop + dialog-handler toe aan AdminNotificatiesComponent**

Open `admin-notificaties.component.ts`. Vervang door:

```ts
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AdminSubscription,
  BeheerNotificatiesService,
  NotificationsAnalytics,
  ReminderLogEntry,
} from '../../../services/beheer-notificaties.service';
import { TestBroadcastDialogComponent } from './test-broadcast-dialog.component';

@Component({
  selector: 'app-admin-notificaties',
  templateUrl: './admin-notificaties.component.html',
  styleUrls: ['./admin-notificaties.component.scss'],
})
export class AdminNotificatiesComponent implements OnInit {
  private readonly refresh$ = new BehaviorSubject<void>(undefined);

  subscriptions$!: Observable<AdminSubscription[]>;
  history$!: Observable<ReminderLogEntry[]>;
  analytics$!: Observable<NotificationsAnalytics>;

  readonly subscriptionColumns = ['playerName', 'device', 'createdAt', 'lastSeenAt', 'active'];
  readonly historyColumns = ['sentAt', 'type', 'title', 'recipientsCount', 'succeededCount', 'expiredCount'];

  constructor(
    private beheer: BeheerNotificatiesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.subscriptions$ = this.refresh$.pipe(switchMap(() => this.beheer.getSubscriptionsForAdmin()));
    this.history$ = this.refresh$.pipe(switchMap(() => this.beheer.getReminderHistory(50)));
    this.analytics$ = this.refresh$.pipe(switchMap(() => this.beheer.getAnalytics()));
  }

  refreshAll(): void {
    this.refresh$.next();
  }

  openTestBroadcast(): void {
    const dialogRef = this.dialog.open(TestBroadcastDialogComponent, { width: '480px' });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.beheer.sendTestBroadcast(result.title, result.body).subscribe({
        next: r => {
          this.snackBar.open(
            `Verstuurd: ${r.sent}/${r.total} (verlopen: ${r.deactivated})`,
            'OK',
            { duration: 4000 },
          );
          // Geschiedenis verversen om de nieuwe rij te tonen.
          setTimeout(() => this.refreshAll(), 1500);
        },
        error: err => {
          console.error('Test-broadcast failed:', err);
          this.snackBar.open('Versturen mislukt — check console.', 'Sluiten', { duration: 5000 });
        },
      });
    });
  }
}
```

- [ ] **Step 4: Voeg knop toe aan template**

Open `admin-notificaties.component.html`. In het `<div class="header-actions">`-blok, voeg een tweede knop toe NA de Verversen-knop:

```html
    <button mat-flat-button color="primary" (click)="openTestBroadcast()">
      <mat-icon>send</mat-icon>
      Test-broadcast
    </button>
```

- [ ] **Step 5: Build-check**

```bash
npx ng build --configuration development 2>&1 | tail -5
```

Expected: succeeds (component nog niet declared in module — runtime fout pas bij navigatie).

- [ ] **Step 6: Stage**

```bash
git add src/app/components/admin/admin-notificaties/
```

**Niet committen.**

---

### Task 7: AdminModule + admin.component.html koppelen

**Files:**
- Modify: `src/app/components/admin/admin.module.ts`
- Modify: `src/app/components/admin/admin.component.html`

- [ ] **Step 1: AdminModule uitbreiden**

Open `src/app/components/admin/admin.module.ts`. Voeg toe aan imports/declarations:

```ts
// Voeg deze imports bovenaan toe (naast bestaande):
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminNotificatiesComponent } from './admin-notificaties/admin-notificaties.component';
import { TestBroadcastDialogComponent } from './admin-notificaties/test-broadcast-dialog.component';
```

In `declarations`-array (voeg de twee nieuwe components toe):

```ts
declarations: [
  AdminComponent,
  AdminSpelersComponent,
  AdminWedstrijdenComponent,
  SpelerDialogComponent,
  WedstrijdDialogComponent,
  AdminNotificatiesComponent,
  TestBroadcastDialogComponent,
],
```

In `imports`-array, voeg toe:

```ts
MatCheckboxModule,
MatSnackBarModule,
```

(`MatTabsModule`, `MatTableModule`, `MatButtonModule`, `MatIconModule`, `MatDialogModule`, `MatFormFieldModule`, `MatInputModule` zitten er al — niet dupliceren.)

- [ ] **Step 2: AdminComponent template uitbreiden**

Open `src/app/components/admin/admin.component.html`. Voeg een derde tab toe na `Wedstrijdbeheer`:

```html
<div class="admin-container">
  <h2>Beheer</h2>

  <mat-tab-group>
    <mat-tab label="Spelerbeheer">
      <app-admin-spelers></app-admin-spelers>
    </mat-tab>
    <mat-tab label="Wedstrijdbeheer">
      <app-admin-wedstrijden></app-admin-wedstrijden>
    </mat-tab>
    <mat-tab label="Notificatiebeheer">
      <app-admin-notificaties></app-admin-notificaties>
    </mat-tab>
  </mat-tab-group>
</div>
```

- [ ] **Step 3: Build + tests**

```bash
npx ng build --configuration development 2>&1 | tail -5
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -10
```

Expected: build slaagt; tests groen (incl. 8 nieuwe UA-parser tests + 3 service-tests).

- [ ] **Step 4: Stage**

```bash
git add src/app/components/admin/admin.module.ts src/app/components/admin/admin.component.html
git status --short
```

**Niet committen.**

---

### Task 8: Backend — `sendPushToAll` schrijft naar `reminder_log`

**Files:**
- Modify: `functions/src/notifications/send-push-to-all.ts`

- [ ] **Step 1: Voeg reminder_log-write toe**

Open `functions/src/notifications/send-push-to-all.ts`. Direct na de bestaande `logger.info('📧 Sent ${succeeded}/...')`-regel en vóór de `res.json(...)`-call, voeg toe:

```ts
      // Log this broadcast/reminder/test naar reminder_log voor admin-zichtbaarheid.
      const logType = typeof req.body.type === 'string' && req.body.type
        ? `broadcast-${req.body.type}`
        : 'broadcast-other';
      const { error: logErr } = await supabase.from('reminder_log').insert({
        type: logType,
        title: req.body.title || null,
        body: req.body.body || null,
        recipients_count: notifications.length,
        succeeded_count: succeeded,
        expired_count: expiredEndpoints.length,
      });
      if (logErr) {
        logger.warn(`reminder_log insert failed: ${logErr.message}`);
      }
```

(Conventie: `attendance-reminder`-types blijven via `attendance-reminders.ts` geschreven worden met hun eigen type-naam. Deze sendPushToAll-broadcasts krijgen `broadcast-<type>` of `broadcast-other`.)

NB: type-veld in `req.body.type` was eerder `'attendance-reminder'`, `'test'`, of leeg. Nieuwe waarden:
- `req.body.type === 'attendance-reminder'` → `broadcast-attendance-reminder` (overlapt met scheduledAttendanceReminders, maar dat is OK — de server-side logica logt alleen de reminders die de scheduler stuurt; sendPushToAll zou alleen door de admin-UI worden gebruikt voor handmatige reminders).
- `req.body.type === 'test'` → `broadcast-test`.
- `req.body.type === 'broadcast-test'` → `broadcast-broadcast-test` (van de admin-UI). Cosmetisch lelijk; aanvaardbaar of fix later met een mapping.

(Voor cleanere typenames zou de admin-UI `type: 'test'` moeten sturen ipv `broadcast-test`. Beide werken, kies wat de admin-UI doet — Task 6 stuurt `broadcast-test`. Dat geeft `broadcast-broadcast-test` in reminder_log. Cosmetisch; reminder_log is admin-only.)

- [ ] **Step 2: Build-check**

```bash
cd functions
npm run build 2>&1 | tail -5
cd ..
```

Expected: succeeds.

- [ ] **Step 3: Stage**

```bash
git add functions/src/notifications/send-push-to-all.ts
```

**Niet committen.**

---

### Task 9: Final verificatie + production deploy

**Files:** geen wijzigingen.

- [ ] **Step 1: Volledige test-suite**

```bash
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -10
```

Expected: alle tests groen.

- [ ] **Step 2: Production build**

```bash
npx ng build --configuration production 2>&1 | tail -10
```

Expected: build slaagt.

- [ ] **Step 3: Deploy Functions (alleen sendPushToAll heeft wijziging)**

```bash
firebase deploy --only functions:sendPushToAll 2>&1 | tail -10
```

Expected: successful update.

- [ ] **Step 4: Deploy Angular**

```bash
npx ng deploy 2>&1 | tail -10
```

Expected: succesvolle publish naar GitHub Pages.

- [ ] **Step 5: Production smoke**

Open de productie-app, navigeer naar `/admin` (vereist admin-login). Verifieer:
- Derde tab "Notificatiebeheer" zichtbaar.
- Tab 1 (Abonnementen): tabel met de 5 push-subs en hun device-strings.
- Tab 2 (Geschiedenis): rijen uit reminder_log (test-broadcast van eerdere sub-project plus eventuele scheduled-reminder-rijen).
- Tab 3 (Analytics): drie blokken met cijfers.
- Klik "Test-broadcast", vul title/body, vink confirm aan, verstuur. Snackbar verschijnt met resultaat. Tab 2 herlaadt na ~1.5s en toont de nieuwe rij.

- [ ] **Step 6: Push naar git remote**

```bash
git push 2>&1 | tail -3
```

---

## Acceptance verification

- [ ] `userAgentParser` met 8 unit tests groen → Task 1.
- [ ] `BeheerNotificatiesService` met 4 methods + 3 unit tests → Task 2.
- [ ] `AdminNotificatiesComponent` met Tab 1 (Abonnementen) → Task 3.
- [ ] Tab 2 (Geschiedenis) ingevuld → Task 4.
- [ ] Tab 3 (Analytics) met 3 blokken → Task 5.
- [ ] Test-broadcast-dialog + knop + snackbar-feedback → Task 6.
- [ ] AdminModule heeft de nieuwe components in declarations + AdminComponent toont 3 tabs → Task 7.
- [ ] `sendPushToAll` schrijft naar `reminder_log` → Task 8.
- [ ] `npm test` groen, prod build slaagt, Functions + Angular deployed → Task 9.
- [ ] Manual smoke op productie groen → Task 9 step 5.
