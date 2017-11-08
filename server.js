var express = require("express");
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));


app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use(express.static(path.join(__dirname, 'public')));
// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
const port = process.env.PORT || '3100';
app.set('port', port);
const server = http.createServer(app);
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

require("./server/app")(app);

require("./server/services/widget.service.server")(app);

server.listen( port );
