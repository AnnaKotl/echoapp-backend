const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = (imagePath) => {
  cloudinary.uploader.upload(imagePath, (error, result) => {
    if (error) {
      console.error('Upload failed:', error);
    } else {
      console.log('Upload successful:', result);
    }
  });
};

module.exports = { uploadImage };