const express = require('express');
const router = express.Router();

const eventController = require('../controllers/events');
const { isAuth } = require('../middleware/auth')

router.get('/', eventController.getAll);
router.get('/:id', eventController.getSingle);
router.post('/', isAuth, eventController.createEvent);
router.put('/:id', isAuth, eventController.updateEvent);
router.delete('/:id', isAuth, eventController.deleteEvent);

module.exports = router;