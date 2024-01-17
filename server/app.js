var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressJWT = require('express-jwt')
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let userRouter = require('./routes/admin/login')
let ceshiRouter = require('./routes/admin/ceshi')
const config = require('./config')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//注册token加密解密
app.use(expressJWT.expressjwt({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({path:[/^\/adminapi/]}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(indexRouter)
app.use(userRouter)
app.use(ceshiRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  if(err.name==='UnauthorizedError') return res.send({
    code:'-1',
    msg:'身份认证失败'
  })
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
