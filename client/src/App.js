import React, { Component } from 'react';
import './App.css';
import Hero from './components/hero/hero-main';
import About from './components/about/about';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a id='title' href='/'>Just Code</a>
        </header>

        <Hero />
        <About />
        <Footer />

      </div>
    );
  }
}

export default App;
