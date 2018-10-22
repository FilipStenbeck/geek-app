import React, { Component } from 'react';

const search = query => {
  return fetch(`https://geek-api.herokuapp.com/search?query=${query}`).then(
    response => {
      return response.json();
    }
  );
};

class SearchContainer extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    search(this.props.query).then(result => {
      this.setState({ result });
    });
  }

  componentWillReceiveProps(nextProps) {
    search(nextProps.query).then(result => {
      this.setState({ result });
    });
  }

  render() {
    return <div>search {this.props.query}</div>;
  }
}

export default SearchContainer;
