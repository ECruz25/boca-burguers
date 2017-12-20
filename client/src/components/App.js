import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

import ProductList from './ProductList';
import Order from './Order';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={ProductList} exact={true} />
            <Route path="/order" component={AddConnectionPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
