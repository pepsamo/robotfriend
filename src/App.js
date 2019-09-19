import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchValue: ""
        }

    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        this.setState({
            robots: users
        });
    });
}

searchRobot = (event)  => {
    this.setState({
        searchValue: event.target.value
    });
}
    
        
    render() {
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });
        return(
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox
                    toInput = {this.searchRobot}
                        setValue = {this.state.searchValue}
                    />
                <CardList robots = {filterRobot} />
            </div>
        )
    }
};

export default App;