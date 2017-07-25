// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mysql = require('mysql');


module.exports = function() {


var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'kh27mr19fz',
      database : 'curso_angular4'
    });

connection.connect();
    return connection;
};
