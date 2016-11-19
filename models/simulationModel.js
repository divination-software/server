const User = require('../schemas/User');
const Board = require('../schemas/Board');
const Simulation = require('../schemas/Simulation');

module.exports = {
  saveSimulation: (userId, simulation, name) => {
    const newSimulation = new Simulation(simulation)
    var boardId;
    return newSimulation.save()
    .then(sim => {
      return Board.findOneAndUpdate(
        {name: name, userId: userId },
        {
          simulation: sim._id,
          name: name,
          userId: userId,
          date: Date.now()
        },
        {upsert: true, new: true}
      ).exec();
    })
    .then(board => {
      boardId = board._id;
      return User.findOneAndUpdate(
        {_id: userId},
        { $pull: { boards: boardId} },
        {new: true}
      ).exec()
    })
    .then(success => {
      return User.findOneAndUpdate(
        {_id: userId},
        { $push: { boards: boardId } },
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
