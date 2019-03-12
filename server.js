var http = require("http");
var express = require('express');
var app = express(); // Biggest impact of express is how we manage the requests

//Configuration Sections

/*body parse to receive JSON*/
//teach to read JOSNs
var bparse = require("body-parser");
app.use(bparse.json());


/* enable CORS for testing - only for TESTING*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 




app.get("/",function(req,res){
    res.send("<h1>Hello Mate'</h1>");
});

app.get("/about",function(req,res){
    res.send("A project from Alexander Peloquin")
});

app.get("/error",function(req,res){
    res.status(401);
    res.send("A super hard error occured");
})

/****API/points*****/

var items = [];
var count = 1;

app.get("/API/points",function(req,res){
    res.send(items);
});

app.post("/API/points", function(req,res){
    console.log("Post received!" + req.body);
    var item = req.body
    item.id = count;
    count +=1;
    items.push(item);
    res.send(":D");
});

var server = app.listen(8081,function(){
    console.log("Server started on localhost:8081");
});
