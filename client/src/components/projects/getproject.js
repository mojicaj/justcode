import React, { Component } from 'react';
import './projects.css';
import ShowProject from './showproject';


class GetProject extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      project: {},
    }
  }

  componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(projects => this.setState({projects}, () => console.log('Projects fetched..', projects)));
  }

  selectProject() {
    let tier = document.querySelector('input[name="tier"]:checked').value;
    //let type = document.querySelector('input[name="type"]:checked').value;

    let project = '';

    for (let i = 0; project === ''; i++) {
      if (this.state.projects[i].tier === tier) {
        project = this.state.projects[i];
      }
    }
      this.setState({project: project});
  }

  render() {
      return (
        <div className="projects-content">
          <div className='level left'>
            <h4>
              Select Tier
            </h4>
            <div className='options'>
              <p className='label'>1</p>
              <input type='radio' name='tier' value='One' defaultChecked /><br/>
              <p className='label'>2</p>
              <input type='radio' name='tier' value='Two' /><br/>
              <p className='label'>3</p>
              <input type='radio' name='tier' value='Three' />
            </div>
          </div>


          <div className='type right'>
            <h4>
              Select Type
            </h4>
              <div className='options'>
              <p className='label'>Clone</p>
              <input type='radio' name='type' value='clone' defaultChecked /><br/>
              <p className='label'>Non-profit Request</p>
              <input type='radio' name='type' value='npreq' /><br/>
              <p className='label'>GitHub Issue</p>
              <input type='radio' name='type' value='ghiss' />
            </div>
          </div>


          <button onClick={()=>{this.selectProject()}} className="getproject-btn">
            Get Project
          </button>

          <ShowProject project={this.state.project} />

        </div>
      )
  }
}

export default GetProject;
