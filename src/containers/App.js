import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
             robots: [],
             searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }
    render () {   
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ? 
            <div  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <h1>Loading</h1>
            </div> :
            (
                <div className="tc">
                    <h1 className="f2">RoboGods</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )        
    }
};

export default App;