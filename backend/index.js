const express = require('express');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

const static = express.static;
app.use(static('../client/build'));

app.get('/api/', (req, res) => {
  // res.end('home page');
  db.getAllUsers()
    .then(data => res.send(data))
    .catch(console.error)
});

app.get('/api/about', (req, res) => {
  res.end('about page');
});

app.listen(5000);