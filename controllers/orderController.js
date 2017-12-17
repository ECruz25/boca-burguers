const mongoose = require('mongoose');
const Order = require('../models/Order');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.addOrder = (req, res) => {
  res.render('editOrder', { title: 'Add Order' });
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.redirect('/');
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.render('Orders', { title: 'Orders', Orders });
};
