const Image = require("../model/image_model");
const uploadToCloudinary = require("../helpers/cloudinary_helper");

// upload image route
const uploadImage = async (req, res) => {
    try {
        // check if file exists
        if (!req.file) {
            res.status(400).json({
                success : false,
                message : "File required"
            });
        }
        // upload to database
        const { url, publicId } = uploadToCloudinary(req.file.path);
        // save url, publicId, userId to database
        const newlyUploadedImage = await Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        });
        await newlyUploadedImage.save();
        // return response
        res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            image: newlyUploadedImage
        });
    } catch(error) {
        console.error(error);
        res.status(500).json({
            success : false,
            message : "failed to upload image."
        });
    }
};

module.exports = {
    uploadImage
};