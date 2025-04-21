require("dotenv").config();
const mongoose = require("mongoose");

const PASSWORD = encodeURIComponent(process.env.PASS_CODE);
const USERNAME = process.env.USER_NAME;
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster01.4f1qyco.mongodb.net/`;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connected successfully to the database");
    } catch(error) {
        console.error(error);
        process.exit(1);
    };
}

module.exports = connectToDatabase;