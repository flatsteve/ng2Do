System.register([], function(exports_1) {
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(todo) {
                    this.title = todo.title;
                    this.description = todo.description;
                    this.importance = todo.importance || 1;
                }
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});
