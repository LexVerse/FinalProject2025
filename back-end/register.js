import { con } from './connection.js';

export function register(fname, lname, email, password, address, callback) {
    con.connect(function(err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            callback(err);
            return;
        }

        var sql = "INSERT INTO users (fname, lname, email, password, address) VALUES (?, ?, ?, ?, ?)";
        con.query(sql, [fname, lname, email, password, address], function (err, result) {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                callback(err);
                return;
            }
            console.log(result.affectedRows + " record(s) updated");
            callback(null, result);
        });

        con.end(function(err) {
            if (err) {
                console.error('Error closing connection: ' + err.stack);
                return;
            }
            console.log('Database connection closed.');
        });
    });
};

