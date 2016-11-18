const User = require('../schemas/User');
const Board = require('../schemas/Board');
const Simulation = require('../schemas/Simulation');

module.exports = {
  getBoards: (userId) => {
    return User.findOne({_id: userId}, 'boards')
      .populate('boards')
      .exec();
  }
}
