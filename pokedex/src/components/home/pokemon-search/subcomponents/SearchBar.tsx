import React from 'react';

interface SearchBarProps {
    fetchPokemon: (searchQuery: string, store: (dataSet: Object[]) => void) => Promise<Object[]>
}

class SearchBar extends React.Component<SearchBarProps> {
    render() {
        return (
            <div>
                <input type="text"/>
                <button>Search</button>
            </div>
        )
    }
}

export default SearchBar;