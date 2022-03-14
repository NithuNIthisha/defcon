const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jQuery = require('jQuery');
const jsdom = require("jsdom");

app.use("/css",express.static("css"));
app.use("/images",express.static("images"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/Puc",function(req,res){
    res.send("<h1>Puc<h1>");
});


app.listen(3000, function(){
   console.log("Server started on port 3000");

});