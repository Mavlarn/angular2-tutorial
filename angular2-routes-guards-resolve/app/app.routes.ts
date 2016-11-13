import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodoRoutes } from './todo/todo.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    ...TodoRoutes
];
