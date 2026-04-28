import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsNotificationDataSource } from './notification-data-source.sheets';

describe('SheetsNotificationDataSource', () => {
  let dataSource: SheetsNotificationDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService',
      ['getSheetData', 'appendSheetRow', 'updateSheetRow']);
    TestBed.configureTestingModule({
      providers: [
        SheetsNotificationDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsNotificationDataSource);
  });

  it('getAllSubscriptions mapt rijen naar PushSubscriptionRecord', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Endpoint', 'p256dh', 'auth', 'UA', 'Timestamp', 'Active', 'PlayerName'],
      ['https://push/1', 'p1', 'a1', 'Chrome', '2026-01-01', 'true', 'Bob'],
      ['https://push/2', 'p2', 'a2', 'Firefox', '2026-01-02', 'false', 'Alice'],
    ]));

    const subs = await lastValueFrom(dataSource.getAllSubscriptions());

    expect(subs.length).toBe(2);
    expect(subs[0].endpoint).toBe('https://push/1');
    expect(subs[0].active).toBeTrue();
    expect(subs[1].active).toBeFalse();
    expect(subs[1].playerName).toBe('Alice');
  });

  it('addSubscription appendt de juiste rij', async () => {
    sheets.appendSheetRow.and.returnValue(of({ updates: { updatedRows: 1 } } as any));

    await lastValueFrom(dataSource.addSubscription({
      endpoint: 'https://push/3', keysP256dh: 'p3', keysAuth: 'a3',
      userAgent: 'UA', timestamp: '2026-01-03', active: true, playerName: 'Carl',
    }));

    expect(sheets.appendSheetRow).toHaveBeenCalledWith('Notificaties',
      ['https://push/3', 'p3', 'a3', 'UA', '2026-01-03', true, 'Carl']);
  });

  it('deactivateSubscription zoekt rij op endpoint en zet active=false', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Endpoint', 'p256dh', 'auth', 'UA', 'Timestamp', 'Active', 'PlayerName'],
      ['https://push/1', 'p1', 'a1', 'Chrome', '2026-01-01', 'true', 'Bob'],
    ]));
    sheets.updateSheetRow.and.returnValue(of({ updatedRows: 1 } as any));

    await lastValueFrom(dataSource.deactivateSubscription('https://push/1'));

    // Bob is array-index 1, dus sheet-rij 2; active-kolom (index 5) op false
    expect(sheets.updateSheetRow).toHaveBeenCalled();
    const args = sheets.updateSheetRow.calls.mostRecent().args;
    expect(args[0]).toBe('Notificaties');
    expect(args[1]).toBe(2);
    expect(args[2][5]).toBeFalse();
  });

  it('deactivateSubscription doet niks als endpoint niet bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Endpoint', 'p256dh', 'auth', 'UA', 'Timestamp', 'Active', 'PlayerName'],
    ]));
    await lastValueFrom(dataSource.deactivateSubscription('https://nope'));
    expect(sheets.updateSheetRow).not.toHaveBeenCalled();
  });
});
