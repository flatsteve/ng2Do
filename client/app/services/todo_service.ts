import { Injectable } from 'angular2/core'
import {Http, Headers} from 'angular2/http';
import { Todo } from '/app/components/todo-model/todo_model';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  constructor(public http: Http) {}

  getAll() {
    return this.http.get('http://localhost:3000/todo');
  }

  add(todo: Todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/todo', JSON.stringify(todo), { headers: headers });
  }

  remove(id: string) {
    return this.http.delete(`http://localhost:3000/todo/${id}`);
  }
}
