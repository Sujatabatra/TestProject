var express=require("express");

var app=express();

app.get("/",function(request,response){
    response.send("Welcome to the world of express js, I am responsible for handling get request");
});

app.get("/contact",function(request,response){
    response.send("You Requested for Contact Page!!!");
});

app.get("/home",function(request,response){
    response.sendfile(__dirname+"/index.html");
});

app.post("/contact",function(request,response){
    response.send("You Requested for Cintact Page with Post Method!!!");
});

app.listen(3000);

console.log("Application listening at port 3000");