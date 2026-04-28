import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import { NOTIFICATIES_COLUMNS, SHEET_NAMES } from '../../constants/sheet-columns';
import { PushSubscriptionRecord } from '../../interfaces/IPushSubscription';
import { NotificationDataSource } from './notification-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsNotificationDataSource extends NotificationDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAllSubscriptions(): Observable<PushSubscriptionRecord[]> {
    return this.sheets.getSheetData(SHEET_NAMES.NOTIFICATIES).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  addSubscription(record: PushSubscriptionRecord): Observable<void> {
    const row = [
      record.endpoint,
      record.keysP256dh,
      record.keysAuth,
      record.userAgent,
      record.timestamp,
      record.active,
      record.playerName,
    ];
    return this.sheets.appendSheetRow(SHEET_NAMES.NOTIFICATIES, row).pipe(map(() => undefined));
  }

  deactivateSubscription(endpoint: string): Observable<void> {
    return this.sheets.getSheetData(SHEET_NAMES.NOTIFICATIES).pipe(
      switchMap(rows => {
        let foundIndex = -1;
        for (let i = 1; i < rows.length; i++) {
          if (rows[i]?.[NOTIFICATIES_COLUMNS.ENDPOINT] === endpoint) {
            foundIndex = i;
            break;
          }
        }
        if (foundIndex === -1) {
          console.warn('Could not find subscription to deactivate:', endpoint);
          return of(undefined);
        }
        const sheetRow = foundIndex + 1;
        const original = rows[foundIndex];
        const updated = [...original];
        updated[NOTIFICATIES_COLUMNS.ACTIVE] = false;
        return this.sheets.updateSheetRow(SHEET_NAMES.NOTIFICATIES, sheetRow, updated)
          .pipe(map(() => undefined));
      }),
    );
  }

  private transformRows(rawData: any[][]): PushSubscriptionRecord[] {
    if (!rawData || rawData.length <= 1) return [];
    return rawData.slice(1)
      .filter(row => row && row[NOTIFICATIES_COLUMNS.ENDPOINT])
      .map(row => ({
        endpoint: row[NOTIFICATIES_COLUMNS.ENDPOINT],
        keysP256dh: row[NOTIFICATIES_COLUMNS.P256DH] ?? '',
        keysAuth: row[NOTIFICATIES_COLUMNS.AUTH] ?? '',
        userAgent: (row[NOTIFICATIES_COLUMNS.USER_AGENT] ?? '').toString(),
        timestamp: (row[NOTIFICATIES_COLUMNS.TIMESTAMP] ?? '').toString(),
        active: this.parseBoolean(row[NOTIFICATIES_COLUMNS.ACTIVE]),
        playerName: (row[NOTIFICATIES_COLUMNS.PLAYER_NAME] ?? '').toString().trim(),
      }));
  }

  private parseBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      return value === 'true' || value === 'TRUE';
    }
    return false;
  }
}
