import { Component, Query, NgIf, Inject, forwardRef } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from 'angular2/common';
import { Todo } from '/app/models/todo_model';
import { TodoList } from '/app/components/todo-list/todo_list';
import { TodoService } from '/app/services/todo_service';

@Component({
  selector: 'add-todo',
  inputs: ['todos'],
  directives: [FORM_DIRECTIVES],
  template: `
    <form [ngFormModel]="todoForm" (ngSubmit)="onSubmit(todoForm.value)">

      <div class="input-group">
        <label class="input-label" for="title">
          Title
        </label>

        <input type="text" id="title" class="input"
               [class.input--invalid]="!todoForm.find('title').valid && todoForm.find('title').touched"
               placeholder="e.g. World Takeover"
               [ngFormControl]="todoForm.controls['title']"/>

               <div *ngIf="!title.valid && title.touched"
                    class="input-error">You gotta know what to do dude...</div>
      </div>

      <div class="input-group">
        <label class="input-label" for="description">
          Description
        </label>

        <textarea class="input input--textarea" id="description"
                  placeholder="e.g. Figure out how to control the world"
                  [ngFormControl]="todoForm.controls['description']"></textarea>
      </div>

      <div class="control-group control-group--right">
        <button type="submit" class="button" [disabled]="!todoForm.valid">
          Add todo
        </button>

        <button (click)="toggle()" type="button" class="button button--negative">
          Cancel
        </button>
      </div>
    </form>
  `
})

export class AddTodo {
  todos: Todo[];
  todoForm: ControlGroup;
  title: AbstractControl;

  constructor(public todoService: TodoService, formBuilder: FormBuilder, @Inject(forwardRef(() => TodoList)) todoList) {
    this.todoForm = formBuilder.group({
      'title': ['', Validators.required],
      'description': ''
    });

    this.title = this.todoForm.controls['title'];
    this.todoList = todoList;
  }

  toggle() {
    this.todoList.toggle();
  }

  onSubmit(todo: Todo): void {
    this.todoService.add(todo).map(res => res.json())
      .subscribe(
      // TODO this is weird
      (todo) => {
        this.todos.push(todo.ops[0]);
        this.todoList.toggle();
      },
      err => console.log(err));
  }
}
