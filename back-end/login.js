import { con } from './connection.js';

export function login(email, password, callback) {
    con.connect(function(err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            callback(err);
            return;
        }

        var sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        con.query(sql, [email, password], function (err, result) {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                callback(err);
                return;
            }
            if (result.length > 0) {
                callback(null, result[0]);
            } else {
                callback(null, null);
            }
        });

        /*
        con.end(function(err) {
            if (err) {
                console.error('Error closing connection: ' + err.stack);
                return;
            }
            console.log('Database connection closed.');
        });
        */
    });
};
