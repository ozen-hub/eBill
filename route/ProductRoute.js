const express = require('express');
const productController = require('../controller/ProductController');

const router = express.Router();

router.post('/save', productController.saveProduct);
router.get('/all', productController.getAllProducts);
module.exports = router;