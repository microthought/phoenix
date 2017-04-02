const router = require('express').Router();
const conversation = require('./controllers/conversation.js');

router.get('/', function(req, res){
  res.send("Hello from routes.js!");
});

router.get('/target', function(req, res){
  setTimeout(function(){
    res.send("We've got missiles, you're screwed!!");
  },1000);
 
});

//router.get('/conversation/:conversation_id', conversation.get);

router.get('/conversation/dummy', conversation.getdummy);


module.exports = router;