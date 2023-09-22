var express=require("express");

var app=express();
app.set("view engine","ejs");

app.get("/",function(request,response){
    response.render("index");
});

app.get("/login",function(request,response){
    var data=request.query;
    console.log(data);
    var message;
    if(data.username===data.pwd)
        message="Login SuccessFul!!!";
    else
        message="Login Failed";

        response.render("result",{uname:data.username,msg:message});
        
});

app.listen("3000");
console.log("Application is listening at port 3000");