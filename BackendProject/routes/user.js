const api = require('express')();
const  user  = require("../controller/userController");

api.get("/:userId/",function(req,res){
    user.getUserById(req,res)
})
api.post("/",function(req,res){
    console.log(req.body)
    user.addUser(req,res)
})
api.post("/logIn",function(req,res){
    console.log(req.body)
    user.logIn(req,res)
})
module.exports = api;