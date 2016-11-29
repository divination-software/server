const ioInfo = require('./ioInfo');

module.exports = (socket) => {
  console.log(' ---- Socket Connected ----')
  socket.on('loggedIn', function(userId){
    socket.join(userId);
  })

  socket.on('disconnect', function(data) {
    console.log(' ---- Socket disconnect ----');
  })
}
