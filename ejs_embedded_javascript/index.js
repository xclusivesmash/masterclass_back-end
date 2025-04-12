// import modules
const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
	res.render("index");
});

// start server
app.listen(PORT, "localhost", () => {
	console.log(`Server listening on port ${PORT}`);
})
