var model=require("../model/LoginModel");

module.exports=function(app){
   
    app.get("/",function(request,response){
    response.render("index");
});

app.get("/login",function(request,response){
    var data=request.query;
    console.log(data);
    var message;
    if(model(data))
        message="Login SuccessFul!!!";
    else
        message="Login Failed";

        response.render("result",{uname:data.username,msg:message});
        
});

}