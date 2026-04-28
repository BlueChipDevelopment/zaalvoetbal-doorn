import { Observable } from 'rxjs';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';

/**
 * Abstract data-source voor spelers. Fungeert tegelijk als interface en
 * Angular DI-token. Implementaties (Sheets, Supabase) erven hiervan.
 */
export abstract class PlayerDataSource {
  abstract getAll(): Observable<PlayerSheetData[]>;
  abstract add(player: PlayerSheetData): Observable<void>;
  abstract update(name: string, player: PlayerSheetData): Observable<void>;
}
