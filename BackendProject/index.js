const createError = require('http-errors');
const express = require('express');
const medication = require('./routes/medication');
const reminder = require('./routes/reminder');
const user = require('./routes/user');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Extends response send method 
app.use('/medication', medication);
app.use('/reminder', reminder);
app.use('/user', user);
module.exports = app;