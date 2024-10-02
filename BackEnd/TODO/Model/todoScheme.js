const mongoose  = require("mongoose");

const todo=mongoose.Schema({
 title:{type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 status:{type:String,
    enum:["completed", "pending"],
    default:"pending"}

})

const todoSchema=mongoose.model("todo",todo);

module.exports= { todoSchema }