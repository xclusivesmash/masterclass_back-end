// create user model for atlas database
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username : {
        type: String,
        required : true,
        unique : true,
        trim: true
    },
    email : {
        type: String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
}, {timestamps : true});

module.exports = mongoose.model("Users", userSchema);