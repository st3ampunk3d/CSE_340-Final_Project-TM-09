const express = require('express');
const router = express.Router();

const breedController = require('../controllers/breeds');

router.get('/', breedController.getAll);
router.get('/:id', breedController.getSingle);
router.post('/', breedController.createBreed);
router.put('/:id', breedController.updateBreeds);
router.delete('/:id', breedController.deleteBreed);

module.exports = router;