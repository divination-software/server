const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('./schemas/User');

console.log('NOTE: This file assumes that ALL TESTS ARE PASSING');
console.log('WARNING: This file will not work if models are not working properly');

mongoose.connect(process.env.MONGODB_URL)

const testUser1 = {
  firstName: 'Testy',
  lastName: 'McTestface',
  email: 'test@gmail.com',
  password: 'test'
};

mongoose.connection.on('connected', () => {
  console.log('populating users...')
  const newUser1 = new User(testUser1);
  newUser1.save()
  .then(user => {
    console.log('Database populated with alpha testing data!')
    process.exit();
  })
})
