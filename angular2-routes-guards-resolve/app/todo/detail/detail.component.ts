import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-detail',
    templateUrl: 'app/todo/detail/detail.component.html',
    styleUrls: ['app/todo/detail/detail.component.css']
})
export class TodoDetailComponent implements OnInit {
    selectedTodo: Todo;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private todoService: TodoService) {}

    ngOnInit() {
       // this.route.params.forEach((params: Params) => {
       //   let todoId = +params['id']; // (+) converts string 'id' to a number
       //  this.selectedTodo = this.todoService.getTodoById(todoId);
       //  if (!this.selectedTodo) {
       //      this.router.navigate(['/todo/list']);
       //  }
       // });

        let todoId = +this.route.snapshot.params['id'];
        let type = this.route.snapshot.params['type'];
        console.log('type in params:' + type);
        type = this.route.snapshot.queryParams['type'];
        console.log('type in queryParams:' + type);
        this.selectedTodo = this.todoService.getTodoById(todoId);
        if (!this.selectedTodo) {
            this.router.navigate(['/todo/list']);
        }
    }
    goBack() {
        window.history.back();
    }
}

