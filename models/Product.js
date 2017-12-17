const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a product name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: 'Please provide a price',
  },
});

productSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Product', productSchema);
