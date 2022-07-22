const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
  //res.render('');
  res.send('javier es marico');
});

router.get('/get', function(req,res){
  res.send('get items');
});

module.exports = router;
