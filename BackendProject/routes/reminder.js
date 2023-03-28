const api = require('express')();
const  reminder  = require("../controller/reminderController");

api.get("/:userId/",function(req,res){
    reminder.getReminders(req,res)
})
api.post("/Complete/:userId/:remId/",function(req,res){
    reminder.markReminderAsCompleted(req,res)
})
api.post("/:userId/",function(req,res){
    reminder.generateReminders(req,res)
})
api.delete("/:userId/:remId/",function(req,res){
    reminder.deleteReminders(req,res)
})
api.put("/:userId/:remId/",function(req,res){
    reminder.updateReminders(req,res)
})
module.exports = api;