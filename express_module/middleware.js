// import modules
const express = require("express");

const app = express();
const PORT = 3000;

// middleware
const loggingMiddleware = (req, res, next) => {
	const date = new Date().toISOString();
	console.log(`${req.method} ${req.url} - ${date}`);
	next();
};
// use middleware
app.use(loggingMiddleware);

// routes
app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/about", (req, res) => {
	res.send("About Page");
});

// start server
app.listen(PORT, "localhost", () => {
	console.log(`Server listening on port ${PORT}`);
});
