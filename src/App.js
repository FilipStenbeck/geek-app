import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Dummy from './Dummy';

import HotgamesContainer from './components/HotgamesContainer';
import GameContainer from './components/GameContainer';
import SearchContainer from './components/SearchContainer';

import './App.css';

const renderGame = props => <GameContainer id={props.match.params.id} />;
const renderSearch = props => (
  <SearchContainer query={props.match.params.query} />
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/" component={HotgamesContainer} />
            <Route exact path="/dummy" component={Dummy} />
            <Route exact path="/game/:id" render={renderGame} />
            <Route exact path="/search/:query" render={renderSearch} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
