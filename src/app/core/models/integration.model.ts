export interface IntegrationItem {
  id: string;
  name: string;
  provider: 'google' | 'microsoft' | 'other';
  connected: boolean;
}