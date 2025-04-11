// import modules
const express = require("express");

const PORT = 3000;
const app = express();

// create data
const data = [{
		"id" : 1,
		"product" : "product 1"
	}, {
		"id" : 2,
		"product" : "product 2"
	}, {
		"id" : 3,
		"product" : "product 3"
	}
];

// routing
// home page endpoint
app.get("/", (req, res) => {
	res.send("Home Page");
});

// products endpoint
app.get("/products", (req, res) => {
	res.json(data);
});

// get products by id: dynamic routing
app.get("/products/:id", (req, res) => {
	const productsID = parseInt(req.params.id);
	const productLocated = data.find(data => data.id === productsID);
	if (productLocated) {
		res.json(productLocated);
	} else {
		res.status(404).send("Cannot find product specified by ID");
	}
});

// start server
app.listen(PORT, "localhost", () => {
	console.log(`Server running on port ${PORT}`);
});
