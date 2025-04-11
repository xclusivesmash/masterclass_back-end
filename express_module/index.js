// import modules
const express = require("express");

const PORT = 3000;
const app = express();

// all routes.
app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/about", (req, res) => {
	res.send("About page");
});

// start the server
app.listen(PORT, "localhost", () => {
	console.log(`Server running on port ${PORT}`);
})
