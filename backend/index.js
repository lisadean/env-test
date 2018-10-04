const express = require('express');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

app.get('/api/', (req, res) => {
  db.getAllUsers()
    .then(data => res.send(data))
    .catch(console.error)
});

app.get('/api/about', (req, res) => {
  res.end('about page');
});

// You don't want this route in your server or React won't work on AWS
// app.get('/', (req, res) => {
//   res.end('home page served from route')
// });

app.listen(3000);
