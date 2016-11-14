import { Route } from '@angular/router';

import { TodoListComponent } from './list/list.component';
import { TodoDetailComponent } from './detail/detail.component';

import { MyTodoGuard, CanLeaveTodoDetailGuard } from './todo.guards';
import { MyTodoResolver } from './todo.resolver';

export const TodoRoutes: Route[] = [
    {
        path: 'todo',
        data: {
            role: 'CUSTOMER',
            title: '任务'
        },
        canActivateChild: [MyTodoGuard],
        children: [
            {
                path: 'list',
                component: TodoListComponent,
                resolve: {
                    todos: MyTodoResolver
                },
                data: {
                    title: '列表'
                }
            },
            {
                path: 'detail/:id',
                component: TodoDetailComponent,
                canDeactivate: [ CanLeaveTodoDetailGuard ],
                data: {
                    title: '详情'
                }
            }
        ]
    }
];

