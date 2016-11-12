import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-item',
    templateUrl: 'app/todo/item/item.component.html',
    styles: ['.completed { background: lightgreen; }'],
    styleUrls: ['app/todo/item/item.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class TodoItemComponent {
    @Input() todo: Todo;
    
    constructor(private todoService: TodoService, private router: Router) {
    }

    gotoDetail(todo) {
        this.router.navigate(['/todo/detail', todo.id], {queryParams: {type: 'ok'}});
    }

    toggleTodoComplete(todo) {
        this.todoService.toggleTodoComplete(todo);
    }
    removeTodo(todo) {
        this.todoService.deleteTodoById(todo.id);
    }
}

