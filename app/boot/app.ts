import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { TodoList } from '../components/todo_list';
import { AddTodo } from '../components/add_todo';
import { TodoService } from '../components/todo_service';


@Component({
  selector: 'flatdo',
  directives: [TodoList, AddTodo],
  template: `
    <div class="container">
      <todo-list></todo-list>
      <add-todo></add-todo>
    </div>
  `
})

class FlatDo {}

bootstrap(FlatDo, [TodoService]);
