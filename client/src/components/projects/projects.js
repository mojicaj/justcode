import React, { Component } from 'react';
import './projects.css';
import GetProject from './getproject';
import AddProject from './addproject';

class Projects extends Component {
  close() {
    this.props.close();
  }

  render() {
    if (this.props.visible) {
      return (
        <div className="projects">
          {(this.props.view) === 'get' && <GetProject />}
          {(this.props.view) === 'add' && <AddProject />}

          <button className="close" onClick={this.close.bind(this)}>Close</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Projects;


/*

constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(projects => this.setState({projects}, () => console.log('Projects fetched..', projects)));
  }

<h2>Projects</h2>
          <ul>
            {this.state.projects.map(projects =>
              <li key={projects.id}>{ projects.name } - { projects.description }</li>
            )}
          </ul>

*/
