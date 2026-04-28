import { Observable } from 'rxjs';
import { WedstrijdData } from '../../interfaces/IWedstrijd';

export abstract class MatchDataSource {
  abstract getAll(): Observable<WedstrijdData[]>;
  abstract add(match: WedstrijdData): Observable<WedstrijdData>;
  abstract update(match: WedstrijdData): Observable<void>;
  /** Schrijft alleen score-kolommen + zlatan (kolommen G:I) — match het huidige
   * score.component-gedrag dat ventiel niet aanraakt. Ventiel wordt via de admin
   * wedstrijd-dialog geüpdatet (volledige `update`). */
  abstract updateScore(
    matchId: number,
    scoreWhite: number,
    scoreRed: number,
    zlatan: string,
  ): Observable<void>;
  /** Schrijft team-namen + generatietype (kolommen D:F), en optioneel
   * voorbeschouwing (kolom K). Gebruikt door team-generator.
   *
   * `voorbeschouwing` wordt alleen geschreven wanneer truthy (niet-leeg). Een
   * lege string `''` of `undefined` zal een bestaande voorbeschouwing dus NIET
   * wissen. Om een voorbeschouwing te wissen, gebruik de volledige
   * `update(match)` met `voorbeschouwing: ''` in plaats van deze partial-update. */
  abstract updateTeams(
    matchId: number,
    teamWit: string,
    teamRood: string,
    teamGeneration: string,
    voorbeschouwing?: string,
  ): Observable<void>;
}
