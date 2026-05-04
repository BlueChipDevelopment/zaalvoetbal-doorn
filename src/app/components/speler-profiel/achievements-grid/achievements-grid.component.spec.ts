import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AchievementsGridComponent } from './achievements-grid.component';
import { AchievementBadgeComponent } from '../../shared/achievement-badge/achievement-badge.component';
import { PlayerAchievement } from '../../../interfaces/IAchievement';

describe('AchievementsGridComponent', () => {
  let fixture: ComponentFixture<AchievementsGridComponent>;
  let component: AchievementsGridComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementsGridComponent, AchievementBadgeComponent],
      imports: [CommonModule, MatIconModule, MatTooltipModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AchievementsGridComponent);
    component = fixture.componentInstance;
  });

  it('groepeert per categorie en filtert irrelevante seizoens-tegels', () => {
    const data: PlayerAchievement[] = [
      { key: 'matches_played', category: 'milestone', tier: 'bronze', title: 'Veteraan – Brons', description: '', icon: 'directions_run', earnedAt: new Date(), progress: { current: 12, target: 50 } },
      { key: 'streak_3', category: 'streak', tier: null, title: 'Hat-trick', description: '', icon: 'local_fire_department', earnedAt: null, progress: { current: 1, target: 3 } },
      { key: 'season_champion', category: 'season', tier: null, title: 'Seizoenskampioen', description: '', icon: 'workspace_premium', earnedAt: null },
    ];
    component.achievements = data;
    fixture.detectChanges();
    const headings = Array.from(fixture.nativeElement.querySelectorAll('h3')).map((h: any) => h.textContent);
    expect(headings.length).toBe(2);
    expect(fixture.nativeElement.querySelectorAll('app-achievement-badge').length).toBe(2);
  });

  it('toont seizoens-sectie als ten minste één behaald is', () => {
    component.achievements = [
      { key: 'season_champion', category: 'season', tier: 'bronze', title: 'Seizoenskampioen', description: '', icon: 'workspace_premium', earnedAt: new Date(), occurrences: [{ season: '2023-2024', date: new Date() }] },
      { key: 'season_podium', category: 'season', tier: null, title: 'Podium', description: '', icon: 'looks_3', earnedAt: null },
      { key: 'season_full_attend', category: 'season', tier: null, title: 'Altijd aanwezig', description: '', icon: 'event_available', earnedAt: null },
    ];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-achievement-badge').length).toBe(3);
  });
});
