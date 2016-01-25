import { Component } from 'angular2/core';
import { Todo } from '/app/models/todo_model';
import { TodoService } from '/app/services/todo_service';

@Component({
  selector: 'todo-item',
  host: {
    class: 'todo-item'
  },
  inputs: ['todos', 'todo', 'index'],
  template: `
    <div class="todo-item__info">
      <h3 class="todo-item__info__title">
        {{todo.title}}
      </h3>
      <p [hidden]="!todo.description" class="todo-item__info__description">
        {{todo.description}}
      </p>
    </div>

    <div class="todo-item__actions">
      <i (click)="remove(todo._id, index)" class="fa fa-times-circle-o"></i>
    </div>
  `
})

export class TodoItem {
  todos: Todo[];
  todo: Todo;

  constructor(public todoService: TodoService) { }

  remove(id: string, index): void {
    this.todoService.remove(id)
      .subscribe(
        this.todos.splice(index, 1),
        err => console.log(err)
      );
  }
}
