import React from 'react';
import './ProfessorList.css';

class ProfessorList extends React.Component {
  constructor(props) {
    super(props);

    // Function bindings
    this.onProfessorSelect = this.onProfessorSelect.bind(this);
  }

  onProfessorSelect(professor) {
    this.props.onSelect(professor);
  }

  render() {
    const listItems = this.props.professors.map(professor => (
      <div
        className="professor"
        key={professor.id}
        onClick={e => {
          this.onProfessorSelect(professor);
        }}
      >
        <strong>{professor.name}</strong>
        <br />
        <i>{professor.description}</i>
      </div>
    ));
    return <div className="professors-list">{listItems}</div>;
  }
}

export default ProfessorList;
