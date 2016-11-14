var express = require('express');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;

var app = express();

var port = process.env.PORT || 3000;

// configure our server with all the middleware and routing
require('./middleware.js')(app, express);
require('./routes.js')(app, express);

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
