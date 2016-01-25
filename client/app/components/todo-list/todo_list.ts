import { Component, NgFor, NgIf } from 'angular2/core';
import { Todo } from '/app/models/todo_model';
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

    <h3 class="todo-empty" [hidden]="todos.length">
      You have nothing to do! How boring <i class="fa fa-smile-o fa-lg"></i>
    </h3>

    <button (click)="toggle()"
            [disabled]="visible"
            class="add-button">
      <i class="fa fa-plus fa-lg"></i>
    </button>

    <add-todo [hidden]="!visible" [todos]="todos"></add-todo>
  `
})

export class TodoList {
  todos: Todo[];
  visible: boolean;

  constructor(todoService: TodoService, notificationService: NotificationService) {
    this.visible = false;
    this.todos = [];

    todoService.getAll().map(res => res.json())
      .subscribe(
        todos => this.todos = todos,
        err => notificationService.alert(err.json().message)
    );
  }

  toggle(): void {
    this.visible = !this.visible;
  }
}
