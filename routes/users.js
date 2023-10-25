const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
const { isAuth } = require('../middleware/auth')

router.get('/', userController.getAll);
router.get('/:id', userController.getSingle);
router.post('/', isAuth, userController.createUser);
router.put('/:id', isAuth, userController.updateUser);
router.delete('/:id', isAuth, userController.deleteUser);

module.exports = router;