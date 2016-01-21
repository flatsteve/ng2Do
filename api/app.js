var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require('express-cors');
var db = require('./db');

app.use(cors({allowedOrigins: ['http://localhost:8080']}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require("./routes/routes.js")(app);

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/ng2do', (err => {
  if (err) {
    console.log('Unable to connect to ngto2 DB');
    process.exit(1);
  } else {
    app.listen(3000, function () {
      console.log('Connected & listening on port 3000...');
    })
  }
}));
