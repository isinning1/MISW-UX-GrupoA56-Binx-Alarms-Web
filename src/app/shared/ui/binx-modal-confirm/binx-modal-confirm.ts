import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-binx-modal-confirm',
  standalone: true,
  templateUrl: './binx-modal-confirm.html',
  styleUrl: './binx-modal-confirm.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BinxModalConfirm {
  @Input() title = 'Confirmación';
  @Input() message = '¿Desea continuar?';
  @Input() confirmText = 'Confirmar';
  @Input() cancelText = 'Cancelar';

  constructor(public activeModal: NgbActiveModal) {}
}