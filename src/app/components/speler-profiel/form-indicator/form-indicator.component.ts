import { Component, Input } from '@angular/core';
import { MatchHistoryEntry } from '../../../services/player-profile.service';

@Component({
  selector: 'app-form-indicator',
  templateUrl: './form-indicator.component.html',
  styleUrls: ['./form-indicator.component.scss'],
})
export class FormIndicatorComponent {
  @Input() set history(value: MatchHistoryEntry[]) {
    // history komt newest-first; we tonen oldest-left → newest-right.
    this.dots = (value ?? []).slice(0, 10).slice().reverse();
  }
  dots: MatchHistoryEntry[] = [];

  tooltipFor(entry: MatchHistoryEntry): string {
    const d = new Date(entry.date);
    const dateStr = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;
    const team = entry.ownTeam === 'wit' ? 'Wit' : 'Rood';
    const result = entry.outcome === 'win' ? 'W' : entry.outcome === 'loss' ? 'V' : 'G';
    return `${team} ${entry.ownTeamScore}-${entry.opponentScore} — ${dateStr} (${result})`;
  }

  letter(entry: MatchHistoryEntry): string {
    return entry.outcome === 'win' ? 'W' : entry.outcome === 'loss' ? 'V' : 'G';
  }
}
