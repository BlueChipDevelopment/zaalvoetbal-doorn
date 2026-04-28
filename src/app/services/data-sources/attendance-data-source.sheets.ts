import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import {
  AttendanceRecord,
  AttendanceStatus,
  AttendanceUpdate,
} from '../../interfaces/IAttendance';
import { AANWEZIGHEID_COLUMNS, SHEET_NAMES } from '../../constants/sheet-columns';
import { AttendanceDataSource } from './attendance-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsAttendanceDataSource extends AttendanceDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAll(): Observable<AttendanceRecord[]> {
    return this.sheets.getSheetData(SHEET_NAMES.AANWEZIGHEID).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  upsert(record: AttendanceUpdate): Observable<void> {
    const date = record.date.trim();
    const name = record.playerName.trim();
    const rowData = [date, name, record.status];

    return this.sheets.getSheetData(SHEET_NAMES.AANWEZIGHEID).pipe(
      switchMap(rows => {
        let foundIndex = -1;
        for (let i = 1; i < rows.length; i++) {
          const r = rows[i];
          const rDate = (r?.[AANWEZIGHEID_COLUMNS.DATE] ?? '').toString().trim();
          const rName = (r?.[AANWEZIGHEID_COLUMNS.PLAYER_NAME] ?? '').toString().trim();
          if (rDate === date && rName === name) {
            foundIndex = i;
            break;
          }
        }
        if (foundIndex >= 0) {
          const sheetRow = foundIndex + 1; // 1-based
          return this.sheets.updateSheetRow(SHEET_NAMES.AANWEZIGHEID, sheetRow, rowData)
            .pipe(map(() => undefined));
        }
        return this.sheets.appendSheetRow(SHEET_NAMES.AANWEZIGHEID, rowData)
          .pipe(map(() => undefined));
      }),
    );
  }

  private transformRows(rawData: any[][]): AttendanceRecord[] {
    if (!rawData || rawData.length <= 1) return [];
    return rawData
      .slice(1)
      .filter(row =>
        row && row.length >= 3
        && row[AANWEZIGHEID_COLUMNS.DATE]
        && row[AANWEZIGHEID_COLUMNS.PLAYER_NAME]
        && row[AANWEZIGHEID_COLUMNS.STATUS])
      .map(row => ({
        date: row[AANWEZIGHEID_COLUMNS.DATE].toString().trim(),
        playerName: row[AANWEZIGHEID_COLUMNS.PLAYER_NAME].toString().trim(),
        status: row[AANWEZIGHEID_COLUMNS.STATUS] as AttendanceStatus,
        timestamp: row[AANWEZIGHEID_COLUMNS.TIMESTAMP]
          ? row[AANWEZIGHEID_COLUMNS.TIMESTAMP].toString()
          : undefined,
      }));
  }
}
