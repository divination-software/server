module.exports = (socket) => {
  // TODO Handle Sockets
  console.log(socket);

  socket.on('disconnect', function(data) {
    console.log(data, ' ---- Socket disconnect ----');
  })
}
