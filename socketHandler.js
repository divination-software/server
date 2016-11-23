const ioInfo = require('./ioInfo');

module.exports = (socket) => {
  socket.on('loggedIn', function(userId){
    socket.join(userId);
  })

  socket.on('disconnect', function(data) {
    console.log(' ---- Socket disconnect ----');
  })
}
