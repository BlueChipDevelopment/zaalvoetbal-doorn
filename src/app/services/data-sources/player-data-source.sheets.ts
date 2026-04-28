import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';
import { SPELER_COLUMNS, SHEET_NAMES } from '../../constants/sheet-columns';
import { PlayerDataSource } from './player-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsPlayerDataSource extends PlayerDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAll(): Observable<PlayerSheetData[]> {
    return this.sheets.getSheetData(SHEET_NAMES.SPELERS).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  add(player: PlayerSheetData): Observable<void> {
    const row = [player.name, player.position, player.actief ? 'Ja' : 'Nee'];
    return this.sheets.appendSheetRow(SHEET_NAMES.SPELERS, row).pipe(map(() => undefined));
  }

  update(nameOrId: string | number, player: PlayerSheetData): Observable<void> {
    return this.sheets.getSheetData(SHEET_NAMES.SPELERS).pipe(
      switchMap(rows => {
        let foundRowIndex = -1;
        for (let i = 1; i < rows.length; i++) {
          if (typeof nameOrId === 'string') {
            const cell = rows[i]?.[SPELER_COLUMNS.NAME];
            if (typeof cell === 'string' && cell.toLowerCase().trim() === nameOrId.toLowerCase().trim()) {
              foundRowIndex = i;
              break;
            }
          } else {
            // id = i (1-based dataRow-index = array-index omdat we vanaf i=1 starten,
            // header op index 0 overgeslagen)
            if (i === nameOrId) {
              foundRowIndex = i;
              break;
            }
          }
        }
        if (foundRowIndex === -1) {
          return throwError(() => new Error(`Player not found in sheet: ${nameOrId}`));
        }
        const updatedRow = [player.name, player.position, player.actief ? 'Ja' : 'Nee'];
        const sheetRowNumber = foundRowIndex + 1;
        return this.sheets.updateSheetRow(SHEET_NAMES.SPELERS, sheetRowNumber, updatedRow).pipe(map(() => undefined));
      }),
    );
  }

  private transformRows(rows: any[][]): PlayerSheetData[] {
    if (!rows || rows.length <= 1) {
      return [];
    }
    return rows.slice(1)
      .map((row, idx) => ({ row, dataRowIndex: idx + 1 })) // 1-based, header overgeslagen
      .filter(({ row }) => row && row[SPELER_COLUMNS.NAME])
      .map(({ row, dataRowIndex }) => ({
        id: dataRowIndex,
        name: this.sanitize(row[SPELER_COLUMNS.NAME]),
        position: this.sanitize(row[SPELER_COLUMNS.POSITION]) || '',
        actief: this.parseBoolean(row[SPELER_COLUMNS.ACTIEF]),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private sanitize(value: any): string {
    if (value === null || value === undefined) return '';
    return String(value).trim();
  }

  private parseBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      const v = value.toLowerCase().trim();
      return v === 'ja' || v === 'true' || v === '1';
    }
    if (typeof value === 'number') return value === 1;
    return false;
  }
}
