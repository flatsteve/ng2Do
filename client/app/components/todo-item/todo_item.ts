import { Component, Inject, forwardRef } from 'angular2/core';
import { Todo } from '/app/models/todo_model';
import { TodoList } from '/app/components/todo-list/todo_list';
import { TodoService } from '/app/services/todo_service';

@Component({
  selector: 'todo-item',
  host: {
    class: 'todo-item'
  },
  inputs: ['todo', 'index'],
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
      <label [hidden]="todo.completed" class="input-label--checkbox">
        <input class="input--checkbox" #cb type="checkbox" (change)="update(todo, cb.checked)"/>
      </label>

      <i [hidden]="!todo.completed"
         (click)="remove(todo._id, index)"
         class="todo-item__actions--delete fa fa-lg fa-times-circle-o"></i>
    </div>
  `
})

export class TodoItem {
  constructor(public todoService: TodoService, @Inject(forwardRef(() => TodoList)) todoList) {
    this.todoList = todoList;
  }

  remove(id: string, index): void {
    this.todoService.remove(id)
      .subscribe(
      this.todoList.todos.splice(index, 1),
        err => console.log(err)
    );
  }

  update(todo: Todo, status) {
    console.log(todo + ' ' + status);
    todo.completed = status;

    this.todoService.update(todo)
      .subscribe(
        (res) => console.log(res),
        err => console.log(err)
    );
  }
}
