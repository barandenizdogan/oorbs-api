var bodyParser = require('body-parser');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eastereggRouter = require('./routes/easteregg');
var photosRoutes = require('./routes/photos');
var abstractRoutes = require('./routes/abstract');
var artRoutes = require('./routes/art');
var blackRoutes = require('./routes/black');
var cityRoutes = require('./routes/city');
var minimalRoutes = require('./routes/minimal');
var mountainRoutes = require('./routes/mountain');
var natureRoutes = require('./routes/nature');
var neonRoutes = require('./routes/neon');
var nightRoutes = require('./routes/night');
var spaceRoutes = require('./routes/space');
var wallpaperRoutes = require('./routes/wallpaper');

var app = express();

app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/easteregg', eastereggRouter);
app.use('/photos', photosRoutes);
app.use('/photos/abstract', abstractRoutes);
app.use('/photos/art', artRoutes);
app.use('/photos/black', blackRoutes);
app.use('/photos/city', cityRoutes);
app.use('/photos/minimal', minimalRoutes);
app.use('/photos/mountain', mountainRoutes);
app.use('/photos/nature', natureRoutes);
app.use('/photos/neon', neonRoutes);
app.use('/photos/night', nightRoutes);
app.use('/photos/space', spaceRoutes);
app.use('/photos/wallpaper', wallpaperRoutes);


module.exports = app;
