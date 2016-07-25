// SERVER //

var express = require('express');
var app = express();

// Routes //

var index = require('./routes/index.js');

// Port //

var port = process.env.PORT || 9000;

app.use(express.static('server/public'));

// Routes and Server connection //

app.use('/', index);

// Server //

var server = app.listen(port, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});


module.exports = app;
