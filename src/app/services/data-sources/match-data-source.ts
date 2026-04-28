import { Observable } from 'rxjs';
import { WedstrijdData } from '../../interfaces/IWedstrijd';

export abstract class MatchDataSource {
  abstract getAll(): Observable<WedstrijdData[]>;
  abstract add(match: WedstrijdData): Observable<WedstrijdData>;
  abstract update(match: WedstrijdData): Observable<void>;
  /** Schrijft alleen score-velden (`score_white`, `score_red`, `zlatan_player_id`).
   *  Ventiel zit niet in deze flow — wordt via volledige `update()` gezet. */
  abstract updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatanPlayerId: number | null,
  ): Observable<void>;
  /** Schrijft team-rosters + generation type, en optioneel voorbeschouwing.
   *  `voorbeschouwing` wordt alleen geschreven wanneer truthy; om een bestaande
   *  voorbeschouwing te wissen gebruik `update(match)` met `voorbeschouwing: undefined`. */
  abstract updateTeams(
    matchId: number,
    teamWit: number[],
    teamRood: number[],
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void>;
}
