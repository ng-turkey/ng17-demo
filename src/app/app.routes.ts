import { Routes } from '@angular/router';
import { NAME } from './injector-tree/injector-tree.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
        loadComponent: () => import('./deferred-loading/deferred-loading.component'),
      },
      {
        path: 'view-transition',
        loadChildren: () => import('./view-transition/books.routes'),
      },
      {
        path: 'injector-tree',
        loadComponent: () => import('./injector-tree/injector-tree.component'),

        providers: [
          {
            provide: NAME,
            useFactory() {
              return 'Router';
            },
          },
        ],
      },
    ],
  },
];
