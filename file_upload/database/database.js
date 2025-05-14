// establish connection to database
const mongoose = require("mongoose");
const username = process.env.USER_NAME;
const password = encodeURIComponent(process.env.PASS_CODE);
const connectToDatabase = async () => {
    try {
        // connection establishment
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.j2ps4ru.mongodb.net/`);
        console.log("Connected successsfully to database!");
    } catch(error) { // connection failed.
        console.error("Connection to DB unsuccessful", error);
        process.exit(1);
    }
};

module.exports = connectToDatabase;