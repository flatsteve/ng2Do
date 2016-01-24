import { Component } from 'angular2/core';
import { Todo } from '/app/components/todo-model/todo_model';
import { TodoItem } from '/app/components/todo-item/todo_item';
import { AddTodo } from '/app/components/add-todo/add_todo';
import { TodoService } from '/app/services/todo_service';
import { NotificationService } from '/app/services/notification_service';

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

  constructor(todoService: TodoService, notificationService: NotificationService) {
    todoService.getAll().map(res => res.json())
      .subscribe(
        todos => this.todos = todos,
        err => notificationService.alert(err.json().message)
      );
  }
}
