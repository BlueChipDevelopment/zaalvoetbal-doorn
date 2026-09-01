import { Observable } from 'rxjs';
import { SeasonDecider } from '../../interfaces/ISeasonDecider';

export abstract class SeasonDeciderDataSource {
  /** Alle vastgelegde seizoensbeslissingen. */
  abstract getAll(): Observable<SeasonDecider[]>;
  /** Legt de winnaar voor een seizoen vast, of overschrijft een bestaande. */
  abstract set(season: string, winnerPlayerId: number, note: string | null): Observable<void>;
  /** Verwijdert de beslissing voor een seizoen. */
  abstract clear(season: string): Observable<void>;
}
