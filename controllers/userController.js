const userModel = require('../models/userModel')

module.exports = {
  auth: (req, res) => {
    if (req.user) {
      res.status(200).send(req.user)
    } else {
      res.status(400).send(false)
    }
  },
  newUser: (req, res) => {
    console.log(req.body)
    const newUser = req.body;
    userModel.newUser(newUser)
    .then( success => {
      res.sendStatus(201);
    })
    .catch( err => {
      console.log(err)
      res.sendStatus(400);
    })
  }
}
