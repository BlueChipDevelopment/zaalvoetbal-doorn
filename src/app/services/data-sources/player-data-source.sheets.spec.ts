import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { GoogleSheetsService } from '../google-sheets-service';
import { SheetsPlayerDataSource } from './player-data-source.sheets';

describe('SheetsPlayerDataSource', () => {
  let dataSource: SheetsPlayerDataSource;
  let sheets: jasmine.SpyObj<GoogleSheetsService>;

  beforeEach(() => {
    sheets = jasmine.createSpyObj('GoogleSheetsService', ['getSheetData', 'appendSheetRow', 'updateSheetRow']);
    TestBed.configureTestingModule({
      providers: [
        SheetsPlayerDataSource,
        { provide: GoogleSheetsService, useValue: sheets },
      ],
    });
    dataSource = TestBed.inject(SheetsPlayerDataSource);
  });

  it('mapt rauwe rijen naar PlayerSheetData en sorteert alfabetisch', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Naam', 'Positie', 'Actief'],
      ['  Bob  ', 'Speler', 'Ja'],
      ['Alice', 'Keeper', 'Nee'],
      ['', 'Speler', 'Ja'], // lege naam wordt gefilterd
    ]));

    const players = await lastValueFrom(dataSource.getAll());

    expect(players).toEqual([
      { name: 'Alice', position: 'Keeper', actief: false },
      { name: 'Bob',   position: 'Speler', actief: true },
    ]);
    expect(sheets.getSheetData).toHaveBeenCalledWith('Spelers');
  });

  it('append schrijft de juiste rij in Spelers', async () => {
    sheets.appendSheetRow.and.returnValue(of({ updates: { updatedRows: 1 } } as any));

    await lastValueFrom(dataSource.add({ name: 'Carl', position: 'Speler', actief: true }));

    expect(sheets.appendSheetRow).toHaveBeenCalledWith('Spelers', ['Carl', 'Speler', 'Ja']);
  });

  it('update zoekt rij op naam en schrijft naar dat rijnummer', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Naam', 'Positie', 'Actief'],
      ['Alice', 'Keeper', 'Nee'],
      ['Bob',   'Speler', 'Ja'],
    ]));
    sheets.updateSheetRow.and.returnValue(of({ updatedRows: 1 } as any));

    await lastValueFrom(dataSource.update('Bob', { name: 'Bob', position: 'Keeper', actief: true }));

    // Bob staat op array-index 2 (header op 0, Alice op 1), dus sheet-rij 3 (1-based).
    expect(sheets.updateSheetRow).toHaveBeenCalledWith('Spelers', 3, ['Bob', 'Keeper', 'Ja']);
  });

  it('update gooit error als speler niet gevonden wordt', async () => {
    sheets.getSheetData.and.returnValue(of([
      ['Naam', 'Positie', 'Actief'],
      ['Alice', 'Keeper', 'Nee'],
    ]));

    await expectAsync(
      lastValueFrom(dataSource.update('Onbekend', { name: 'Onbekend', position: 'Speler', actief: true }))
    ).toBeRejectedWithError(/Onbekend/);
  });
});
