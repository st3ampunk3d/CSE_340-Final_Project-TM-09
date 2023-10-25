const express = require('express');
const router = express.Router();

const breedController = require('../controllers/breeds');
const { isAuth } = require('../middleware/auth')

router.get('/', breedController.getAll);
router.get('/:id', breedController.getSingle);
router.post('/', isAuth, breedController.createBreed);
router.put('/:id', isAuth,  breedController.updateBreeds);
router.delete('/:id', isAuth, breedController.deleteBreed);

module.exports = router;