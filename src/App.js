import React, { Component } from 'react';
import Header from './components/Header';
import HotgamesContainer from './components/HotgamesContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HotgamesContainer />
      </div>
    );
  }
}

export default App;
