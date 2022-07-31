const express = require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const upload = multer({storage: storage});

const {
  getAllHeroes,
  getHero,
  createHero,
  updateHero,
  deleteHero,
  deleteImage
} = require('../controllers/superHeroes');

router.route('/').get(getAllHeroes).post(upload.array('image'), createHero);
router.route('/:id').get(getHero).patch(upload.array('image'), updateHero).delete(deleteHero);
router.route('/:id/:filename').delete(deleteImage);


module.exports = router;