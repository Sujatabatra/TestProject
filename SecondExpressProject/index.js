var express=require("express");

var app=express();

app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
});

app.get("/login",function(request,response){
    var data=request.query;
    console.log(data);
    if(data.username===data.pwd)
        response.sendFile(__dirname+"/success.html");
    else
        response.sendFile(__dirname+"/failure.html");
});

app.listen("3000");
console.log("Application is listening at port 3000");