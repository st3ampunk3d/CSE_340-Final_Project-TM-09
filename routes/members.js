const express = require('express');
const router = express.Router();

const memberController = require('../controllers/members')
const { isAuth } = require('../middleware/auth')

router.get('/', memberController.getAll);
router.post('/', isAuth, memberController.createMember);

//router.get('/findByName/:name')
//router.get('/findByDog/:dog')

router.get('/:id', memberController.getSingle);
router.put('/:id', isAuth, memberController.updateMember);
router.delete('/:id', isAuth, memberController.deleteMember);


module.exports = router;