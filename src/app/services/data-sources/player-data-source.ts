import { Observable } from 'rxjs';
import { PlayerSheetData } from '../../interfaces/IPlayerSheet';

export abstract class PlayerDataSource {
  abstract getAll(): Observable<PlayerSheetData[]>;
  abstract add(player: PlayerSheetData): Observable<void>;
  /** Identificeert de speler op naam (Sheets-pad) of id (Supabase-pad). */
  abstract update(nameOrId: string | number, player: PlayerSheetData): Observable<void>;
  /** True als er een speler met dit e-mailadres (lowercase) is_admin = true heeft. */
  abstract isAdminEmail(email: string): Observable<boolean>;
}
