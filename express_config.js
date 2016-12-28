var cookieSession = require('cookie-session')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var movieRoute = require('./routes/movieRoute');
var userRoute = require('./routes/userRoute');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ["chave-para-cookie1","chave-para-cookie2"],
  maxAge: 24 * 60 * 60 * 1000 * 365 // 365 dias
}))


app.use('/', movieRoute);
app.use('/user', userRoute);
app.use('*', index);

module.exports = app;
