module.exports = {
  io: null,
  connect: (server) => {
    module.exports.io = require('socket.io').listen(server)
  },
  socketUsers: {},
  userSockets: {}
}
