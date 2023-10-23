const express = require('express');
const router = express.Router();

const eventController = require('../controllers/events');

router.get('/', eventController.getAll);
router.get('/:id', eventController.getSingle);
router.post('/', eventController.createEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;