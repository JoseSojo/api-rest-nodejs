const express = require('express');
const path = require('path');

// execute
const app = express();

// Settings
app.set('port', process.env.PORT || 7070);
app.set('views', path.join(__dirname, '/views'));
app.set('template', path.join(__dirname, '/views/template'));
app.set('view engine', 'hbs')

// routers
app.use(require(path.join(__dirname, '/router')));

app.listen(app.get('port'), function(){
  console.log('Server on port ', app.get('port'));
})
