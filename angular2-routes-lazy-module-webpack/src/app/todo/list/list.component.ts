import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class TodoListComponent {
    newTodo: Todo = new Todo();
    todos: Todo[];
    title: string;

    constructor(private todoService: TodoService, private route: ActivatedRoute) {
        this.todos = this.route.snapshot.data['todos'];
        this.title = this.route.data['title'];
    }

    addTodo() {
        if (!this.newTodo.title.trim()) {
            return;
        }
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
}
