import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlayerProfileService } from './player-profile.service';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { WedstrijdData } from '../interfaces/IWedstrijd';
import { Player } from '../interfaces/IPlayer';

describe('PlayerProfileService', () => {
  let service: PlayerProfileService;

  // Spelers-mock
  const mockPlayers: PlayerSheetData[] = [
    { id: 1, name: 'Speler Een', position: 'Speler', actief: true },
    { id: 2, name: 'Speler Twee', position: 'Speler', actief: true },
    { id: 3, name: 'Speler Drie', position: 'Speler', actief: true },
    { id: 4, name: 'Speler Vier', position: 'Speler', actief: true },
    { id: 5, name: 'Speler Vijf', position: 'Speler', actief: true },
  ];

  const makeDate = (offsetDays: number): Date => {
    const d = new Date('2024-01-01T12:00:00Z');
    d.setDate(d.getDate() + offsetDays);
    return d;
  };

  // 3 wedstrijden: speler 1 in teamWit, 2 wins + 1 loss
  const mockMatchesWinsLosses: WedstrijdData[] = [
    {
      id: 1,
      datum: makeDate(0),
      teamWit: [1, 2],
      teamRood: [3, 4],
      scoreWit: 3,
      scoreRood: 1,
      zlatanPlayerId: null,
      ventielPlayerId: null,
    },
    {
      id: 2,
      datum: makeDate(7),
      teamWit: [1, 2],
      teamRood: [3, 4],
      scoreWit: 2,
      scoreRood: 0,
      zlatanPlayerId: null,
      ventielPlayerId: null,
    },
    {
      id: 3,
      datum: makeDate(14),
      teamWit: [1, 2],
      teamRood: [3, 4],
      scoreWit: 0,
      scoreRood: 2,
      zlatanPlayerId: null,
      ventielPlayerId: null,
    },
  ];

  const mockFullStats: Player[] = [
    {
      id: 1, name: 'Speler Een', position: 'Speler', rating: 7,
      gamesPlayed: 3, totalPoints: 7, wins: 2, losses: 1, ties: 0,
      winRatio: 66.67, gameHistory: [], zlatanPoints: 0, ventielPoints: 0, actief: true,
    },
  ];

  // Setup helpers voor variabele mocks per describe
  function configureTestBed(
    matches: WedstrijdData[],
    players: PlayerSheetData[] = mockPlayers,
    fullStats: Player[] = mockFullStats,
  ): void {
    TestBed.configureTestingModule({
      providers: [
        PlayerProfileService,
        { provide: PlayerService, useValue: { getPlayers: () => of(players) } },
        { provide: WedstrijdenService, useValue: { getGespeeldeWedstrijden: () => of(matches) } },
        { provide: GameStatisticsService, useValue: { getFullPlayerStats: () => of(fullStats) } },
      ],
    });
    service = TestBed.inject(PlayerProfileService);
  }

  describe('getStats', () => {
    beforeEach(() => {
      configureTestBed(mockMatchesWinsLosses);
    });

    it('berekent W/V/G en winRate correct (2 wins, 1 loss)', (done: DoneFn) => {
      service.getStats(1).subscribe(stats => {
        expect(stats.wins).toBe(2);
        expect(stats.losses).toBe(1);
        expect(stats.draws).toBe(0);
        expect(stats.matchesPlayed).toBe(3);
        // winRate = 2/3 ≈ 0.667, gecontroleerd met tolerantie
        expect(stats.winRate).toBeCloseTo(0.667, 2);
        done();
      });
    });
  });

  describe('getRatingTrend', () => {
    // 2 wedstrijden voor speler 1
    const twoMatches: WedstrijdData[] = [
      {
        id: 10,
        datum: makeDate(0),
        teamWit: [1, 2],
        teamRood: [3, 4],
        scoreWit: 2,
        scoreRood: 1,
        zlatanPlayerId: null,
        ventielPlayerId: null,
      },
      {
        id: 11,
        datum: makeDate(7),
        teamWit: [1, 2],
        teamRood: [3, 4],
        scoreWit: 1,
        scoreRood: 0,
        zlatanPlayerId: null,
        ventielPlayerId: null,
      },
    ];

    beforeEach(() => {
      configureTestBed(twoMatches);
    });

    it('produceert één punt per gespeelde match', (done: DoneFn) => {
      service.getRatingTrend(1, 'all').subscribe(trend => {
        expect(trend.length).toBe(2);
        trend.forEach(point => {
          expect(point.matchDate).toBeDefined();
          expect(typeof point.rating).toBe('number');
        });
        done();
      });
    });
  });

  describe('getTopTeammates', () => {
    // Speler 1 + speler 2: 4 matches samen
    // Speler 1 + speler 3: 2 matches samen (onder drempel)
    const teammateMatches: WedstrijdData[] = [
      // A (id=2) speelt 4x met speler 1
      { id: 20, datum: makeDate(0), teamWit: [1, 2], teamRood: [3, 4], scoreWit: 1, scoreRood: 0, zlatanPlayerId: null, ventielPlayerId: null },
      { id: 21, datum: makeDate(7), teamWit: [1, 2], teamRood: [3, 4], scoreWit: 2, scoreRood: 1, zlatanPlayerId: null, ventielPlayerId: null },
      { id: 22, datum: makeDate(14), teamWit: [1, 2], teamRood: [3, 4], scoreWit: 1, scoreRood: 0, zlatanPlayerId: null, ventielPlayerId: null },
      { id: 23, datum: makeDate(21), teamWit: [1, 2], teamRood: [3, 4], scoreWit: 0, scoreRood: 2, zlatanPlayerId: null, ventielPlayerId: null },
      // B (id=3) speelt 2x met speler 1
      { id: 24, datum: makeDate(28), teamWit: [1, 3], teamRood: [2, 4], scoreWit: 1, scoreRood: 0, zlatanPlayerId: null, ventielPlayerId: null },
      { id: 25, datum: makeDate(35), teamWit: [1, 3], teamRood: [2, 4], scoreWit: 2, scoreRood: 1, zlatanPlayerId: null, ventielPlayerId: null },
    ];

    beforeEach(() => {
      configureTestBed(teammateMatches);
    });

    it('filtert spelers met minder dan 3 samen-wedstrijden', (done: DoneFn) => {
      service.getTopTeammates(1).subscribe(teammates => {
        // Speler 2 heeft 4 samen → mag erin
        // Speler 3 heeft 2 samen → gefilterd
        const ids = teammates.map(t => t.teammate.id);
        expect(ids).toContain(2);
        expect(ids).not.toContain(3);
        done();
      });
    });
  });
});
