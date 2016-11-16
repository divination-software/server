var chai = require('chai');
var expect = chai.expect;
var User = require('../schemas/User.js');

describe('User Schema', function() {
  describe('Password Encryption', function(){
    var currentUser = null;
    afterEach(function(done){
    //clear the user database
      User.remove({}, function(err){
        done();
      });
    });
    it('should make sure that the password in the database does not equal the string ', function(done){
      var stringPassword = 'dropItLikeItsHot';
      var newTestUser = new User({
        firstName: 'Cash',
        lastName: 'Dogg',
        email: 'foshizzle@dogg.com',
        password: 'dropItLikeItsHot',
      });

      newTestUser.save()
      .then(function(newUser){
        expect(newUser.password).to.not.equal(stringPassword);
        done();
      });
    });

    it('should makes sure that compare password matches the hashed password with the string version', function(done){
      var stringPassword = 'dropItLikeItsHot';
      var newTestUser = new User({
        firstName: 'Cash',
        lastName: 'Dogg',
        email: 'foshizzle@dogg.com',
        password: 'dropItLikeItsHot',
      });

      newTestUser.save()
      .then(function(newUser){
        return newUser.comparePasswords(stringPassword);
      })
      .then(function(match){
        expect(match).to.equal(true);
        done();
      });
    });

    it('should makes sure that compare password does not match the hashed password with false version', function(done){
      var stringPassword = 'dropItLikeItsHot';
      var newTestUser = new User({
        firstName: 'Cash',
        lastName: 'Dogg',
        email: 'foshizzle@dogg.com',
        password: 'dropItLikeItsHot',
      });

      newTestUser.save()
      .then(function(newUser){
        return newUser.comparePasswords('PIZZAPIZZAPIZZA');
      })
      .then(function(match){
        expect(match).to.equal(false);
        done();
      });
    });
  });
});
