const mongoose = require('mongoose');
const Product = require('../models/Product');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.addProduct = (req, res) => {
  res.render('editProduct', { title: 'Add Product' });
};

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect('/');
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
