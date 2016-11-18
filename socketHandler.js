module.exports = (socket) => {
  // TODO Handle Sockets
  console.log('Socket Connected');

  socket.on('disconnect', function(data) {
    console.log(data, ' ---- Socket disconnect ----');
  })
}
