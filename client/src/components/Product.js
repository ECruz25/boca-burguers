import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { name, description, price, index, addToOrder } = this.props;

    return (
      <div className="card medium">
        <div className="card-image">
          <img src="./images/hamburguesa.jpg" alt="" />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>Descripcion: {description}</p>
        </div>
        <div className="card-action">
          <p className="right">{price}</p>
          <button
            value="Add to Order"
            className="btn waves-effect waves-light blue accent-3"
            onClick={() => addToOrder(index)}
          >
            Order
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
