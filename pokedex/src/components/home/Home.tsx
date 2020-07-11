import React from 'react';

import PokemonSearch from './pokemon-search/PokemonSearch';

class Home extends React.Component {
    render() {
        return (
            <div>
                <PokemonSearch />
            </div>
        )
    }
}

export default Home;