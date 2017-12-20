import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = {
    products: [],
    order: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('/products');
      const products = await res.json();
      this.setState({ products });
    } catch (e) {
      console.log(e);
    }
  }

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="products">
        {this.state.products.map(product => (
          <Product
            key={product._id}
            index={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            addToOrder={this.addToOrder}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
