import { NgModule, ModuleWithProviders }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TodoListComponent }    from './list/list.component';
import { TodoDetailComponent }  from './detail/detail.component';
import { TodoItemComponent }  from './item/item.component';
import { TodoService } from './todo.service';
import { MyTodoResolver } from './todo.resolver';
import { MyTodoGuard, CanLeaveTodoDetailGuard } from './todo.guards';
import { TodoRoutingModule } from './todo.routes';

@NgModule({
  imports: [CommonModule, FormsModule, TodoRoutingModule ],
  declarations: [TodoListComponent, TodoDetailComponent, TodoItemComponent],
  providers: [TodoService, MyTodoResolver, MyTodoGuard, CanLeaveTodoDetailGuard]
})
export class TodoModule {}
