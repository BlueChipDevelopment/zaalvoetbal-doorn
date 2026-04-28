import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap, catchError, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerService } from './player.service';
import { formatDateISO, getCurrentDateISO } from '../utils/date-utils';
import {
  AttendanceRecord,
  AttendanceStatus,
  MatchAttendanceOverview,
  MatchAttendanceDetails,
  MatchAttendanceDetailsWithPlayerStatus,
  AttendanceFilter,
  AttendanceUpdate,
  AttendancePlayerInfo
} from '../interfaces/IAttendance';
import { PlayerSheetData } from '../interfaces/IPlayerSheet';
import { AttendanceDataSource } from './data-sources/attendance-data-source';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendanceCache$ = new BehaviorSubject<AttendanceRecord[] | null>(null);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 2 * 60 * 1000;

  constructor(
    private dataSource: AttendanceDataSource,
    private playerService: PlayerService
  ) {}

  getAttendanceRecords(filter?: AttendanceFilter): Observable<AttendanceRecord[]> {
    return this.getCachedAttendance().pipe(
      map(records => this.applyFilter(records, filter))
    );
  }

  getAttendanceForDate(date: string): Observable<AttendanceRecord[]> {
    return this.getAttendanceRecords({ date });
  }

  getAttendanceForPlayer(playerName: string): Observable<AttendanceRecord[]> {
    return this.getAttendanceRecords({ playerName });
  }

  getMatchAttendanceOverviews(filter?: AttendanceFilter): Observable<MatchAttendanceOverview[]> {
    return this.getAttendanceRecords(filter).pipe(
      map(records => {
        const dateGroups = this.groupByDate(records);
        return Object.entries(dateGroups).map(([date, dateRecords]) => ({
          date,
          presentCount: dateRecords.filter(r => r.status === 'Ja').length,
          absentCount: dateRecords.filter(r => r.status === 'Nee').length,
          totalResponses: dateRecords.length
        })).sort((a, b) => a.date.localeCompare(b.date));
      })
    );
  }

  getMatchAttendanceDetails(date: string): Observable<MatchAttendanceDetails> {
    return combineLatest([
      this.getAttendanceForDate(date),
      this.playerService.getPlayers()
    ]).pipe(
      map(([attendanceRecords, allPlayers]) => {
        const attendanceMap = new Map<string, AttendanceRecord>();
        attendanceRecords.forEach(record => {
          attendanceMap.set(record.playerName, record);
        });
        const present: AttendancePlayerInfo[] = [];
        const absent: AttendancePlayerInfo[] = [];
        const noResponse: AttendancePlayerInfo[] = [];
        const categorizePlayer = (playerInfo: AttendancePlayerInfo) => {
          switch (playerInfo.status) {
            case 'Ja': present.push(playerInfo); break;
            case 'Nee': absent.push(playerInfo); break;
            case 'Geen Reactie': noResponse.push(playerInfo); break;
          }
        };
        allPlayers.forEach((player: PlayerSheetData) => {
          const attendance = attendanceMap.get(player.name);
          const playerInfo: AttendancePlayerInfo = {
            name: player.name,
            position: player.position,
            status: attendance?.status || (player.actief ? 'Geen Reactie' : undefined),
            playerData: player
          };
          if (playerInfo.status) {
            categorizePlayer(playerInfo);
          }
        });
        attendanceRecords.forEach(record => {
          const playerExists = allPlayers.some(p => p.name === record.playerName);
          if (!playerExists) {
            const playerInfo: AttendancePlayerInfo = {
              name: record.playerName,
              position: '',
              status: record.status,
              playerData: {
                name: record.playerName,
                position: '',
                actief: false,
              } as PlayerSheetData,
            };
            categorizePlayer(playerInfo);
          }
        });
        const sortByName = (a: AttendancePlayerInfo, b: AttendancePlayerInfo) =>
          a.name.localeCompare(b.name);
        return {
          date,
          present: present.sort(sortByName),
          absent: absent.sort(sortByName),
          noResponse: noResponse.sort(sortByName)
        };
      })
    );
  }

  getPlayerAttendanceStatus(playerName: string, date: string): Observable<AttendanceStatus | null> {
    return this.getAttendanceRecords({ playerName: playerName.trim(), date }).pipe(
      map(records => records.length > 0 ? records[0].status : null)
    );
  }

  getMatchAttendanceDetailsWithPlayerStatus(date: string, playerName?: string): Observable<MatchAttendanceDetailsWithPlayerStatus> {
    const normalizedName = playerName?.trim();
    return this.getMatchAttendanceDetails(date).pipe(
      map(details => {
        let playerStatus: AttendanceStatus | null = null;
        if (normalizedName) {
          const allPlayers = [...details.present, ...details.absent, ...details.noResponse];
          const player = allPlayers.find(p => p.name.trim() === normalizedName);
          playerStatus = player?.status || null;
        }
        return { ...details, playerStatus };
      })
    );
  }

  getPresentPlayers(date: string): Observable<AttendancePlayerInfo[]> {
    return this.getMatchAttendanceDetails(date).pipe(
      map(details => details.present)
    );
  }

  setAttendance(update: AttendanceUpdate): Observable<void> {
    const normalizedName = update.playerName.trim();
    const normalizedDate = update.date.trim();
    return this.getAttendanceRecords().pipe(
      switchMap(records => {
        return this.dataSource.upsert({
          date: normalizedDate,
          playerName: normalizedName,
          status: update.status,
        }).pipe(
          tap(() => {
            const existingIndex = records.findIndex(r =>
              r.date === normalizedDate && r.playerName === normalizedName
            );
            const updatedRecords = [...records];
            const newRecord: AttendanceRecord = {
              date: normalizedDate,
              playerName: normalizedName,
              status: update.status,
            };
            if (existingIndex >= 0) {
              updatedRecords[existingIndex] = newRecord;
            } else {
              updatedRecords.push(newRecord);
            }
            this.attendanceCache$.next(updatedRecords);
          })
        );
      })
    );
  }

  getPlayersWithoutResponse(date: string): Observable<AttendancePlayerInfo[]> {
    return this.getMatchAttendanceDetails(date).pipe(
      map(details => details.noResponse)
    );
  }

  refreshCache(): Observable<AttendanceRecord[]> {
    this.attendanceCache$.next(null);
    this.cacheTimestamp = 0;
    return this.getCachedAttendance();
  }

  private getCachedAttendance(): Observable<AttendanceRecord[]> {
    const now = Date.now();
    const cachedData = this.attendanceCache$.value;
    if (cachedData && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return of(cachedData);
    }
    return this.dataSource.getAll().pipe(
      tap(attendance => {
        this.attendanceCache$.next(attendance);
        this.cacheTimestamp = now;
      }),
      shareReplay(1),
      catchError(error => {
        console.error('Error loading attendance data:', error);
        return of([]);
      })
    );
  }

  private applyFilter(records: AttendanceRecord[], filter?: AttendanceFilter): AttendanceRecord[] {
    if (!filter) return records;
    return records.filter(record => {
      if (filter.date && record.date !== filter.date) return false;
      if (filter.fromDate && record.date < filter.fromDate) return false;
      if (filter.toDate && record.date > filter.toDate) return false;
      if (filter.futureOnly) {
        const today = getCurrentDateISO();
        if (record.date <= today) return false;
      }
      if (filter.playerName && record.playerName !== filter.playerName.trim()) return false;
      if (filter.status && record.status !== filter.status) return false;
      return true;
    });
  }

  private groupByDate(records: AttendanceRecord[]): { [date: string]: AttendanceRecord[] } {
    return records.reduce((groups, record) => {
      if (!groups[record.date]) groups[record.date] = [];
      groups[record.date].push(record);
      return groups;
    }, {} as { [date: string]: AttendanceRecord[] });
  }

  formatDate(date: Date): string {
    return formatDateISO(date);
  }
}
