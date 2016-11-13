import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TodoListComponent }    from './list/list.component';
import { TodoDetailComponent }  from './detail/detail.component';
import { TodoItemComponent }  from './item/item.component';
import { TodoService } from './todo.service';
import { MyTodoResolver } from './todo.resolver';
import { MyTodoGuard } from './todo.guards';

@NgModule({
  imports:      [CommonModule, FormsModule ],
  declarations: [TodoListComponent, TodoDetailComponent, TodoItemComponent],
  providers:    [TodoService, MyTodoResolver, MyTodoGuard]
})
export class TodoModule {}