const express = require('express');
const router = express.Router();

const dogController = require('../controllers/dogs');
const { isAuth } = require('../middleware/auth')

router.get('/', dogController.getAll);
router.get('/:id', dogController.getSingle);
router.post('/', isAuth, dogController.createDog);
router.put('/:id', isAuth, dogController.updateDog);
router.delete('/:id', isAuth, dogController.deleteDog);

module.exports = router;
