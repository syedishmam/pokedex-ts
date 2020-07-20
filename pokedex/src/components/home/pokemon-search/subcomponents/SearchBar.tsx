import React from 'react';

import './styles/SearchBar.css';

interface SearchBarProps {
  updateSearchQuery: (event: any) => void;
  searchQuery: string;
  fetchOnEnter: (e: React.KeyboardEvent) => void;
}

class SearchBar extends React.Component<SearchBarProps> {
  render() {
    return (
      <div id="searchBarContainer">
        <input
          id="searchTextField"
          type="text"
          onChange={this.props.updateSearchQuery}
          onKeyPress={this.props.fetchOnEnter}
          placeholder="Search any Pokemon, type, or ability here!"
        />
      </div>
    );
  }
}

export default SearchBar;
