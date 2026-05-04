import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AchievementBadgeComponent } from './achievement-badge.component';
import { PlayerAchievement } from '../../../interfaces/IAchievement';

describe('AchievementBadgeComponent', () => {
  let fixture: ComponentFixture<AchievementBadgeComponent>;
  let component: AchievementBadgeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementBadgeComponent],
      imports: [CommonModule, MatIconModule, MatTooltipModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AchievementBadgeComponent);
    component = fixture.componentInstance;
  });

  it('rendert achievement-tegel met behaalde tier-class', () => {
    component.achievement = {
      key: 'matches_played', category: 'milestone', tier: 'gold',
      title: 'Veteraan – Goud', description: 'Aantal gespeelde wedstrijden.',
      icon: 'directions_run', earnedAt: new Date('2024-01-10'),
      progress: { current: 120, target: 250 },
    } as PlayerAchievement;
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.badge')?.classList.contains('tier-gold')).toBe(true);
    expect(el.querySelector('.badge')?.classList.contains('locked')).toBe(false);
    expect(el.textContent).toContain('120/250');
  });

  it('rendert locked tegel met progress', () => {
    component.achievement = {
      key: 'matches_played', category: 'milestone', tier: null,
      title: 'Veteraan', description: '', icon: 'directions_run',
      earnedAt: null, progress: { current: 4, target: 10 },
    } as PlayerAchievement;
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.badge')?.classList.contains('locked')).toBe(true);
    expect(el.textContent).toContain('4/10');
  });

  it('toont ×N voor seizoens-badges met meerdere occurrences', () => {
    component.achievement = {
      key: 'season_champion', category: 'season', tier: 'bronze',
      title: 'Seizoenskampioen', description: '', icon: 'workspace_premium',
      earnedAt: new Date('2024-06-01'),
      occurrences: [
        { season: '2022-2023', date: new Date('2023-06-01') },
        { season: '2023-2024', date: new Date('2024-06-01') },
      ],
    } as PlayerAchievement;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('×2');
  });
});
