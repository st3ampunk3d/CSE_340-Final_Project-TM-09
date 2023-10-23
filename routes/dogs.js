const express = require('express');
const router = express.Router();

const dogController = require('../controllers/dogs');

router.get('/', dogController.getAll);
router.get('/:id', dogController.getSingle);
router.post('/', dogController.createDog);
router.put('/:id', dogController.updateDog);
router.delete('/:id', dogController.deleteDog);

module.exports = router;
