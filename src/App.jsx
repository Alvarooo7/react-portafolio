import React, { Component } from 'react';
import Portafolio from './Portafolio.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Portafolio/>
      </div>
    );
  }
}

export default App;
