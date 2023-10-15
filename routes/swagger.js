const router = require('express').Router();

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


//@desc     Swagger API Documentation
//@rout     /api-docs
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;