import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AttendanceService } from './attendance.service';
import { AttendanceDataSource } from './data-sources/attendance-data-source';
import { PlayerService } from './player.service';
import { AttendanceRecord, AttendanceStatus } from '../interfaces/IAttendance';

describe('AttendanceService', () => {
  let service: AttendanceService;
  let mockDataSource: jasmine.SpyObj<AttendanceDataSource>;
  let mockPlayerService: jasmine.SpyObj<PlayerService>;

  const mockRecords: AttendanceRecord[] = [
    { date: '2025-08-30', playerName: 'John Doe', status: 'Ja' },
    { date: '2025-08-30', playerName: 'Jane Smith', status: 'Nee' },
    { date: '2025-08-30', playerName: 'Charlie Brown', status: 'Nee' },
    { date: '2025-09-06', playerName: 'John Doe', status: 'Nee' },
  ];

  const mockPlayers = [
    { name: 'John Doe', position: 'Speler', actief: true },
    { name: 'Jane Smith', position: 'Keeper', actief: true },
    { name: 'Charlie Brown', position: 'Speler', actief: true },
    { name: 'Alice Brown', position: 'Speler', actief: true },
  ];

  beforeEach(() => {
    mockDataSource = jasmine.createSpyObj('AttendanceDataSource', ['getAll', 'upsert']);
    mockPlayerService = jasmine.createSpyObj('PlayerService', ['getActivePlayers', 'getPlayers']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AttendanceService,
        { provide: AttendanceDataSource, useValue: mockDataSource },
        { provide: PlayerService, useValue: mockPlayerService },
      ],
    });

    service = TestBed.inject(AttendanceService);
    mockDataSource.getAll.and.returnValue(of(mockRecords));
    mockPlayerService.getActivePlayers.and.returnValue(of(mockPlayers));
    mockPlayerService.getPlayers.and.returnValue(of(mockPlayers));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse attendance data correctly', (done: DoneFn) => {
    service.getAttendanceRecords().subscribe(records => {
      expect(records.length).toBe(4);
      expect(records[0]).toEqual({
        date: '2025-08-30',
        playerName: 'John Doe',
        status: 'Ja' as AttendanceStatus,
      });
      done();
    });
  });

  it('should get attendance for specific date', (done: DoneFn) => {
    service.getAttendanceForDate('2025-08-30').subscribe(records => {
      expect(records.length).toBe(3);
      expect(records.every(r => r.date === '2025-08-30')).toBe(true);
      done();
    });
  });

  it('should get attendance for specific player', (done: DoneFn) => {
    service.getAttendanceForPlayer('John Doe').subscribe(records => {
      expect(records.length).toBe(2);
      expect(records.every(r => r.playerName === 'John Doe')).toBe(true);
      done();
    });
  });

  it('should get player attendance status', (done: DoneFn) => {
    service.getPlayerAttendanceStatus('John Doe', '2025-08-30').subscribe(status => {
      expect(status).toBe('Ja');
      done();
    });
  });

  it('should return null for non-existing attendance status', (done: DoneFn) => {
    service.getPlayerAttendanceStatus('Non-Existing Player', '2025-08-30').subscribe(status => {
      expect(status).toBe(null);
      done();
    });
  });

  it('should get match attendance details with correct categorization', (done: DoneFn) => {
    service.getMatchAttendanceDetails('2025-08-30').subscribe(details => {
      expect(details.date).toBe('2025-08-30');
      expect(details.present.length).toBe(1);
      expect(details.absent.length).toBe(2); // Now Charlie Brown is also absent
      expect(details.noResponse.length).toBe(1); // Alice Brown has no response

      expect(details.present[0].name).toBe('John Doe');
      expect(details.absent.find(p => p.name === 'Jane Smith')).toBeTruthy();
      expect(details.absent.find(p => p.name === 'Charlie Brown')).toBeTruthy();
      expect(details.noResponse[0].name).toBe('Alice Brown');

      done();
    });
  });

  it('should get present players for date', (done: DoneFn) => {
    service.getPresentPlayers('2025-08-30').subscribe(players => {
      expect(players.length).toBe(1);
      expect(players[0].name).toBe('John Doe');
      expect(players[0].status).toBe('Ja');
      done();
    });
  });

  it('should format date correctly', () => {
    const testDate = new Date('2025-08-30T10:00:00');
    const formatted = service.formatDate(testDate);
    expect(formatted).toBe('2025-08-30');
  });

  it('should set attendance for new player', (done: DoneFn) => {
    mockDataSource.upsert.and.returnValue(of(undefined));

    service.setAttendance({
      date: '2025-09-13',
      playerName: 'New Player',
      status: 'Ja'
    }).subscribe(() => {
      expect(mockDataSource.upsert).toHaveBeenCalledWith({
        date: '2025-09-13',
        playerName: 'New Player',
        status: 'Ja'
      });
      done();
    });
  });

  it('should update existing attendance', (done: DoneFn) => {
    mockDataSource.upsert.and.returnValue(of(undefined));

    service.setAttendance({
      date: '2025-08-30',
      playerName: 'John Doe',
      status: 'Nee'
    }).subscribe(() => {
      expect(mockDataSource.upsert).toHaveBeenCalledWith({
        date: '2025-08-30',
        playerName: 'John Doe',
        status: 'Nee'
      });
      done();
    });
  });

  it('should handle empty sheet data', (done: DoneFn) => {
    mockDataSource.getAll.and.returnValue(of([]));

    service.getAttendanceRecords().subscribe(records => {
      expect(records.length).toBe(0);
      done();
    });
  });

  it('should filter attendance records correctly', (done: DoneFn) => {
    service.getAttendanceRecords({
      status: 'Ja',
      futureOnly: false
    }).subscribe(records => {
      expect(records.length).toBe(1);
      expect(records[0].status).toBe('Ja');
      expect(records[0].playerName).toBe('John Doe');
      done();
    });
  });
});
