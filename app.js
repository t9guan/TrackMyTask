
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var task = require('./routes/task');
var add = require('./routes/add')
var login = require('./routes/login');
var register = require('./routes/register');
var faq = require('./routes/faq');
var log = require('./routes/log');
var edit = require('./routes/edit');
var report = require('./routes/report');
var profile = require('./routes/profile');

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
app.get('/add', add.view);
app.get('/edit', edit.view);
app.get('/log', log.view);
app.get('/add/addTask', add.addTask);
app.get('/report', report.view);
app.get('/profile', profile.view);
app.get('/views/index.handlebars', index.view);
app.get('/views/login.handlebars', login.view);
app.get('/views/register.handlebars', register.view);
app.get('/views/faq.handlebars', faq.view);
app.get('/task/:id/:endTime/:timeTaken', task.id);
app.get('/report/chart', report.chart);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
