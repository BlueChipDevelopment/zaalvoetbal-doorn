import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RecordsService } from './records.service';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { GameStatisticsService } from './game.statistics.service';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { WedstrijdData } from '../interfaces/IWedstrijd';
import { Player } from '../interfaces/IPlayer';

describe('RecordsService', () => {
  let service: RecordsService;

  const mockPlayers: PlayerSheetData[] = [
    { id: 1, name: 'Alpha', position: 'Speler', actief: true },
    { id: 2, name: 'Bravo', position: 'Speler', actief: true },
    { id: 3, name: 'Charlie', position: 'Speler', actief: true },
    { id: 4, name: 'Delta', position: 'Speler', actief: true },
  ];

  const makeDate = (offsetDays: number): Date => {
    const d = new Date('2024-01-01T12:00:00Z');
    d.setDate(d.getDate() + offsetDays);
    return d;
  };

  function configure(
    matches: WedstrijdData[],
    fullStats: Player[],
    players: PlayerSheetData[] = mockPlayers,
  ): void {
    TestBed.configureTestingModule({
      providers: [
        RecordsService,
        { provide: PlayerService, useValue: { getPlayers: () => of(players) } },
        { provide: WedstrijdenService, useValue: { getGespeeldeWedstrijden: () => of(matches) } },
        { provide: GameStatisticsService, useValue: {
          getFullPlayerStats: () => of(fullStats),
          getCurrentSeason: () => of(null),
          getAvailableSeasons: () => of([]),
        } },
      ],
    });
    service = TestBed.inject(RecordsService);
  }

  function makePlayer(id: number, name: string, overrides: Partial<Player> = {}): Player {
    return {
      id, name, position: 'Speler', rating: 5, gamesPlayed: 0, totalPoints: 0,
      wins: 0, losses: 0, ties: 0, winRatio: 0, gameHistory: [],
      zlatanPoints: 0, ventielPoints: 0, actief: true,
      ...overrides,
    };
  }

  it('returnt 1 holder bij duidelijke winnaar', (done: DoneFn) => {
    const stats: Player[] = [
      makePlayer(1, 'Alpha', { rating: 10, gamesPlayed: 20, winRatio: 80 }),
      makePlayer(2, 'Bravo', { rating: 5, gamesPlayed: 20, winRatio: 50 }),
    ];
    configure([], stats);

    service.getRecords().subscribe(records => {
      const ratingRecord = records.find(r => r.key === 'highest-rating')!;
      expect(ratingRecord.holders.length).toBe(1);
      expect(ratingRecord.holders[0].playerId).toBe(1);
      expect(ratingRecord.holders[0].value).toBe(10);
      done();
    });
  });

  it('returnt meerdere holders bij ties', (done: DoneFn) => {
    const stats: Player[] = [
      makePlayer(1, 'Alpha', { gamesPlayed: 25 }),
      makePlayer(2, 'Bravo', { gamesPlayed: 25 }),
      makePlayer(3, 'Charlie', { gamesPlayed: 10 }),
    ];
    configure([], stats);

    service.getRecords().subscribe(records => {
      const matchesRecord = records.find(r => r.key === 'most-matches')!;
      expect(matchesRecord.holders.length).toBe(2);
      expect(matchesRecord.holders.map(h => h.playerId).sort()).toEqual([1, 2]);
      // Sortering alfabetisch op naam
      expect(matchesRecord.holders[0].name).toBe('Alpha');
      expect(matchesRecord.holders[1].name).toBe('Bravo');
      done();
    });
  });

  it('respecteert min-10 matches voor highest-winrate', (done: DoneFn) => {
    const stats: Player[] = [
      // Alpha: hoogste winRatio maar slechts 5 matches → niet eligible
      makePlayer(1, 'Alpha', { gamesPlayed: 5, winRatio: 100 }),
      // Bravo: 12 matches met 75% → moet de holder zijn
      makePlayer(2, 'Bravo', { gamesPlayed: 12, winRatio: 75 }),
      // Charlie: 15 matches met 50% → niet de winnaar
      makePlayer(3, 'Charlie', { gamesPlayed: 15, winRatio: 50 }),
    ];
    configure([], stats);

    service.getRecords().subscribe(records => {
      const winrate = records.find(r => r.key === 'highest-winrate')!;
      expect(winrate.holders.length).toBe(1);
      expect(winrate.holders[0].playerId).toBe(2);
      expect(winrate.holders[0].value).toBe(75);
      done();
    });
  });

  it('berekent longest-win-streak en longest-loss-streak uit wedstrijden', (done: DoneFn) => {
    // Speler 1 (teamWit) wint 3x dan verliest 1x: W,W,W,L
    // Speler 2 (teamRood) verliest 3x dan wint 1x: L,L,L,W
    const matches: WedstrijdData[] = [
      { id: 1, datum: makeDate(0), teamWit: [1], teamRood: [2], scoreWit: 2, scoreRood: 0, zlatanPlayerId: null, ventielPlayerId: null },
      { id: 2, datum: makeDate(7), teamWit: [1], teamRood: [2], scoreWit: 3, scoreRood: 1, zlatanPlayerId: null, ventielPlayerId: null },
      { id: 3, datum: makeDate(14), teamWit: [1], teamRood: [2], scoreWit: 1, scoreRood: 0, zlatanPlayerId: null, ventielPlayerId: null },
      { id: 4, datum: makeDate(21), teamWit: [1], teamRood: [2], scoreWit: 0, scoreRood: 1, zlatanPlayerId: null, ventielPlayerId: null },
    ];
    const stats: Player[] = [makePlayer(1, 'Alpha'), makePlayer(2, 'Bravo')];
    configure(matches, stats);

    service.getRecords().subscribe(records => {
      const win = records.find(r => r.key === 'longest-win-streak')!;
      expect(win.holders.length).toBe(1);
      expect(win.holders[0].playerId).toBe(1);
      expect(win.holders[0].value).toBe(3);

      const loss = records.find(r => r.key === 'longest-loss-streak')!;
      expect(loss.holders.length).toBe(1);
      expect(loss.holders[0].playerId).toBe(2);
      expect(loss.holders[0].value).toBe(3);
      done();
    });
  });

  it('getRecordsForPlayer filtert op speler-id', (done: DoneFn) => {
    const stats: Player[] = [
      makePlayer(1, 'Alpha', { rating: 10, gamesPlayed: 20, winRatio: 80 }),
      makePlayer(2, 'Bravo', { rating: 5, gamesPlayed: 25, winRatio: 50 }),
    ];
    configure([], stats);

    service.getRecordsForPlayer(1).subscribe(records => {
      // Speler 1 houdt highest-rating, speler 2 most-matches
      const keys = records.map(r => r.key);
      expect(keys).toContain('highest-rating');
      expect(keys).not.toContain('most-matches');
      done();
    });
  });
});
