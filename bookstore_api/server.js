require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");
const router = require("./routes/book-routes");
const app = express();
const PORT = process.env.PORT || 3000;

// connect to the database
connectToDatabase();
app.use(express.json());
// routes here
app.use("/api/books", router);

// connect to the server
app.listen(PORT, "localhost", () => {
    console.log(`Server is running on port ${PORT}`);
});