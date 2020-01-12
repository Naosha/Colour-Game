var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("colorGame");
});

var port = process.env.PORT || 3000;
var ip = process.env.IP;
app.listen(port, ip, function(){
    console.log("Server is running on port "+ port);
});
