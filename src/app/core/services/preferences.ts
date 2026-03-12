import { Injectable } from '@angular/core';
import { Preferences } from '../models/preferences.model';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  private preferences: Preferences = {
    criticalSnoozeLimit: 2,
    discreteMode: true,
    workdayStart: '08:00',
    workdayEnd: '18:00',
  };

  getPreferences(): Preferences {
    return { ...this.preferences };
  }

  savePreferences(preferences: Preferences): void {
    this.preferences = { ...preferences };
  }
}