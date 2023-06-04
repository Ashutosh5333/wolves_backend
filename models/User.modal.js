const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    description:String,
     title:String
},{
    timestamps:true 
}

);

const usermodel =  mongoose.model("todo",usersSchema);

module.exports = {usermodel};