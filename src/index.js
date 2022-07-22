const express = require('express');
const path = require('path');

// execute
const app = express();

// Settings
app.set('port', process.env.PORT || 7070);

// routers
app.use(require(path.join(__dirname, '/router')));

app.listen(app.get('port'), function(){
  console.log('Server on port ', app.get('port'));
})
