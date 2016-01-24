import { Component, NgIf } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from 'angular2/common';
import { Todo } from '/app/components/todo-model/todo_model';
import { TodoService } from '/app/services/todo_service';

@Component({
  selector: 'add-todo',
  inputs: ['todos'],
  directives: [FORM_DIRECTIVES],
  template: `
    <form [ngFormModel]="todoForm" (ngSubmit)="onSubmit(todoForm.value)">
      <div class="input-group add-todo">
        <input type="text" class="input"
               [class.input--invalid]="!todoForm.find('title').valid && todoForm.find('title').touched"
               placeholder="e.g. World Takeover"
               [ngFormControl]="todoForm.controls['title']"/>

               <div *ngIf="!title.valid && title.touched"
                    class="input-error">You gotta know what to do dude...</div>
      </div>

      <div class="input-group">
        <textarea class="input input--textarea" placeholder="e.g. Figure out how to control the world"
                  [ngFormControl]="todoForm.controls['description']"></textarea>
      </div>

      <button type="submit" class="button" [disabled]="!todoForm.valid">
        Add todo
      </button>
    </form>
  `
})

export class AddTodo {
  todos: Todo[];
  todoForm: ControlGroup;
  title: AbstractControl;

  constructor(public todoService: TodoService, formBuilder: FormBuilder) {
    this.todoForm = formBuilder.group({
      'title': ['', Validators.required],
      'description': ''
    });

    this.title = this.todoForm.controls['title'];
  }

  onSubmit(todo: Todo): void {
    this.todoService.add(todo).map(res => res.json())
      .subscribe(
      // TODO this is weird
      (todo) => {
        this.todos.push(todo.ops[0]);
      },
      err => console.log(err);
  }
}
