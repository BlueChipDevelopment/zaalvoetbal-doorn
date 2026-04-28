import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsMatchDataSource } from './match-data-source.sheets';

describe('SheetsMatchDataSource', () => {
  let dataSource: SheetsMatchDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService',
      ['getSheetData', 'appendSheetRow', 'updateSheetRow', 'batchUpdateSheet']);
    TestBed.configureTestingModule({
      providers: [
        SheetsMatchDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsMatchDataSource);
  });

  it('getAll mapt rauwe rijen en berekent seizoenWedstrijdNummer', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Automatisch', 3, 2, 'Bob', ''],
      [2, '2025-2026', '22-09-2025', 'Wit', 'Rood', 'Automatisch', '', '', '', ''],
    ]));

    const matches = await lastValueFrom(dataSource.getAll());

    expect(matches.length).toBe(2);
    expect(matches[0].id).toBe(1);
    expect(matches[0].seizoen).toBe('2025-2026');
    expect(matches[0].seizoenWedstrijdNummer).toBe(1);
    expect(matches[0].scoreWit).toBe(3);
    expect(matches[1].seizoenWedstrijdNummer).toBe(2);
    expect(matches[1].scoreWit).toBeNull();
  });

  it('updateScore schrijft G:I (scores + zlatan) via batchUpdateSheet', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Automatisch', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({ totalUpdatedCells: 3 } as any));

    await lastValueFrom(dataSource.updateScore(1, 4, 2, 'Bob'));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg.length).toBe(1);
    // ID=1 zit op array-index 1, sheet-rij 2
    expect(arg[0].range).toBe('Wedstrijden!G2:I2');
    expect(arg[0].values).toEqual([[4, 2, 'Bob']]);
  });

  it('updateScore gooit error als match-id niet bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Automatisch', '', '', '', ''],
    ]));

    await expectAsync(lastValueFrom(dataSource.updateScore(999, 1, 0, '')))
      .toBeRejectedWithError(/999/);
  });

  it('updateTeams schrijft D:F en optioneel K via batchUpdateSheet', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({ totalUpdatedCells: 4 } as any));

    await lastValueFrom(dataSource.updateTeams(1, 'Alice,Bob', 'Carl,Dan', 'Handmatig', 'Een tactische analyse'));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg.length).toBe(2);
    expect(arg[0].range).toBe('Wedstrijden!D2:F2');
    expect(arg[0].values).toEqual([['Alice,Bob', 'Carl,Dan', 'Handmatig']]);
    expect(arg[1].range).toBe('Wedstrijden!K2');
    expect(arg[1].values).toEqual([['Een tactische analyse']]);
  });

  it('add berekent next-id en returnt match incl. id en datumString', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [5, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Automatisch', 3, 2, 'Bob', ''],
    ]));
    sheets.appendSheetRow.and.returnValue(of({ updatedRange: 'Wedstrijden!A3' } as any));

    const input: any = {
      seizoen: '2026-2027',
      datum: new Date(2026, 7, 30), // 30-08-2026 (month is 0-based)
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatan: '',
      ventiel: '',
    };

    const result = await lastValueFrom(dataSource.add(input));

    expect(result.id).toBe(6);
    expect(result.datumString).toBe('30-08-2026');
    const args = sheets.appendSheetRow.calls.mostRecent().args;
    expect(args[0]).toBe('Wedstrijden');
    const row = args[1] as any[];
    expect(row.length).toBe(10);
    expect(row[0]).toBe(6);
    expect(row[2]).toBe('30-08-2026');
  });

  it('update gooit error als absoluteRowNumber ontbreekt', async () => {
    const match: any = {
      id: 1,
      seizoen: '2025-2026',
      datum: new Date('2025-09-15'),
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Automatisch',
      scoreWit: 3,
      scoreRood: 2,
      zlatan: '',
      ventiel: '',
    };

    await expectAsync(lastValueFrom(dataSource.update(match)))
      .toBeRejectedWithError(/absoluteRowNumber/);
  });

  it('update schrijft 10-koloms-rij naar het opgegeven absoluteRowNumber', async () => {
    sheets.updateSheetRow.and.returnValue(of({ updatedCells: 10 } as any));

    const match: any = {
      id: 7,
      seizoen: '2025-2026',
      datum: new Date(2025, 8, 15), // 15-09-2025
      teamWit: 'Wit',
      teamRood: 'Rood',
      teamGeneratie: 'Handmatig',
      scoreWit: 4,
      scoreRood: 1,
      zlatan: 'Bob',
      ventiel: 'Carl',
      absoluteRowNumber: 5,
    };

    await lastValueFrom(dataSource.update(match));

    const args = sheets.updateSheetRow.calls.mostRecent().args;
    expect(args[0]).toBe('Wedstrijden');
    expect(args[1]).toBe(5);
    const row = args[2] as any[];
    expect(row.length).toBe(10);
    expect(row).toEqual([7, '2025-2026', '15-09-2025', 'Wit', 'Rood', 'Handmatig', 4, 1, 'Bob', 'Carl']);
  });

  it('updateTeams zonder voorbeschouwing schrijft alleen D:F', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({ totalUpdatedCells: 3 } as any));

    await lastValueFrom(dataSource.updateTeams(1, 'A', 'B', 'Automatisch'));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg.length).toBe(1);
    expect(arg[0].range).toBe('Wedstrijden!D2:F2');
  });
});
