const bodyParser = require('body-parser');
const passport = require('passport');

module.exports = function (app, express) {
  // Serve static assets
  app.use(express.static(__dirname + '/public'));

  // Parse Post Bodys
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // Initialize Authentication
  app.use(passport.initialize());
  app.use(passport.session());
};
