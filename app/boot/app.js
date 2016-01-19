System.register(['angular2/platform/browser', 'angular2/core', '../components/todo_list', '../components/add_todo', '../components/todo_service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, todo_list_1, add_todo_1, todo_service_1;
    var FlatDo;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            },
            function (add_todo_1_1) {
                add_todo_1 = add_todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            FlatDo = (function () {
                function FlatDo() {
                }
                FlatDo = __decorate([
                    core_1.Component({
                        selector: 'flatdo',
                        directives: [todo_list_1.TodoList, add_todo_1.AddTodo],
                        template: "\n    <div class=\"container\">\n      <todo-list></todo-list>\n      <add-todo></add-todo>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlatDo);
                return FlatDo;
            })();
            browser_1.bootstrap(FlatDo, [todo_service_1.TodoService]);
        }
    }
});
//# sourceMappingURL=app.js.map