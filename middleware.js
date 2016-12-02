const bodyParser = require('body-parser');
const passport = require('passport');
const compression = require('compression');
var enforce = require('express-sslify');

module.exports = function (app, express) {
  // use compression
  app.use(compression());
  // Enforce ssl
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
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
