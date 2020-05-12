const mysql = require('mysql2');

let connection;

// JawsDB add-on in Heroku to access database connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL).promise();
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stocksDB',
  }).promise();
}

module.exports = connection;
