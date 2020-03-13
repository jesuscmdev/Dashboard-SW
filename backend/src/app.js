const express = require('express');
const app = express();
const cors = require('cors');

//Settings 
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(cors());
app.use(express.json());
//Routes
app.use('/api/leads', require('./routes/leads'));
app.use('/api/dashboard', require('./routes/dashboard'));

module.exports = app;