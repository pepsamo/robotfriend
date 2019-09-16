import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';

class App extends Component {
    render() {
        return(
            <div>
                <h1>Robot Friends</h1>
                <CardList robots = {robots} />
            </div>
        )
    }
};

export default App;