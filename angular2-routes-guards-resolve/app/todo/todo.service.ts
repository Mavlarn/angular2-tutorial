import {Injectable} from '@angular/core';
import {Todo} from './todo';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class TodoService {

  // 为了生成一个自增的id,保存最后一个生成的id
  lastId: number = 0;
  todos: Todo[] = []; // 任务列表

  constructor() {}

  // 添加一个任务
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // 从任务列表里删除一个任务
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // 更新一个任务
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Observable<Todo[]> {
    let todo1 = new Todo();
    todo1.id = 1;
    todo1.title = 'test task 1';
    todo1.createdDate = new Date();
    todo1.complete = false;
    let todo2 = new Todo();
    todo2.id = 2;
    todo2.title = 'test task 2';
    todo2.createdDate = new Date();
    todo2.complete = false;

    this.todos = [todo1, todo2];
    return Observable.of(this.todos).delay(3000);
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // 标记一个任务为完成/未完成
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}