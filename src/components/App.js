import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['Item A', 'Item B'],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <AddItem />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
