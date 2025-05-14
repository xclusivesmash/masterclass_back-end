require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/database");
const authRouter = require("./routers/auth_routers");
const homeRouter = require("./routers/home_routes")
const adminRouter = require("./routers/admin_routers");

const app = express();
const PORT = process.env.PORT || 3000;

// connect to database via mongodb (atlas)
connectToDatabase();

// use the express middleware: express.json()
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/home", homeRouter);
app.use("/api/admin", adminRouter);

// start the server
app.listen(PORT, "localhost", () => {
    console.log(`Server is running on port ${PORT}`);
});