var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'rootpass',
//   database : 'rave'
// });

// var connection = mysql.createConnection({
//   host : 'us-cdbr-east-02.cleardb.com',
//   user : 'be4a65a79530ae',
//   password : '31de9960',
//   database : 'heroku_c2b56c9aae7567b'
// })

const connection = mysql.createPool({
  host : 'us-cdbr-east-02.cleardb.com',
  user : 'be4a65a79530ae',
  password : '31de9960',
  database : 'heroku_c2b56c9aae7567b'
});

// connection.connect(() => {
//   console.log('connected');
// });

connection.query('select 1 + 1', (err, rows) => { console.log(rows); /* */ });

module.exports = {
  connection
}