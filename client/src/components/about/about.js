import React, { Component } from 'react';
import './about.css';


class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-content'>
          <div className='about-info'>
            <h2>About</h2>
            <p>When it comes to learning code, time is valuable and too much is wasted on trying to choose challenging projects. This application provides random project suggestions based on skill level. You choose a <a target='_blank' href='https://chingu.io'>Chingu Cohort Tier</a> which are based on the <a target='_blank' href='https://www.freecodecamp.org'>FreeCodeCamp curriculum</a>.</p>
          </div>
          <div className="about-tiers-container">
            <h3>Tiers</h3>
            <div>
              <div className="tiers toucans">
                <h5>1 - Toucans</h5>
                <p>Toucan projects are typically considered beginner projects. Although considered beginner, the skills practiced help establish the basics of HTML, CSS, and JavaScript. These projects are similar to the difficulty found in the Front-End Certificate on freeCodeCamp.</p>
              </div>
              <div className="tiers geckos">
                <h5>2 - Geckos</h5>
                <p>Gecko projects are intermediate in difficulty and use more complex front-end development. Many Gecko projects will include the use of JavaScript frameworks such as React, Angular, D3, etc and may often use APIs.</p>
              </div>
              <div className="tiers bears">
                <h5>3 - Bears</h5>
                <p>Bears are the advanced projects tier. Bear projects will typically make use of both front-end and back-end development. A Bear project is likely to include secure user authentication, stored data, CRUD operations, JavaScript frameworks, and APIs.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default About;
