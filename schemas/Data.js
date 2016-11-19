const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  boardName: {type: String},
  data: {type: String},
  userId: {type: [Schema.Types.ObjectId], ref: 'User' },
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Data', DataSchema);
