var express = require("express");
var app = express();
var port = 3000;

//Incorporating Middlewares
//app.use(express.static("public"));
app.get("/",function(req,res){
  res.send("Server is working");
});

//Routin
app.get("/cities",function(req,res){
  var cities = ["Lotopia","Caspiana","Indigo"];
  res.json(cities);
});

module.exports = app;
