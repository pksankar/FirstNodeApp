var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sankar",
  password: "sankar",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM employ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});