import React from 'react';
import WordCloud from 'react-d3-cloud';

class ProfessorSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professorName: '',
      professors: [],
      selectedProfessor: 0,
      reviewData: []
    };

    // Function bindings
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.ProfessorList = this.ProfessorList.bind(this);
  }

  onChange(event) {
    this.setState({ professorName: event.target.value });
  }

  onSearch(event) {
    fetch(`http://localhost:8000/search?name=${this.state.professorName}`)
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
        var names = professor.name.split(/[\s\,]+/);
        console.log(names);
        this.setState({
          reviewData: data
            .filter(d => {
              return !(d.word == names[0].toLowerCase() || d.word === names[1].toLowerCase());
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

  ProfessorList(props) {
    const professors = props.professors;
    const listItems = professors.map(professor => (
      <li
        key={professor.id}
        onClick={e => {
          this.onProfessorSelect(professor);
        }}
      >
        {professor.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
  }

  render() {
    return (
      <div>
        <label>Search a professor's name:</label>
        <input type="text" value={this.state.professorName} onChange={this.onChange} />
        <button type="button" onClick={this.onSearch}>
          Search
        </button>
        <this.ProfessorList professors={this.state.professors} />
        <WordCloud data={this.state.reviewData} />
      </div>
    );
  }
}

export default ProfessorSearch;
