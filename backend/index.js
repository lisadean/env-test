const express = require('express');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

const static = express.static;
app.use(static('../client/build'));

app.get('/api/', (req, res) => {
  db.getAllUsers()
    .then(data => res.send(data))
    .catch(console.error)
});

app.get('/api/about', (req, res) => {
  // res.end('about page');
  res.end(process.env.DB_USER)
});

// You don't want this route in your server or React won't work on AWS
// app.get('/', (req, res) => {
//   res.end('home page served from route')
// });

app.listen(port, console.log(`Listening on port ${port}`));
