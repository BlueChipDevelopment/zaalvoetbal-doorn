# Spelersprofiel — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`).

**Goal:** Bouw `/speler/:id`-pagina met FIFA-card hero, quick-stats grid, rating-trend grafiek, top-5 teammates en match-history. Maak namen in klassement + aanwezigheid klikbaar.

**Architecture:** Lazy-loaded `SpelerProfielModule`; nieuwe `PlayerProfileService` met afgeleide queries (stats / trend / teammates / history); presentatie-only sub-components voor de FIFA-card en de rating-trend-grafiek; tier- en initials-utils als pure functies met eigen tests.

**Tech Stack:** Angular 18 + Material, Supabase voor data, `GameStatisticsService` hergebruikt voor bestaande aggregaties.

**Bron-spec:** `docs/superpowers/specs/2026-04-29-spelersprofiel-design.md`.

---

## File overview

Nieuw:
- `supabase/migrations/<ts>_add_players_photo_url.sql`
- `src/app/utils/player-tier.ts` + `.spec.ts`
- `src/app/utils/player-initials.ts` + `.spec.ts`
- `src/app/services/player-profile.service.ts` + `.spec.ts`
- `src/app/components/speler-profiel/speler-profiel.component.{ts,html,scss}`
- `src/app/components/speler-profiel/speler-profiel.module.ts`
- `src/app/components/speler-profiel/speler-profiel-routing.module.ts`
- `src/app/components/speler-profiel/player-card/player-card.component.{ts,html,scss}`
- `src/app/components/speler-profiel/rating-trend-chart/rating-trend-chart.component.{ts,html,scss}`

Aangepast:
- `src/app/app-routing.module.ts`
- `src/app/types/database.types.ts`
- `functions/src/types/database.types.ts`
- `src/app/components/leaderboard/leaderboard.component.html` (namen → routerLink)
- `src/app/components/attendance/attendance.component.html` (idem)

---

### Task 1: Schema-migration + types

**Files:**
- Create: `supabase/migrations/<ts>_add_players_photo_url.sql`
- Modify: `src/app/types/database.types.ts`
- Modify: `functions/src/types/database.types.ts`

- [ ] **Step 1: Migration-bestand**

```sql
-- Add nullable photo_url column to players for player profile page.
ALTER TABLE players ADD COLUMN IF NOT EXISTS photo_url text;
```

- [ ] **Step 2: Types files bijwerken**

In beide `database.types.ts`-files: in de `players`-Row/Insert/Update voeg `photo_url: string | null` (Row) en `photo_url?: string | null` (Insert/Update) toe op alfabetische plek.

- [ ] **Step 3: Schema in productie**

Controller doet via Studio: `ALTER TABLE players ADD COLUMN IF NOT EXISTS photo_url text;`. Subagent skipt deze stap.

- [ ] **Step 4: Build-check + stage**

```
npx ng build --configuration development 2>&1 | tail -3
git add supabase/migrations/ src/app/types/database.types.ts functions/src/types/database.types.ts
```

**Niet committen — controller commit.**

---

### Task 2: `playerTier` util

**Files:**
- Create: `src/app/utils/player-tier.ts`
- Create: `src/app/utils/player-tier.spec.ts`

- [ ] **Step 1: Spec eerst**

```ts
import { getPlayerTier } from './player-tier';

describe('getPlayerTier', () => {
  it('brons onder 5.5', () => {
    expect(getPlayerTier(5.0).name).toBe('brons');
    expect(getPlayerTier(5.49).name).toBe('brons');
  });
  it('zilver tussen 5.5 en 7.0', () => {
    expect(getPlayerTier(5.5).name).toBe('zilver');
    expect(getPlayerTier(6.99).name).toBe('zilver');
  });
  it('goud vanaf 7.0', () => {
    expect(getPlayerTier(7.0).name).toBe('goud');
    expect(getPlayerTier(9.5).name).toBe('goud');
  });
  it('returnt gradient-stops als CSS-string', () => {
    expect(getPlayerTier(7.5).gradient).toContain('linear-gradient');
  });
});
```

- [ ] **Step 2: Run om te falen**

```
npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-tier.spec.ts' 2>&1 | tail -8
```

- [ ] **Step 3: Implementatie**

```ts
export type TierName = 'brons' | 'zilver' | 'goud';

export interface PlayerTier {
  name: TierName;
  gradient: string;
  textColor: string;
}

const TIERS: Record<TierName, Omit<PlayerTier, 'name'>> = {
  brons:  { gradient: 'linear-gradient(160deg, #c98e4f 0%, #6b4214 100%)', textColor: '#fff8ec' },
  zilver: { gradient: 'linear-gradient(160deg, #d8d8d8 0%, #707070 100%)', textColor: '#1a1a1a' },
  goud:   { gradient: 'linear-gradient(160deg, #f0d370 0%, #997820 100%)', textColor: '#23180a' },
};

export function getPlayerTier(rating: number): PlayerTier {
  let name: TierName;
  if (rating >= 7.0) name = 'goud';
  else if (rating >= 5.5) name = 'zilver';
  else name = 'brons';
  return { name, ...TIERS[name] };
}
```

- [ ] **Step 4: Tests groen + stage**

```
npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-tier.spec.ts' 2>&1 | tail -8
git add src/app/utils/player-tier.ts src/app/utils/player-tier.spec.ts
```

---

### Task 3: `playerInitials` util

**Files:**
- Create: `src/app/utils/player-initials.ts`
- Create: `src/app/utils/player-initials.spec.ts`

- [ ] **Step 1: Spec eerst**

```ts
import { playerInitials } from './player-initials';

describe('playerInitials', () => {
  it('één naam → eerste letter capitalised', () => {
    expect(playerInitials('Chris')).toBe('C');
  });
  it('voor- en achternaam → twee initialen', () => {
    expect(playerInitials('Chris de Kok')).toBe('CK');
  });
  it('met streepje → eerste letter elk deel max 2', () => {
    expect(playerInitials('Anne-Marije')).toBe('AM');
  });
  it('extra spaties wordt getrimd', () => {
    expect(playerInitials('  Bob   van   Dijk ')).toBe('BD');
  });
  it('lege string → ?', () => {
    expect(playerInitials('')).toBe('?');
    expect(playerInitials(null as any)).toBe('?');
  });
});
```

- [ ] **Step 2: Implementatie**

```ts
export function playerInitials(fullName: string | null | undefined): string {
  if (!fullName) return '?';
  const parts = fullName
    .trim()
    .split(/[\s-]+/)
    .filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
```

- [ ] **Step 3: Tests groen + stage**

```
npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-initials.spec.ts' 2>&1 | tail -8
git add src/app/utils/player-initials.ts src/app/utils/player-initials.spec.ts
```

---

### Task 4: `PlayerProfileService`

**Files:**
- Create: `src/app/services/player-profile.service.ts`
- Create: `src/app/services/player-profile.service.spec.ts`

**Doel:** Aggregeert stats / rating-trend / top-teammates / match-history per
speler. Hergebruikt `GameStatisticsService` voor wat het al weet.

- [ ] **Step 1: Public interface**

```ts
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of } from 'rxjs';
import { PlayerService } from './player-service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { IPlayer } from '../interfaces/IPlayer';
import { IWedstrijd } from '../interfaces/IWedstrijd';

export interface PlayerProfileStats {
  rating: number;
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  winRate: number;            // 0..1
  zlatanCount: number;
  ventielCount: number;
  zlatanPerMatch: number;
  attendanceRate: number;     // 0..1
  currentWinStreak: number;
  longestWinStreak: number;
}

export interface RatingPoint {
  matchDate: string;          // ISO
  rating: number;
}

export interface TopTeammate {
  teammate: IPlayer;
  played: number;
  wins: number;
  winRate: number;
}

export interface MatchHistoryEntry {
  matchId: number;
  date: string;
  ownTeam: 'wit' | 'rood';
  opponents: IPlayer[];
  ownTeamScore: number;
  opponentScore: number;
  outcome: 'win' | 'loss' | 'draw';
}

@Injectable({ providedIn: 'root' })
export class PlayerProfileService {
  constructor(
    private playerService: PlayerService,
    private wedstrijdenService: WedstrijdenService,
    private statsService: GameStatisticsService,
  ) {}

  getStats(playerId: number): Observable<PlayerProfileStats> { /* zie Step 2 */ throw new Error('todo'); }
  getRatingTrend(playerId: number, range: '12m' | 'all'): Observable<RatingPoint[]> { throw new Error('todo'); }
  getTopTeammates(playerId: number, limit = 5): Observable<TopTeammate[]> { throw new Error('todo'); }
  getMatchHistory(playerId: number, limit = 10): Observable<MatchHistoryEntry[]> { throw new Error('todo'); }
}
```

- [ ] **Step 2: Implementatie**

Subagent: implementeer alle 4 methodes door `forkJoin` op `playerService.getPlayers()` en `wedstrijdenService.getWedstrijden()` (of de Supabase-equivalente methode-namen die in de codebase bestaan). Wedstrijd-shape in deze codebase: `WedstrijdData` met `teamWit: number[]`, `teamRood: number[]`, `scoreWit`, `scoreRood`, `zlatanPlayerId`, `ventielPlayerId`, `date`, `id`. Filter op gespeelde wedstrijden waar `playerId` in `teamWit` of `teamRood` zit.

Belangrijke details:
- `getStats`: `wins` = aantal matches waarin speler in winnend team. `currentWinStreak` = aantal opeenvolgende meest-recente wins (in chronologische volgorde van laatste-naar-eerste, stop bij eerste niet-win). `longestWinStreak` = max streak in chronologische volgorde van eerste-naar-laatste. `attendanceRate` = wedstrijden waarop speler aanwezig was / wedstrijden in perioden dat speler `actief` was.
- `getRatingTrend`: voor elke gespeelde wedstrijd, bereken rating zoals `GameStatisticsService.getPlayerRating` doet, maar over de subset matches t/m die datum. Als dat duur is: bouw cumulatieve loop per chronologisch-gesorteerde matches. Als de service geen "as-of-date"-API biedt, voeg een private helper toe die rating berekent uit een `IWedstrijd[]` slice (kopieer logic uit de service). Houd de berekening lokaal.
- `getTopTeammates`: per andere speler, tel `played` (zelfde team in zelfde match) en `wins` (zelfde team én team-win). Filter op `played >= 3`, sorteer `winRate` desc. Voor ties op `played` desc.
- `getMatchHistory`: laatste `limit` gespeelde wedstrijden van speler, desc op datum.

- [ ] **Step 3: Spec — drie kerntesten met mock-data**

```ts
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { PlayerProfileService } from './player-profile.service';
// ... mock IPlayer + IWedstrijd builders en mock services injecten ...

describe('PlayerProfileService', () => {
  // Test 1: getStats berekent W/V/G + winRate + Zlatan/Ventiel count
  // Test 2: getRatingTrend produceert één punt per gespeelde match in datum-volgorde
  // Test 3: getTopTeammates filtert spelers met <3 samen-wedstrijden
});
```

(Volledig uitgewerkte tests schrijft de subagent na het bestuderen van bestaande `*.spec.ts` patterns voor mock-services.)

- [ ] **Step 4: Build + tests + stage**

```
npx ng test --watch=false --browsers=ChromeHeadless --include='**/player-profile.service.spec.ts' 2>&1 | tail -10
npx ng build --configuration development 2>&1 | tail -3
git add src/app/services/player-profile.service.ts src/app/services/player-profile.service.spec.ts
```

---

### Task 5: `PlayerCardComponent`

**Files:**
- Create: `src/app/components/speler-profiel/player-card/player-card.component.{ts,html,scss}`

**Inputs:**
```ts
@Input() player!: IPlayer;       // includes optional photo_url
@Input() rating!: number;
@Input() matchesPlayed!: number;
@Input() winRate!: number;       // 0..1
@Input() zlatanPerMatch!: number;
@Input() attendanceRate!: number;
```

- [ ] **Step 1: Component-class + computed tier**

```ts
import { Component, Input, computed, signal } from '@angular/core';
import { IPlayer } from '../../../interfaces/IPlayer';
import { getPlayerTier } from '../../../utils/player-tier';
import { playerInitials } from '../../../utils/player-initials';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent {
  @Input() player!: IPlayer;
  @Input() rating = 0;
  @Input() matchesPlayed = 0;
  @Input() winRate = 0;
  @Input() zlatanPerMatch = 0;
  @Input() attendanceRate = 0;

  get tier() { return getPlayerTier(this.rating); }
  get initials() { return playerInitials(this.player?.name); }
  get photoUrl(): string | null { return (this.player as any)?.photo_url ?? null; }
}
```

- [ ] **Step 2: Template**

```html
<article class="player-card" [style.background]="tier.gradient" [style.color]="tier.textColor">
  <header class="top-row">
    <span class="position">{{ player.position || 'Speler' }}</span>
    <span class="rating">{{ rating | number:'1.1-1' }}</span>
  </header>
  <div class="avatar">
    <img *ngIf="photoUrl" [src]="photoUrl" [alt]="player.name" />
    <span *ngIf="!photoUrl" class="initials">{{ initials }}</span>
  </div>
  <h2 class="name">{{ player.name }}</h2>
  <ul class="sub-attrs">
    <li><span class="value">{{ matchesPlayed }}</span><span class="label">WED</span></li>
    <li><span class="value">{{ winRate * 100 | number:'1.0-0' }}%</span><span class="label">WIN</span></li>
    <li><span class="value">{{ zlatanPerMatch | number:'1.2-2' }}</span><span class="label">ZLA/W</span></li>
    <li><span class="value">{{ attendanceRate * 100 | number:'1.0-0' }}%</span><span class="label">AANW</span></li>
  </ul>
</article>
```

- [ ] **Step 3: Styles** (FIFA-card vibe; geen test, alleen visueel)

```scss
.player-card {
  width: 240px;
  height: 360px;
  border-radius: 18px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  font-family: 'Segoe UI', system-ui, sans-serif;

  .top-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .position { padding: 2px 8px; border-radius: 4px; background: rgba(0,0,0,0.35); font-size: 0.75rem; letter-spacing: 0.05em; }
    .rating   { font-size: 2.5rem; font-weight: 700; line-height: 1; }
  }
  .avatar {
    margin-top: 12px;
    width: 96px; height: 96px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    display: grid; place-items: center;
    overflow: hidden;
    img { width: 100%; height: 100%; object-fit: cover; }
    .initials { font-size: 2rem; font-weight: 700; }
  }
  .name {
    margin: 12px 0 0;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
  }
  .sub-attrs {
    margin: auto 0 0;
    list-style: none;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;
    li {
      display: flex; flex-direction: column; align-items: center;
      .value { font-size: 1.1rem; font-weight: 700; }
      .label { font-size: 0.7rem; opacity: 0.85; letter-spacing: 0.05em; }
    }
  }
}
```

- [ ] **Step 4: Build + stage**

```
npx ng build --configuration development 2>&1 | tail -3
git add src/app/components/speler-profiel/player-card/
```

---

### Task 6: `RatingTrendChartComponent`

**Files:**
- Create: `src/app/components/speler-profiel/rating-trend-chart/rating-trend-chart.component.{ts,html,scss}`

**Input:**
```ts
@Input() points: { matchDate: string; rating: number }[] = [];
```

- [ ] **Step 1: Component**

```ts
import { Component, Input } from '@angular/core';
import { RatingPoint } from '../../../services/player-profile.service';

@Component({
  selector: 'app-rating-trend-chart',
  templateUrl: './rating-trend-chart.component.html',
  styleUrls: ['./rating-trend-chart.component.scss'],
})
export class RatingTrendChartComponent {
  @Input() points: RatingPoint[] = [];

  get viewBoxWidth() { return 600; }
  get viewBoxHeight() { return 200; }

  get pathD(): string {
    if (this.points.length < 2) return '';
    const xs = this.points.map((_, i) => i);
    const ys = this.points.map(p => p.rating);
    const minY = Math.min(...ys, 0) - 0.2;
    const maxY = Math.max(...ys, 10) + 0.2;
    const W = this.viewBoxWidth, H = this.viewBoxHeight;
    return this.points
      .map((p, i) => {
        const x = (i / (this.points.length - 1)) * W;
        const y = H - ((p.rating - minY) / (maxY - minY)) * H;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  }
}
```

- [ ] **Step 2: Template** (inline SVG)

```html
<svg
  *ngIf="points.length >= 2; else emptyState"
  class="trend-chart"
  [attr.viewBox]="'0 0 ' + viewBoxWidth + ' ' + viewBoxHeight"
  preserveAspectRatio="none"
  role="img"
  aria-label="Rating-trend over tijd"
>
  <path [attr.d]="pathD" fill="none" stroke="#1976d2" stroke-width="2" />
</svg>
<ng-template #emptyState><p class="empty">Onvoldoende wedstrijden voor een trendlijn.</p></ng-template>
```

- [ ] **Step 3: Styles**

```scss
.trend-chart { width: 100%; height: 200px; display: block; }
.empty { color: rgba(0,0,0,0.6); font-style: italic; }
```

- [ ] **Step 4: Build + stage**

```
npx ng build --configuration development 2>&1 | tail -3
git add src/app/components/speler-profiel/rating-trend-chart/
```

---

### Task 7: `SpelerProfielComponent` + module + routing

**Files:**
- Create: `src/app/components/speler-profiel/speler-profiel.component.{ts,html,scss}`
- Create: `src/app/components/speler-profiel/speler-profiel.module.ts`
- Create: `src/app/components/speler-profiel/speler-profiel-routing.module.ts`

- [ ] **Step 1: Routing-module**

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpelerProfielComponent } from './speler-profiel.component';

const routes: Routes = [{ path: '', component: SpelerProfielComponent }];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class SpelerProfielRoutingModule {}
```

- [ ] **Step 2: Module**

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpelerProfielRoutingModule } from './speler-profiel-routing.module';
import { SpelerProfielComponent } from './speler-profiel.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { RatingTrendChartComponent } from './rating-trend-chart/rating-trend-chart.component';

@NgModule({
  declarations: [SpelerProfielComponent, PlayerCardComponent, RatingTrendChartComponent],
  imports: [
    CommonModule,
    SpelerProfielRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class SpelerProfielModule {}
```

- [ ] **Step 3: Component-class**

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { PlayerService } from '../../services/player-service';
import {
  PlayerProfileService,
  PlayerProfileStats,
  RatingPoint,
  TopTeammate,
  MatchHistoryEntry,
} from '../../services/player-profile.service';
import { IPlayer } from '../../interfaces/IPlayer';

interface ProfileVm {
  player: IPlayer;
  stats: PlayerProfileStats;
  trend: RatingPoint[];
  teammates: TopTeammate[];
  history: MatchHistoryEntry[];
}

@Component({
  selector: 'app-speler-profiel',
  templateUrl: './speler-profiel.component.html',
  styleUrls: ['./speler-profiel.component.scss'],
})
export class SpelerProfielComponent implements OnInit {
  vm$!: Observable<ProfileVm | null>;
  trendRange$ = new BehaviorSubject<'12m' | 'all'>('12m');
  readonly historyColumns = ['date', 'ownTeam', 'opponents', 'score', 'outcome'];

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private profileService: PlayerProfileService,
  ) {}

  ngOnInit(): void {
    this.vm$ = combineLatest([this.route.paramMap, this.trendRange$]).pipe(
      switchMap(([params, range]) => {
        const id = Number(params.get('id'));
        if (!Number.isFinite(id)) return of(null);
        return combineLatest([
          this.playerService.getPlayers().pipe(map(ps => ps.find(p => p.id === id) ?? null)),
          this.profileService.getStats(id),
          this.profileService.getRatingTrend(id, range),
          this.profileService.getTopTeammates(id, 5),
          this.profileService.getMatchHistory(id, 10),
        ]).pipe(
          map(([player, stats, trend, teammates, history]) =>
            player ? { player, stats, trend, teammates, history } : null,
          ),
        );
      }),
    );
  }

  onRangeChange(range: '12m' | 'all'): void {
    this.trendRange$.next(range);
  }
}
```

- [ ] **Step 4: Template**

Subagent monteert blokken in deze volgorde, met `mat-progress-spinner` als
`vm$ | async` nog null is:

1. `<app-player-card>` met de 4 sub-attr-inputs.
2. Quick-stats grid: `<mat-card>` per tegel.
3. `<mat-button-toggle-group>` voor 12mnd / alles + `<app-rating-trend-chart>`.
4. Top-5 teammates lijst — `<mat-list>`.
5. Match-history `<table mat-table>` met de 5 kolommen.

Code-skeleton:

```html
<ng-container *ngIf="vm$ | async as vm; else loading">
  <ng-container *ngIf="vm; else notFound">
    <section class="hero">
      <app-player-card
        [player]="vm.player"
        [rating]="vm.stats.rating"
        [matchesPlayed]="vm.stats.matchesPlayed"
        [winRate]="vm.stats.winRate"
        [zlatanPerMatch]="vm.stats.zlatanPerMatch"
        [attendanceRate]="vm.stats.attendanceRate"
      ></app-player-card>
    </section>

    <section class="quick-stats">
      <mat-card class="stat-tile"><span class="value">{{ vm.stats.matchesPlayed }}</span><span class="label">Wedstrijden</span></mat-card>
      <mat-card class="stat-tile"><span class="value">{{ vm.stats.wins }}-{{ vm.stats.draws }}-{{ vm.stats.losses }}</span><span class="label">W-G-V</span></mat-card>
      <mat-card class="stat-tile"><span class="value">{{ vm.stats.currentWinStreak }}</span><span class="label">Huidige streak</span></mat-card>
      <mat-card class="stat-tile"><span class="value">{{ vm.stats.longestWinStreak }}</span><span class="label">Langste streak</span></mat-card>
      <mat-card class="stat-tile"><span class="value">{{ vm.stats.zlatanCount }}</span><span class="label">Zlatan</span></mat-card>
      <mat-card class="stat-tile"><span class="value">{{ vm.stats.ventielCount }}</span><span class="label">Ventiel</span></mat-card>
    </section>

    <section class="trend">
      <header>
        <h3>Rating-trend</h3>
        <mat-button-toggle-group [value]="(trendRange$ | async)" (change)="onRangeChange($event.value)">
          <mat-button-toggle value="12m">12 mnd</mat-button-toggle>
          <mat-button-toggle value="all">Alles</mat-button-toggle>
        </mat-button-toggle-group>
      </header>
      <app-rating-trend-chart [points]="vm.trend"></app-rating-trend-chart>
    </section>

    <section class="teammates">
      <h3>Top-5 teammates</h3>
      <ul>
        <li *ngFor="let t of vm.teammates">
          <a [routerLink]="['/speler', t.teammate.id]">{{ t.teammate.name }}</a>
          — {{ t.wins }}/{{ t.played }} ({{ t.winRate * 100 | number:'1.0-0' }}%)
        </li>
        <li *ngIf="vm.teammates.length === 0" class="empty">Nog te weinig samen-wedstrijden.</li>
      </ul>
    </section>

    <section class="history">
      <h3>Laatste wedstrijden</h3>
      <table mat-table [dataSource]="vm.history" class="full-width">
        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef>Datum</th>
          <td mat-cell *matCellDef="let row">{{ row.date | date:'dd-MM-yyyy' }}</td>
        </ng-container>
        <ng-container matColumnDef="ownTeam">
          <th mat-header-cell *matHeaderCellDef>Team</th>
          <td mat-cell *matCellDef="let row">{{ row.ownTeam | titlecase }}</td>
        </ng-container>
        <ng-container matColumnDef="opponents">
          <th mat-header-cell *matHeaderCellDef>Tegen</th>
          <td mat-cell *matCellDef="let row">
            <span *ngFor="let o of row.opponents; let last = last">
              {{ o.name }}<span *ngIf="!last">, </span>
            </span>
          </td>
        </ng-container>
        <ng-container matColumnDef="score">
          <th mat-header-cell *matHeaderCellDef>Score</th>
          <td mat-cell *matCellDef="let row">{{ row.ownTeamScore }} - {{ row.opponentScore }}</td>
        </ng-container>
        <ng-container matColumnDef="outcome">
          <th mat-header-cell *matHeaderCellDef>W/V/G</th>
          <td mat-cell *matCellDef="let row">
            <span class="outcome" [class.win]="row.outcome==='win'" [class.loss]="row.outcome==='loss'" [class.draw]="row.outcome==='draw'">
              {{ row.outcome === 'win' ? 'W' : row.outcome === 'loss' ? 'V' : 'G' }}
            </span>
          </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="historyColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: historyColumns;"></tr>
      </table>
    </section>
  </ng-container>
  <ng-template #notFound><p class="not-found">Speler niet gevonden.</p></ng-template>
</ng-container>
<ng-template #loading><mat-progress-spinner mode="indeterminate" diameter="40"></mat-progress-spinner></ng-template>
```

- [ ] **Step 5: Styles**

Subagent maakt nette layout: `.hero` centreert de card, `.quick-stats` is een
`flex-wrap` met tegels, `.outcome.win` groen, `.outcome.loss` rood, `.outcome.draw` grijs.

```scss
:host { display: block; padding: 1rem; max-width: 960px; margin: 0 auto; }
.hero { display: grid; place-items: center; margin-bottom: 1.5rem; }
.quick-stats { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;
  .stat-tile { padding: 0.75rem 1rem; min-width: 6.5rem; display: flex; flex-direction: column; align-items: center;
    .value { font-size: 1.4rem; font-weight: 600; }
    .label { font-size: 0.8rem; color: rgba(0,0,0,0.6); }
  }
}
.trend { margin-bottom: 1.5rem; header { display: flex; justify-content: space-between; align-items: center; } }
.teammates ul { list-style: none; padding: 0; li { padding: 0.25rem 0; } .empty { font-style: italic; color: rgba(0,0,0,0.6); } }
.history .full-width { width: 100%; }
.outcome { display: inline-block; padding: 2px 8px; border-radius: 4px; font-weight: 600; color: #fff;
  &.win  { background: #43a047; }
  &.loss { background: #f44336; }
  &.draw { background: #9e9e9e; }
}
.not-found { text-align: center; color: rgba(0,0,0,0.6); }
```

- [ ] **Step 6: Build + stage**

```
npx ng build --configuration development 2>&1 | tail -3
git add src/app/components/speler-profiel/
```

---

### Task 8: Routing wiring + namen-clicks

**Files:**
- Modify: `src/app/app-routing.module.ts`
- Modify: `src/app/components/leaderboard/leaderboard.component.html`
- Modify: `src/app/components/attendance/attendance.component.html`

- [ ] **Step 1: Lazy route registreren**

In `app-routing.module.ts`, onder de bestaande lazy-routes, voeg toe:

```ts
{
  path: 'speler/:id',
  loadChildren: () => import('./components/speler-profiel/speler-profiel.module').then(m => m.SpelerProfielModule),
},
```

- [ ] **Step 2: Namen klikbaar in leaderboard + attendance**

In beide templates wijzig een naam-cel zoals `<td>{{ p.name }}</td>` naar:

```html
<td><a [routerLink]="['/speler', p.id]" class="player-link">{{ p.name }}</a></td>
```

(Subagent zoekt de exacte cellen op; check beide templates voor `name`-bindings.)

Voeg een lichte stijl toe in de bijbehorende `.scss`:

```scss
.player-link { color: inherit; text-decoration: none; border-bottom: 1px dotted currentColor; }
.player-link:hover { color: #1976d2; }
```

- [ ] **Step 3: Build + tests + stage**

```
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -5
npx ng build --configuration development 2>&1 | tail -3
git add src/app/app-routing.module.ts src/app/components/leaderboard/ src/app/components/attendance/
```

---

### Task 9: Final verify + deploy

- [ ] **Step 1: Volledige test-suite**

```
npx ng test --watch=false --browsers=ChromeHeadless 2>&1 | tail -5
```

- [ ] **Step 2: Production build**

```
npm run build:prod 2>&1 | tail -10
```

- [ ] **Step 3: Schema migration in productie** (controller-only)

```
ALTER TABLE players ADD COLUMN IF NOT EXISTS photo_url text;
```

via Supabase Studio.

- [ ] **Step 4: Deploy Angular**

```
npx ng deploy 2>&1 | tail -10
```

- [ ] **Step 5: Push commits**

```
git push 2>&1 | tail -3
```

- [ ] **Step 6: Smoke**

Open https://www.zaalvoetbal-doorn.nl/speler/1 — moet de FIFA-card en alle blokken renderen voor jou. Open klassement, klik op een naam → navigeert naar `/speler/<id>`. Idem aanwezigheid.

---

## Acceptance verification

- [ ] Migration + types-files → Task 1.
- [ ] Tier- en initials-utils met testdekking → Task 2 + 3.
- [ ] PlayerProfileService met 4 methods + ≥3 tests → Task 4.
- [ ] PlayerCardComponent rendert tier-styling + initials-fallback → Task 5.
- [ ] RatingTrendChartComponent toont SVG-line of empty-state → Task 6.
- [ ] SpelerProfielComponent monteert alle blokken → Task 7.
- [ ] `/speler/:id` route + klikbare namen in klassement + aanwezigheid → Task 8.
- [ ] Tests groen, prod build slaagt, deployed → Task 9.
