System.register(['angular2/core', 'angular2/common', './todo_service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, todo_service_1;
    var AddTodo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            AddTodo = (function () {
                function AddTodo(todoService, formBuilder) {
                    this.todoService = todoService;
                    this.todoForm = formBuilder.group({
                        'title': ['', common_1.Validators.required],
                        'description': ['']
                    });
                }
                AddTodo.prototype.onSubmit = function (todo) {
                    this.todoService.add(todo);
                };
                AddTodo = __decorate([
                    core_1.Component({
                        selector: 'add-todo',
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n    <form [ngFormModel]=\"todoForm\" (ngSubmit)=\"onSubmit(todoForm.value)\" class=\"form-horizontal\">\n      <div class=\"form-group\" [class.has-danger]=\"!todoForm.find('title').valid && todoForm.find('title').touched\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"e.g. World Takeover\"\n               [ngFormControl]=\"todoForm.controls['title']\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" placeholder=\"e.g. Figure out how to control the world\"\n                  [ngFormControl]=\"todoForm.controls['description']\"></textarea>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">\n        Add todo\n      </button>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, common_1.FormBuilder])
                ], AddTodo);
                return AddTodo;
            })();
            exports_1("AddTodo", AddTodo);
        }
    }
});
//# sourceMappingURL=add_todo.js.map