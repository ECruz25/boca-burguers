import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    con: 'Edwin',
  };

  componentDidMount() {
    fetch('/asd')
      .then(res => res.json())
      .then(data => this.setState({ con: data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.con}</p>
      </div>
    );
  }
}

export default App;
