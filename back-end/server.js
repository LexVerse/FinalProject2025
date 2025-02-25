var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "final_project"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");    
  });

module.exports = con;
