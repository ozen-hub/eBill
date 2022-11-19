const express = require('express');
const productController = require('../controller/ProductController');

const router = express.Router();

router.post('/save', productController.saveProduct);
router.get('/list', productController.getAllProducts);
router.get('/id-list', productController.getAllProductIds);
module.exports = router;