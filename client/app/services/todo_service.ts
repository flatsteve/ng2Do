import { Injectable } from 'angular2/core'
import {Http, Headers} from 'angular2/http';
import { Todo } from '/app/components/todo-model/todo_model';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  todos: Todo[];

  constructor(public http: Http) {
    this.todos = http.get('http://localhost:3000/todo').map(res => res.json());
  }

  add(todo: Todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/todo', JSON.stringify(todo), { headers: headers });
  }

  remove(id: string) {
    return this.http.delete(`http://localhost:3000/todo/${id}`);
  }

  update(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/todo/${todo._id}`, JSON.stringify(todo), { headers: headers });
  }
}
