import { Component, Input } from '@angular/core';
import { PlayerSheetData } from '../../../interfaces/IPlayerSheet';
import { getPlayerTier } from '../../../utils/player-tier';
import { playerInitials } from '../../../utils/player-initials';

@Component({
  selector: 'app-fifa-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class FifaCardComponent {
  @Input() player!: PlayerSheetData;
  @Input() rating = 0;
  @Input() matchesPlayed = 0;
  @Input() winRate = 0;
  @Input() zlatanPerMatch = 0;
  @Input() attendanceRate = 0;

  get tier() { return getPlayerTier(this.rating); }
  get initials() { return playerInitials(this.player?.name); }
  get photoUrl(): string | null { return (this.player as any)?.photo_url ?? null; }
}
