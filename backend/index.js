const express = require('express');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
  // res.end('home page');
  db.getAllUsers()
    .then(data => res.send(data))
    .catch(console.error)
});

app.get('/about', (req, res) => {
  res.end('about page');
});

app.get('/', (req, res) => {
  res.end('home page served from route')
});

app.listen(3000);