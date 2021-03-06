import React from 'react';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

class RickAndMortyCharacters extends React.Component {
  state = {
    characters: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(({ data: { results } }) => {
        this.setState({ characters: results, loading: false });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return this.state.characters.length > 0 && this.props.render(this.state);
  }
}

export default RickAndMortyCharacters;
