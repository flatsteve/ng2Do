import { Component } from 'angular2/core';
import { Todo } from './todo_model';

@Component({
  selector: 'todo-item',
  host: {
    class: 'list-group-item'
  },
  inputs: ['todo'],
  template: `
    <h3 class="list-group-item-heading">{{todo.title}}</h3>
    <p class="list-group-item-text">{{todo.description}}</p>
    <i (click)="remove(todo)" class="fa fa-times-circle-o"></i>
  `
})

export class TodoItem {
  todo: Todo;

  remove(todo): void {
    console.log(todo);
  }
}
