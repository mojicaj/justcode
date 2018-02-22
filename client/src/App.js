import React, { Component } from 'react';
import './App.css';
import Hero from './components/hero/hero-main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a id='title' href='/'>Just Code</a>
        </header>

        <Hero />

      </div>
    );
  }
}

export default App;
