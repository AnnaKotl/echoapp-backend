const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');

router.get('/', async (req, res) => {
  try {
    const resources = await cloudinary.search
      .expression('folder:site_icons')
      .sort_by('public_id', 'asc')
      .execute();

    const icons = resources.resources.map((file) => ({
      url: file.secure_url,
      id: file.public_id,
    }));

    res.status(200).json({ success: true, icons });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch icons' });
  }
});

module.exports = router;