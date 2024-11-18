const express = require('express');
const multer = require('multer');
const { uploadImage, deleteTempFile } = require('../services/cloudinaryService');

const upload = multer({ dest: 'temp/' });
const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  const filePath = req.file.path;

  try {
    const imageUrl = await uploadImage(filePath, 'admin_assets');
    deleteTempFile(filePath);
    res.status(200).json({ success: true, imageUrl });
  } catch (error) {
    deleteTempFile(filePath);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
