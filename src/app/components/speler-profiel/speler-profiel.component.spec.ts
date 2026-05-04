import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SpelerProfielComponent } from './speler-profiel.component';
import { PlayerService } from '../../services/player.service';
import { PlayerProfileService } from '../../services/player-profile.service';
import { RecordsService } from '../../services/records.service';
import { AchievementsService } from '../../services/achievements.service';

describe('SpelerProfielComponent', () => {
  let fixture: ComponentFixture<SpelerProfielComponent>;
  let component: SpelerProfielComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpelerProfielComponent],
      imports: [
        CommonModule,
        RouterTestingModule,
        MatCardModule,
        MatButtonToggleModule,
        MatTableModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
      ],
      providers: [
        { provide: PlayerService, useValue: { getPlayers: () => of([]) } },
        {
          provide: PlayerProfileService,
          useValue: {
            getStats: () => of({}),
            getRatingTrend: () => of([]),
            getTopTeammates: () => of([]),
            getWorstTeammates: () => of([]),
            getMatchHistory: () => of([]),
          },
        },
        { provide: RecordsService, useValue: { getRecordsForPlayer: () => of([]) } },
        { provide: AchievementsService, useValue: { getPlayerAchievements: () => of([]) } },
        Title,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SpelerProfielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toont laadspinner wanneer vm$ nog niet geladen is', () => {
    const spinner = fixture.nativeElement.querySelector('mat-progress-spinner');
    expect(spinner).toBeTruthy();
  });
});
