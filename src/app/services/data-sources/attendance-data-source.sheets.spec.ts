import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsAttendanceDataSource } from './attendance-data-source.sheets';

describe('SheetsAttendanceDataSource', () => {
  let dataSource: SheetsAttendanceDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService',
      ['getSheetData', 'appendSheetRow', 'updateSheetRow']);
    TestBed.configureTestingModule({
      providers: [
        SheetsAttendanceDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsAttendanceDataSource);
  });

  it('getAll mapt rauwe rijen naar AttendanceRecord en trimt namen', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Datum', 'Speler', 'Status'],
      ['2026-09-15', 'Bob ', 'Ja'],
      ['2026-09-15', 'Alice', 'Nee'],
    ]));

    const records = await lastValueFrom(dataSource.getAll());

    expect(records.length).toBe(2);
    expect(records[0].playerName).toBe('Bob');
    expect(records[0].status).toBe('Ja');
  });

  it('upsert appendt een nieuwe rij wanneer record nog niet bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([['Datum', 'Speler', 'Status']]));
    sheets.appendSheetRow.and.returnValue(of({ updates: { updatedRows: 1 } } as any));

    await lastValueFrom(dataSource.upsert({ date: '2026-09-15', playerName: 'Bob', status: 'Ja' }));

    expect(sheets.appendSheetRow).toHaveBeenCalledWith('Aanwezigheid', ['2026-09-15', 'Bob', 'Ja']);
    expect(sheets.updateSheetRow).not.toHaveBeenCalled();
  });

  it('upsert update bestaande rij wanneer (datum, naam) al bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Datum', 'Speler', 'Status'],
      ['2026-09-15', 'Bob', 'Ja'],
    ]));
    sheets.updateSheetRow.and.returnValue(of({ updatedRows: 1 } as any));

    await lastValueFrom(dataSource.upsert({ date: '2026-09-15', playerName: 'Bob', status: 'Nee' }));

    // Bob is array-index 1, dus sheet-rij 2
    expect(sheets.updateSheetRow).toHaveBeenCalledWith('Aanwezigheid', 2, ['2026-09-15', 'Bob', 'Nee']);
    expect(sheets.appendSheetRow).not.toHaveBeenCalled();
  });
});
