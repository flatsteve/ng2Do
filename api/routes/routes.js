var appRouter = function (app) {
  app.get("/", function (req, res) {
    res.send({ title: 'todo1', description: 'todo1', importance: 1 });
  });
}

module.exports = appRouter;