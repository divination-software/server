const Data = require('../schemas/Data.js');

module.exports = {
  saveData: (userId, data, boardName)  => {
    const newData = {
      userId: userId,
      data: data,
      boardName: boardName
    }
    const toSave = new Data(newData);
    return toSave.save();
  },
  getData: (userId) => {
    console.log('we got something')
    return Data.find({userId: userId}).exec()
  }
}
