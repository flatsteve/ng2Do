var mongoose = require('mongoose');
var appRouter = function (app) {

  var todoSchema = mongoose.Schema({
    title: String,
    description: String,
    importance: {
      type: Number,
      default: 1
    },
    completed: {
      type: Boolean,
      default: false
    }
  });

  var Todo = mongoose.model('Todo', todoSchema);

  // Get all todos
  app.get("/todo", function (req, res) {
    Todo.find(function (err, todos) {
      res.json(todos);
    });
  });

  // Add new
  app.post("/todo", function (req, res, next) {
    var todo = new Todo(req.body);

    todo.save(function (err, todo) {
      if (err) {
        return next(err)
      }

      res.json(201, todo)
    });
  });

  // Delete existing
  app.delete("/todo/:todo_id", function (req, res, next) {
    Todo.findOne({_id: req.params.todo_id}, function (err, model) {
      if (err) {
        return next(err);
      }

      model.remove(function () {
        res.sendStatus(200);
      });
    });
  });

  // Update existing
  app.put("/todo/:todo_id", function (req, res) {
    Todo.findOne({_id: req.params.todo_id}, function (err, model) {
      if (err) {
        return;
      }

      model.update({completed: req.body.completed}, function (err, updatedTodo) {
        res.json(updatedTodo);
      });
    });
  });
};

module.exports = appRouter;
