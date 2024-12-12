//UserModel is a prototype of users

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({  // function userSchema included the attributes of an user
    name:{
        type:String, //data type
        required:true, // validate
    },

    age:{
        type:Number, //data type
        required:true, // validate
    },

    address:{
        type:String, //data type
        required:true, // validate
    }
});

module.exports = mongoose.model(
    "UserModel", //file name
    userSchema //function name
)
