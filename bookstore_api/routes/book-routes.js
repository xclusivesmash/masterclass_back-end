const express = require("express");
const router = express.Router();
const {
    getAllBooks,
    getBookByID,
    updateBookByID,
    deleteBookByID,
    addNewBook
} = require("../controllers/book-controllers");

router.get("/get", getAllBooks);
router.get("/get/:id", getBookByID);
router.put("/update/:id", updateBookByID);
router.post("/add", addNewBook);
router.delete("/delete/:id", deleteBookByID);

module.exports = router;