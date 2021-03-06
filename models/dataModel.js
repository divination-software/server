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
  }
}
