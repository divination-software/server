const ioInfo = require('./ioInfo');

module.exports = (socket) => {
  console.log('Socket ' + socket.id + ' connected');
  socket.on('loggedIn', function(userId){
    socket.join[userId];
    ioInfo.socketUsers[socket.id] = userId;
  })

  socket.on('disconnect', function(data) {
    console.log(' ---- Socket disconnect ----');
    delete ioInfo.socketUsers[socket.id];
  })
}
