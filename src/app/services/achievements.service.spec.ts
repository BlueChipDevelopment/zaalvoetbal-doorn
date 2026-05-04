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
