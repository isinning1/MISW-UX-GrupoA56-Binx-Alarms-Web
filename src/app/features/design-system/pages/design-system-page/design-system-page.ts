import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-design-system-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './design-system-page.html',
  styleUrl: './design-system-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemPage {
  protected sampleText = '';
  protected sampleTime = '08:00';
  protected sampleCheckbox = true;
}