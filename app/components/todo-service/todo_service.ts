import { Injectable } from 'angular2/core'
import { Todo } from './todo_model';

@Injectable()

export class TodoService {
  todos = [];

  add(todo: Todo): void {
    this.todos.push(todo);
  }

  remove(): void {

  }
}
