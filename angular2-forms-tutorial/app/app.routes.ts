import { Routes } from '@angular/router';

import { TemplateFormsRoutes } from './template-forms/template-forms.routes';
import { ReactiveFormsRoutes } from './reactive-forms/reactive-forms.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/template-forms',
        pathMatch: 'full'
    },
  ...TemplateFormsRoutes,
  ...ReactiveFormsRoutes
];
