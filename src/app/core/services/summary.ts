import { Injectable } from '@angular/core';
import { SummaryData } from '../models/summary.model';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  getSummary(): SummaryData {
    return {
      metrics: [
        { label: 'Atendidas', value: 2, tone: 'success' },
        { label: 'Pendientes', value: 2, tone: 'warning' },
        { label: 'Pospuestas', value: 0, tone: 'danger' },
      ],
      chartPoints: [
        { label: 'Feb 1', attended: 15, postponed: 10.5 },
        { label: 'Feb 2', attended: 14, postponed: 12 },
        { label: 'Feb 3', attended: 14.5, postponed: 13 },
        { label: 'Feb 4', attended: 16.5, postponed: 13.5 },
        { label: 'Feb 5', attended: 19, postponed: 14 },
        { label: 'Feb 6', attended: 16, postponed: 15.2 },
      ],
    };
  }
}