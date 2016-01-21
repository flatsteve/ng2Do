export class Todo {
  title: string;
  description: string;
  importance: number;

  constructor(todo:Todo) {
    this.title = todo.title;
    this.description = todo.description;
    this.importance = todo.importance;
  }
}
