//var connect = require('../back-end/server.js');

import { con } from './server.js';

export function register(fname, lname, email, password, address) {
    
    con.connect(function(err) {
        if (err) throw err;

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var address = document.getElementById("address").value;

        var sql = "INSERT INTO users (fname, lname, email, password, address) VALUES ('" + fname + "', '" + lname + "', '" + email + "', '" + password + "', '" + address + "')";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
        });
    });
};

register("fname", "lname", "email", "password", "address");

/*
define(function(module) {
    module.exports = register;
});
*/
