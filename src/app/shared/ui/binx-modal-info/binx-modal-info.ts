import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-binx-modal-info',
  standalone: true,
  templateUrl: './binx-modal-info.html',
  styleUrl: './binx-modal-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BinxModalInfo {
  @Input() title = 'Información';
  @Input() message = '';
  @Input() buttonText = 'Aceptar';

  constructor(public activeModal: NgbActiveModal) {}
}