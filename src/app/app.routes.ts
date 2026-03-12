import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login-page/login-page').then(
        (m) => m.LoginPage,
      ),
    title: 'BINX | Inicio de sesión',
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell').then((m) => m.Shell),
    children: [
      {
        path: 'plan',
        loadComponent: () =>
          import('./features/plan/pages/plan-page/plan-page').then(
            (m) => m.PlanPage,
          ),
        title: 'BINX | Plan del día',
      },
      {
        path: 'alarmas',
        loadComponent: () =>
          import('./features/alarms/pages/alarms-page/alarms-page').then(
            (m) => m.AlarmsPage,
          ),
        title: 'BINX | Alarmas',
      },
      {
        path: 'resumen',
        loadComponent: () =>
          import('./features/summary/pages/summary-page/summary-page').then(
            (m) => m.SummaryPage,
          ),
        title: 'BINX | Resumen',
      },
      {
        path: 'preferencias',
        loadComponent: () =>
          import(
            './features/preferences/pages/preferences-page/preferences-page'
          ).then((m) => m.PreferencesPage),
        title: 'BINX | Preferencias',
      },
      {
        path: 'integraciones',
        loadComponent: () =>
          import(
            './features/integrations/pages/integrations-page/integrations-page'
          ).then((m) => m.IntegrationsPage),
        title: 'BINX | Integraciones',
      },
      {
        path: 'design-system',
        loadComponent: () =>
          import(
            './features/design-system/pages/design-system-page/design-system-page'
          ).then((m) => m.DesignSystemPage),
        title: 'BINX | Design System',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];