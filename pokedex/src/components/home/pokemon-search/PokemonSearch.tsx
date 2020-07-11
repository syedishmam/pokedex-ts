import React from 'react';

import SearchBar from './subcomponents/SearchBar';
import {fetchPokemon} from '../../../api/pokeApiFunctions';

class PokemonSearch extends React.Component {

    state = {
        searchQuery: ''
    }

    updateSearchQuery(event: KeyboardEvent) {
        this.setState({searchQuery: event.target.value})
    }

    render() {
        return (
            <div>
                <h3>Search any Pokemon on our database!</h3>
                <SearchBar fetchPokemon={fetchPokemon}/>
            </div>
        )
    }
}

export default PokemonSearch;