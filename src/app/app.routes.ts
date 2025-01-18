import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
      path: 'page',
      loadComponent: () =>
        import('./page/page.component').then((m) => m.PageComponent),
    },
    {
      path: '**', // Wildcard route for a 404 page
      redirectTo: 'page',
    },
  ];