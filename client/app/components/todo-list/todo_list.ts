import { Component } from 'angular2/core';
import { Todo } from '../todo-model/todo_model';
import { TodoItem } from '../todo-item/todo_item';
import { TodoService } from '../todo-service/todo_service'
import { AddTodo } from '../add-todo/add_todo';

@Component({
  selector: 'todo-list',
  host: {
    class: 'todo-list'
  },
  directives: [TodoItem, AddTodo],
  inputs: ['todo'],
  template: `
    <h1 class="title">There is no try</h1>
    <todo-item *ngFor="#todo of todos; #i = index" [todos]="todos" [todo]="todo" [index]="i"></todo-item>
    <add-todo [todos]="todos"></add-todo>
  `
})

export class TodoList {
  todos: Todo[];

  constructor(todoService: TodoService) {
    todoService.getAll().map(res => res.json())
      .subscribe(
        todos => this.todos = todos,
        err => console.log(err)
      );
  }
}
