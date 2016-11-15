const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  name: {type: String}
  simulation: {type: String, required: true},
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Board', BoardSchema);
