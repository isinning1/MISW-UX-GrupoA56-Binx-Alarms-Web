import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Preferences } from '../../../../core/models/preferences.model';
import { PreferencesService } from '../../../../core/services/preferences';

@Component({
  selector: 'app-preferences-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './preferences-page.html',
  styleUrl: './preferences-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesPage {
  private readonly preferencesService = inject(PreferencesService);

  protected preferences: Preferences =
    this.preferencesService.getPreferences();

  protected savedMessage = '';

  protected onSave(): void {
    this.preferencesService.savePreferences(this.preferences);
    this.savedMessage = 'Preferencias guardadas correctamente.';
  }
}