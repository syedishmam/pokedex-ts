import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './subcomponents/SearchBar';
import {fetchPokemon} from '../../../api/pokeApiFunctions';
import {storePokemonDataSet} from '../../../redux/actions/storePokemonDataSet';

interface PokemonSearchProps {
    storePokemonDataSet: any
}

class PokemonSearch extends React.Component<PokemonSearchProps> {

    state = {
        searchQuery: ''
    }

    updateSearchQuery = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({searchQuery: e.currentTarget.value});
        console.log(e.currentTarget.value);
    }

    ifEnterPress = async (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            const data = await fetchPokemon(this.state.searchQuery, this.props.storePokemonDataSet);
            console.log(data);
        }
    }

    render() {
        return (
            <div>
                <h3>Search any Pokemon on our database!</h3>
                <SearchBar updateSearchQuery={this.updateSearchQuery} searchQuery={this.state.searchQuery} ifEnterPress={this.ifEnterPress}/>
            </div>
        )
    }
}

export default connect(null, {storePokemonDataSet})(PokemonSearch);