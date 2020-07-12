import React from 'react';

interface SearchBarProps {
    updateSearchQuery: (event: any) => void,
    searchQuery: string,
    ifEnterPress: (e: React.KeyboardEvent) => void
}

class SearchBar extends React.Component<SearchBarProps> {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.updateSearchQuery} onKeyPress={this.props.ifEnterPress}/>
                <button>Search</button>
            </div>
        )
    }
}

export default SearchBar;