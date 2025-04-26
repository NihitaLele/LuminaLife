const express = require('express');
const multer = require('multer');
const { storage } = require('.Utils/cloudinaryConfig.js'); 

const upload = multer({ storage });

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  res.json({
    message: 'Image uploaded successfully!',
    imageUrl: req.file.path,
  });
});

module.exports = router;
