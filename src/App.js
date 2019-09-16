import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state= {
            robots: robots,
            searchValue: ''
        }
    }

    searchRobot(event) {
        console.log(event.target.value);
    }
        
    render() {
        return(
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox
                    toInput = {this.searchRobot}
                    value={this.state.searchValue}/>
                <CardList robots = {this.state.robots} />
            </div>
        )
    }
};

export default App;