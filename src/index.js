const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const { ConnectMongo } = require('./config/database.js');

const path = require('path');

// execute
ConnectMongo();
const app = express();

// Settings
app.set('port', process.env.PORT || 7070);
app.set('views', path.join(__dirname, '/views'));
app.set('template', path.join(__dirname, '/views/template'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'template'),
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

// routers
app.use(require(path.join(__dirname, '/router')));

app.listen(app.get('port'), function(){
  console.log('Server on port ', app.get('port'));
})
