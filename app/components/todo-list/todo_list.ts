import { Component } from 'angular2/core';
import { Todo } from '../todo-model/todo_model';
import { TodoItem } from '../todo-item/todo_item';
import { TodoService } from '../todo-service/todo_service'

@Component({
  selector: 'todo-list',
  host: {
    class: 'list-group'
  },
  directives: [TodoItem],
  inputs: ['todo'],
  template: `
    <todo-item *ngFor="#todo of todos; #i = index" [index]="i" [todo]="todo"></todo-item>
  `
})


export class TodoList {
  todos: Todo[];

  constructor(todoService: TodoService) {
    this.todos = todoService.todos;
  }
}
