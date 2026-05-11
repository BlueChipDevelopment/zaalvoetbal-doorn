import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecordCategory, RecordsService } from '../../services/records.service';
import { AchievementsService } from '../../services/achievements.service';
import { AchievementCategory, AchievementRecord } from '../../interfaces/IAchievement';

interface AchievementCategoryGroup {
  category: AchievementCategory;
  title: string;
  items: AchievementRecord[];
}

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  records$!: Observable<RecordCategory[]>;
  mvps$!: Observable<RecordCategory[]>;
  achievementGroups$!: Observable<AchievementCategoryGroup[]>;

  private static readonly CATEGORY_TITLES: Record<AchievementCategory, string> = {
    milestone: 'Mijlpalen',
    streak: 'Streaks',
    season: 'Seizoen',
  };

  constructor(
    private recordsService: RecordsService,
    private achievementsService: AchievementsService,
  ) {}

  ngOnInit(): void {
    this.records$ = this.recordsService.getRecords();
    this.mvps$ = this.recordsService.getSeasonMVPs();
    this.achievementGroups$ = this.buildAchievementGroups$();
  }

  private buildAchievementGroups$(): Observable<AchievementCategoryGroup[]> {
    const order: AchievementCategory[] = ['milestone', 'streak', 'season'];
    return this.achievementsService.getAchievementRecords().pipe(
      map(records =>
        order
          .map(cat => ({
            category: cat,
            title: RecordsComponent.CATEGORY_TITLES[cat],
            items: records.filter(r => r.category === cat),
          }))
          .filter(g => g.items.length > 0),
      ),
    );
  }

  trackByKey = (_: number, r: AchievementRecord) => r.key;
}
