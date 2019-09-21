import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

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
    .then(response => response.json())
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
        const {robots, searchValue} = this.state;
        const filterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        if(!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return(
                <div className="tc">
                    <h1>Robot Friends</h1>
                    <SearchBox
                        toInput = {this.searchRobot}
                            setValue = {searchValue}
                        />
                        <Scroll>
                             <CardList robots = {filterRobot} />
                        </Scroll>
                </div>
            )
        }
    }
};

export default App;