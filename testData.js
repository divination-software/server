const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('./schemas/User');

mongoose.connect(process.env.MONGODB_URL)

const testUser1 = {
  firstName: 'Testy',
  lastName: 'McTestface',
  email: 'test@gmail.com',
  password: 'test'
};

mongoose.connection.on('connected', () => {
  const newUser1 = new User(testUser1);
  newUser1.save()
  .then(user => {
    console.log('Database populated with alpha testing data!')
    process.exit();
  })
})
