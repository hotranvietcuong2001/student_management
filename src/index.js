const path = require('path');
const express = require('express');
const methodOverride = require('method-override')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const session = require("express-session");
const passport = require('./../auth/passport')

// Conect to DB
db.connect();

const app = express();
const port = 3000;

// config path public
app.use(express.static(path.join(__dirname, 'public')));

// format morgan
app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// overide for put, delete
app.use(methodOverride('_method'))

// config template engine
app.engine('hbs', handlebars({extname: ".hbs"}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views',));


app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

// init routes
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})