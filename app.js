var http = require('http');
var dt = require('./module/myfirstmodule');
var mysql = require('mysql');

var r = "";

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
    Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log("|"+row.id+"|"+row.name+"|"+row.city+"|"+row.sal+"|");
      r+=("<tr><td>"+row.id+"</td><td>"+row.name+"</td><td>"+row.city+"</td><td>"+row.sal+"</td></tr>");
    }); 
    //res.write(result);
  });
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime1());
  res.write("<table border='1'>");
  res.write("<tr><th>id</th><th>name</th><th>city</th><th>salary</th></tr>");
  console.log("res is" + r);
  res.write(r+"</table>");
  res.end();
}).listen(8080);