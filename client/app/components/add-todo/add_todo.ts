import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from 'angular2/common';
import { Todo } from '../todo-model/todo_model';
import { TodoService } from '../todo-service/todo_service';

@Component({
  selector: 'add-todo',
  directives: [FORM_DIRECTIVES],
  template: `
    <form [ngFormModel]="todoForm" (ngSubmit)="onSubmit(todoForm.value)" class="form-horizontal">
      <div class="form-group" [class.has-danger]="!todoForm.find('title').valid && todoForm.find('title').touched">
        <input type="text" class="form-control" placeholder="e.g. World Takeover"
               [ngFormControl]="todoForm.controls['title']"/>
      </div>

      <div class="form-group">
        <textarea class="form-control" placeholder="e.g. Figure out how to control the world"
                  [ngFormControl]="todoForm.controls['description']"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">
        Add todo
      </button>
    </form>
  `
})

export class AddTodo {
  todoForm: ControlGroup;

  constructor(public todoService: TodoService, formBuilder: FormBuilder) {
    this.todoForm = formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  onSubmit(todo: Todo): void {
    this.todoService.add(todo);
  }
}
