const User = require('../schemas/User');
const Board = require('../schemas/Board');
const Simulation = require('../schemas/Simulation');

module.exports = {
  saveSimulation: (userId, simulation, boardId) => {

  },

  getSimulation: (simId) => {
    return Simulation.findOne({_id: simId}).exec();
  }
}
