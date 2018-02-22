import React, { Component } from 'react';
import './hero.css';


class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='hero-content'>
          <h1>Code alot, Code often!</h1>
          <p>The more you code the more you improve, so stop wasting
          time thinking about what to code and just code.</p>

          <a className='hero-btn' href='/project'>Get a Project</a>
          <a className='hero-btn' href='/add'>Add a Project</a>
        </div>

      </div>
    );
  }
}

export default Hero;
