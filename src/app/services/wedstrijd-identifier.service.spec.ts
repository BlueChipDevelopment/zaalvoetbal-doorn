import { TestBed } from '@angular/core/testing';
import { WedstrijdIdentifierService } from './wedstrijd-identifier.service';
import { WedstrijdData } from '../interfaces/IWedstrijd';

describe('WedstrijdIdentifierService', () => {
  let service: WedstrijdIdentifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WedstrijdIdentifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate unique ID correctly', () => {
    const uniqueId = service.generateUniqueId('2024-2025', 5);
    expect(uniqueId).toBe('2024-2025-005');
  });

  it('should return null for invalid seizoen', () => {
    const uniqueId = service.generateUniqueId(null, 5);
    expect(uniqueId).toBeNull();
  });

  it('should parse unique ID correctly', () => {
    const parsed = service.parseUniqueId('2024-2025-005');
    expect(parsed).toEqual({
      seizoen: '2024-2025',
      wedstrijdNummer: 5
    });
  });

  it('should return null for invalid unique ID', () => {
    const parsed = service.parseUniqueId('invalid-id');
    expect(parsed).toBeNull();
  });

  it('should correctly identify same wedstrijd with seizoen', () => {
    const wedstrijd1: WedstrijdData = {
      id: 1,
      seizoen: '2024-2025',
      datum: new Date(2024, 8, 1),
      teamWit: [],
      teamRood: [],
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null
    };

    const wedstrijd2: WedstrijdData = {
      id: 1,
      seizoen: '2024-2025',
      datum: new Date(2024, 8, 1),
      teamWit: [],
      teamRood: [],
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null
    };

    expect(service.isSameWedstrijd(wedstrijd1, wedstrijd2)).toBe(true);
  });

  it('should correctly identify different wedstrijd', () => {
    const wedstrijd1: WedstrijdData = {
      id: 1,
      seizoen: '2024-2025',
      datum: new Date(2024, 8, 1),
      teamWit: [],
      teamRood: [],
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null
    };

    const wedstrijd2: WedstrijdData = {
      id: 2,
      seizoen: '2024-2025',
      datum: new Date(2024, 8, 8),
      teamWit: [],
      teamRood: [],
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null
    };

    expect(service.isSameWedstrijd(wedstrijd1, wedstrijd2)).toBe(false);
  });

  it('should generate display name correctly', () => {
    const wedstrijd: WedstrijdData = {
      id: 5,
      seizoen: '2024-2025',
      seizoenWedstrijdNummer: 5,
      datum: new Date(2024, 8, 1),
      teamWit: [],
      teamRood: [],
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null
    };

    expect(service.getWedstrijdDisplayName(wedstrijd)).toBe('2024-2025 Wedstrijd #5');
  });

  it('should validate safe to update correctly', () => {
    const safeWedstrijd: WedstrijdData = {
      id: 1,
      seizoen: '2024-2025',
      datum: new Date(2024, 8, 1),
      teamWit: [],
      teamRood: [],
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null
    };

    const unsafeWedstrijd: WedstrijdData = {
      id: 1,
      seizoen: null,
      datum: new Date(2024, 8, 1),
      teamWit: [],
      teamRood: [],
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null
    };

    expect(service.isSafeToUpdate(safeWedstrijd)).toBe(true);
    expect(service.isSafeToUpdate(unsafeWedstrijd)).toBe(false);
  });
});
