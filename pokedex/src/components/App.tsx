import React from 'react';

import Home from './home/Home';

import './shared-assets/universalStyles.css';

class App extends React.Component {
    render() {
        return (
            <div id="appContainer">
                <Home />
            </div>
        )
    }
}

export default App;