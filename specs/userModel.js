var chai = require('chai');
var expect = chai.expect;
var userModel = require('../models/userModel');
var User = require('../schemas/User');

var testUser = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@test.com',
  password: 'password'
}

describe('User Model', function() {
  before(function(done){
    User.remove({}).exec()
    .then(function(){
      done();
    });
  });

  describe('newUser', function() {
    it('should add a new user to the database', function(done) {
      userModel.newUser(testUser)
      .then(function() {
        return User.findOne({'email': 'test@test.com'}).exec()
      })
      .then(function(user) {
        expect(user.email).to.equal('test@test.com');
        done();
      });
    });
    it('should throw an error when email already exists', function(done) {
      userModel.newUser(testUser)
      .catch(function(error) {
        expect(error.message.includes('duplicate key error')).to.equal(true);
        done();
      });
    });
  });

})
