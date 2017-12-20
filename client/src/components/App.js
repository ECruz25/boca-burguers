import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <div className="content">
        <ProductList />
      </div>
    );
  }
}

export default App;