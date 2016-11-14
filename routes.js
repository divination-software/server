var boardController = require('./boardController');

module.exports = function (app, express) {
  //Handle Auth and login/signup
  app.post('/api/board', boardController.boardInit);
};
