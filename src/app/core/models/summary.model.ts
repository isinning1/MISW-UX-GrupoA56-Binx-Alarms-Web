export interface SummaryMetric {
  label: string;
  value: number;
  tone: 'success' | 'warning' | 'primary';
}

export interface SummaryPoint {
  label: string;
  value: number;
}

export interface SummaryData {
  metrics: SummaryMetric[];
  chartPoints: SummaryPoint[];
}