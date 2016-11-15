module.exports = {
  boardInit: function(req, res) {
    console.log(req.body)

    //json with key of simulation
    res.sendStatus(200);
  }

}
