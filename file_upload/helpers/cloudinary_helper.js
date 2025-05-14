const cloudinary = require("../config/cloudinary");

// upload image to cloudinary
const uploadToCloudinary = async (filePath) => {
    try {
        // upload image
        const output = await cloudinary.uploader.upload();
        return {
            url: output.secure_url,
            publicId: output.public_id
        };
    } catch(error) {
        console.error(error);
        throw new Error("Failed to upload image to cloudinary");
    }
};

module.exports = {
    uploadToCloudinary
};