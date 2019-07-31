// DEPENDENCIES
const express = require('express');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// PORT
const PORT = process.env.PORT || 8080;

// EXPRESS
const app = express();

// MORGAN LOGGER
app.use(logger('dev'));

// PARSE
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// STATICS
app.use(express.static('public'));

// DATABASE
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/webscraper';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});

// EXPRESS-HANDLEBARS
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// ROUTES
const routes = require('./controllers/webscraper.js');
app.use(routes);

// SERVER LISTENER
app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT);
});