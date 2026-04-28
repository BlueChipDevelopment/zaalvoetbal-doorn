import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WedstrijdenService } from './wedstrijden.service';
import { MatchDataSource } from './data-sources/match-data-source';
import { WedstrijdData } from '../interfaces/IWedstrijd';

describe('WedstrijdenService', () => {
  let service: WedstrijdenService;
  let mockDataSource: jasmine.SpyObj<MatchDataSource>;

  const mockMatches: WedstrijdData[] = [
    {
      id: 1,
      seizoen: '2025-2026',
      seizoenWedstrijdNummer: 1,
      datum: new Date('2025-09-15'),
      datumString: '15-09-2025',
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: 3,
      scoreRood: 2,
      zlatan: 'Bob',
      ventiel: '',
      absoluteRowNumber: 2,
      locatie: 'Sporthal Steinheim',
    },
    {
      id: 2,
      seizoen: '2025-2026',
      seizoenWedstrijdNummer: 2,
      datum: new Date('2025-09-22'),
      datumString: '22-09-2025',
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatan: '',
      ventiel: '',
      absoluteRowNumber: 3,
      locatie: 'Sporthal Steinheim',
    },
  ];

  beforeEach(() => {
    mockDataSource = jasmine.createSpyObj('MatchDataSource',
      ['getAll', 'add', 'update', 'updateScore', 'updateTeams']);
    TestBed.configureTestingModule({
      providers: [
        WedstrijdenService,
        { provide: MatchDataSource, useValue: mockDataSource },
      ],
    });
    service = TestBed.inject(WedstrijdenService);
    mockDataSource.getAll.and.returnValue(of(mockMatches));
  });

  it('getGespeeldeWedstrijden filtert op aanwezige scores', (done) => {
    service.getGespeeldeWedstrijden().subscribe(matches => {
      expect(matches.length).toBe(1);
      expect(matches[0].id).toBe(1);
      done();
    });
  });

  it('getToekomstigeWedstrijden filtert op afwezige scores', (done) => {
    service.getToekomstigeWedstrijden().subscribe(matches => {
      expect(matches.length).toBe(1);
      expect(matches[0].id).toBe(2);
      done();
    });
  });

  it('updateScore delegeert naar de data-source en clear de cache', (done) => {
    mockDataSource.updateScore.and.returnValue(of(undefined));
    service.updateScore(1, 4, 1, 'Bob').subscribe(() => {
      expect(mockDataSource.updateScore).toHaveBeenCalledWith(1, 4, 1, 'Bob');
      done();
    });
  });

  it('updateTeams delegeert naar de data-source met optionele voorbeschouwing', (done) => {
    mockDataSource.updateTeams.and.returnValue(of(undefined));
    service.updateTeams(1, 'A,B', 'C,D', 'Handmatig', 'tactiek').subscribe(() => {
      expect(mockDataSource.updateTeams).toHaveBeenCalledWith(1, 'A,B', 'C,D', 'Handmatig', 'tactiek');
      done();
    });
  });

  it('addWedstrijd geeft de uitgevulde match (incl. id) door', (done) => {
    const input: WedstrijdData = {
      seizoen: '2026-2027',
      datum: new Date('2026-08-30'),
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatan: '',
      ventiel: '',
    };
    mockDataSource.add.and.returnValue(of({ ...input, id: 42, datumString: '30-08-2026' }));
    service.addWedstrijd(input).subscribe(result => {
      expect(result.id).toBe(42);
      done();
    });
  });
});
