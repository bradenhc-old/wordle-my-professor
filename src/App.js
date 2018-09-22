import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfessorSearch from './ProfessorSearch';

const data = [{ text: 'hello', value: 100 }, { text: 'world', value: 50 }];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfessorSearch/>
      </div>
    );
  }
}

export default App;
