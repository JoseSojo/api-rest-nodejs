const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
  res.send('All ok');
});

router.get('/get', function(req,res){
  res.send('get items');
});

module.exports = router;
