import React, { Component } from 'react';
import './App.css';
import { Eg1 } from './components/eg1';
import { Eg2 } from './components/eg2';
import { Eg3 } from './components/eg3.context';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Eg1 />
        <Eg2 />
        <Eg3 />
      </div>
    );
  }
}

export default App;
