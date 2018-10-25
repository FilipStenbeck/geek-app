require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

/***********************
 * WEB-SERVER CONFIG HERE
 ************************/

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, '../build')));

//List all routes that react should now abput to index.html so browserHistory in React Router works (must be a beter way than this)
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/search/:game', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/game/:id', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

var PORT = process.env.PORT || 9000;
app.listen(PORT, function() {
  console.log('Production Express server running at port :' + PORT);
});
