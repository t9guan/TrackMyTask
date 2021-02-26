
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var task = require('./routes/task');
<<<<<<< HEAD
var add = require('./routes/add')
=======
var login = require('./routes/login');
var register = require('./routes/register');
>>>>>>> 52247a281b8e48cd24efe3b2b5423ede1ddbc300
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/task/:index', task.view);
<<<<<<< HEAD
app.get('/add', add.view);
//app.get('/views/index.handlebars', index.view);
=======
//app.get('/add', add.view);
app.get('/views/index.handlebars', index.view);
app.get('/views/login.handlebars', login.view);
app.get('/views/register.handlebars', register.view);
>>>>>>> 52247a281b8e48cd24efe3b2b5423ede1ddbc300
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
