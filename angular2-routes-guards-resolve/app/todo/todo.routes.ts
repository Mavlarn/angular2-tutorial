import { Route } from '@angular/router';

import { TodoListComponent } from './list/list.component';
import { TodoDetailComponent } from './detail/detail.component';

import { MyTodoGuard } from './todo.guards';
import { MyTodoResolver } from './todo.resolver';

export const TodoRoutes: Route[] = [
    {
        path: 'todo',
        data: {
            role: 'CUSTOMER'
        },
        canActivateChild: [MyTodoGuard],
        canActivate: [MyTodoGuard],
        children: [
            {
                path: 'list',
                component: TodoListComponent,
                resolve: {
                    todos: MyTodoResolver
                }
            },
            {
                path: 'detail/:id',
                component: TodoDetailComponent
            }
        ]
    }
];

