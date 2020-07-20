import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './subcomponents/SearchBar';
import { fetchApiData } from '../../../api/pokeApiFunctions';

import './pokemonSearch.css';

interface PokemonSearchProps {
  
}

class PokemonSearch extends React.Component<PokemonSearchProps> {
  state = {
    searchQuery: '',
  };

  updateSearchQuery = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  fetchOnEnter = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const data = await fetchApiData(
        this.state.searchQuery,
      );
    }
  };

  render() {
    return (
      <div id="pokemonSearchContainer">
        <h1 id="welcomeHeader">
          Welcome, <br />
          Pokemon Trainer!
        </h1>
        <SearchBar
          updateSearchQuery={this.updateSearchQuery}
          searchQuery={this.state.searchQuery}
          fetchOnEnter={this.fetchOnEnter}
        />
      </div>
    );
  }
}

export default connect()(PokemonSearch);
