import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Injectable()
export class MyTodoResolver implements Resolve<Todo> {

    constructor(private todoService: TodoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('Get my todo list.');
        return this.todoService.getAllTodos();
    }
}
