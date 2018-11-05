// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.NODE_ENV || 3000;

// MongoDB
mongoose.Promise = global.Promise; // Promise is not native to MongoDB unlike Node versions 4 and above
const db = 'mongodb://localhost:27017/testdb';
mongoose.connect(db, { useNewUrlParser: true });

// App initialization
const app = express();

// Express middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true 
	}));



// Routes	
app.use('/', require('./routes/router.js'));
	
// Error handling middleware
app.use(function(err,req,res,next) {
	res.send(`The following error has occurred: ${err.name}`);
})

// Start server
app.listen(port);