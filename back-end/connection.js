import mysql from 'mysql2';

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

export var con;
