import React, { Component } from 'react';
import './App.css';
import ProfessorSearch from './ProfessorSearch';
import ProfessorList from './ProfessorList';
import ProfessorWordCloud from './ProfessorWordCloud';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professors: [],
      professor: '',
      reviews: []
    };

    // Function bindings
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onProfessorSelect = this.onProfessorSelect.bind(this);
  }

  onSearchSubmit(name) {
    fetch(`http://localhost:8000/search?name=${name}`)
      .then(result => result.json())
      .then(data => {
        this.setState({ professors: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onProfessorSelect(professor) {
    fetch(`http://localhost:8000/reviews/${professor.id}`)
      .then(result => result.json())
      .then(data => {
        var names = professor.name.split(/[\s,]+/);
        console.log(names);
        this.setState({
          professor: professor.name,
          reviews: data
            .filter(d => {
              return !(d.word === names[0].toLowerCase() || d.word === names[1].toLowerCase());
            })
            .map(d => {
              return { text: d.word, value: d.count * 25 };
            })
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Wordle My Professor</h1>
        </div>
        <ProfessorSearch onSubmit={this.onSearchSubmit} />
        <ProfessorList professors={this.state.professors} onSelect={this.onProfessorSelect} />
        <ProfessorWordCloud professor={this.state.professor} words={this.state.reviews} />
      </div>
    );
  }
}

export default App;
