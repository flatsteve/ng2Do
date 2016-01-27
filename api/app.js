var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var cors = require('express-cors');

// Configure app and middleware
var app = express();

app.use(cors({allowedOrigins: ['http://localhost:8080']}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Configure app to use express routes
var routes = require("./routes/routes.js")(app);

// Connect to DB & start application
mongoose.connect('mongodb://localhost:27017/ng2do');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected');

  app.listen(3000, function () {
    console.log('Connected & listening on port 3000...');
  })
});
