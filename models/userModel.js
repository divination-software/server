const User = require('../schemas/User');

module.exports = {
  newUser: (user) => {
    const newUser = new User(user);
    return newUser.save();
  }
}
