var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    shortid = require('shortid'),
    multer = require('multer');


var config = require('./config/config.js'),
    cors = require('./config/cors.js'),
    index = require('./routes/index'),
    packages = require('./routes/packages');


mongoose.connect(config.mongoUri);
var app = express();

app.enable('strict routing');

app.use(cors);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/packages', packages);

app.listen(config.port);
console.log(
    'cookiejar running on port ' + config.port + '\n' +
    'mongo-url is ' + config.mongoUri + '.'
);

module.exports = app;