var router = require('express').Router();

router.get('/', function(req, res){
  res.send("Hello from routes.js!");
});

router.get('/target', function(req, res){
 res.send("We've got missiles, you're screwed!");
});

module.exports = router;