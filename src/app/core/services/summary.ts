import { Injectable } from '@angular/core';
import { SummaryData } from '../models/summary.model';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  getSummary(): SummaryData {
    return {
      metrics: [
        { label: 'Atendidas', value: 18, tone: 'success' },
        { label: 'Pendientes', value: 7, tone: 'warning' },
        { label: 'Pospuestas', value: 3, tone: 'primary' },
      ],
      chartPoints: [
        { label: 'Lun', value: 4 },
        { label: 'Mar', value: 7 },
        { label: 'Mié', value: 6 },
        { label: 'Jue', value: 10 },
        { label: 'Vie', value: 8 },
        { label: 'Sáb', value: 12 },
        { label: 'Dom', value: 9 },
      ],
    };
  }
}