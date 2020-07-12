import React, { SyntheticEvent } from 'react';

import SearchBar from './subcomponents/SearchBar';
import {fetchPokemon} from '../../../api/pokeApiFunctions';

class PokemonSearch extends React.Component {

    state = {
        searchQuery: ''
    }

    updateSearchQuery = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({searchQuery: e.currentTarget.value});
        console.log(e.currentTarget.value);
    }

    render() {
        return (
            <div>
                <h3>Search any Pokemon on our database!</h3>
                <SearchBar fetchPokemon={fetchPokemon} updateSearchQuery={this.updateSearchQuery} searchQuery={this.state.searchQuery}/>
            </div>
        )
    }
}

export default PokemonSearch;