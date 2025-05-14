const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
    url : {
        type : String,
        required : true
    },
    publicId : {
        type : String,
        required : true
    },
    uploadedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : true
    }
}, {timestamps : true});

module.exports = mongoose.model("Images", imageSchema);