const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/products', productController.getProducts);
router.get('/add', productController.addProduct);
router.get('/register', userController.registerForm);
router.post('/add', productController.createProduct);
router.post('/register', userController.register);

module.exports = router;
