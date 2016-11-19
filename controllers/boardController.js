const boardModel = require('../models/boardModel');

module.exports = {
  boardInit: function(req, res) {
    //json with key of simulation {simulation: simulation}
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
