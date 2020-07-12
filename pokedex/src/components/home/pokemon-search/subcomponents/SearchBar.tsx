import React from 'react';

interface SearchBarProps {
    fetchPokemon: (searchQuery: string, store: (dataSet: Object[]) => void) => Promise<Object[]>,
    updateSearchQuery: (event: any) => void,
    searchQuery: string
}

class SearchBar extends React.Component<SearchBarProps> {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.updateSearchQuery} />
                <button>Search</button>
            </div>
        )
    }
}

export default SearchBar;