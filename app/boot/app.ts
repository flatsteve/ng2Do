import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { TodoList } from '../components/todo-list/todo_list';
import { AddTodo } from '../components/add-todo/add_todo';
import { TodoService } from '../components/todo-service/todo_service';


@Component({
  selector: 'ng2-do',
  directives: [TodoList, AddTodo],
  template: `
    <div class="container">
      <todo-list></todo-list>
      <add-todo></add-todo>
    </div>
  `
})

class ng2Do {}

bootstrap(ng2Do, [TodoService]);
