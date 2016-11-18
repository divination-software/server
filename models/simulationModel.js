const User = require('../schemas/User');
const Board = require('../schemas/Board');
const Simulation = require('../schemas/Simulation');

module.exports = {
  saveSimulation: (userId, simulation, board) => {
    const newSimulation = new Simulation(simulation)
    return newSimulation.save()
    .then(sim => {
      return Board.findOneAndUpdate(
        {name: board.name},
        {
          simulation: sim._id,
          name: board.name,
          date: Date.now()
        },
        {upsert: true, new: true}
      ).exec();
    })
    .then(board => {
      return User.findOneAndUpdate(
        {_id: userId, boards: {$ne: board._id}},
        { $push: { 'boards': board._id } },
        {new: true}
      ).exec()
    })
    .catch(error => {
      console.log(error);
    })
  },

  getSimulation: (simId) => {
    return Simulation.findOne({_id: simId}).exec();
  }
};

const addBoardToUser = function(userId, boardId) {
  console.log(userId, boardId)
}
