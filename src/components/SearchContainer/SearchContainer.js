import React, { Component } from 'react';
import Hotgames from '../Hotgames';

const unique = names => names.filter((v, i) => names.indexOf(v) === i);

const search = query => {
  return fetch(`https://geek-api.herokuapp.com/search?query=${query}`).then(
    response => {
      return response.json();
    }
  );
};

const fetchGames = id => {
  return fetch(`https://geek-api.herokuapp.com/game/${id}`).then(response => {
    return response.json();
  });
};

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  getGameDetails = props => {
    search(props.query).then(result => {
      const first10 = result.result.slice(0, 11);

      first10.forEach(item =>
        fetchGames(item.id).then(game => {
          const prev = this.state.result;
          const list = [...[game], ...prev];
          const ids = list.map(game => game.id);
          const result = unique(ids).map(
            id => list.filter(game => game.id === id)[0]
          );
          this.setState({ result: result });
        })
      );
    });
  };

  componentDidMount() {
    this.getGameDetails(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getGameDetails(nextProps);
  }

  render() {
    return <Hotgames header="Search results" games={this.state.result} />;
  }
}

export default SearchContainer;
