const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  name: {type: String},
  simulation: {type: [Schema.Types.ObjectId], ref: 'Simulation' },
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Board', BoardSchema);
