const dataModel = require('../models/dataModel');
const ioInfo = require('../ioInfo');

module.exports = {
  handleResults: function(req, res) {
    const userId = req.body.userId;
    const boardName = req.body.boardName;
    const data = req.body.data;
    if (boardName) {
      dataModel.saveData(userId, data, boardName)
    }
    ioInfo.io.to(userId).emit('newData', {data: data, name: boardName});
    if (!data || !userId) {
      res.sendStatus(400);
    }
    res.sendStatus(201);
  }
}
