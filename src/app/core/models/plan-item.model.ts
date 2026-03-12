export interface PlanItem {
  id: string;
  date: string;
  time: string;
  title: string;
  category: string;
  status: 'pendiente' | 'atendida';
}