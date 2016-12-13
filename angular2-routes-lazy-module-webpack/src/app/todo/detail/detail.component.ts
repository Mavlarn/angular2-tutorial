import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class TodoDetailComponent implements OnInit {
    selectedTodo: Todo;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private todoService: TodoService) {}

    ngOnInit() {
        let todoId = +this.route.snapshot.params['id'];
        this.selectedTodo = this.todoService.getTodoById(todoId);
        if (!this.selectedTodo) {
            this.router.navigate(['/todo/list']);
        }
    }
    goBack() {
        window.history.back();
    }
}

