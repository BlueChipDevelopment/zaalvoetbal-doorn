import { Component, Input } from '@angular/core';
import { PlayerAchievement } from '../../../interfaces/IAchievement';

@Component({
  selector: 'app-achievement-badge',
  templateUrl: './achievement-badge.component.html',
  styleUrls: ['./achievement-badge.component.scss'],
})
export class AchievementBadgeComponent {
  @Input() achievement!: PlayerAchievement;

  get tierClass(): string {
    return this.achievement.tier ? `tier-${this.achievement.tier}` : 'locked';
  }

  get isLocked(): boolean {
    return this.achievement.tier === null;
  }

  get occurrenceCount(): number {
    return this.achievement.occurrences?.length ?? 0;
  }

  get progressLabel(): string | null {
    const p = this.achievement.progress;
    if (!p) return null;
    return `${p.current}/${p.target}`;
  }

  get progressFraction(): number {
    const p = this.achievement.progress;
    if (!p || p.target === 0) return 0;
    return Math.min(1, p.current / p.target);
  }

  get tooltipText(): string {
    const lines = [this.achievement.description];
    if (this.achievement.earnedAt) {
      lines.push(`Behaald op ${this.achievement.earnedAt.toLocaleDateString('nl-NL')}.`);
    }
    if (this.achievement.occurrences && this.achievement.occurrences.length > 1) {
      lines.push('Seizoenen: ' + this.achievement.occurrences.map(o => o.season).join(', '));
    }
    return lines.filter(Boolean).join(' ');
  }
}
