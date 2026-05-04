import { Component, Input } from '@angular/core';
import { PlayerAchievement, AchievementCategory } from '../../../interfaces/IAchievement';

interface Section {
  key: AchievementCategory;
  title: string;
  items: PlayerAchievement[];
}

@Component({
  selector: 'app-achievements-grid',
  templateUrl: './achievements-grid.component.html',
  styleUrls: ['./achievements-grid.component.scss'],
})
export class AchievementsGridComponent {
  private _achievements: PlayerAchievement[] = [];
  sections: Section[] = [];

  @Input()
  set achievements(value: PlayerAchievement[]) {
    this._achievements = value ?? [];
    this.sections = this.buildSections();
  }
  get achievements(): PlayerAchievement[] { return this._achievements; }

  private buildSections(): Section[] {
    const milestones = this._achievements.filter(a => a.category === 'milestone');
    const streaks = this._achievements.filter(a => a.category === 'streak');
    const seasons = this._achievements.filter(a => a.category === 'season');

    const out: Section[] = [];
    if (milestones.length) out.push({ key: 'milestone', title: 'Mijlpalen', items: milestones });
    if (streaks.length) out.push({ key: 'streak', title: 'Streaks', items: streaks });
    if (seasons.some(a => a.tier !== null)) {
      out.push({ key: 'season', title: 'Seizoen', items: seasons });
    }
    return out;
  }
}
