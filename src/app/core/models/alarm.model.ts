export type AlarmStatus = 'pendiente' | 'atendida';

export interface Alarm {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  status: AlarmStatus;
}