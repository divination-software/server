const boardController = require('./controllers/boardController');
const simController = require('./controllers/simulationController');
const dataController = require('./controllers/dataController');
const path = require('path');
const passport = require('passport');

module.exports = function (app, express) {
  //Handle Auth and login/signup
  app.post('/api/users/login', passport.authenticate('local'), function(req, res) {
    res.status(201).send(req.user);
  });

  // Board Routes
  app.post('/api/board/run', boardController.run);
  app.get('/api/board', boardController.getBoards);
  // Handle Sim Data
  app.post('/api/data/results', dataController.handleResults)
  // Simualtion routes
  app.post('/api/simulation/save', simController.save);
  app.get('/api/simulation/:simId', simController.getSim);

  // Handle routing with react router
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
  })
};
