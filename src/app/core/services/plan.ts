import { Injectable } from '@angular/core';
import { PlanItem } from '../models/plan-item.model';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private readonly items: PlanItem[] = [
    {
      id: '1',
      date: 'Feb, 07',
      time: '06:00 pm',
      title: 'Sacar al perro',
      category: 'Casa',
      status: 'pendiente',
    },
    {
      id: '2',
      date: 'Feb, 07',
      time: '06:00 am',
      title: 'Tomar antibiótico',
      category: 'Salud',
      status: 'pendiente',
    },
    {
      id: '3',
      date: 'Feb, 06',
      time: '08:00 am',
      title: 'Alistar reunión',
      category: 'Trabajo',
      status: 'pendiente',
    },
    {
      id: '4',
      date: 'Feb, 07',
      time: '07:00 pm',
      title: 'Comprar huevos',
      category: 'Casa',
      status: 'pendiente',
    },
  ];

  getPlan(): PlanItem[] {
    return this.items;
  }
}