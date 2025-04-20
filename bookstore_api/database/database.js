require("dotenv").config();
const mongoose = require("mongoose");

const PASSWORD = encodeURIComponent(process.env.PASS_CODE);
const USERNAME = process.env.USER_NAME;
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hqkwudo.mongodb.net/`
const connectToDatabase = () => {
    mongoose.connect(URL)
    .then(() => {
        console.log("Connected to database sucessfully");
    })
    .catch((error) => {
        console.error(error);
    });
}

module.exports = connectToDatabase;