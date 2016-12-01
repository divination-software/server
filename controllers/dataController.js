const dataModel = require('../models/dataModel');
const ioInfo = require('../ioInfo');

module.exports = {
  handleResults: function(req, res) {
    const userId = req.body.data.user_id;
    const boardName = req.body.data.board_name;
    const data = req.body.data.statistics;
    if (boardName) {
      dataModel.saveData(userId, JSON.stringify(data), boardName);
    }
    ioInfo.io.to(userId).emit('newData', {data: data, name: boardName});
    if (!data || !userId) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  },
  getData: function(req, res) {
    const userId = req.user._id;
    dataModel.getData(userId)
    .then( simData => {
      res.status(200).send(simData);
    })
    .catch( err => {
      console.log(err)
      res.sendStatus(400);
    })
  }

}
