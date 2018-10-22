import React, { Component } from 'react';

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
          const list = [...prev, ...[game]];
          console.log({ list });
          this.setState({ result: list });
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
    return <div>results: {this.state.result.length}</div>;
  }
}

export default SearchContainer;
