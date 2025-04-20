const bookmodel = require("../models/book-model");

async function getAllBooks(req, res) {

}

async function getBookByID(req, res) {

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
        process.exit(1);
    }
}

async function updateBookByID(req, res) {

}

async function deleteBookByID(req, res) {

}

module.exports = {
    getAllBooks,
    getBookByID,
    addNewBook,
    updateBookByID,
    deleteBookByID
};