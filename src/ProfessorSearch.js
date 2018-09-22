import React from 'react';
import './ProfessorSearch.css';

class ProfessorSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    // Function bindings
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSearchKeyUp = this.onSearchKeyUp.bind(this);
  }

  onChange(event) {
    this.setState({ name: event.target.value });
  }

  onSearch(event) {
    this.props.onSubmit(this.state.name);
    event.preventDefault();
    event.stopPropagation();
  }

  onSearchKeyUp(event) {
    if (event.keyCode === 13) {
      this.onSearch(event);
    }
  }

  render() {
    return (
      <div className="professor-search">
        
        <div className="input">
          <input
            type="text"
            value={this.state.professorName}
            onChange={this.onChange}
            onKeyUp={this.onSearchKeyUp}
            placeholder="Search a professor's name"
          />
        </div>

        <div className="button-search-container">
          <button type="button" onClick={this.onSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default ProfessorSearch;
