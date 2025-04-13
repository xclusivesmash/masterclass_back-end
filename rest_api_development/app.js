// IMPORT MODULES
const express = require("express");
const app = express();

// CREATE MIDDDLEWARE
app.use(express.json());

const allBooks = [{id: "1", title: "Book 1"}, {id: "2", title: "Book 2"}];

// ROUTES
// introduction
app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our home page of the bookstore :)"
	});
});

// get all books
app.get("/get", (req, res) => {
	res.json(allBooks);
});

// get book by ID
app.get("/get/:id", (req, res) => {
	const bookID = allBooks.find(item => item.id === req.params.id);
	if (bookID) {
		res.status(200).json(bookID);
	} else { // book not found.
		res.status(404).json({
			message: `Book with id ${req.params.id} not found!`
		});
	}
});

// add new book
app.post("/new", (req, res) => {
	const newBookToBeAdded = {
		id : allBooks.length + 1,
		title: `Book ${allBooks.length + 1}`
	};
	allBooks.push(newBookToBeAdded);
	res.status(200).json({
		data : newBookToBeAdded,
		message : "New book added successfully!"
	});
});

// update a Book based on id
app.put("/update/:id", (req, res) => {
	const findBookBasedOnId = allBooks.find(item => item.id === req.params.id);
	if (findBookBasedOnId) {
		findBookBasedOnId.title = req.body.title || findBookBasedOnId.title;
		res.status(200).json({
			data: findBookBasedOnId,
			message: `Book with id ${req.params.id} updated successfully`
		});
	} else {
		res.status(404).json({
			message: "Book not found in database!"
		});
	}
});

// delete a book based on ID
app.delete("/delete/:id", (req, res) => {
	const findCurrentBoodIndex = allBooks.findIndex(item => item.id === req.params.id);
	if (findCurrentBoodIndex !== -1) {
		const deletedBookItem = allBooks.splice(findCurrentBoodIndex, 1);
		res.status(200).json({
			message : `Book with id ${req.params.id} successfully deleted!`,
			data : deletedBookItem[0]
		});
	} else {
		res.status(404).json({
			message : "Book not found in database!"
		});
	}
});

// STARTT SERVER
const PORT = 3000;
app.listen(PORT, "localhost", () => {
	console.log(`Server running on port ${PORT}`);
});
