import { Injectable } from 'angular2/core'
import { Todo } from '../todo-model/todo_model';

@Injectable()

export class TodoService {
  todos = [
    new Todo({ title: 'todo 1 ', description: 'todo 1', importance: 1 }),
    new Todo({ title: 'todo 2 ', description: 'todo 2', importance: 1 })
  ];

  add(todo: Todo): void {
    this.todos.push(new Todo(todo));
  }

  remove(index): void {
    this.todos.splice(index, 1);
  }
}
