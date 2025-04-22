require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");
const app = express();
const PORT = process.env.PORT || 3000;

// connect to database via mongodb (atlas)
connectToDatabase();

// use the express middleware: express.json()
app.use(express.json());

// start the server
app.listen(PORT, "localhost", () => {
    console.log(`Server is running on port ${PORT}`);
});