export interface SummaryMetric {
  label: string;
  value: number;
  tone: 'success' | 'warning' | 'danger';
}

export interface SummarySeriesPoint {
  label: string;
  attended: number;
  postponed: number;
}

export interface SummaryData {
  metrics: SummaryMetric[];
  chartPoints: SummarySeriesPoint[];
}