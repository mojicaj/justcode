import React, { Component } from 'react';
import './projects.css';

class ShowProject extends Component {
  render() {
    const { name, link, description } = this.props.project;
    return (
      <div className="show_project">
        <p>{name}</p>
        <p>{link}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ShowProject;
