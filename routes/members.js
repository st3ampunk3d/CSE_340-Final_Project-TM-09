const express = require('express');
const router = express.Router();

const memberController = require('../controllers/members')

router.get('/', memberController.getAll);
router.post('/', memberController.createMember);

//router.get('/findByName/:name')
//router.get('/findByDog/:dog')

router.get('/:id', memberController.getSingle);
router.put('/:id', memberController.updateMember);
router.delete('/:id', memberController.deleteMember);


module.exports = router;