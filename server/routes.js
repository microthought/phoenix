var router = require('express').Router();

router.get('/', function(req, res){
  res.send("Hello from routes.js!");
});

router.get('/target', function(req, res){
  setTimeout(function(){
    res.send("We've got missiles, you're screwed!");
  },1000);
 
});

module.exports = router;