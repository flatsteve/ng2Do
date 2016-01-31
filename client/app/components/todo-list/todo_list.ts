import { Component, NgFor, NgIf } from 'angular2/core';
import { NgClass } from 'angular2/common';
import { Todo } from '/app/models/todo_model';
import { TodoItem } from '/app/components/todo-item/todo_item';
import { AddTodo } from '/app/components/add-todo/add_todo';
import { TodoService } from '/app/services/todo_service';
import { NotificationService } from '/app/services/notification_service';
import { TodoPipe } from '/app/pipes/todo_pipe';

@Component({
  selector: 'todo-list',
  host: {
    class: 'todo-list'
  },
  directives: [TodoItem, AddTodo],
  pipes: [TodoPipe],
  inputs: ['todo'],
  template: `
    <nav class="todo-status">
      <ul class="todo-status__list" *ngIf="todos.length">
        <li class="todo-status__list__item" [ngClass]="{active: !taskCompletedStatus}"
            (click)="showCompleted(false)">
          Open tasks
        </li>
        <li class="todo-status__list__item"
            (click)="showCompleted(true)" [ngClass]="{active: taskCompletedStatus}">
          Closed tasks
        </li>
      </ul>
    </nav>

    <todo-item *ngFor="#todo of todos | filterCompleted:taskCompletedStatus; #i = index"
               [todo]="todo" [index]="i"></todo-item>

    <h3 class="todo-empty" [hidden]="todos.length">
      You have nothing to do! How boring <i class="fa fa-smile-o fa-lg"></i>
    </h3>

    <button (click)="toggle()"
            [disabled]="visible"
            class="add-button">
      <i class="fa fa-plus fa-lg"></i>
    </button>

    <add-todo [hidden]="!visible"></add-todo>
  `
})

export class TodoList {
  todos: Todo[];
  visible: boolean;
  taskCompletedStatus: boolean;

  constructor(todoService: TodoService, notificationService: NotificationService) {
    // Stops ngFor throwing error when todos are not yet defined
    this.todos = [];

    todoService.todos.subscribe(
        todos => this.todos = todos,
        err => notificationService.alert(err.json().message));

    this.visible = false;
    this.taskCompletedStatus = false;
  }

  toggle(): void {
    this.visible = !this.visible;
  }

  showCompleted(status: boolean): void {
    this.taskCompletedStatus = status;
  }
}
