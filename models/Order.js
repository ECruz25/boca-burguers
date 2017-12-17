const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');

const orderSchema = new mongoose.Schema({});

orderSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Order', orderSchema);
