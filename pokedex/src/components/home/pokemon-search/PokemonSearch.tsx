import React from 'react';

import SearchBar from './subcomponents/SearchBar';

class PokemonSearch extends React.Component {
    render() {
        return (
            <div>
                <h3>Search any Pokemon on our database!</h3>
                <SearchBar />
            </div>
        )
    }
}

export default PokemonSearch;