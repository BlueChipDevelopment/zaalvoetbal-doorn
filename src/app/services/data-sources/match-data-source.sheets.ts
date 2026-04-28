import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import { WedstrijdData } from '../../interfaces/IWedstrijd';
import { parseWedstrijdDateTime } from '../../utils/date-utils';
import {
  WEDSTRIJD_COLUMNS,
  WEDSTRIJD_RANGES,
  SHEET_NAMES,
} from '../../constants/sheet-columns';
import { MatchDataSource } from './match-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsMatchDataSource extends MatchDataSource {
  constructor(private sheets: GoogleSheetsService) {
    super();
  }

  getAll(): Observable<WedstrijdData[]> {
    return this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN).pipe(
      map(rows => this.transformRows(rows)),
    );
  }

  add(match: WedstrijdData): Observable<WedstrijdData> {
    const datumString = this.formatDate(match.datum);
    return this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN).pipe(
      switchMap(rows => {
        const matches = this.transformRows(rows);
        const maxId = matches.reduce((m, w) => Math.max(m, w.id || 0), 0);
        const nextId = maxId + 1;
        const row = [
          nextId,
          match.seizoen || '',
          datumString,
          match.teamWit || '',
          match.teamRood || '',
          match.teamGeneratie || '',
          match.scoreWit !== null && match.scoreWit !== undefined ? match.scoreWit : '',
          match.scoreRood !== null && match.scoreRood !== undefined ? match.scoreRood : '',
          match.zlatan || '',
          match.ventiel || '',
        ];
        return this.sheets.appendSheetRow(SHEET_NAMES.WEDSTRIJDEN, row).pipe(
          map(() => ({ ...match, id: nextId, datumString })),
        );
      }),
    );
  }

  update(match: WedstrijdData): Observable<void> {
    if (!match.absoluteRowNumber) {
      return throwError(() => new Error('Cannot update match: absoluteRowNumber is missing'));
    }
    const datumString = this.formatDate(match.datum);
    const row = [
      match.id || '',
      match.seizoen || '',
      datumString,
      match.teamWit || '',
      match.teamRood || '',
      match.teamGeneratie || '',
      match.scoreWit !== null && match.scoreWit !== undefined ? match.scoreWit : '',
      match.scoreRood !== null && match.scoreRood !== undefined ? match.scoreRood : '',
      match.zlatan || '',
      match.ventiel || '',
    ];
    return this.sheets.updateSheetRow(SHEET_NAMES.WEDSTRIJDEN, match.absoluteRowNumber, row).pipe(
      map(() => undefined),
    );
  }

  updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatan: string,
  ): Observable<void> {
    return this.findRowNumberForMatch(matchId).pipe(
      switchMap(rowNumber => {
        const data = [{
          range: WEDSTRIJD_RANGES.SCORES_AND_ZLATAN(rowNumber),
          values: [[scoreWhite, scoreRed, zlatan]],
        }];
        return this.sheets.batchUpdateSheet(data).pipe(map(() => undefined));
      }),
    );
  }

  updateTeams(
    matchId: number,
    teamWit: string,
    teamRood: string,
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void> {
    return this.findRowNumberForMatch(matchId).pipe(
      switchMap(rowNumber => {
        const data: { range: string; values: any[][] }[] = [{
          range: WEDSTRIJD_RANGES.TEAMS_WITH_GENERATIE(rowNumber),
          values: [[teamWit, teamRood, teamGeneration]],
        }];
        if (voorbeschouwing) {
          data.push({
            range: WEDSTRIJD_RANGES.VOORBESCHOUWING(rowNumber),
            values: [[voorbeschouwing]],
          });
        }
        return this.sheets.batchUpdateSheet(data).pipe(map(() => undefined));
      }),
    );
  }

  private findRowNumberForMatch(matchId: number): Observable<number> {
    return this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN).pipe(
      switchMap(rows => {
        for (let i = 1; i < rows.length; i++) {
          const cell = rows[i]?.[WEDSTRIJD_COLUMNS.ID];
          const id = typeof cell === 'number' ? cell : parseInt(String(cell), 10);
          if (id === matchId) {
            return of(i + 1); // 1-based sheet row
          }
        }
        return throwError(() => new Error(`Match not found: id=${matchId}`));
      }),
    );
  }

  private formatDate(date: Date | null | undefined): string {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  private parseScore(value: any): number | null {
    if (value === null || value === undefined || value === '') return null;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? null : parsed;
  }

  private transformRows(rawData: any[][]): WedstrijdData[] {
    if (!rawData || rawData.length <= 1) return [];

    const baseMatches = rawData.slice(1)
      .filter(row => row && row.length > 0)
      .map((row, index) => {
        const absoluteRowNumber = index + 2;
        const seizoen = (row[WEDSTRIJD_COLUMNS.SEIZOEN] || '').toString().trim();
        const datumString = row[WEDSTRIJD_COLUMNS.DATUM] || '';
        const parsedDatum = parseWedstrijdDateTime(datumString);

        let id: number;
        const sheetId = this.parseScore(row[WEDSTRIJD_COLUMNS.ID]);
        if (sheetId !== null && sheetId > 0) {
          id = sheetId;
        } else {
          id = index + 1;
          console.warn(`Wedstrijd rij ${absoluteRowNumber}: Geen geldig ID in kolom A (${row[WEDSTRIJD_COLUMNS.ID]}), gebruik fallback ${id}`);
        }

        return {
          id,
          seizoen,
          absoluteRowNumber,
          datum: parsedDatum,
          datumString,
          teamWit: row[WEDSTRIJD_COLUMNS.TEAM_WIT] || '',
          teamRood: row[WEDSTRIJD_COLUMNS.TEAM_ROOD] || '',
          teamGeneratie: row[WEDSTRIJD_COLUMNS.TEAM_GENERATIE] || '',
          scoreWit: this.parseScore(row[WEDSTRIJD_COLUMNS.SCORE_WIT]),
          scoreRood: this.parseScore(row[WEDSTRIJD_COLUMNS.SCORE_ROOD]),
          zlatan: row[WEDSTRIJD_COLUMNS.ZLATAN] || '',
          ventiel: row[WEDSTRIJD_COLUMNS.VENTIEL] || '',
          voorbeschouwing: row[WEDSTRIJD_COLUMNS.VOORBESCHOUWING] || undefined,
          locatie: 'Sporthal Steinheim',
        };
      });

    const seizoenCounters = new Map<string, number>();
    return baseMatches.map(m => {
      if (!m.seizoen) {
        console.warn(`Wedstrijd ${m.datumString}: Geen seizoen in kolom B gevonden`);
        return m;
      }
      const currentCount = seizoenCounters.get(m.seizoen) || 0;
      const seizoenWedstrijdNummer = currentCount + 1;
      seizoenCounters.set(m.seizoen, seizoenWedstrijdNummer);
      return { ...m, seizoenWedstrijdNummer };
    });
  }
}
