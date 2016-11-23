const bodyParser = require('body-parser');
const passport = require('passport');

module.exports = function (app, express) {
  // Serve static assets
  app.use(express.static(__dirname + '/public'));

  // Parse Post Bodys
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(bodyParser.json({limit: '50mb'}));

  // Initialize Authentication
  app.use(require('express-session')({secret: 'divinationsimulation', resave: false, saveUninitialized: false}));
  app.use(passport.initialize());
  app.use(passport.session());
};
