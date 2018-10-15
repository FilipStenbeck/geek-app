import React, { Component } from 'react';
import Game from '../Game';

const fetchGames = id => {
  return fetch(`https://geek-api.herokuapp.com/game/${id}`).then(response => {
    return response.json();
  });
};

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
    };
  }

  componentDidMount() {
    fetchGames(this.props.id).then(game => {
      this.setState({ game });
    });
  }

  render() {
    return <Game game={this.state.game} />;
  }
}

export default GameContainer;
