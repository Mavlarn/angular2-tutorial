import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/list/list.component.html',
    styleUrls: ['app/todo//list/list.component.css']
})
export class TodoListComponent {
    newTodo: Todo = new Todo();
    todos: Todo[];

    constructor(private todoService: TodoService, private route: ActivatedRoute) {
        this.todos = this.route.snapshot.data['todos'];
    }

    addTodo() {
        if (!this.newTodo.title.trim()) {
            return;
        }
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
}
