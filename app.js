var express = require("express");
var app = express();
var port = 3000;

//Incorporating Middlewares
app.use(express.static("public"));

//Routing
app.get("/",function(req,res){

  res.json("Ok! Server is handling requests");


});

app.get("/cities",function(req,res){
  var cities = ["Lotopia","Caspiana","Indigo"];
  res.json(cities);


});
module.exports = app;
