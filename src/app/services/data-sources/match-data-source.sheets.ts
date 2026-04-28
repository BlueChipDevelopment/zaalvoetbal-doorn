import { Injectable } from '@angular/core';
import { Observable, combineLatest, of, throwError } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { GoogleSheetsService } from '../google-sheets-service';
import { WedstrijdData } from '../../interfaces/IWedstrijd';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';
import { parseWedstrijdDateTime } from '../../utils/date-utils';
import {
  WEDSTRIJD_COLUMNS,
  WEDSTRIJD_RANGES,
  SHEET_NAMES,
} from '../../constants/sheet-columns';
import { MatchDataSource } from './match-data-source';
import { PlayerDataSource } from './player-data-source';

@Injectable({ providedIn: 'root' })
export class SheetsMatchDataSource extends MatchDataSource {
  constructor(
    private sheets: GoogleSheetsService,
    private players: PlayerDataSource,
  ) {
    super();
  }

  getAll(): Observable<WedstrijdData[]> {
    return combineLatest([
      this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN),
      this.players.getAll().pipe(take(1)),
    ]).pipe(
      map(([rows, players]) => this.transformRows(rows, players)),
    );
  }

  add(match: WedstrijdData): Observable<WedstrijdData> {
    return this.players.getAll().pipe(
      take(1),
      switchMap(players => this.sheets.getSheetData(SHEET_NAMES.WEDSTRIJDEN).pipe(
        switchMap(rows => {
          const matches = this.transformRows(rows, players);
          const maxId = matches.reduce((m, w) => Math.max(m, w.id || 0), 0);
          const nextId = maxId + 1;
          const datumString = this.formatDate(match.datum);
          const row = this.buildRow(match, nextId, datumString, players);
          return this.sheets.appendSheetRow(SHEET_NAMES.WEDSTRIJDEN, row).pipe(
            map(() => ({ ...match, id: nextId, datumString })),
          );
        }),
      )),
    );
  }

  update(match: WedstrijdData): Observable<void> {
    if (!match.id) {
      return throwError(() => new Error('Cannot update match without id'));
    }
    return this.players.getAll().pipe(
      take(1),
      switchMap(players => this.findRowNumberForMatch(match.id!).pipe(
        switchMap(rowNumber => {
          const datumString = this.formatDate(match.datum);
          const row = this.buildRow(match, match.id!, datumString, players);
          return this.sheets.updateSheetRow(SHEET_NAMES.WEDSTRIJDEN, rowNumber, row).pipe(
            map(() => undefined),
          );
        }),
      )),
    );
  }

  updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatanPlayerId: number | null,
  ): Observable<void> {
    return combineLatest([
      this.findRowNumberForMatch(matchId),
      this.players.getAll().pipe(take(1)),
    ]).pipe(
      switchMap(([rowNumber, players]) => {
        const zlatanName = zlatanPlayerId ? this.idToName(zlatanPlayerId, players) : '';
        const data = [{
          range: WEDSTRIJD_RANGES.SCORES_AND_ZLATAN(rowNumber),
          values: [[scoreWhite, scoreRed, zlatanName]],
        }];
        return this.sheets.batchUpdateSheet(data).pipe(map(() => undefined));
      }),
    );
  }

  updateTeams(
    matchId: number,
    teamWit: number[],
    teamRood: number[],
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void> {
    return combineLatest([
      this.findRowNumberForMatch(matchId),
      this.players.getAll().pipe(take(1)),
    ]).pipe(
      switchMap(([rowNumber, players]) => {
        const teamWitNames = teamWit.map(id => this.idToName(id, players)).filter(Boolean).join(',');
        const teamRoodNames = teamRood.map(id => this.idToName(id, players)).filter(Boolean).join(',');
        const data: { range: string; values: any[][] }[] = [{
          range: WEDSTRIJD_RANGES.TEAMS_WITH_GENERATIE(rowNumber),
          values: [[teamWitNames, teamRoodNames, teamGeneration]],
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
            return of(i + 1);
          }
        }
        return throwError(() => new Error(`Match not found: id=${matchId}`));
      }),
    );
  }

  private buildRow(match: WedstrijdData, id: number, datumString: string, players: PlayerSheetData[]): any[] {
    const teamWitNames = match.teamWit.map(pid => this.idToName(pid, players)).filter(Boolean).join(',');
    const teamRoodNames = match.teamRood.map(pid => this.idToName(pid, players)).filter(Boolean).join(',');
    const zlatanName = match.zlatanPlayerId ? this.idToName(match.zlatanPlayerId, players) : '';
    const ventielName = match.ventielPlayerId ? this.idToName(match.ventielPlayerId, players) : '';
    return [
      id,
      match.seizoen || '',
      datumString,
      teamWitNames,
      teamRoodNames,
      match.teamGeneratie || '',
      match.scoreWit !== null && match.scoreWit !== undefined ? match.scoreWit : '',
      match.scoreRood !== null && match.scoreRood !== undefined ? match.scoreRood : '',
      zlatanName,
      ventielName,
    ];
  }

  private idToName(id: number, players: PlayerSheetData[]): string {
    return players.find(p => p.id === id)?.name ?? '';
  }

  private nameToId(name: string, players: PlayerSheetData[]): number | null {
    if (!name) return null;
    const trimmed = name.trim().toLowerCase();
    return players.find(p => p.name.toLowerCase() === trimmed)?.id ?? null;
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
    const parsed = parseInt(String(value), 10);
    return isNaN(parsed) ? null : parsed;
  }

  private transformRows(rawData: any[][], players: PlayerSheetData[]): WedstrijdData[] {
    if (!rawData || rawData.length <= 1) return [];

    const baseMatches = rawData.slice(1)
      .filter(row => row && row.length > 0)
      .map((row, index) => {
        const seizoen = (row[WEDSTRIJD_COLUMNS.SEIZOEN] || '').toString().trim();
        const datumString = row[WEDSTRIJD_COLUMNS.DATUM] || '';
        const parsedDatum = parseWedstrijdDateTime(datumString);

        let id: number;
        const sheetId = this.parseScore(row[WEDSTRIJD_COLUMNS.ID]);
        if (sheetId !== null && sheetId > 0) {
          id = sheetId;
        } else {
          id = index + 1;
          console.warn(`Wedstrijd rij ${index + 2}: Geen geldig ID in kolom A, fallback ${id}`);
        }

        const teamWitNames = (row[WEDSTRIJD_COLUMNS.TEAM_WIT] || '').toString();
        const teamRoodNames = (row[WEDSTRIJD_COLUMNS.TEAM_ROOD] || '').toString();
        const zlatanName = (row[WEDSTRIJD_COLUMNS.ZLATAN] || '').toString();
        const ventielName = (row[WEDSTRIJD_COLUMNS.VENTIEL] || '').toString();

        const teamWit = teamWitNames.split(',').map((n: string) => this.nameToId(n, players)).filter((x: number | null): x is number => x !== null);
        const teamRood = teamRoodNames.split(',').map((n: string) => this.nameToId(n, players)).filter((x: number | null): x is number => x !== null);
        const zlatanPlayerId = this.nameToId(zlatanName, players);
        const ventielPlayerId = this.nameToId(ventielName, players);

        return {
          id,
          seizoen,
          datum: parsedDatum,
          datumString,
          teamWit,
          teamRood,
          teamGeneratie: row[WEDSTRIJD_COLUMNS.TEAM_GENERATIE] || '',
          scoreWit: this.parseScore(row[WEDSTRIJD_COLUMNS.SCORE_WIT]),
          scoreRood: this.parseScore(row[WEDSTRIJD_COLUMNS.SCORE_ROOD]),
          zlatanPlayerId,
          ventielPlayerId,
          voorbeschouwing: row[WEDSTRIJD_COLUMNS.VOORBESCHOUWING] || undefined,
          locatie: 'Sporthal Steinheim',
        } as WedstrijdData;
      });

    const seizoenCounters = new Map<string, number>();
    return baseMatches.map(m => {
      if (!m.seizoen) {
        return m;
      }
      const currentCount = seizoenCounters.get(m.seizoen) || 0;
      const seizoenWedstrijdNummer = currentCount + 1;
      seizoenCounters.set(m.seizoen, seizoenWedstrijdNummer);
      return { ...m, seizoenWedstrijdNummer };
    });
  }
}
