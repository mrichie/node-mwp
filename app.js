var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//var connect = require('connect');
var weibo = require('weibo');

//weibo.init('weibo', '$appkey', '$secret');
weibo.init('weibo', '2069219855', '909918af036010b953986a9a8b34f90b');

app.use(session({ secret: "oh year a secret" }));

app.use(
    // using weibo.oauth middleware for use login
    // will auto save user in req.session.oauthUser

    weibo.oauth({
	loginPath: '/login',
	logoutPath: '/logout',
	blogtypeField: 'type',
	afterLogin: function (req, res, callback) {
	    console.log(req.session.oauthUser.screen_name, 'login success');
	    process.nextTick(callback);
	},
	beforeLogout: function (req, res, callback) {
	    console.log(req.session.oauthUser.screen_name, 'loging out');
	    process.nextTick(callback);
	}
    })
);

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
