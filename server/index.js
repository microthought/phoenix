const express = require('express');
const app = express();
const router = require('./routes');



app.use('/', router);


app.listen(3000, function(){
  console.log("listening on 3000");
})