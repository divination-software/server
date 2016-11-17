const simulationModel = require('../models/simulationModel')

module.exports = {
  save: (req, res) => {
    const userId = req.user._id;
    const simulation = req.body.simulation;
    const name = req.body.name;
    simulationModel.saveSimulation(userId, { simulation: simulation }, name)
    .then(success => {
      res.sendStatus(201)
    })
    .catch(err => {
      res.sendStatus(400);
      console.log(err);
    })
  }
}
