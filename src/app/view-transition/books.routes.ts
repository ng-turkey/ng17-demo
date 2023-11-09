import { Routes } from '@angular/router';

const booksRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./books.component'),
  },
  {
    path: ':id',
    loadComponent: () => import('./book-details/book-details.component'),
  },
];

export default booksRoutes;
