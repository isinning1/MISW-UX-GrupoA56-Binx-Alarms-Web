import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Alarm } from '../../../../core/models/alarm.model';
import { AlarmService } from '../../../../core/services/alarm';
import { BinxModalInfo } from '../../../../shared/ui/binx-modal-info/binx-modal-info';
import { BinxModalConfirm } from '../../../../shared/ui/binx-modal-confirm/binx-modal-confirm';

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
  private readonly modalService = inject(NgbModal);

  protected alarms: Alarm[] = this.alarmService.getAlarms();

  protected onEdit(alarm: Alarm): void {
    const modalRef = this.modalService.open(BinxModalInfo, {
      centered: true,
    });

    modalRef.componentInstance.title = 'Edición restringida en web';
    modalRef.componentInstance.message =
      `Para editar la alarma "${alarm.title}", utilice la versión móvil de la app.`;
    modalRef.componentInstance.buttonText = 'Aceptar';
  }

  protected onConfirmAction(alarm: Alarm): void {
    const modalRef = this.modalService.open(BinxModalInfo, {
      centered: true,
    });

    modalRef.componentInstance.title = 'Acción en proceso';
    modalRef.componentInstance.message =
      `La acción sobre la alarma "${alarm.title}" se confirmará en un par de minutos.`;
    modalRef.componentInstance.buttonText = 'Entendido';
  }

  protected onDelete(alarm: Alarm): void {
    const modalRef = this.modalService.open(BinxModalConfirm, {
      centered: true,
    });

    modalRef.componentInstance.title = 'Eliminar alarma';
    modalRef.componentInstance.message =
      `¿Desea eliminar la alarma "${alarm.title}"?`;
    modalRef.componentInstance.confirmText = 'Eliminar';
    modalRef.componentInstance.cancelText = 'Cancelar';

    modalRef.result
      .then((result) => {
        if (result === true) {
          this.alarmService.deleteAlarm(alarm.id);
          this.alarms = this.alarmService.getAlarms();
        }
      })
      .catch(() => {});
  }
}