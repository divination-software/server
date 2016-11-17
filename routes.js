const boardController = require('./controllers/boardController');
const path = require('path');
const passport = require('passport');

module.exports = function (app, express) {
  app.post('/api/board', boardController.boardInit);

  //Handle Auth and login/signup
  app.post('/api/users/login', passport.authenticate('local'), function(req, res) {
    res.sendStatus(201);
  });

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
  })
};
