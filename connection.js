var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fide0000",
    database: "lancing"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    // con.query("SELECT * FROM Freelancer", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
  });

  module.exports = con