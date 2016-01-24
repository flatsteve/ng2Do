var db = require('../db');
var ObjectId = require('mongodb').ObjectID;

// TODO figure how to dry up error handling

var appRouter = function(app) {
  // Get all todos
  app.get("/todo", function (req, res, next) {
    db.get().collection('todos').find().toArray(function(err, docs) {
      if(err) {
        return next(res.status(500).send({ message: 'something went wrong!' }));
      }

      res.json(docs);
    });
  });

  // Post doc
  app.post("/todo", function (req, res) {
    db.get().collection('todos').insert(req.body, function(err, doc) {
      if(err) { throw "exception"; }

      res.json(doc);
    });
  });

  // Delete doc
  app.delete("/todo/:todo_id", function (req, res) {
    db.get().collection('todos').remove({ _id: ObjectId(req.params.todo_id) }, function(err, status) {
      if(err) { throw "exception"; }

      res.send(status);
    });
  });
};

module.exports = appRouter;
