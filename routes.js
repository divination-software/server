var boardController = require('./controllers/boardController');
var path = require('path');

module.exports = function (app, express) {
  //Handle Auth and login/signup
  app.post('/api/board', boardController.boardInit);

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
  })
};
