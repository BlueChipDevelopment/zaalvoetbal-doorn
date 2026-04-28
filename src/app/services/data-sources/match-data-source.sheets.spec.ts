import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsMatchDataSource } from './match-data-source.sheets';
import { PlayerDataSource } from './player-data-source';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';

describe('SheetsMatchDataSource', () => {
  let dataSource: SheetsMatchDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;
  let players: jasmine.SpyObj<PlayerDataSource>;

  const mockPlayers: PlayerSheetData[] = [
    { id: 1, name: 'Alice', position: 'Speler', actief: true },
    { id: 2, name: 'Bob', position: 'Speler', actief: true },
    { id: 3, name: 'Carl', position: 'Speler', actief: true },
    { id: 4, name: 'Dan', position: 'Keeper', actief: true },
  ];

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService',
      ['getSheetData', 'appendSheetRow', 'updateSheetRow', 'batchUpdateSheet']);
    players = jasmine.createSpyObj('PlayerDataSource', ['getAll', 'add', 'update']);
    players.getAll.and.returnValue(of(mockPlayers));
    TestBed.configureTestingModule({
      providers: [
        SheetsMatchDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
        { provide: PlayerDataSource, useValue: players },
      ],
    });
    dataSource = TestBed.inject(SheetsMatchDataSource);
  });

  it('getAll mapt namen naar player-ids', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', 'Alice,Bob', 'Carl,Dan', 'Automatisch', 3, 2, 'Bob', 'Carl'],
    ]));

    const matches = await lastValueFrom(dataSource.getAll());

    expect(matches.length).toBe(1);
    expect(matches[0].teamWit).toEqual([1, 2]);
    expect(matches[0].teamRood).toEqual([3, 4]);
    expect(matches[0].zlatanPlayerId).toBe(2);
    expect(matches[0].ventielPlayerId).toBe(3);
    expect(matches[0].seizoenWedstrijdNummer).toBe(1);
  });

  it('updateScore vertaalt zlatanPlayerId naar naam in sheet-write', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({} as any));

    await lastValueFrom(dataSource.updateScore(1, 4, 2, 2));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg[0].range).toBe('Wedstrijden!G2:I2');
    expect(arg[0].values).toEqual([[4, 2, 'Bob']]);
  });

  it('updateScore met null zlatan schrijft lege string', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({} as any));

    await lastValueFrom(dataSource.updateScore(1, 4, 2, null));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg[0].values).toEqual([[4, 2, '']]);
  });

  it('updateTeams vertaalt id-arrays naar comma-separated namen', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    sheets.batchUpdateSheet.and.returnValue(of({} as any));

    await lastValueFrom(dataSource.updateTeams(1, [1, 2], [3, 4], 'Handmatig', 'tactiek'));

    const arg = sheets.batchUpdateSheet.calls.mostRecent().args[0];
    expect(arg[0].range).toBe('Wedstrijden!D2:F2');
    expect(arg[0].values).toEqual([['Alice,Bob', 'Carl,Dan', 'Handmatig']]);
    expect(arg[1].range).toBe('Wedstrijden!K2');
    expect(arg[1].values).toEqual([['tactiek']]);
  });

  it('updateScore gooit error als match-id niet bestaat', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [1, '2025-2026', '15-09-2025', '', '', '', '', '', '', ''],
    ]));
    await expectAsync(lastValueFrom(dataSource.updateScore(999, 1, 0, null)))
      .toBeRejectedWithError(/999/);
  });

  it('add berekent next-id en returnt match incl. id en datumString', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['ID', 'Seizoen', 'Datum', 'TeamWit', 'TeamRood', 'Generatie', 'ScoreWit', 'ScoreRood', 'Zlatan', 'Ventiel'],
      [5, '2025-2026', '15-09-2025', 'Alice', 'Bob', 'Automatisch', '', '', '', ''],
    ]));
    sheets.appendSheetRow.and.returnValue(of({} as any));

    const result = await lastValueFrom(dataSource.add({
      seizoen: '2026-2027',
      datum: new Date(2026, 7, 30), // Aug 30, 2026
      teamWit: [1],
      teamRood: [2],
      teamGeneratie: 'Automatisch',
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null,
    }));

    expect(result.id).toBe(6);
    expect(result.datumString).toBe('30-08-2026');
    const callArgs = sheets.appendSheetRow.calls.mostRecent().args;
    expect(callArgs[0]).toBe('Wedstrijden');
    expect(callArgs[1].length).toBe(10);
    expect(callArgs[1][0]).toBe(6); // id
    expect(callArgs[1][3]).toBe('Alice'); // teamWit names
    expect(callArgs[1][4]).toBe('Bob');   // teamRood names
  });

  it('update gooit error als match.id ontbreekt', async () => {
    await expectAsync(lastValueFrom(dataSource.update({
      teamWit: [],
      teamRood: [],
      datum: new Date(),
      scoreWit: null,
      scoreRood: null,
      zlatanPlayerId: null,
      ventielPlayerId: null,
    } as any))).toBeRejectedWithError(/id/);
  });
});
