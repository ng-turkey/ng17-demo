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
        title: 'New Brand',
      },
      {
        path: 'control-flow',
        loadComponent: () => import('./control-flow/control-flow.component'),
        title: 'Control Flow',
      },
      {
        path: 'deferred-loading',
        loadComponent: () => import('./deferred-loading/deferred-loading.component'),
        title: 'Deferred Loading',
      },
      {
        path: 'view-transition',
        loadChildren: () => import('./view-transition/books.routes'),
        title: 'View Transition',
      },
      {
        path: 'injector-tree',
        loadComponent: () => import('./injector-tree/injector-tree.component'),
        title: 'Injector Tree',
        providers: [
          {
            provide: NAME,
            useValue: 'From Router',
          },
        ],
      },
      {
        path: 'new-lifecycle-hooks',
        loadComponent: () => import('./new-lifecycle-hooks/new-lifecycle-hooks.component'),
        title: 'New Lifecycle Hooks',
      },
      {
        path: 'other-changes',
        loadComponent: () => import('./other-changes/other-changes.component'),
        title: 'Other Changes',
      },
    ],
  },
];
