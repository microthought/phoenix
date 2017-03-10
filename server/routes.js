var router = require('express').Router();

router.get('/', function(req, res){
  res.send("Hello from routes.js!");
});

module.exports = router;