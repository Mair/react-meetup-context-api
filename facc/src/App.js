import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Eg1 } from './components/eg1';
import { Eg2 } from './components/eg2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Eg1 />
        <Eg2 />
      </div>
    );
  }
}

export default App;
