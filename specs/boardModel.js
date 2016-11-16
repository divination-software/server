const chai = require('chai');
const expect = chai.expect;
const boardModel = require('../models/boardModel');
const User = require('../schemas/User');
const Board = require('../schemas/Board');


var testUserId;
var boardId;

describe('Board Model', function() {
  before(function(done){
    Board.remove({}).exec()
    .then(function() {
      return User.remove({}).exec()
    })
    .then(function(){
      const newBoard = new Board({name: 'Im a board'})
      return newBoard.save()
    })
    .then(function(board){
      boardId = board._id;
      var testUser = {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: 'password',
        boards: [boardId]
      }
      const newUser = new User(testUser);
      return newUser.save();
    })
    .then(function(user) {
      testUserId = user._id;
      done()
    })
  });

  describe('getBoards', function() {
    it('should get an object with an array of user boards', function(done) {
      boardModel.getBoards(testUserId)
      .then(function(user) {
        expect(user.boards[0].name).to.equal('Im a board');
        done();
      })
    });
  });

})
