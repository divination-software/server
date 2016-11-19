const User = require('../schemas/User');
const Promise = require('bluebird');

module.exports = {
  newUser: (user) => {
    const newUser = new User(user);
    return newUser.save();
  },

  findUser: (id) => {
    return User.findOne({'_id': id})
    .then(user => {
      return new Promise((resolve, reject) => {
        if (user) {
          resolve(user);
        } else {
          reject('No user found');
        }
      })
    })
  },

  checkEmail: (email) => {
    return User.findOne({'email': email})
    .then(user => {
      return new Promise((resolve, reject) => {
        if (user) {
          resolve(user);
        } else {
          reject('No email found');
        }
      })
    })
  }
}
