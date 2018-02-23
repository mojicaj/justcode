import React, { Component } from 'react';
import './hero.css';
import Projects from '../projects/projects';


class Hero extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      view: ''
    }

    this.getProject = this.getProject.bind(this);
    this.addProject = this.addProject.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getProject() {
    this.setState({view: 'get', visible: true});
  }

  addProject() {
    this.setState({view: 'add', visible: true});
  }

  closeModal() {
    this.setState({visible: false, view: ''});
  }

  render() {
    return (
      <div className='hero'>
        <div className='hero-content'>
          <h1>Code alot, Code often!</h1>
          <p>The more you code the more you improve, so stop wasting
          time thinking about what to code and just code.</p>

          <button className='hero-btn' onClick={this.getProject}>Get a Project</button>
          <button className='hero-btn' onClick={this.addProject}>Add a Project</button>
        </div>

        <div>

          <Projects visible={this.state.visible} view={this.state.view} close={this.closeModal} />

        </div>

      </div>
    );
  }
}

export default Hero;
