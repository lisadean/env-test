const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'envtest',
    user: process.env.DB_USER,
    password: ''
}
const db = pgp(cn);

function getAllUsers() {
    return db.any('SELECT * FROM users;');
}

module.exports = {
  getAllUsers: getAllUsers
};

// TESTS
// getAllUsers()
//     .then(console.log)
//     .catch(console.error);