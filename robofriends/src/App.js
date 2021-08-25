import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/CardList/card-list.component.jsx';
import SearchBox from './components/SearchBox/searchBox.component.jsx';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state= {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="App">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;
