module.exports = {
  boardInit: function(req, res) {
    console.log(req.body)

    //json with key of simulation {simulation: simulation}
    res.sendStatus(200);
  }

}
