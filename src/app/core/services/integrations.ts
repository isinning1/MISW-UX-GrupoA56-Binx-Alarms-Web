import { Injectable } from '@angular/core';
import { IntegrationItem } from '../models/integration.model';

@Injectable({
  providedIn: 'root',
})
export class IntegrationsService {
  private integrations: IntegrationItem[] = [
    {
      id: '1',
      name: 'Google',
      provider: 'google',
      connected: true,
    },
    {
      id: '2',
      name: 'Microsoft',
      provider: 'microsoft',
      connected: false,
    },
    {
      id: '3',
      name: 'Otro Proveedor',
      provider: 'other',
      connected: false,
    },
  ];

  getIntegrations(): IntegrationItem[] {
    return this.integrations;
  }

  connect(id: string): void {
    this.integrations = this.integrations.map((item) =>
      item.id === id ? { ...item, connected: true } : item,
    );
  }

  disconnect(id: string): void {
    this.integrations = this.integrations.map((item) =>
      item.id === id ? { ...item, connected: false } : item,
    );
  }

  importRules(id: string): void {
    console.log('Importar reglas para integración:', id);
  }
}