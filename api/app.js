const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');

const weatherAPIRouter = require('./routes/weatherAPI');

const app = express();
const allowedOrigins =
  'http://weather-check.tech' || 'https://weather-check.tech';

const corsOptions = {
  origin: 'http://weather-check.tech' || 'https://weather-check.tech',
};

// Formatting the date and time to ET
const utcDate = new Date();
const etOffset = -4 * 60;
const etTime = new Date(utcDate.getTime() + etOffset * 60 * 1000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

// Checks if requesting URL is equal to the allowed origin, if so, moves on to next middleware.
// If not, responds with a 403 status and displays Forbidden to the user.
app.use((req, res, next) => {
  const requestOrigin = req.headers.origin;
  const ipv4Address = req.socket.remoteAddress.replace(/^.*:/, '');

  console.log('Date: ', etTime);
  console.log('IP Address: ', ipv4Address);

  if (req.method === 'GET' && requestOrigin === allowedOrigins) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
});

app.use('/weatherAPI', weatherAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
