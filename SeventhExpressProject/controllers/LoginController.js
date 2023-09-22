var model=require("../models/LoginModel");
// var bodyParser=require("body-parser");

// var urlencodedParser=bodyParser.urlencoded({extended:false});

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

// app.post("/login",urlencodedParser,function(request,response){
// var data=request.body;
//     console.log(data);
//     var message;
//     if(model(data))
//         message="Login SuccessFul!!!";
//     else
//         message="Login Failed";

//         response.render("result",{uname:data.username,msg:message});
    
// });

// app.use(bodyParser.json);
app.post("/dummy",function(req,res){
    var data=req.body;
    console.log(data);
    res.send(data);

});
}