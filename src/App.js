import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Dummy from './Dummy';

import HotgamesContainer from './components/HotgamesContainer';

import './App.css';

const renderGame = props => <Dummy id={props.match.params.id} />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HotgamesContainer} />
            <Route exact path="/dummy" component={Dummy} />
            <Route exact path="/game/:id" render={renderGame} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
