import { Component, Input } from '@angular/core';
import { curveBasis } from 'd3-shape';
import { RatingPoint } from '../../../services/player-profile.service';

@Component({
  selector: 'app-rating-trend-chart',
  templateUrl: './rating-trend-chart.component.html',
  styleUrls: ['./rating-trend-chart.component.scss'],
})
export class RatingTrendChartComponent {
  @Input() set points(value: RatingPoint[]) {
    this._points = value ?? [];
    this.series = this._points.length >= 2
      ? [{
          name: 'Rating',
          series: this._points.map(p => ({ name: new Date(p.matchDate), value: p.rating })),
        }]
      : [];
  }
  get points(): RatingPoint[] { return this._points; }

  private _points: RatingPoint[] = [];
  series: { name: string; series: { name: Date; value: number }[] }[] = [];

  readonly curve = curveBasis as any;
  readonly colorScheme = { domain: ['#1976d2'] } as any;
}
