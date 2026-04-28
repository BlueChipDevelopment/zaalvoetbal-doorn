import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerService } from '../services/player.service';

/**
 * Resolveert een player-id naar de bijbehorende naam via PlayerService.
 *
 * Gebruik in templates met de async pipe:
 *   {{ wedstrijd.zlatanPlayerId | playerName | async }}
 *
 * Lege/null/undefined ids of onbekende ids leveren een lege string.
 */
@Pipe({ name: 'playerName', standalone: true })
export class PlayerNamePipe implements PipeTransform {
  constructor(private players: PlayerService) {}

  transform(playerId: number | null | undefined): Observable<string> {
    if (!playerId) {
      return of('');
    }
    return this.players.getPlayerById(playerId).pipe(
      map(player => player?.name ?? ''),
    );
  }
}
