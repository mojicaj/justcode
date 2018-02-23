import React, { Component } from 'react';
import './projects.css';

class AddProject extends Component {
  /*constructor() {
    super();
    this.state = {
      projects: []
    }
  }*/

  /*componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(projects => this.setState({projects}, () => console.log('Projects fetched..', projects)));
  }*/

  render() {
    return (
      <div className="projects-content">
        <h2>Add a Project</h2>
      </div>
    )
  }
}

export default AddProject;
