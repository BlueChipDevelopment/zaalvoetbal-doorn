import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpelerProfielRoutingModule } from './speler-profiel-routing.module';
import { SpelerProfielComponent } from './speler-profiel.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { RatingTrendChartComponent } from './rating-trend-chart/rating-trend-chart.component';

@NgModule({
  declarations: [SpelerProfielComponent, PlayerCardComponent, RatingTrendChartComponent],
  imports: [
    CommonModule,
    RouterModule,
    SpelerProfielRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class SpelerProfielModule {}
