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

export function closeConnection(callback) {
    con.end(function(err) {
        if (err) {
            console.error('Error closing connection: ' + err.stack);
            if (callback) callback(err);
            return;
        }
        console.log('Database connection closed.');
        if (callback) callback(null);
    });
}

export { con };