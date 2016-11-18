const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const socketHandler = require('./socketHandler');

// App init
const app = express();

// Configure server with all the middleware and routing
require('./middleware.js')(app, express);
require('./routes.js')(app, express);

// Export App for testing
module.exports = app;

// Connect socket
const server = require('http').Server(app);
const io = require('socket.io')(server);
mongoose.Promise = bluebird;

// Connect to mongoDB unless testing
const port = process.env.PORT || 3000;
if (process.env.TEST === 'false') {
  mongoose.connect(process.env.MONGODB_URL)
}

io.on('connection', socketHandler);

// On connection , listen to port
mongoose.connection.on('connected', () => {
  server.listen(port, function() {
    console.log('Listening on port ' + port);
  })
})
