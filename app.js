const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const portNumber = 3000;
const friends = ['Abhishek','Amit','Vishal','Akshay','Suraj','Rohit']

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.listen(portNumber, function(){
    console.log("Server started running at port - " + portNumber)
})

app.get("/", function(req, res){
    res.render("home")
})

app.get("/friends", function(req,res){
    res.render("friends", {friends: friends})
})

app.post("/addFriend", function(req,res){
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("friends")
})