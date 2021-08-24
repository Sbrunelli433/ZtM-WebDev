import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/CardList/card-list.component.jsx';
import { robots } from './robots';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <CardList robots={robots}/>
            </div>
        );
    }
}

export default App;
