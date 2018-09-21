import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCloud from 'react-d3-cloud';

const data = [{ text: 'hello', value: 100 }, { text: 'world', value: 50 }];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WordCloud data={data} />
      </div>
    );
  }
}

export default App;
