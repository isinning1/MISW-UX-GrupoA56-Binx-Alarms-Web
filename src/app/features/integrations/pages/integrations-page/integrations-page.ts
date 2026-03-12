import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { IntegrationItem } from '../../../../core/models/integration.model';
import { IntegrationsService } from '../../../../core/services/integrations';

@Component({
  selector: 'app-integrations-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './integrations-page.html',
  styleUrl: './integrations-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationsPage {
  private readonly integrationsService = inject(IntegrationsService);

  protected integrations: IntegrationItem[] =
    this.integrationsService.getIntegrations();

  protected onConnect(id: string): void {
    this.integrationsService.connect(id);
    this.integrations = this.integrationsService.getIntegrations();
  }

  protected onDisconnect(id: string): void {
    this.integrationsService.disconnect(id);
    this.integrations = this.integrationsService.getIntegrations();
  }

  protected onImportRules(id: string): void {
    this.integrationsService.importRules(id);
  }

  protected getProviderClass(provider: IntegrationItem['provider']): string {
    switch (provider) {
      case 'google':
        return 'integration-row__logo--google';
      case 'microsoft':
        return 'integration-row__logo--microsoft';
      default:
        return 'integration-row__logo--other';
    }
  }

  protected getProviderLetter(provider: IntegrationItem['provider']): string {
    switch (provider) {
      case 'google':
        return 'G';
      case 'microsoft':
        return 'M';
      default:
        return 'O';
    }
  }
}