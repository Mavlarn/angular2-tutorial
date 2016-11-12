import { Route } from '@angular/router';

import { TodoListComponent } from './list/list.component';
import { TodoDetailComponent } from './detail/detail.component';

export const TodoRoutes: Route[] = [
    {
        path: 'todo/list',
        component: TodoListComponent
    },
    {
        path: 'todo/detail/:id',
        component: TodoDetailComponent
    }
];

