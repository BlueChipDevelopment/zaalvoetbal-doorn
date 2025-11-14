import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, shareReplay, switchMap } from 'rxjs/operators';
import { GoogleSheetsService } from './google-sheets-service';
import { PlayerSheetData, PlayerFilter } from '../interfaces/IPlayerSheet';
import { SPELER_COLUMNS, SHEET_NAMES } from '../constants/sheet-columns';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly SHEET_NAME = 'Spelers';
  private playersCache$ = new BehaviorSubject<PlayerSheetData[] | null>(null);
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

  constructor(private googleSheetsService: GoogleSheetsService) {}

  /**
   * Get all players from the Spelers sheet with optional filtering
   */
  getPlayers(filter?: PlayerFilter): Observable<PlayerSheetData[]> {
    return this.getCachedPlayers().pipe(
      map(players => this.applyFilter(players, filter))
    );
  }

  /**
   * Get only active players
   */
  getActivePlayers(): Observable<PlayerSheetData[]> {
    return this.getPlayers({ activeOnly: true });
  }

  /**
   * Get a specific player by name
   */
  getPlayerByName(name: string): Observable<PlayerSheetData | undefined> {
    return this.getCachedPlayers().pipe(
      map(players => players.find(player => 
        player.name.toLowerCase() === name.toLowerCase()
      ))
    );
  }

  /**
   * Force refresh of player data (bypasses cache)
   */
  refreshPlayers(): Observable<PlayerSheetData[]> {
    this.clearCache();
    return this.getCachedPlayers();
  }

  /**
   * Get cached players or fetch from sheet if cache is invalid
   */
  private getCachedPlayers(): Observable<PlayerSheetData[]> {
    const now = Date.now();
    const cachedData = this.playersCache$.value;
    
    // Return cached data if valid
    if (cachedData && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return of(cachedData);
    }

    // Fetch fresh data
    return this.googleSheetsService.getSheetData(this.SHEET_NAME).pipe(
      map(rows => this.transformSheetDataToPlayers(rows)),
      tap(players => {
        this.playersCache$.next(players);
        this.cacheTimestamp = now;
      }),
      catchError(error => {
        console.error('Error fetching players:', error);
        // Return cached data if available, otherwise empty array
        return of(cachedData || []);
      }),
      shareReplay(1)
    );
  }

  /**
   * Transform raw sheet data to typed PlayerSheetData objects
   */
  private transformSheetDataToPlayers(rows: any[][]): PlayerSheetData[] {
    if (!rows || rows.length <= 1) {
      return [];
    }

    // Skip header row (index 0)
    return rows.slice(1)
      .filter(row => row && row[SPELER_COLUMNS.NAME]) // Filter out empty rows or rows without name
      .map(row => ({
        name: this.sanitizeString(row[SPELER_COLUMNS.NAME]),
        position: this.sanitizeString(row[SPELER_COLUMNS.POSITION]) || '',
        actief: this.parseBoolean(row[SPELER_COLUMNS.ACTIEF])
      }))
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
  }

  /**
   * Apply filters to player array
   */
  private applyFilter(players: PlayerSheetData[], filter?: PlayerFilter): PlayerSheetData[] {
    if (!filter) {
      return players;
    }

    let filtered = players;

    if (filter.activeOnly) {
      filtered = filtered.filter(player => player.actief);
    }

    if (filter.positions && filter.positions.length > 0) {
      filtered = filtered.filter(player => 
        filter.positions!.some(pos => 
          player.position.toLowerCase() === pos.toLowerCase()
        )
      );
    }

    return filtered;
  }

  /**
   * Parse various boolean representations from Google Sheets
   */
  private parseBoolean(value: any): boolean {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      const lowerValue = value.toLowerCase().trim();
      return lowerValue === 'ja' || lowerValue === 'true' || lowerValue === '1';
    }
    if (typeof value === 'number') {
      return value === 1;
    }
    return false;
  }

  /**
   * Sanitize string values from Google Sheets
   */
  private sanitizeString(value: any): string {
    if (value === null || value === undefined) {
      return '';
    }
    return String(value).trim();
  }

  /**
   * Add a new player to the sheet
   */
  addPlayer(player: PlayerSheetData): Observable<any> {
    const row = [
      player.name,
      player.position,
      player.actief ? 'Ja' : 'Nee'
    ];

    return this.googleSheetsService.appendSheetRow(SHEET_NAMES.SPELERS, row).pipe(
      tap(() => this.clearCache()),
      catchError(error => {
        console.error('❌ PlayerService error adding player:', error);
        throw error;
      })
    );
  }

  /**
   * Update an existing player in the sheet
   */
  updatePlayer(playerName: string, updatedPlayer: PlayerSheetData): Observable<any> {
    return this.googleSheetsService.getSheetData(SHEET_NAMES.SPELERS).pipe(
      map(rows => {
        // Find the player by name in the actual sheet data
        let foundRowIndex = -1;
        
        for (let i = 1; i < rows.length; i++) { // Skip header row (index 0)
          const row = rows[i];
          if (row && row[SPELER_COLUMNS.NAME] && row[SPELER_COLUMNS.NAME].toLowerCase().trim() === playerName.toLowerCase().trim()) {
            foundRowIndex = i;
            break;
          }
        }
        
        if (foundRowIndex === -1) {
          throw new Error(`Player not found in sheet: ${playerName}`);
        }
        
        const updatedRow = [
          updatedPlayer.name,
          updatedPlayer.position,
          updatedPlayer.actief ? 'Ja' : 'Nee'
        ];
        
        const sheetRowNumber = foundRowIndex + 1; // Convert to 1-based indexing
        return { row: updatedRow, sheetRowNumber };
      }),
      switchMap(({row, sheetRowNumber}) => {
        return this.googleSheetsService.updateSheetRow(SHEET_NAMES.SPELERS, sheetRowNumber, row);
      }),
      catchError(error => {
        console.error('❌ PlayerService error updating player:', error);
        throw error;
      }),
      tap(() => this.clearCache())
    );
  }

  /**
   * Clear the cache
   */
  private clearCache(): void {
    this.playersCache$.next(null);
    this.cacheTimestamp = 0;
  }
}
