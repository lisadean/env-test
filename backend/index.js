const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('home page');
});

app.get('/about', (req, res) => {
  res.end('about page');
});

app.get('/menu', (req, res) => {
  res.end('menu page');
});

app.listen(3000);