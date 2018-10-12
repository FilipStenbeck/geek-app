import React, { Component } from 'react';
import Hotgames from '../Hotgames';
//import { fetchGames } from './utils';

const fetchGames = () => {
  return fetch('https://geek-api.herokuapp.com/hotgames').then(response => {
    return response.json();
  });
};

class HotgamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    fetchGames().then(games => {
      console.log(games);
      this.setState({ games });
    });
  }

  render() {
    return <Hotgames games={this.state.games} />;
  }
}

export default HotgamesContainer;
