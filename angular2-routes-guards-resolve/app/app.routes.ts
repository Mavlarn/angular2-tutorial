import { Routes } from '@angular/router';

import { AboutRoutes } from './about/about.routes';
import { TodoRoutes } from './todo/todo.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/todo/list',
        pathMatch: 'full'
    },
  ...AboutRoutes,
  ...TodoRoutes
];
