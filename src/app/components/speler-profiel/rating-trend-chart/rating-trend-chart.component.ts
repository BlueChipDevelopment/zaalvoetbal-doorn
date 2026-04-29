import { Component, Input } from '@angular/core';
import { RatingPoint } from '../../../services/player-profile.service';

@Component({
  selector: 'app-rating-trend-chart',
  templateUrl: './rating-trend-chart.component.html',
  styleUrls: ['./rating-trend-chart.component.scss'],
})
export class RatingTrendChartComponent {
  @Input() points: RatingPoint[] = [];

  readonly viewBoxWidth = 600;
  readonly viewBoxHeight = 200;

  get pathD(): string {
    if (this.points.length < 2) return '';
    const ys = this.points.map(p => p.rating);
    const minY = Math.max(0, Math.min(...ys) - 0.5);
    const maxY = Math.min(10, Math.max(...ys) + 0.5);
    const range = Math.max(0.1, maxY - minY);
    const W = this.viewBoxWidth;
    const H = this.viewBoxHeight;
    return this.points
      .map((p, i) => {
        const x = (i / (this.points.length - 1)) * W;
        const y = H - ((p.rating - minY) / range) * H;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  }
}
