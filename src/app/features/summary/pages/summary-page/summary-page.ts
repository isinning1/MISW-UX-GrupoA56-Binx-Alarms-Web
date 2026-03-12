import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { SummaryService } from '../../../../core/services/summary';
import {
  SummaryData,
  SummaryMetric,
  SummarySeriesPoint,
} from '../../../../core/models/summary.model';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './summary-page.html',
  styleUrl: './summary-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryPage {
  private readonly summaryService = inject(SummaryService);

  protected readonly summary: SummaryData = this.summaryService.getSummary();
  protected readonly metrics: SummaryMetric[] = this.summary.metrics;
  protected readonly points: SummarySeriesPoint[] = this.summary.chartPoints;

  protected readonly svgWidth = 860;
  protected readonly svgHeight = 320;
  protected readonly paddingX = 44;
  protected readonly paddingTop = 24;
  protected readonly paddingBottom = 34;

  protected get maxValue(): number {
    const values = this.points.flatMap((point) => [
      point.attended,
      point.postponed,
    ]);

    return Math.max(...values, 1);
  }

  protected get attendedPolylinePoints(): string {
    return this.buildPolyline('attended');
  }

  protected get postponedPolylinePoints(): string {
    return this.buildPolyline('postponed');
  }

  protected get attendedAreaPoints(): string {
    return this.buildArea('attended');
  }

  protected getToneClass(tone: SummaryMetric['tone']): string {
    switch (tone) {
      case 'success':
        return 'summary-card--success';
      case 'warning':
        return 'summary-card--warning';
      default:
        return 'summary-card--danger';
    }
  }

  protected getPointX(index: number): number {
    const usableWidth = this.svgWidth - this.paddingX * 2;

    return (
      this.paddingX +
      (usableWidth * index) / Math.max(this.points.length - 1, 1)
    );
  }

  protected getPointY(value: number): number {
    const usableHeight =
      this.svgHeight - this.paddingTop - this.paddingBottom;

    return (
      this.paddingTop +
      usableHeight -
      (value / this.maxValue) * usableHeight
    );
  }

  private buildPolyline(key: 'attended' | 'postponed'): string {
    if (!this.points.length) {
      return '';
    }

    return this.points
      .map((point, index) => {
        const x = this.getPointX(index);
        const y = this.getPointY(point[key]);

        return `${x},${y}`;
      })
      .join(' ');
  }

  private buildArea(key: 'attended'): string {
    if (!this.points.length) {
      return '';
    }

    const linePoints = this.points
      .map((point, index) => {
        const x = this.getPointX(index);
        const y = this.getPointY(point[key]);

        return `${x},${y}`;
      })
      .join(' ');

    const startX = this.paddingX;
    const endX = this.svgWidth - this.paddingX;
    const baseY = this.svgHeight - this.paddingBottom;

    return `${startX},${baseY} ${linePoints} ${endX},${baseY}`;
  }
}