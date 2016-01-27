import { Pipe } from 'angular2/core';

@Pipe({
  name: 'filterCompleted',
  // Pipes are not stateful by default,
  // This makes the pipe rerun then its input or output changes
  pure: false,
})

export class TodoPipe {
  temp = [];

  transform(todos, args) {
    var status = args[0];

    // Hack to stop errors in dev mode:
    // http://stackoverflow.com/questions/34476502/error-value-has-changed-after-checked-stateful-pipe-in-angular2
    var $this = this;

    $this.temp.length = 0;
    var tmp = todos.filter((todo) => todo.completed === status);

    tmp.forEach(function (todo) {
      $this.temp.push(todo);
    });

    return $this.temp;
    //return todos.filter((todo) => todo.completed === status);
  }
}
