import { Injectable } from '@angular/core';
import { Alarm } from '../models/alarm.model';

@Injectable({
  providedIn: 'root',
})
export class AlarmService {
  private alarms: Alarm[] = [
    {
      id: '1',
      title: 'Sacar al perro',
      category: 'Casa',
      date: 'Feb, 07',
      time: '06:00 pm',
      status: 'pendiente',
    },
    {
      id: '2',
      title: 'Tomar antibiótico',
      category: 'Salud',
      date: 'Feb, 07',
      time: '06:00 am',
      status: 'pendiente',
    },
    {
      id: '3',
      title: 'Alistar reunión',
      category: 'Trabajo',
      date: 'Feb, 08',
      time: '06:00 am',
      status: 'atendida',
    },
    {
      id: '4',
      title: 'Comprar huevos',
      category: 'Casa',
      date: 'Feb, 06',
      time: '07:00 pm',
      status: 'atendida',
    },
  ];

  getAlarms(): Alarm[] {
    return this.alarms;
  }

  deleteAlarm(id: string): void {
    this.alarms = this.alarms.filter((alarm) => alarm.id !== id);
  }
}