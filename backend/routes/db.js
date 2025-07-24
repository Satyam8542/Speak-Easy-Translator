const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6789', // your password
  database: 'translator_db'
});
connection.connect();
module.exports = connection;