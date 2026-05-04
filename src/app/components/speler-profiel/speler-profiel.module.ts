import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SpelerProfielRoutingModule } from './speler-profiel-routing.module';
import { SpelerProfielComponent } from './speler-profiel.component';
import { FifaCardComponent } from './player-card/player-card.component';
import { RatingTrendChartComponent } from './rating-trend-chart/rating-trend-chart.component';
import { FormIndicatorComponent } from './form-indicator/form-indicator.component';
import { CountUpDirective } from '../../directives/count-up.directive';
import { AchievementBadgeComponent } from '../shared/achievement-badge/achievement-badge.component';
import { AchievementsGridComponent } from './achievements-grid/achievements-grid.component';

@NgModule({
  declarations: [
    SpelerProfielComponent,
    FifaCardComponent,
    RatingTrendChartComponent,
    FormIndicatorComponent,
    AchievementBadgeComponent,
    AchievementsGridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SpelerProfielRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    NgxChartsModule,
    CountUpDirective,
  ],
})
export class SpelerProfielModule {}
