var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootpass',
  database : 'rave'
});

connection.connect();

module.exports = {
  connection
}