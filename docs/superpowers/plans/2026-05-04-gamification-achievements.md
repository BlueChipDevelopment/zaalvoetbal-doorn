# Gamification — Achievements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Achievements (mijlpalen, streaks, seizoens-prestaties) automatisch afgeleid uit bestaande wedstrijd- en stats-data, getoond op de spelersprofielpagina.

**Architecture:** Pure client-side derivatie analoog aan `RecordsService`. Nieuwe `AchievementsService` rekent badges per speler uit op basis van `PlayerService` / `WedstrijdenService` / `GameStatisticsService`. Geen schema-wijzigingen. Display via een herbruikbare `AchievementBadgeComponent` en `AchievementsGridComponent` die op de profielpagina gemount wordt.

**Tech Stack:** Angular 18, RxJS, Angular Material, Jasmine/Karma. Bestaande Supabase-data via de bestaande services — geen directe DB-calls vanuit nieuwe code.

**Spec:** `docs/superpowers/specs/2026-05-04-gamification-achievements-design.md`

---

## File Structure

**Create:**
- `src/app/interfaces/IAchievement.ts` — types: `AchievementCategory`, `AchievementTier`, `AchievementDefinition`, `PlayerAchievement`, `AchievementSummary`.
- `src/app/services/achievement-definitions.ts` — data-only; lijst van alle badge-keys met tiers, drempels, titel, beschrijving, icoon.
- `src/app/services/achievements.service.ts` (+ `.spec.ts`) — derivatie-service.
- `src/app/components/shared/achievement-badge/achievement-badge.component.ts` (+ `.html`, `.scss`, `.spec.ts`) — presentatie-only tegel.
- `src/app/components/speler-profiel/achievements-grid/achievements-grid.component.ts` (+ `.html`, `.scss`, `.spec.ts`) — groepering per categorie op het profiel.

**Modify:**
- `src/styles_variables.scss` — voeg tier-kleur-variabelen toe.
- `src/app/components/speler-profiel/speler-profiel.module.ts` — declareer nieuwe componenten.
- `src/app/components/speler-profiel/speler-profiel.component.ts` — laad achievements.
- `src/app/components/speler-profiel/speler-profiel.component.html` — render `<app-achievements-grid>`.

---

## Task 1: Types & badge-definities

**Files:**
- Create: `src/app/interfaces/IAchievement.ts`
- Create: `src/app/services/achievement-definitions.ts`
- Test: `src/app/services/achievement-definitions.spec.ts`

- [ ] **Step 1: Schrijf de falende test voor definities-integriteit**

`src/app/services/achievement-definitions.spec.ts`:

```ts
import { ACHIEVEMENT_DEFINITIONS } from './achievement-definitions';

describe('ACHIEVEMENT_DEFINITIONS', () => {
  it('alle keys zijn uniek', () => {
    const keys = ACHIEVEMENT_DEFINITIONS.map(d => d.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('tier-drempels zijn strikt oplopend per definitie', () => {
    for (const def of ACHIEVEMENT_DEFINITIONS) {
      if (!def.tiers) continue;
      const thresholds = def.tiers.map(t => t.threshold);
      const sorted = [...thresholds].sort((a, b) => a - b);
      expect(thresholds).toEqual(sorted);
      expect(new Set(thresholds).size).toBe(thresholds.length);
    }
  });

  it('bevat de v1-set: 3 milestones, 3 streaks, 3 season', () => {
    const milestones = ACHIEVEMENT_DEFINITIONS.filter(d => d.category === 'milestone');
    const streaks = ACHIEVEMENT_DEFINITIONS.filter(d => d.category === 'streak');
    const seasons = ACHIEVEMENT_DEFINITIONS.filter(d => d.category === 'season');
    expect(milestones.map(d => d.key).sort()).toEqual(['matches_played', 'matches_won', 'zlatan_points']);
    expect(streaks.map(d => d.key).sort()).toEqual(['streak_3', 'streak_5', 'streak_7']);
    expect(seasons.map(d => d.key).sort()).toEqual(['season_champion', 'season_full_attend', 'season_podium']);
  });
});
```

- [ ] **Step 2: Run test om te bevestigen dat hij faalt**

Run: `npx ng test --include='src/app/services/achievement-definitions.spec.ts' --watch=false`
Expected: FAIL — module niet gevonden.

- [ ] **Step 3: Maak `IAchievement.ts`**

`src/app/interfaces/IAchievement.ts`:

```ts
export type AchievementCategory = 'milestone' | 'streak' | 'season';
export type AchievementTier = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface AchievementTierDef {
  tier: AchievementTier;
  threshold: number;
}

export interface AchievementDefinition {
  key: string;
  category: AchievementCategory;
  title: string;
  description: string;
  icon: string;
  tiers?: AchievementTierDef[];
}

export interface AchievementOccurrence {
  season: string;
  date: Date | null;
}

export interface PlayerAchievement {
  key: string;
  category: AchievementCategory;
  tier: AchievementTier | null;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date | null;
  progress?: { current: number; target: number };
  occurrences?: AchievementOccurrence[];
}

export interface AchievementSummary {
  key: string;
  tier: AchievementTier | null;
  holdersCount: number;
  totalPlayers: number;
  rarity: number;
}
```

- [ ] **Step 4: Maak `achievement-definitions.ts`**

`src/app/services/achievement-definitions.ts`:

```ts
import { AchievementDefinition } from '../interfaces/IAchievement';

export const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  {
    key: 'matches_played',
    category: 'milestone',
    title: 'Veteraan',
    description: 'Aantal gespeelde wedstrijden.',
    icon: 'directions_run',
    tiers: [
      { tier: 'bronze', threshold: 10 },
      { tier: 'silver', threshold: 50 },
      { tier: 'gold', threshold: 100 },
      { tier: 'platinum', threshold: 250 },
    ],
  },
  {
    key: 'matches_won',
    category: 'milestone',
    title: 'Winnaar',
    description: 'Aantal gewonnen wedstrijden.',
    icon: 'emoji_events',
    tiers: [
      { tier: 'bronze', threshold: 10 },
      { tier: 'silver', threshold: 50 },
      { tier: 'gold', threshold: 100 },
    ],
  },
  {
    key: 'zlatan_points',
    category: 'milestone',
    title: 'Zlatan',
    description: 'Totaal aantal Zlatan-punten.',
    icon: 'military_tech',
    tiers: [
      { tier: 'bronze', threshold: 5 },
      { tier: 'silver', threshold: 25 },
      { tier: 'gold', threshold: 50 },
    ],
  },
  {
    key: 'streak_3',
    category: 'streak',
    title: 'Hat-trick',
    description: '3 wedstrijden op rij gewonnen.',
    icon: 'local_fire_department',
  },
  {
    key: 'streak_5',
    category: 'streak',
    title: 'Onstuitbaar',
    description: '5 wedstrijden op rij gewonnen.',
    icon: 'local_fire_department',
  },
  {
    key: 'streak_7',
    category: 'streak',
    title: 'Legendarisch',
    description: '7 wedstrijden op rij gewonnen.',
    icon: 'local_fire_department',
  },
  {
    key: 'season_champion',
    category: 'season',
    title: 'Seizoenskampioen',
    description: 'Top-1 klassement van een afgerond seizoen.',
    icon: 'workspace_premium',
  },
  {
    key: 'season_podium',
    category: 'season',
    title: 'Podium',
    description: 'Top-3 klassement van een afgerond seizoen.',
    icon: 'looks_3',
  },
  {
    key: 'season_full_attend',
    category: 'season',
    title: 'Altijd aanwezig',
    description: 'Gespeeld in elke wedstrijd van een afgerond seizoen.',
    icon: 'event_available',
  },
];
```

- [ ] **Step 5: Run test om te bevestigen dat hij slaagt**

Run: `npx ng test --include='src/app/services/achievement-definitions.spec.ts' --watch=false`
Expected: PASS — 3 specs.

- [ ] **Step 6: Commit**

```bash
git add src/app/interfaces/IAchievement.ts src/app/services/achievement-definitions.ts src/app/services/achievement-definitions.spec.ts
git commit -m "Achievements: types + badge-definities (mijlpalen/streaks/seizoen)."
```

---

## Task 2: AchievementsService — mijlpaal-detectie

**Files:**
- Create: `src/app/services/achievements.service.ts`
- Test: `src/app/services/achievements.service.spec.ts`

- [ ] **Step 1: Schrijf falende tests voor mijlpalen**

`src/app/services/achievements.service.spec.ts`:

```ts
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AchievementsService } from './achievements.service';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { Player } from '../interfaces/IPlayer';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { WedstrijdData } from '../interfaces/IWedstrijd';

function speler(id: number, name: string): PlayerSheetData {
  return { id, name, position: 'midden', rating: 50, actief: true } as PlayerSheetData;
}

function match(opts: {
  id: number; datum: string; wit: number[]; rood: number[];
  scoreWit: number; scoreRood: number; zlatan?: number; seizoen?: string;
}): WedstrijdData {
  return {
    id: opts.id,
    seizoen: opts.seizoen ?? '2024-2025',
    datum: new Date(opts.datum),
    teamWit: opts.wit,
    teamRood: opts.rood,
    scoreWit: opts.scoreWit,
    scoreRood: opts.scoreRood,
    zlatanPlayerId: opts.zlatan ?? null,
    ventielPlayerId: null,
  } as WedstrijdData;
}

function fullStats(p: Partial<Player> & { id: number; name: string }): Player {
  return {
    id: p.id, name: p.name, position: 'midden', rating: 50,
    gamesPlayed: p.gamesPlayed ?? 0, totalPoints: p.totalPoints ?? 0,
    wins: p.wins ?? 0, losses: p.losses ?? 0, ties: p.ties ?? 0,
    winRatio: p.winRatio ?? 0, gameHistory: p.gameHistory ?? [],
    zlatanPoints: p.zlatanPoints ?? 0, ventielPoints: p.ventielPoints ?? 0,
    actief: true,
  };
}

describe('AchievementsService — milestones', () => {
  let service: AchievementsService;
  let players: PlayerSheetData[];
  let matches: WedstrijdData[];
  let stats: Player[];

  function build() {
    TestBed.configureTestingModule({
      providers: [
        AchievementsService,
        { provide: PlayerService, useValue: { getPlayers: () => of(players) } },
        { provide: WedstrijdenService, useValue: { getGespeeldeWedstrijden: () => of(matches) } },
        {
          provide: GameStatisticsService,
          useValue: {
            getFullPlayerStats: (_season?: string | null) => of(stats),
            getAvailableSeasons: () => of(['2024-2025']),
            getCurrentSeason: () => of('2024-2025'),
          },
        },
      ],
    });
    service = TestBed.inject(AchievementsService);
  }

  it('matches_played: tier bronze bij 10, silver bij 50; earnedAt = 10e match', (done) => {
    players = [speler(1, 'Chris')];
    matches = [];
    for (let i = 1; i <= 12; i++) {
      matches.push(match({
        id: i, datum: `2024-01-${String(i).padStart(2, '0')}`,
        wit: [1], rood: [], scoreWit: 1, scoreRood: 0,
      }));
    }
    stats = [fullStats({ id: 1, name: 'Chris', gamesPlayed: 12, wins: 12 })];
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const ach = list.find(a => a.key === 'matches_played')!;
      expect(ach.tier).toBe('bronze');
      expect(ach.earnedAt).toEqual(new Date('2024-01-10'));
      expect(ach.progress).toEqual({ current: 12, target: 50 });
      done();
    });
  });

  it('matches_played: progress naar bronze als nog geen tier behaald', (done) => {
    players = [speler(1, 'Chris')];
    matches = [match({ id: 1, datum: '2024-01-01', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 })];
    stats = [fullStats({ id: 1, name: 'Chris', gamesPlayed: 1, wins: 1 })];
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const ach = list.find(a => a.key === 'matches_played')!;
      expect(ach.tier).toBeNull();
      expect(ach.progress).toEqual({ current: 1, target: 10 });
      done();
    });
  });

  it('zlatan_points: earnedAt = match waarin de drempel werd gehaald', (done) => {
    players = [speler(1, 'Chris')];
    matches = [];
    for (let i = 1; i <= 5; i++) {
      matches.push(match({
        id: i, datum: `2024-02-${String(i).padStart(2, '0')}`,
        wit: [1], rood: [], scoreWit: 1, scoreRood: 0, zlatan: 1,
      }));
    }
    stats = [fullStats({ id: 1, name: 'Chris', gamesPlayed: 5, wins: 5, zlatanPoints: 5 })];
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const ach = list.find(a => a.key === 'zlatan_points')!;
      expect(ach.tier).toBe('bronze');
      expect(ach.earnedAt).toEqual(new Date('2024-02-05'));
      done();
    });
  });
});
```

- [ ] **Step 2: Run om te bevestigen dat hij faalt**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: FAIL — service bestaat nog niet.

- [ ] **Step 3: Schrijf de service-skeleton + milestone-detectie**

`src/app/services/achievements.service.ts`:

```ts
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { ACHIEVEMENT_DEFINITIONS } from './achievement-definitions';
import {
  AchievementDefinition,
  AchievementTier,
  AchievementTierDef,
  PlayerAchievement,
} from '../interfaces/IAchievement';
import { WedstrijdData } from '../interfaces/IWedstrijd';
import { Player } from '../interfaces/IPlayer';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';

interface PlayerMatchView {
  match: WedstrijdData;
  outcome: 'W' | 'L' | 'D';
  isZlatan: boolean;
}

@Injectable({ providedIn: 'root' })
export class AchievementsService {
  constructor(
    private playerService: PlayerService,
    private wedstrijdenService: WedstrijdenService,
    private statsService: GameStatisticsService,
  ) {}

  getPlayerAchievements(playerId: number): Observable<PlayerAchievement[]> {
    return forkJoin({
      players: this.playerService.getPlayers(),
      matches: this.wedstrijdenService.getGespeeldeWedstrijden(),
      stats: this.statsService.getFullPlayerStats(null),
    }).pipe(
      map(({ matches, stats }) => this.buildForPlayer(playerId, matches, stats)),
    );
  }

  private buildForPlayer(playerId: number, matches: WedstrijdData[], stats: Player[]): PlayerAchievement[] {
    const playerStats = stats.find(s => s.id === playerId);
    if (!playerStats) return [];
    const sortedMatches = this.matchesForPlayer(playerId, matches);

    const result: PlayerAchievement[] = [];
    for (const def of ACHIEVEMENT_DEFINITIONS) {
      if (def.category === 'milestone') {
        result.push(this.buildMilestone(def, playerStats, sortedMatches));
      }
    }
    return result;
  }

  private matchesForPlayer(playerId: number, matches: WedstrijdData[]): PlayerMatchView[] {
    const sorted = [...matches]
      .filter(m => m.datum)
      .sort((a, b) => (a.datum!.getTime() - b.datum!.getTime()));
    const views: PlayerMatchView[] = [];
    for (const m of sorted) {
      const inWit = (m.teamWit || []).includes(playerId);
      const inRood = (m.teamRood || []).includes(playerId);
      if (!inWit && !inRood) continue;
      const own = inWit ? (m.scoreWit ?? 0) : (m.scoreRood ?? 0);
      const opp = inWit ? (m.scoreRood ?? 0) : (m.scoreWit ?? 0);
      const outcome: 'W' | 'L' | 'D' = own > opp ? 'W' : own < opp ? 'L' : 'D';
      views.push({ match: m, outcome, isZlatan: m.zlatanPlayerId === playerId });
    }
    return views;
  }

  private buildMilestone(
    def: AchievementDefinition,
    stats: Player,
    views: PlayerMatchView[],
  ): PlayerAchievement {
    const valueFn = MILESTONE_VALUES[def.key];
    const matchValueFn = MILESTONE_MATCH_VALUES[def.key];
    const current = valueFn(stats);
    const tiers = def.tiers ?? [];
    const earnedTier = [...tiers].reverse().find(t => current >= t.threshold) ?? null;
    const nextTier = tiers.find(t => current < t.threshold) ?? null;
    const target = nextTier?.threshold ?? earnedTier?.threshold ?? tiers[0]?.threshold ?? 0;

    let earnedAt: Date | null = null;
    if (earnedTier) {
      let acc = 0;
      for (const v of views) {
        acc += matchValueFn(v);
        if (acc >= earnedTier.threshold) { earnedAt = v.match.datum; break; }
      }
    }

    return {
      key: def.key,
      category: def.category,
      tier: earnedTier?.tier ?? null,
      title: tierTitle(def, earnedTier?.tier ?? null),
      description: def.description,
      icon: def.icon,
      earnedAt,
      progress: { current, target },
    };
  }
}

const MILESTONE_VALUES: Record<string, (s: Player) => number> = {
  matches_played: s => s.gamesPlayed,
  matches_won: s => s.wins,
  zlatan_points: s => s.zlatanPoints,
};

const MILESTONE_MATCH_VALUES: Record<string, (v: PlayerMatchView) => number> = {
  matches_played: () => 1,
  matches_won: v => v.outcome === 'W' ? 1 : 0,
  zlatan_points: v => v.isZlatan ? 1 : 0,
};

function tierTitle(def: AchievementDefinition, tier: AchievementTier | null): string {
  if (!def.tiers || !tier) return def.title;
  const labels: Record<AchievementTier, string> = {
    bronze: 'Brons', silver: 'Zilver', gold: 'Goud', platinum: 'Platina',
  };
  return `${def.title} – ${labels[tier]}`;
}
```

- [ ] **Step 4: Run tests**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: PASS — 3 specs.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/achievements.service.ts src/app/services/achievements.service.spec.ts
git commit -m "AchievementsService: mijlpaal-detectie (matches_played, matches_won, zlatan_points)."
```

---

## Task 3: Streak-detectie

**Files:**
- Modify: `src/app/services/achievements.service.ts`
- Modify: `src/app/services/achievements.service.spec.ts`

- [ ] **Step 1: Voeg streak-tests toe**

Append in `achievements.service.spec.ts`:

```ts
describe('AchievementsService — streaks', () => {
  let service: AchievementsService;
  let players: PlayerSheetData[];
  let matches: WedstrijdData[];
  let stats: Player[];

  function build() {
    TestBed.configureTestingModule({
      providers: [
        AchievementsService,
        { provide: PlayerService, useValue: { getPlayers: () => of(players) } },
        { provide: WedstrijdenService, useValue: { getGespeeldeWedstrijden: () => of(matches) } },
        {
          provide: GameStatisticsService,
          useValue: {
            getFullPlayerStats: () => of(stats),
            getAvailableSeasons: () => of(['2024-2025']),
            getCurrentSeason: () => of('2024-2025'),
          },
        },
      ],
    });
    service = TestBed.inject(AchievementsService);
  }

  it('streak_3 unlocked op de 3e win op rij; streak_5 nog locked', (done) => {
    players = [speler(1, 'Chris')];
    matches = [
      match({ id: 1, datum: '2024-03-01', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 }),
      match({ id: 2, datum: '2024-03-02', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 }),
      match({ id: 3, datum: '2024-03-03', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 }),
      match({ id: 4, datum: '2024-03-04', wit: [], rood: [1], scoreWit: 5, scoreRood: 0 }), // verlies
    ];
    stats = [fullStats({ id: 1, name: 'Chris', gamesPlayed: 4, wins: 3, losses: 1 })];
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const s3 = list.find(a => a.key === 'streak_3')!;
      const s5 = list.find(a => a.key === 'streak_5')!;
      expect(s3.tier).toBe('bronze');
      expect(s3.earnedAt).toEqual(new Date('2024-03-03'));
      expect(s5.tier).toBeNull();
      expect(s5.progress).toEqual({ current: 3, target: 5 });
      done();
    });
  });

  it('streak telt door over seizoens-grens heen', (done) => {
    players = [speler(1, 'Chris')];
    matches = [
      match({ id: 1, datum: '2024-06-01', seizoen: '2023-2024', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 }),
      match({ id: 2, datum: '2024-09-01', seizoen: '2024-2025', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 }),
      match({ id: 3, datum: '2024-09-02', seizoen: '2024-2025', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 }),
    ];
    stats = [fullStats({ id: 1, name: 'Chris', gamesPlayed: 3, wins: 3 })];
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const s3 = list.find(a => a.key === 'streak_3')!;
      expect(s3.tier).toBe('bronze');
      done();
    });
  });
});
```

- [ ] **Step 2: Run om te bevestigen dat hij faalt**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: FAIL — `streak_3` undefined in resultaat.

- [ ] **Step 3: Voeg streak-detectie toe in service**

Voeg in `achievements.service.ts` (binnen `buildForPlayer`, na de milestone-loop):

```ts
const streakInfo = this.computeWinStreak(views);
for (const def of ACHIEVEMENT_DEFINITIONS) {
  if (def.category === 'streak') {
    result.push(this.buildStreak(def, streakInfo));
  }
}
```

En voeg deze methodes toe aan de class:

```ts
private computeWinStreak(views: PlayerMatchView[]): { longest: number; reachedAt: Map<number, Date | null> } {
  let longest = 0;
  let run = 0;
  const reachedAt = new Map<number, Date | null>();
  for (const v of views) {
    if (v.outcome === 'W') {
      run++;
      if (!reachedAt.has(run)) reachedAt.set(run, v.match.datum);
      if (run > longest) longest = run;
    } else {
      run = 0;
    }
  }
  return { longest, reachedAt };
}

private buildStreak(
  def: AchievementDefinition,
  info: { longest: number; reachedAt: Map<number, Date | null> },
): PlayerAchievement {
  const target = STREAK_TARGETS[def.key];
  const earned = info.longest >= target;
  return {
    key: def.key,
    category: def.category,
    tier: earned ? 'bronze' : null,
    title: def.title,
    description: def.description,
    icon: def.icon,
    earnedAt: earned ? (info.reachedAt.get(target) ?? null) : null,
    progress: { current: info.longest, target },
  };
}
```

Voeg ook bovenaan toe:

```ts
const STREAK_TARGETS: Record<string, number> = {
  streak_3: 3, streak_5: 5, streak_7: 7,
};
```

- [ ] **Step 4: Run tests**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: PASS — alle specs (milestones + streaks).

- [ ] **Step 5: Commit**

```bash
git add src/app/services/achievements.service.ts src/app/services/achievements.service.spec.ts
git commit -m "AchievementsService: streak-detectie (streak_3/5/7) inclusief earnedAt."
```

---

## Task 4: Seizoens-prestaties

**Files:**
- Modify: `src/app/services/achievements.service.ts`
- Modify: `src/app/services/achievements.service.spec.ts`

- [ ] **Step 1: Voeg seizoens-tests toe**

Append in `achievements.service.spec.ts`:

```ts
describe('AchievementsService — season', () => {
  let service: AchievementsService;
  let players: PlayerSheetData[];
  let matches: WedstrijdData[];
  let allTimeStats: Player[];
  let seasonStats: Record<string, Player[]>;
  let availableSeasons: string[];
  let currentSeason: string | null;

  function build() {
    TestBed.configureTestingModule({
      providers: [
        AchievementsService,
        { provide: PlayerService, useValue: { getPlayers: () => of(players) } },
        { provide: WedstrijdenService, useValue: { getGespeeldeWedstrijden: () => of(matches) } },
        {
          provide: GameStatisticsService,
          useValue: {
            getFullPlayerStats: (season?: string | null) =>
              of(season ? (seasonStats[season] ?? []) : allTimeStats),
            getAvailableSeasons: () => of(availableSeasons),
            getCurrentSeason: () => of(currentSeason),
          },
        },
      ],
    });
    service = TestBed.inject(AchievementsService);
  }

  it('season_champion: top-1 in afgerond seizoen geeft badge met occurrence', (done) => {
    players = [speler(1, 'Chris'), speler(2, 'Ward')];
    matches = [
      match({ id: 1, datum: '2024-01-01', seizoen: '2023-2024', wit: [1], rood: [2], scoreWit: 5, scoreRood: 0 }),
    ];
    allTimeStats = [
      fullStats({ id: 1, name: 'Chris', gamesPlayed: 1, wins: 1, totalPoints: 3 }),
      fullStats({ id: 2, name: 'Ward', gamesPlayed: 1, losses: 1, totalPoints: 0 }),
    ];
    seasonStats = {
      '2023-2024': [
        fullStats({ id: 1, name: 'Chris', gamesPlayed: 1, wins: 1, totalPoints: 3 }),
        fullStats({ id: 2, name: 'Ward', gamesPlayed: 1, losses: 1, totalPoints: 0 }),
      ],
    };
    availableSeasons = ['2023-2024', '2024-2025'];
    currentSeason = '2024-2025';
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const champ = list.find(a => a.key === 'season_champion')!;
      const podium = list.find(a => a.key === 'season_podium')!;
      expect(champ.tier).toBe('bronze');
      expect(champ.occurrences?.map(o => o.season)).toEqual(['2023-2024']);
      expect(podium.tier).toBe('bronze'); // top-1 ook top-3
      done();
    });
  });

  it('lopend seizoen telt niet voor seizoens-badges', (done) => {
    players = [speler(1, 'Chris')];
    matches = [match({ id: 1, datum: '2024-09-01', seizoen: '2024-2025', wit: [1], rood: [], scoreWit: 1, scoreRood: 0 })];
    allTimeStats = [fullStats({ id: 1, name: 'Chris', gamesPlayed: 1, wins: 1, totalPoints: 3 })];
    seasonStats = { '2024-2025': allTimeStats };
    availableSeasons = ['2024-2025'];
    currentSeason = '2024-2025';
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const champ = list.find(a => a.key === 'season_champion')!;
      expect(champ.tier).toBeNull();
      expect(champ.occurrences).toBeUndefined();
      done();
    });
  });

  it('season_full_attend: één gemiste wedstrijd → geen badge', (done) => {
    players = [speler(1, 'Chris'), speler(2, 'Ward')];
    matches = [
      match({ id: 1, datum: '2024-01-01', seizoen: '2023-2024', wit: [1], rood: [2], scoreWit: 1, scoreRood: 0 }),
      match({ id: 2, datum: '2024-01-08', seizoen: '2023-2024', wit: [2], rood: [], scoreWit: 1, scoreRood: 0 }),
    ];
    allTimeStats = [
      fullStats({ id: 1, name: 'Chris', gamesPlayed: 1, wins: 1, totalPoints: 3 }),
      fullStats({ id: 2, name: 'Ward', gamesPlayed: 2, wins: 1, losses: 1, totalPoints: 3 }),
    ];
    seasonStats = { '2023-2024': allTimeStats };
    availableSeasons = ['2023-2024'];
    currentSeason = null;
    build();

    service.getPlayerAchievements(1).subscribe(list => {
      const fa = list.find(a => a.key === 'season_full_attend')!;
      expect(fa.tier).toBeNull();
      done();
    });
  });
});
```

- [ ] **Step 2: Run om te bevestigen dat hij faalt**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: FAIL — `season_*` undefined.

- [ ] **Step 3: Vervang `getPlayerAchievements` zodat het seizoens-data ophaalt**

Vervang `getPlayerAchievements` in `achievements.service.ts`:

```ts
getPlayerAchievements(playerId: number): Observable<PlayerAchievement[]> {
  return forkJoin({
    matches: this.wedstrijdenService.getGespeeldeWedstrijden(),
    stats: this.statsService.getFullPlayerStats(null),
    seasons: this.statsService.getAvailableSeasons(),
    current: this.statsService.getCurrentSeason(),
  }).pipe(
    switchMap(({ matches, stats, seasons, current }) => {
      const completed = (seasons ?? []).filter(s => s !== current);
      const seasonStats$ = completed.length === 0
        ? of([] as { season: string; stats: Player[] }[])
        : forkJoin(
            completed.map(season =>
              this.statsService.getFullPlayerStats(season).pipe(
                map(s => ({ season, stats: s })),
              ),
            ),
          );
      return seasonStats$.pipe(
        map(perSeason => this.buildForPlayer(playerId, matches, stats, perSeason)),
      );
    }),
  );
}
```

Pas `buildForPlayer` aan zodat het de extra parameter accepteert en seizoens-detectie toevoegt:

```ts
private buildForPlayer(
  playerId: number,
  matches: WedstrijdData[],
  stats: Player[],
  perSeason: { season: string; stats: Player[] }[],
): PlayerAchievement[] {
  const playerStats = stats.find(s => s.id === playerId);
  if (!playerStats) return [];
  const sortedMatches = this.matchesForPlayer(playerId, matches);

  const result: PlayerAchievement[] = [];
  for (const def of ACHIEVEMENT_DEFINITIONS) {
    if (def.category === 'milestone') {
      result.push(this.buildMilestone(def, playerStats, sortedMatches));
    }
  }
  const streakInfo = this.computeWinStreak(sortedMatches);
  for (const def of ACHIEVEMENT_DEFINITIONS) {
    if (def.category === 'streak') {
      result.push(this.buildStreak(def, streakInfo));
    }
  }
  const seasonResults = this.computeSeasonOccurrences(playerId, matches, perSeason);
  for (const def of ACHIEVEMENT_DEFINITIONS) {
    if (def.category === 'season') {
      result.push(this.buildSeasonBadge(def, seasonResults));
    }
  }
  return result;
}

private computeSeasonOccurrences(
  playerId: number,
  matches: WedstrijdData[],
  perSeason: { season: string; stats: Player[] }[],
): Record<string, AchievementOccurrence[]> {
  const out: Record<string, AchievementOccurrence[]> = {
    season_champion: [], season_podium: [], season_full_attend: [],
  };
  for (const { season, stats } of perSeason) {
    const seasonMatches = matches
      .filter(m => m.seizoen === season && m.datum)
      .sort((a, b) => a.datum!.getTime() - b.datum!.getTime());
    const lastDate = seasonMatches.length > 0 ? seasonMatches[seasonMatches.length - 1].datum : null;

    const ranking = [...stats].filter(s => typeof s.id === 'number')
      .sort((a, b) => b.totalPoints - a.totalPoints);
    const top1 = ranking[0]?.totalPoints ?? -Infinity;
    const top3Threshold = ranking[2]?.totalPoints ?? -Infinity;
    const me = stats.find(s => s.id === playerId);

    if (me && me.totalPoints === top1 && me.totalPoints > 0) {
      out['season_champion'].push({ season, date: lastDate });
    }
    if (me && me.totalPoints >= top3Threshold && me.totalPoints > 0) {
      out['season_podium'].push({ season, date: lastDate });
    }
    if (seasonMatches.length > 0) {
      const playedAll = seasonMatches.every(
        m => (m.teamWit || []).includes(playerId) || (m.teamRood || []).includes(playerId),
      );
      if (playedAll) out['season_full_attend'].push({ season, date: lastDate });
    }
  }
  return out;
}

private buildSeasonBadge(
  def: AchievementDefinition,
  occurrencesByKey: Record<string, AchievementOccurrence[]>,
): PlayerAchievement {
  const occurrences = occurrencesByKey[def.key] ?? [];
  const earned = occurrences.length > 0;
  const earnedAt = earned
    ? occurrences.reduce<Date | null>((min, o) => {
        if (!o.date) return min;
        return !min || o.date < min ? o.date : min;
      }, null)
    : null;
  return {
    key: def.key,
    category: def.category,
    tier: earned ? 'bronze' : null,
    title: def.title,
    description: def.description,
    icon: def.icon,
    earnedAt,
    occurrences: earned ? occurrences : undefined,
  };
}
```

Voeg `AchievementOccurrence` toe aan de imports bovenaan.

- [ ] **Step 4: Run tests**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: PASS — alle specs.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/achievements.service.ts src/app/services/achievements.service.spec.ts
git commit -m "AchievementsService: seizoens-prestaties (champion/podium/full_attend); lopend seizoen overgeslagen."
```

---

## Task 5: Rarity / chips-API

**Files:**
- Modify: `src/app/services/achievements.service.ts`
- Modify: `src/app/services/achievements.service.spec.ts`

- [ ] **Step 1: Schrijf falende test voor `getAllAchievements` + `getTopChipsForPlayer`**

Append:

```ts
describe('AchievementsService — rarity & chips', () => {
  let service: AchievementsService;
  let players: PlayerSheetData[];
  let matches: WedstrijdData[];
  let allTimeStats: Player[];
  let seasonStats: Record<string, Player[]>;

  function build() {
    TestBed.configureTestingModule({
      providers: [
        AchievementsService,
        { provide: PlayerService, useValue: { getPlayers: () => of(players) } },
        { provide: WedstrijdenService, useValue: { getGespeeldeWedstrijden: () => of(matches) } },
        {
          provide: GameStatisticsService,
          useValue: {
            getFullPlayerStats: (season?: string | null) =>
              of(season ? (seasonStats[season] ?? []) : allTimeStats),
            getAvailableSeasons: () => of(['2023-2024']),
            getCurrentSeason: () => of(null),
          },
        },
      ],
    });
    service = TestBed.inject(AchievementsService);
  }

  it('getTopChipsForPlayer geeft de zeldzaamste behaalde achievements', (done) => {
    players = [speler(1, 'Chris'), speler(2, 'Ward'), speler(3, 'Tom')];
    matches = [];
    for (let i = 1; i <= 12; i++) {
      matches.push(match({
        id: i, datum: `2024-01-${String(i).padStart(2, '0')}`, seizoen: '2023-2024',
        wit: [1], rood: i === 1 ? [2] : [3], scoreWit: 5, scoreRood: 0,
      }));
    }
    allTimeStats = [
      fullStats({ id: 1, name: 'Chris', gamesPlayed: 12, wins: 12, totalPoints: 36 }),
      fullStats({ id: 2, name: 'Ward', gamesPlayed: 1, losses: 1 }),
      fullStats({ id: 3, name: 'Tom', gamesPlayed: 11, losses: 11 }),
    ];
    seasonStats = { '2023-2024': allTimeStats };
    build();

    service.getTopChipsForPlayer(1, 2).subscribe(chips => {
      expect(chips.length).toBe(2);
      // Chris heeft o.a. season_champion (rare: 1/3) en streak_7 (rare: 1/3).
      expect(chips.every(c => c.tier !== null)).toBe(true);
      done();
    });
  });
});
```

- [ ] **Step 2: Run om te bevestigen dat hij faalt**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: FAIL — methode bestaat niet.

- [ ] **Step 3: Implementeer `getAllAchievements` + `getTopChipsForPlayer`**

Voeg in `achievements.service.ts` toe:

```ts
getAllAchievements(): Observable<{
  perPlayer: Record<number, PlayerAchievement[]>;
  summaries: AchievementSummary[];
}> {
  return forkJoin({
    players: this.playerService.getPlayers(),
    matches: this.wedstrijdenService.getGespeeldeWedstrijden(),
    stats: this.statsService.getFullPlayerStats(null),
    seasons: this.statsService.getAvailableSeasons(),
    current: this.statsService.getCurrentSeason(),
  }).pipe(
    switchMap(({ players, matches, stats, seasons, current }) => {
      const completed = (seasons ?? []).filter(s => s !== current);
      const seasonStats$ = completed.length === 0
        ? of([] as { season: string; stats: Player[] }[])
        : forkJoin(
            completed.map(season =>
              this.statsService.getFullPlayerStats(season).pipe(
                map(s => ({ season, stats: s })),
              ),
            ),
          );
      return seasonStats$.pipe(
        map(perSeason => {
          const perPlayer: Record<number, PlayerAchievement[]> = {};
          const ids = players.map(p => p.id).filter((id): id is number => typeof id === 'number');
          for (const id of ids) {
            perPlayer[id] = this.buildForPlayer(id, matches, stats, perSeason);
          }
          const summaries = this.summarize(perPlayer, ids.length);
          return { perPlayer, summaries };
        }),
      );
    }),
  );
}

getTopChipsForPlayer(playerId: number, max: number): Observable<PlayerAchievement[]> {
  return this.getAllAchievements().pipe(
    map(({ perPlayer, summaries }) => {
      const summaryByKey = new Map(summaries.map(s => [`${s.key}:${s.tier ?? ''}`, s]));
      const own = (perPlayer[playerId] ?? []).filter(a => a.tier !== null);
      const tierOrder: Record<string, number> = { platinum: 4, gold: 3, silver: 2, bronze: 1 };
      return [...own]
        .sort((a, b) => {
          const ra = summaryByKey.get(`${a.key}:${a.tier ?? ''}`)?.rarity ?? 1;
          const rb = summaryByKey.get(`${b.key}:${b.tier ?? ''}`)?.rarity ?? 1;
          if (ra !== rb) return ra - rb;
          const ta = tierOrder[a.tier ?? ''] ?? 0;
          const tb = tierOrder[b.tier ?? ''] ?? 0;
          if (ta !== tb) return tb - ta;
          return a.key.localeCompare(b.key);
        })
        .slice(0, max);
    }),
  );
}

private summarize(
  perPlayer: Record<number, PlayerAchievement[]>,
  totalPlayers: number,
): AchievementSummary[] {
  const counts = new Map<string, { key: string; tier: AchievementTier | null; count: number }>();
  for (const list of Object.values(perPlayer)) {
    for (const a of list) {
      if (a.tier === null) continue;
      const k = `${a.key}:${a.tier}`;
      const existing = counts.get(k);
      if (existing) existing.count++;
      else counts.set(k, { key: a.key, tier: a.tier, count: 1 });
    }
  }
  const safeTotal = Math.max(totalPlayers, 1);
  return Array.from(counts.values()).map(c => ({
    key: c.key,
    tier: c.tier,
    holdersCount: c.count,
    totalPlayers: safeTotal,
    rarity: c.count / safeTotal,
  }));
}
```

Voeg `AchievementSummary` toe aan imports.

- [ ] **Step 4: Run tests**

Run: `npx ng test --include='src/app/services/achievements.service.spec.ts' --watch=false`
Expected: PASS — alle specs.

- [ ] **Step 5: Commit**

```bash
git add src/app/services/achievements.service.ts src/app/services/achievements.service.spec.ts
git commit -m "AchievementsService: getAllAchievements + getTopChipsForPlayer met rarity-sortering."
```

---

## Task 6: Tier-kleuren + AchievementBadgeComponent

**Files:**
- Modify: `src/styles_variables.scss`
- Create: `src/app/components/shared/achievement-badge/achievement-badge.component.ts`
- Create: `src/app/components/shared/achievement-badge/achievement-badge.component.html`
- Create: `src/app/components/shared/achievement-badge/achievement-badge.component.scss`
- Test: `src/app/components/shared/achievement-badge/achievement-badge.component.spec.ts`

- [ ] **Step 1: Voeg tier-kleur-variabelen toe**

Open `src/styles_variables.scss` en voeg toe (bij voorkeur onderaan, in dezelfde sectie als andere kleur-vars — bestudeer file eerst voor stijl):

```scss
$tier-bronze: #cd7f32;
$tier-silver: #c0c0c0;
$tier-gold: #ffd700;
$tier-platinum: #b9f2ff;
```

- [ ] **Step 2: Schrijf falende component-test**

`src/app/components/shared/achievement-badge/achievement-badge.component.spec.ts`:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AchievementBadgeComponent } from './achievement-badge.component';
import { PlayerAchievement } from '../../../interfaces/IAchievement';

describe('AchievementBadgeComponent', () => {
  let fixture: ComponentFixture<AchievementBadgeComponent>;
  let component: AchievementBadgeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementBadgeComponent],
      imports: [MatIconModule, MatTooltipModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AchievementBadgeComponent);
    component = fixture.componentInstance;
  });

  it('rendert achievement-tegel met behaalde tier-class', () => {
    component.achievement = {
      key: 'matches_played', category: 'milestone', tier: 'gold',
      title: 'Veteraan – Goud', description: 'Aantal gespeelde wedstrijden.',
      icon: 'directions_run', earnedAt: new Date('2024-01-10'),
      progress: { current: 120, target: 250 },
    } as PlayerAchievement;
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.badge')?.classList.contains('tier-gold')).toBe(true);
    expect(el.querySelector('.badge')?.classList.contains('locked')).toBe(false);
    expect(el.textContent).toContain('120/250');
  });

  it('rendert locked tegel met progress', () => {
    component.achievement = {
      key: 'matches_played', category: 'milestone', tier: null,
      title: 'Veteraan', description: '', icon: 'directions_run',
      earnedAt: null, progress: { current: 4, target: 10 },
    } as PlayerAchievement;
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.badge')?.classList.contains('locked')).toBe(true);
    expect(el.textContent).toContain('4/10');
  });

  it('toont ×N voor seizoens-badges met meerdere occurrences', () => {
    component.achievement = {
      key: 'season_champion', category: 'season', tier: 'bronze',
      title: 'Seizoenskampioen', description: '', icon: 'workspace_premium',
      earnedAt: new Date('2024-06-01'),
      occurrences: [
        { season: '2022-2023', date: new Date('2023-06-01') },
        { season: '2023-2024', date: new Date('2024-06-01') },
      ],
    } as PlayerAchievement;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('×2');
  });
});
```

- [ ] **Step 3: Run om te bevestigen dat hij faalt**

Run: `npx ng test --include='**/achievement-badge.component.spec.ts' --watch=false`
Expected: FAIL — component bestaat niet.

- [ ] **Step 4: Maak de component**

`src/app/components/shared/achievement-badge/achievement-badge.component.ts`:

```ts
import { Component, Input } from '@angular/core';
import { PlayerAchievement } from '../../../interfaces/IAchievement';

@Component({
  selector: 'app-achievement-badge',
  templateUrl: './achievement-badge.component.html',
  styleUrls: ['./achievement-badge.component.scss'],
})
export class AchievementBadgeComponent {
  @Input() achievement!: PlayerAchievement;

  get tierClass(): string {
    return this.achievement.tier ? `tier-${this.achievement.tier}` : 'locked';
  }

  get isLocked(): boolean {
    return this.achievement.tier === null;
  }

  get occurrenceCount(): number {
    return this.achievement.occurrences?.length ?? 0;
  }

  get progressLabel(): string | null {
    const p = this.achievement.progress;
    if (!p) return null;
    return `${p.current}/${p.target}`;
  }

  get progressFraction(): number {
    const p = this.achievement.progress;
    if (!p || p.target === 0) return 0;
    return Math.min(1, p.current / p.target);
  }

  get tooltipText(): string {
    const lines = [this.achievement.description];
    if (this.achievement.earnedAt) {
      lines.push(`Behaald op ${this.achievement.earnedAt.toLocaleDateString('nl-NL')}.`);
    }
    if (this.achievement.occurrences && this.achievement.occurrences.length > 1) {
      lines.push('Seizoenen: ' + this.achievement.occurrences.map(o => o.season).join(', '));
    }
    return lines.filter(Boolean).join(' ');
  }
}
```

`src/app/components/shared/achievement-badge/achievement-badge.component.html`:

```html
<div class="badge" [class.locked]="isLocked" [ngClass]="tierClass" [matTooltip]="tooltipText">
  <mat-icon class="icon">{{ achievement.icon }}</mat-icon>
  <div class="title">{{ achievement.title }}</div>
  <div class="occurrence" *ngIf="occurrenceCount > 1">×{{ occurrenceCount }}</div>
  <div class="progress" *ngIf="progressLabel">
    <div class="progress-bar"><span [style.width.%]="progressFraction * 100"></span></div>
    <div class="progress-label">{{ progressLabel }}</div>
  </div>
</div>
```

`src/app/components/shared/achievement-badge/achievement-badge.component.scss`:

```scss
@import '../../../../styles_variables.scss';

.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: white;
  position: relative;

  .icon { font-size: 32px; width: 32px; height: 32px; }
  .title { font-size: 12px; margin-top: 4px; }
  .occurrence { position: absolute; top: 4px; right: 6px; font-weight: 600; }
  .progress {
    width: 100%;
    margin-top: 6px;
    .progress-bar {
      height: 4px; background: rgba(0,0,0,0.1); border-radius: 2px; overflow: hidden;
      span { display: block; height: 100%; background: $primary-color; }
    }
    .progress-label { font-size: 10px; opacity: 0.7; margin-top: 2px; }
  }

  &.tier-bronze   { border-color: $tier-bronze; }
  &.tier-silver   { border-color: $tier-silver; }
  &.tier-gold     { border-color: $tier-gold; }
  &.tier-platinum { border-color: $tier-platinum; }

  &.locked {
    opacity: 0.45;
    filter: grayscale(0.7);
  }
}
```

(Als `$primary-color` niet de exacte naam is in `styles_variables.scss`, gebruik de bestaande primary-variabele uit dat bestand — verifieer voor het commit.)

- [ ] **Step 5: Run tests**

Run: `npx ng test --include='**/achievement-badge.component.spec.ts' --watch=false`
Expected: PASS — 3 specs.

- [ ] **Step 6: Commit**

```bash
git add src/styles_variables.scss src/app/components/shared/achievement-badge
git commit -m "AchievementBadgeComponent: tier-kleuren + presentatie-only tegel met locked/progress/×N."
```

---

## Task 7: AchievementsGridComponent

**Files:**
- Create: `src/app/components/speler-profiel/achievements-grid/achievements-grid.component.ts`
- Create: `src/app/components/speler-profiel/achievements-grid/achievements-grid.component.html`
- Create: `src/app/components/speler-profiel/achievements-grid/achievements-grid.component.scss`
- Test: `src/app/components/speler-profiel/achievements-grid/achievements-grid.component.spec.ts`

- [ ] **Step 1: Schrijf falende test**

`achievements-grid.component.spec.ts`:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AchievementsGridComponent } from './achievements-grid.component';
import { AchievementBadgeComponent } from '../../shared/achievement-badge/achievement-badge.component';
import { PlayerAchievement } from '../../../interfaces/IAchievement';

describe('AchievementsGridComponent', () => {
  let fixture: ComponentFixture<AchievementsGridComponent>;
  let component: AchievementsGridComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementsGridComponent, AchievementBadgeComponent],
      imports: [MatIconModule, MatTooltipModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AchievementsGridComponent);
    component = fixture.componentInstance;
  });

  it('groepeert per categorie en filtert irrelevante seizoens-tegels', () => {
    const data: PlayerAchievement[] = [
      { key: 'matches_played', category: 'milestone', tier: 'bronze', title: 'Veteraan – Brons', description: '', icon: 'directions_run', earnedAt: new Date(), progress: { current: 12, target: 50 } },
      { key: 'streak_3', category: 'streak', tier: null, title: 'Hat-trick', description: '', icon: 'local_fire_department', earnedAt: null, progress: { current: 1, target: 3 } },
      { key: 'season_champion', category: 'season', tier: null, title: 'Seizoenskampioen', description: '', icon: 'workspace_premium', earnedAt: null },
    ];
    component.achievements = data;
    fixture.detectChanges();
    const headings = Array.from(fixture.nativeElement.querySelectorAll('h3')).map((h: any) => h.textContent);
    expect(headings.length).toBe(2); // Mijlpalen + Streaks (Seizoen verborgen, alleen locked + irrelevant)
    expect(fixture.nativeElement.querySelectorAll('app-achievement-badge').length).toBe(2);
  });

  it('toont seizoens-sectie als ten minste één behaald is', () => {
    component.achievements = [
      { key: 'season_champion', category: 'season', tier: 'bronze', title: 'Seizoenskampioen', description: '', icon: 'workspace_premium', earnedAt: new Date(), occurrences: [{ season: '2023-2024', date: new Date() }] },
      { key: 'season_podium', category: 'season', tier: null, title: 'Podium', description: '', icon: 'looks_3', earnedAt: null },
      { key: 'season_full_attend', category: 'season', tier: null, title: 'Altijd aanwezig', description: '', icon: 'event_available', earnedAt: null },
    ];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-achievement-badge').length).toBe(3);
  });
});
```

- [ ] **Step 2: Run om te bevestigen dat hij faalt**

Run: `npx ng test --include='**/achievements-grid.component.spec.ts' --watch=false`
Expected: FAIL — component bestaat niet.

- [ ] **Step 3: Maak de component**

`achievements-grid.component.ts`:

```ts
import { Component, Input } from '@angular/core';
import { PlayerAchievement, AchievementCategory } from '../../../interfaces/IAchievement';

interface Section {
  key: AchievementCategory;
  title: string;
  items: PlayerAchievement[];
}

@Component({
  selector: 'app-achievements-grid',
  templateUrl: './achievements-grid.component.html',
  styleUrls: ['./achievements-grid.component.scss'],
})
export class AchievementsGridComponent {
  private _achievements: PlayerAchievement[] = [];
  sections: Section[] = [];

  @Input()
  set achievements(value: PlayerAchievement[]) {
    this._achievements = value ?? [];
    this.sections = this.buildSections();
  }
  get achievements(): PlayerAchievement[] { return this._achievements; }

  private buildSections(): Section[] {
    const milestones = this._achievements.filter(a => a.category === 'milestone');
    const streaks = this._achievements.filter(a => a.category === 'streak');
    const seasons = this._achievements.filter(a => a.category === 'season');

    const out: Section[] = [];
    if (milestones.length) out.push({ key: 'milestone', title: 'Mijlpalen', items: milestones });
    if (streaks.length) out.push({ key: 'streak', title: 'Streaks', items: streaks });
    // Seizoens-sectie alleen als ten minste één badge behaald is.
    if (seasons.some(a => a.tier !== null)) {
      out.push({ key: 'season', title: 'Seizoen', items: seasons });
    }
    return out;
  }
}
```

`achievements-grid.component.html`:

```html
<section class="achievements" *ngIf="sections.length > 0">
  <div class="section" *ngFor="let s of sections">
    <h3>{{ s.title }}</h3>
    <div class="grid">
      <app-achievement-badge *ngFor="let a of s.items" [achievement]="a"></app-achievement-badge>
    </div>
  </div>
</section>
```

`achievements-grid.component.scss`:

```scss
.achievements { display: flex; flex-direction: column; gap: 16px; }
.section h3 { margin: 0 0 8px 0; font-size: 14px; opacity: 0.7; text-transform: uppercase; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 8px;
}
```

- [ ] **Step 4: Run tests**

Run: `npx ng test --include='**/achievements-grid.component.spec.ts' --watch=false`
Expected: PASS — 2 specs.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/speler-profiel/achievements-grid
git commit -m "AchievementsGridComponent: groepering per categorie, seizoens-sectie alleen indien behaald."
```

---

## Task 8: Mounten op spelersprofiel

**Files:**
- Modify: `src/app/components/speler-profiel/speler-profiel.module.ts`
- Modify: `src/app/components/speler-profiel/speler-profiel.component.ts`
- Modify: `src/app/components/speler-profiel/speler-profiel.component.html`

- [ ] **Step 1: Inspecteer de bestaande module + component**

Lees `speler-profiel.module.ts`, `speler-profiel.component.ts` en `.html`. Noteer:
- Hoe `recordsHeld` nu wordt geladen (model `forkJoin`-shape).
- Welke `MatModule`'s al geïmporteerd zijn (`MatIconModule`, `MatTooltipModule` mogelijk al aanwezig).
- Welke component-declarations al in de module staan.

- [ ] **Step 2: Declareer nieuwe componenten in de module**

In `speler-profiel.module.ts`:
- Voeg `AchievementBadgeComponent` en `AchievementsGridComponent` toe aan `declarations`.
- Zorg dat `MatIconModule` en `MatTooltipModule` in `imports` staan (zo niet, voeg toe).

```ts
// boven aan
import { AchievementBadgeComponent } from '../shared/achievement-badge/achievement-badge.component';
import { AchievementsGridComponent } from './achievements-grid/achievements-grid.component';

// in declarations: voeg toe
AchievementBadgeComponent,
AchievementsGridComponent,
```

- [ ] **Step 3: Laad achievements in de component**

In `speler-profiel.component.ts`:

Voeg toe bij imports:
```ts
import { AchievementsService } from '../../services/achievements.service';
import { PlayerAchievement } from '../../interfaces/IAchievement';
```

Voeg toe aan het view-model interface (de `recordsHeld`-interface):
```ts
achievements: PlayerAchievement[];
```

Voeg `AchievementsService` toe aan de constructor:
```ts
private achievementsService: AchievementsService,
```

Pas in de bestaande `forkJoin`-shape in `loadProfile` (of vergelijkbare methode) aan zodat `achievements` ook geladen wordt. Voorbeeld — sluit aan op de bestaande structuur die `recordsHeld` toevoegt:

```ts
forkJoin([
  this.playerService.getPlayerById(id),
  // ... bestaande calls
  this.recordsService.getRecordsForPlayer(id),
  this.achievementsService.getPlayerAchievements(id),
]).pipe(
  map(([player, stats, trend, teammates, worstTeammates, history, recordsHeld, achievements]) =>
    player ? { player, stats, trend, teammates, worstTeammates, history, recordsHeld, achievements } : null,
  ),
)
```

(Pas de tuple-volgorde aan op de feitelijke huidige forkJoin-shape — niet blind kopiëren.)

- [ ] **Step 4: Render in de template**

In `speler-profiel.component.html` — voeg toe op een logische plek (bv. tussen quick-stats en match-history):

```html
<app-achievements-grid
  *ngIf="vm$ | async as vm"
  [achievements]="vm.achievements">
</app-achievements-grid>
```

(Gebruik de daadwerkelijk bestaande view-model-naam in de template, niet noodzakelijk `vm`.)

- [ ] **Step 5: Run de hele test-suite voor profiel + nieuwe componenten**

Run:
```bash
npx ng test --include='**/speler-profiel/**/*.spec.ts' --include='**/achievements*.spec.ts' --watch=false
```

Expected: alle tests slagen. Als de bestaande `speler-profiel.component.spec.ts` faalt door een mock die `AchievementsService` mist, voeg een no-op mock toe in dat spec-file.

- [ ] **Step 6: Build-check**

Run: `npm run build -- --configuration=production`
Expected: build slaagt zonder errors. Als er Sass-import-errors zijn over `styles_variables`, los het pad op.

- [ ] **Step 7: Handmatige smoke test**

Run: `npm start`. Open `http://localhost:4200/speler/<bekend-id>`. Verwacht:
- "Achievements"-sectie zichtbaar onder de bestaande quick-stats.
- Mijlpaal-tegels met juiste tier-kleuren en progress.
- Streak-tegels (locked of unlocked).
- Seizoens-sectie alleen als de speler ≥1 seizoen-badge heeft.
- Tooltips tonen "Behaald op {datum}".

Vang regressies op andere features op door minimaal het klassement, profiel-trend, en match-history te checken.

- [ ] **Step 8: Commit**

```bash
git add src/app/components/speler-profiel
git commit -m "Spelersprofiel: AchievementsGrid gemount met data uit AchievementsService."
```

---

## Self-Review

- [x] Spec coverage:
  - Mijlpalen → Task 2
  - Streaks → Task 3
  - Seizoens-prestaties → Task 4
  - Rarity / chips API → Task 5
  - Tier-kleuren + locked/unlocked + progress + ×N → Task 6
  - Grid-groepering + niet-relevante tegels filteren → Task 7
  - Profiel-integratie → Task 8
- [x] Geen placeholders/TODOs in code-blokken; alleen Task 8 vraagt om af te stemmen op de feitelijke `forkJoin`-shape — onvermijdelijk omdat dat structuur is van bestaande code.
- [x] Type-consistentie: `AchievementOccurrence` gedefinieerd in Task 1, gebruikt in Task 4. `AchievementSummary` gedefinieerd in Task 1, gebruikt in Task 5. Method-namen identiek door alle taken (`getPlayerAchievements`, `getAllAchievements`, `getTopChipsForPlayer`).
