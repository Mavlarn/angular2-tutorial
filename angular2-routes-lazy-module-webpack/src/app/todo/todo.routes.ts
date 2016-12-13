import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './list/list.component';
import { TodoDetailComponent } from './detail/detail.component';

import { MyTodoGuard, CanLeaveTodoDetailGuard } from './todo.guards';
import { MyTodoResolver } from './todo.resolver';

const TodoRoutes: Routes = [
    {
        path: 'list',
        component: TodoListComponent,
        canActivate: [MyTodoGuard],
        resolve: {
            todos: MyTodoResolver
        },
        data: {
            role: 'CUSTOMER',
            title: '列表'
        }
    },
    {
        path: 'detail/:id',
        component: TodoDetailComponent,
        canActivate: [MyTodoGuard],
        canDeactivate: [ CanLeaveTodoDetailGuard ],
        data: {
            role: 'CUSTOMER',
            title: '详情'
        }
    }
];

@NgModule({
  imports: [ RouterModule.forChild(TodoRoutes) ],
  exports: [ RouterModule ]
})
export class TodoRoutingModule { }

