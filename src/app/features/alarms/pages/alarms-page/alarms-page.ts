import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Alarm } from '../../../../core/models/alarm.model';
import { AlarmService } from '../../../../core/services/alarm';

@Component({
  selector: 'app-alarms-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alarms-page.html',
  styleUrl: './alarms-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmsPage {
  private readonly alarmService = inject(AlarmService);

  protected alarms: Alarm[] = this.alarmService.getAlarms();

  protected onEdit(alarm: Alarm): void {
    console.log('Editar alarma:', alarm);
  }

  protected onDelete(alarmId: string): void {
    this.alarmService.deleteAlarm(alarmId);
    this.alarms = this.alarmService.getAlarms();
  }
}