import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { SummaryService } from '../../../../core/services/summary';
import {
  SummaryData,
  SummaryMetric,
  SummaryPoint,
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
  protected readonly points: SummaryPoint[] = this.summary.chartPoints;

  protected readonly svgWidth = 860;
  protected readonly svgHeight = 260;
  protected readonly paddingX = 44;
  protected readonly paddingTop = 24;
  protected readonly paddingBottom = 36;

  protected get maxValue(): number {
    const values = this.points.map((point) => point.value);
    return Math.max(...values, 1);
  }

  protected get polylinePoints(): string {
    if (!this.points.length) {
      return '';
    }

    const usableWidth = this.svgWidth - this.paddingX * 2;
    const usableHeight =
      this.svgHeight - this.paddingTop - this.paddingBottom;

    return this.points
      .map((point, index) => {
        const x =
          this.paddingX +
          (usableWidth * index) / Math.max(this.points.length - 1, 1);

        const y =
          this.paddingTop +
          usableHeight -
          (point.value / this.maxValue) * usableHeight;

        return `${x},${y}`;
      })
      .join(' ');
  }

  protected get areaPoints(): string {
    if (!this.points.length) {
      return '';
    }

    const usableWidth = this.svgWidth - this.paddingX * 2;
    const usableHeight =
      this.svgHeight - this.paddingTop - this.paddingBottom;

    const linePoints = this.points
      .map((point, index) => {
        const x =
          this.paddingX +
          (usableWidth * index) / Math.max(this.points.length - 1, 1);

        const y =
          this.paddingTop +
          usableHeight -
          (point.value / this.maxValue) * usableHeight;

        return `${x},${y}`;
      })
      .join(' ');

    const startX = this.paddingX;
    const endX = this.paddingX + usableWidth;
    const baseY = this.svgHeight - this.paddingBottom;

    return `${startX},${baseY} ${linePoints} ${endX},${baseY}`;
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

  protected getToneClass(tone: SummaryMetric['tone']): string {
    switch (tone) {
      case 'success':
        return 'summary-card--success';
      case 'warning':
        return 'summary-card--warning';
      default:
        return 'summary-card--primary';
    }
  }
}
