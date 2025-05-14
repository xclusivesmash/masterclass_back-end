const multer = require("multer");
const path = require("node:path");

// set our multer storage
const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename : function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// file filter function
const checkFileFilter = (req, file, cb) => {
    if (file.mimetype.startWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Not an image. PLease upload image!"));
    }
};

// multer middleware
module.exports = multer({
    storage : storage,
    limits : 5 * 1024 * 1024 // 5MB
});