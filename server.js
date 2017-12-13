const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
port = 8000,
app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port);