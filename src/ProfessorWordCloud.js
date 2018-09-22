import React from 'react';
import WordCloud from 'react-d3-cloud';
import './ProfessorWordCloud.css';

class ProfessorWordCloud extends React.Component {
  constructor(props) {
    super(props);

    // Function bindings
    this.onProfessorSelect = this.onProfessorSelect.bind(this);
  }

  onProfessorSelect(professor) {
    this.props.onSelect(professor);
  }

  render() {
    return (
      <div>
        <h1>{this.props.professor}</h1>
        <WordCloud data={this.props.words} />
      </div>
    );
  }
}

export default ProfessorWordCloud;
