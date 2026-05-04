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
      match({ id: 4, datum: '2024-03-04', wit: [], rood: [1], scoreWit: 5, scoreRood: 0 }),
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
      expect(podium.tier).toBe('bronze');
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
