import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/CardList/card-list.component.jsx';
import SearchBox from './components/SearchBox/searchBox.component.jsx';
import { robots } from './robots';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state= {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});

     
    }

    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });   

        return (
            <div className="App">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;
