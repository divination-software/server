const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const passport = require('passport');
const fs = require('fs');
const socketHandler = require('./socketHandler');
const ioInfo = require('./ioInfo');

// App init
const app = express();

var httpsPort = process.env.HTTPS_PORT;
var httpPort = process.env.HTTP_PORT;
// Configure server with middleware, routing, and auth
require('./auth.js')(passport);
require('./middleware.js')(app, express);
require('./routes.js')(app, express);

// Export App for testing
module.exports = app;

// Configure HTTPS server
var options = {
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem')
}
const server = require('https').createServer(options, app);

// Connect socket.io
ioInfo.connect(server);
mongoose.Promise = bluebird;

// Connect to mongoDB unless testing
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URL)
}

// Handle Socket Connections
ioInfo.io.on('connection', socketHandler);

// On connection , listen to port
mongoose.connection.on('connected', () => {
  server.listen(httpsPort, function() {
    console.log('Listening on port ' + httpsPort);
  })
})

// Set up http server to redirect to https
var http = express();
http.get('*', function(req,res){
    res.redirect(process.env.URL + req.url)
})
http.listen(httpPort);
