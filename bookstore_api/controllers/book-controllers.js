const bookmodel = require("../models/book-model");

async function getAllBooks(req, res) {
    try {
        const allbooks = await bookmodel.find({});
        if (allbooks?.length > 0) {
            res.status(200).json({
                success: true,
                message: "Retrieved all books successfully",
                data: allbooks
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Unable to get all books"
            });
        }
    } catch(error) {
        console.error(error);
    }
}

async function getBookByID(req, res) {
    try {
        const getBookID = req.params.id;
        const currentBook = await bookmodel.findById(getBookID);
        if (currentBook) {
            res.status(200).json({
                success: true,
                message: "Book located successfully",
                data: currentBook
            });
        } else {
            res.status(404).json({
                success: false,
                message: "NO book found in database by that ID"
            });
        }
    } catch(error) {
        console.error(error);
    }
}

async function addNewBook(req, res) {
    try {
        const newBookForm = req.body;
        const newBookCreated = await bookmodel.create(newBookForm);
        if (newBookForm) {
            res.status(201).json({
                success: true,
                message: "Successfully created new book",
                data: newBookCreated
            });
        } else {
            res.status(500).json({
                success: false,
                message: "Failed to create new book"
            });
        }
    } catch(error) {
        console.error(error);
    }
}

async function updateBookByID(req, res) {
    try {
        const findCurrentBookID = req.params.id;
        const bookData = req.body;
        const currentUpdatedBook = await bookmodel.findByIdAndUpdate(findCurrentBookID, bookData, {
            new: true
        });
        if (currentUpdatedBook) {
            res.status(200).send({
                success: true,
                message: "Book updated successfully",
                data: currentUpdatedBook
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Book not updated!"
            });
        }
    } catch(error) {
        console.error(error);
    }
}

async function deleteBookByID(req, res) {
    try {
        const getBookId = req.params.id;
        const deletedBook = await bookmodel.findByIdAndDelete(getBookId);
        if (deletedBook) {
            res.status(200).json({
                success: true,
                message: "book deleted successfully",
                data: deletedBook
            });
        } else {
            res.status(500).json({
                success: false,
                message: "unable to deleted book by that ID"
            });
        }
    } catch(error) {
        console.error(error);
    }
}

module.exports = {
    getAllBooks,
    getBookByID,
    addNewBook,
    updateBookByID,
    deleteBookByID
};