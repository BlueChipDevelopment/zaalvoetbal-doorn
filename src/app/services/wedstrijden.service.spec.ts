import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { WedstrijdenService } from './wedstrijden.service';
import { MatchDataSource } from './data-sources/match-data-source';
import { StrippenkaartDataSource } from './data-sources/strippenkaart-data-source';
import { WedstrijdData } from '../interfaces/IWedstrijd';

describe('WedstrijdenService', () => {
  let service: WedstrijdenService;
  let mockDataSource: jasmine.SpyObj<MatchDataSource>;
  let strippenkaartDsSpy: jasmine.SpyObj<StrippenkaartDataSource>;

  const mockMatches: WedstrijdData[] = [
    {
      id: 1,
      seizoen: '2025-2026',
      seizoenWedstrijdNummer: 1,
      datum: new Date('2025-09-15'),
      datumString: '15-09-2025',
      teamWit: [1, 2],
      teamRood: [3, 4],
      teamGeneratie: 'Automatisch',
      scoreWit: 3,
      scoreRood: 2,
      zlatanPlayerId: 2,
      ventielPlayerId: null,
      locatie: 'Sporthal Steinheim',
    },
    {
      id: 2,
      seizoen: '2025-2026',
      seizoenWedstrijdNummer: 2,
      datum: new Date('2025-09-22'),
      datumString: '22-09-2025',
      teamWit: [1, 2],
      teamRood: [3, 4],
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null,
      locatie: 'Sporthal Steinheim',
    },
  ];

  beforeEach(() => {
    mockDataSource = jasmine.createSpyObj('MatchDataSource',
      ['getAll', 'add', 'update', 'delete', 'updateScore', 'updateTeams']);
    strippenkaartDsSpy = jasmine.createSpyObj<StrippenkaartDataSource>('StrippenkaartDataSource',
      ['getAllTransactions', 'addTransaction', 'getSubscriptions', 'setSubscription', 'applyMatchDeductions']);
    strippenkaartDsSpy.applyMatchDeductions.and.returnValue(of(undefined));
    TestBed.configureTestingModule({
      providers: [
        WedstrijdenService,
        { provide: MatchDataSource, useValue: mockDataSource },
        { provide: StrippenkaartDataSource, useValue: strippenkaartDsSpy },
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

  it('updateScore delegeert naar de data-source met playerId', (done) => {
    mockDataSource.updateScore.and.returnValue(of(undefined));
    service.updateScore(1, 4, 1, 2).subscribe(() => {
      expect(mockDataSource.updateScore).toHaveBeenCalledWith(1, 4, 1, 2);
      done();
    });
  });

  it('updateScore triggert applyMatchDeductions ná de score-write', (done) => {
    mockDataSource.updateScore.and.returnValue(of(undefined));
    service.updateScore(7, 4, 1, 2).subscribe(() => {
      expect(mockDataSource.updateScore).toHaveBeenCalledWith(7, 4, 1, 2);
      expect(strippenkaartDsSpy.applyMatchDeductions).toHaveBeenCalledWith(7);
      done();
    });
  });

  it('updateTeams delegeert naar de data-source met id-arrays', (done) => {
    mockDataSource.updateTeams.and.returnValue(of(undefined));
    service.updateTeams(1, [1, 2], [3, 4], 'Handmatig', 'tactiek').subscribe(() => {
      expect(mockDataSource.updateTeams).toHaveBeenCalledWith(1, [1, 2], [3, 4], 'Handmatig', 'tactiek');
      done();
    });
  });

  it('deleteWedstrijd delegeert naar de data-source en invalideert de cache', (done) => {
    mockDataSource.delete.and.returnValue(of(undefined));
    service.deleteWedstrijd(2).subscribe(() => {
      expect(mockDataSource.delete).toHaveBeenCalledWith(2);
      done();
    });
  });

  it('addWedstrijd geeft de uitgevulde match (incl. id) door', (done) => {
    const input: WedstrijdData = {
      seizoen: '2026-2027',
      datum: new Date('2026-08-30'),
      teamWit: [1],
      teamRood: [2],
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null,
    };
    mockDataSource.add.and.returnValue(of({ ...input, id: 42, datumString: '30-08-2026' }));
    service.addWedstrijd(input).subscribe(result => {
      expect(result.id).toBe(42);
      done();
    });
  });

  describe('strippenkaart-aftrek via wedstrijdbeheer', () => {
    const gespeeld: WedstrijdData = {
      id: 106,
      seizoen: '2026-2027',
      datum: new Date(2026, 10, 23),
      teamWit: [4],
      teamRood: [8],
      teamGeneratie: 'Handmatig',
      scoreWit: 13,
      scoreRood: 10,
      zlatanPlayerId: null,
      ventielPlayerId: null,
    };

    beforeEach(() => {
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date(2026, 10, 24));
      mockDataSource.update.and.returnValue(of(undefined));
    });

    afterEach(() => jasmine.clock().uninstall());

    it('updateWedstrijd schrijft strippen af ná de write als de uitslag is ingevuld', (done) => {
      service.updateWedstrijd(gespeeld).subscribe(() => {
        expect(strippenkaartDsSpy.applyMatchDeductions).toHaveBeenCalledOnceWith(106);
        expect(mockDataSource.update).toHaveBeenCalledBefore(strippenkaartDsSpy.applyMatchDeductions);
        done();
      });
    });

    it('updateWedstrijd schrijft ook af bij een 0-0', (done) => {
      service.updateWedstrijd({ ...gespeeld, scoreWit: 0, scoreRood: 0 }).subscribe(() => {
        expect(strippenkaartDsSpy.applyMatchDeductions).toHaveBeenCalledOnceWith(106);
        done();
      });
    });

    it('updateWedstrijd schrijft niets af zolang de uitslag niet compleet is', (done) => {
      service.updateWedstrijd({ ...gespeeld, scoreRood: null }).subscribe(() => {
        expect(strippenkaartDsSpy.applyMatchDeductions).not.toHaveBeenCalled();
        done();
      });
    });

    it('updateWedstrijd laat strippen van een afgesloten seizoen ongemoeid', (done) => {
      service.updateWedstrijd({ ...gespeeld, datum: new Date(2026, 6, 31) }).subscribe(() => {
        expect(strippenkaartDsSpy.applyMatchDeductions).not.toHaveBeenCalled();
        done();
      });
    });

    it('updateWedstrijd rekent augustus t/m juli als één seizoen', (done) => {
      jasmine.clock().mockDate(new Date(2027, 6, 31));
      service.updateWedstrijd({ ...gespeeld, datum: new Date(2026, 7, 1) }).subscribe(() => {
        expect(strippenkaartDsSpy.applyMatchDeductions).toHaveBeenCalledOnceWith(106);
        done();
      });
    });

    it('updateWedstrijd geeft een mislukte aftrek door als fout', (done) => {
      strippenkaartDsSpy.applyMatchDeductions.and.returnValue(throwError(() => new Error('aftrek mislukt')));
      service.updateWedstrijd(gespeeld).subscribe({
        next: () => done.fail('had een fout moeten geven'),
        error: (e: Error) => {
          expect(e.message).toBe('aftrek mislukt');
          done();
        },
      });
    });

    it('addWedstrijd schrijft strippen af met het nieuwe id als de uitslag al is ingevuld', (done) => {
      const nieuw: WedstrijdData = { ...gespeeld, id: undefined };
      mockDataSource.add.and.returnValue(of({ ...nieuw, id: 200 }));
      service.addWedstrijd(nieuw).subscribe(result => {
        expect(result.id).toBe(200);
        expect(strippenkaartDsSpy.applyMatchDeductions).toHaveBeenCalledOnceWith(200);
        done();
      });
    });

    it('addWedstrijd schrijft niets af voor een nog te spelen wedstrijd', (done) => {
      const nieuw: WedstrijdData = { ...gespeeld, scoreWit: null, scoreRood: null };
      mockDataSource.add.and.returnValue(of(nieuw));
      service.addWedstrijd(nieuw).subscribe(() => {
        expect(strippenkaartDsSpy.applyMatchDeductions).not.toHaveBeenCalled();
        done();
      });
    });
  });
});
