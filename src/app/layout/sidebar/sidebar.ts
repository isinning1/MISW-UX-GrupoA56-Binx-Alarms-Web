import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  protected readonly items: SidebarItem[] = [
    {
      label: 'Plan del Día',
      icon: 'bi-card-checklist',
      route: '/plan',
    },
    {
      label: 'Alarmas',
      icon: 'bi-bell-fill',
      route: '/alarmas',
    },
    {
      label: 'Resumen',
      icon: 'bi-bar-chart-fill',
      route: '/resumen',
    },
    {
      label: 'Preferencias',
      icon: 'bi-gear-fill',
      route: '/preferencias',
    },
    {
      label: 'Integraciones',
      icon: 'bi-arrow-left-right',
      route: '/integraciones',
    },
  ];
}