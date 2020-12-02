var mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'JOih9901',
    database:'opentutorials'
  });
  db.connect();
  module.exports = db;