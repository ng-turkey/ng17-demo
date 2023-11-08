import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/new-brand',
    pathMatch: 'full',
  },
  {
    path: 'new-brand',
    loadComponent: () => import('./new-brand/new-brand.component'),
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./control-flow/control-flow.component'),
  },
  {
    path: 'deferred-loading',
    loadComponent: () =>
      import('./deferred-loading/deferred-loading.component'),
  },
];
