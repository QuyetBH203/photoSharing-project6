const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dt4p8yhav",
    api_key: "631953977542275",
    api_secret: process.env.cloudinary_secret
});

module.exports = cloudinary;