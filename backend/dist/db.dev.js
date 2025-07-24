"use strict";

var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6789',
  // your password
  database: 'translator_db'
});
connection.connect();
module.exports = connection;
//# sourceMappingURL=db.dev.js.map
