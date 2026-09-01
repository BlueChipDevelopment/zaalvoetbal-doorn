import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GameStatisticsService } from './game.statistics.service';
import { PlayerService } from './player.service';
import { WedstrijdenService } from './wedstrijden.service';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { WedstrijdData } from '../interfaces/IWedstrijd';

describe('GameStatisticsService — puntentelling per seizoen', () => {
  const mockPlayers: PlayerSheetData[] = [
    { id: 1, name: 'Winnaar', position: 'Speler', actief: true },
    { id: 2, name: 'Maatje', position: 'Speler', actief: true },
    { id: 3, name: 'Verliezer', position: 'Speler', actief: true },
    { id: 4, name: 'Pechvogel', position: 'Speler', actief: true },
  ];

  const match = (id: number, seizoen: string | null, scoreWit: number, scoreRood: number): WedstrijdData => ({
    id,
    seizoen,
    datum: new Date(2026, 0, id),
    teamWit: [1, 2],
    teamRood: [3, 4],
    scoreWit,
    scoreRood,
    zlatanPlayerId: null,
    ventielPlayerId: null,
  });

  function setup(matches: WedstrijdData[]): GameStatisticsService {
    TestBed.configureTestingModule({
      providers: [
        GameStatisticsService,
        { provide: PlayerService, useValue: { getPlayers: () => of(mockPlayers) } },
        { provide: WedstrijdenService, useValue: { getGespeeldeWedstrijden: () => of(matches) } },
      ],
    });
    return TestBed.inject(GameStatisticsService);
  }

  afterEach(() => TestBed.resetTestingModule());

  it('waardeert winst met 3 punten in seizoenen vóór 2026-2027', (done) => {
    setup([match(1, '2025-2026', 3, 1)]).getFullPlayerStats().subscribe(players => {
      expect(players.find(p => p.id === 1)!.totalPoints).toBe(3);
      expect(players.find(p => p.id === 3)!.totalPoints).toBe(1);
      done();
    });
  });

  it('waardeert winst met 4 punten vanaf seizoen 2026-2027', (done) => {
    setup([match(1, '2026-2027', 3, 1)]).getFullPlayerStats().subscribe(players => {
      expect(players.find(p => p.id === 1)!.totalPoints).toBe(4);
      expect(players.find(p => p.id === 3)!.totalPoints).toBe(1);
      done();
    });
  });

  it('telt elke wedstrijd met de telling van zijn eigen seizoen', (done) => {
    const matches = [match(1, '2025-2026', 3, 1), match(2, '2026-2027', 2, 0)];
    setup(matches).getFullPlayerStats().subscribe(players => {
      // 2x winst: 3 (oud) + 4 (nieuw)
      expect(players.find(p => p.id === 1)!.totalPoints).toBe(7);
      // 2x verlies: 1 + 1, in beide systemen gelijk
      expect(players.find(p => p.id === 3)!.totalPoints).toBe(2);
      done();
    });
  });

  it('waardeert gelijkspel met 2 punten in beide systemen', (done) => {
    const matches = [match(1, '2025-2026', 1, 1), match(2, '2026-2027', 1, 1)];
    setup(matches).getFullPlayerStats().subscribe(players => {
      expect(players.find(p => p.id === 1)!.totalPoints).toBe(4);
      expect(players.find(p => p.id === 3)!.totalPoints).toBe(4);
      done();
    });
  });

  it('valt terug op de oude telling als het seizoen ontbreekt', (done) => {
    setup([match(1, null, 3, 1)]).getFullPlayerStats().subscribe(players => {
      expect(players.find(p => p.id === 1)!.totalPoints).toBe(3);
      done();
    });
  });

  it('geeft voor een afgerond seizoen exact dezelfde uitkomst als de oude formule', (done) => {
    // Volledig seizoen 2024-2025: winst, verlies, gelijkspel en een Zlatan door elkaar
    const matches: WedstrijdData[] = [
      match(1, '2024-2025', 3, 1),
      match(2, '2024-2025', 0, 2),
      match(3, '2024-2025', 1, 1),
      match(4, '2024-2025', 2, 5),
      { ...match(5, '2024-2025', 4, 2), zlatanPlayerId: 1 },
      { ...match(6, '2024-2025', 1, 1), zlatanPlayerId: 3 },
    ];
    // De formule zoals die vóór deze wijziging in de service stond
    const oudeFormule = (p: { wins: number; ties: number; losses: number; zlatanPoints: number }) =>
      p.wins * 3 + p.ties * 2 + p.losses * 1 + p.zlatanPoints;

    setup(matches).getFullPlayerStats('2024-2025').subscribe(players => {
      expect(players.length).toBe(4);
      players.forEach(p => {
        expect(p.totalPoints).toBe(oudeFormule(p as any));
      });
      // Vaste ankerwaarden, zodat de test niet meebeweegt met een fout in beide kanten
      expect(players.find(p => p.id === 1)!.totalPoints).toBe(13); // 2W 2G 2V + 1 zlatan
      expect(players.find(p => p.id === 3)!.totalPoints).toBe(13); // 2W 2G 2V + 1 zlatan
      done();
    });
  });

  it('telt de Zlatan-bonus als 1 extra punt bovenop de uitslag', (done) => {
    const m = { ...match(1, '2026-2027', 3, 1), zlatanPlayerId: 1 };
    setup([m]).getFullPlayerStats().subscribe(players => {
      expect(players.find(p => p.id === 1)!.totalPoints).toBe(5);
      expect(players.find(p => p.id === 1)!.zlatanPoints).toBe(1);
      done();
    });
  });
});
