const boardModel = require('../models/boardModel');
const ioInfo = require('../ioInfo');
const request = require('request');

module.exports = {
  run: function(req, res) {
    const userId = req.user._id;
    const simulation = req.body.simulation;
    const boardName = 'BoardyMcBoardName'
    const postData = {
      user_id: userId,
      board_name: boardName,
      simulation: simulation,
    }
    const options = {
      method: 'post',
      body: postData,
      json: true,
      url: process.env.PYTHON_URL
    }
    //json with key of simulation {simulation: simulation}
    request.post(options, function(err, response) {
      console.log('err ', err)
      console.log(response);
    });
    res.sendStatus(200);
  },

  getBoards: function(req, res) {
    const userId = req.user._id;
    boardModel.getBoards(userId)
    .then( user => {
      res.status(200).send(user.boards)
    })
    .catch(err => {
      res.sendStatus(400);
      console.log(err);
    })
  }

}
