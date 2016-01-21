import { Component } from 'angular2/core';
import { Todo } from '../todo-model/todo_model';
import { TodoService } from '../todo-service/todo_service';

@Component({
  selector: 'todo-item',
  host: {
    class: 'list-group-item'
  },
  inputs: ['todo', 'index'],
  template: `
    <h3 class="list-group-item-heading">{{todo.title}}</h3>
    <p class="list-group-item-text">{{todo.description}}</p>
    <i (click)="remove(index)" class="fa fa-times-circle-o"></i>
  `
})

export class TodoItem {
  todo: Todo;
  index: number;

  constructor(public todoService: TodoService) { }

  remove(index): void {
    console.log(index);
    this.todoService.remove(index);
  }
}
