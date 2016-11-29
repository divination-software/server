const simulationModel = require('../models/simulationModel')

module.exports = {
  save: (req, res) => {
    const userId = req.user._id;
    const simulation = req.body.simulation;
    const resources = req.body.resources;
    const name = req.body.name;
    simulationModel.saveSimulation(userId, { simulation: simulation }, name, resources)
    .then(success => {
      res.sendStatus(201)
    })
    .catch(err => {
      res.sendStatus(400);
      console.log(err);
    })
  },

  getSim: (req, res) => {
    const simId = req.params.simId;
    simulationModel.getSimulation(simId)
    .then( sim => {
      res.status(200).send(sim);
    })
    .catch(err => {
      res.sendStatus(400);
      console.log(err);
    })
  }
}
