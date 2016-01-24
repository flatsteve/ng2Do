import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TodoList } from '/app/components/todo-list/todo_list';
import { TodoService } from '/app/services/todo_service';
import { NotificationService } from '/app/services/notification_service';


@Component({
  selector: 'ng2-do',
  directives: [TodoList],
  template: `
    <div class="container container--center">
      <todo-list></todo-list>
    </div>
  `
})

class ng2Do {}

bootstrap(ng2Do, [HTTP_PROVIDERS, TodoService, NotificationService]);
