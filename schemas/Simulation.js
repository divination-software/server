const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SimulationSchema = new Schema({
  simulation: {type: String, required: true}
});

module.exports = mongoose.model('Simulation', SimulationSchema);
