const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const socketHandler = require('./socketHandler');
const fs = require('fs');

// App init
const app = express();
var httpsPort;
var httpPort;
// Set ports and env variables
if (process.env.NODE_ENV === 'production') {
  httpsPort = 443;
  httpPort = 80;
} else if (process.env.NODE_ENV === 'dev') {
  httpsPort = 8080;
  httpPort = 3000;
  process.env.URL = 'https://localhost:8080';
}
// Configure server with all the middleware and routing
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

// Connect socket
const io = require('socket.io').listen(server);
mongoose.Promise = bluebird;

// Connect to mongoDB unless testing
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URL)
}

// Handle Socket Connections
io.on('connection', socketHandler);

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
