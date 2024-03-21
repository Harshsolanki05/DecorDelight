var express = require('express');
var router = express.Router();
var product = require('../controller/productController');

router.post('/insertData', product.insertData);
router.get('/', product.getData);

module.exports = router;
