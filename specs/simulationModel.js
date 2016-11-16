const chai = require('chai');
const expect = chai.expect;
const simulationModel = require('../models/simulationModel');
const User = require('../schemas/User');
const Board = require('../schemas/Board');
const Simulation = require('../schemas/Simulation');

var testUser = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@test.com',
  password: 'password'
}

var testSim = {
  simulation: 'ImAFakeSimulation'
}

var testUserId;
var simId;
var boardId;

describe('Simulation Model', function() {
  before(function(done){
    Simulation.remove({}).exec()
    .then(function(){
      return Board.remove({}).exec()
    })
    .then(function(){
      return User.remove({}).exec()
    })
    .then(function(){
      const newUser = new User(testUser);
      return newUser.save();
    })
    .then(function(user) {
      testUserId = user._id;
      done();
    })
  });

  describe('saveSimulation', function(){
    before(function(done){
      simulationModel.saveSimulation(testUserId, testSim, {name:'Pizza'})
      .then(function(user){
        boardId = user.boards[0];
        done();
      })
    })
    it('should save a simulation to the database', function(done) {
      Simulation.findOne({simulation: 'ImAFakeSimulation'}).exec()
      .then(function(sim) {
        expect(sim.simulation).to.equal('ImAFakeSimulation');
        done();
      })
    })
    it('should create a new board if one does not exist for that simulation', function(done) {
      Board.findOne({name: 'Pizza'}).exec()
      .then(function(board){
        expect(board._id).to.eql(boardId);
        done();
      })

    })
    it('should add the board to the user\'s boards if it did not exist', function(done) {
      User.findOne({_id: testUserId}).exec()
      .then(function(user){
        expect(user.boards.length).to.equal(1);
        done();
      })
    })
    it('should overwrite a boards simulation if a boardId is given', function(done) {
      simulationModel.saveSimulation(testUserId, { simulation:'Yoooooooo' }, {_id:boardId, name:'Pizza'})
      .then(function() {
        return Board.findOne({_id: boardId}).exec()
      })
      .then(function(board){
        expect(board.name).to.equal('Pizza');
        return User.findOne({_id: testUserId}).exec()
      })
      .then(function(user){
        expect(user.boards[0]).to.eql(boardId);
        done();
      })
    })
  })

  describe('get Simulation', function() {
    before(function(done){
      const newSim = new Simulation({simulation: 'PIZZAPIZZAPIZZA'})
      newSim.save()
      .then(function(sim){
        simId = sim._id;
        done();
      })
    })
    it('should return the simulation object', function(done) {
      simulationModel.getSimulation(simId)
      .then(function(sim) {
        expect(sim.simulation).to.equal('PIZZAPIZZAPIZZA');
        done();
      })
    });
  });

})
