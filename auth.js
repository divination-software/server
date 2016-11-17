"use strict";
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('./models/userModel');

module.exports = function(passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(username, password, done) {
      let loggedInUser;
      userModel.checkEmail(username)
          .then(user => {
            loggedInUser = user;
            return user.comparePasswords(password);
          })
          .then(isMatch => {
            if(isMatch){
              done(null, loggedInUser);
            } else {
              done(null, false, {message: 'Incorrect password'});
            }
          })
          .catch(err => {
            done(err);
          })
  }));
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    userModel.findUser(id)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
}
