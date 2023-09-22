var express=require("express");
var loginController=require("./controllers/LoginController");
var bodyparser=require("body-parser");

var app=express();

app.use(bodyparser.json());
app.set("view engine","ejs");


loginController(app);

app.listen("3000");
console.log("Application is listening at port 3000");