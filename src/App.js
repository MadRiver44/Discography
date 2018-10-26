import React, { Component } from 'react';
import './App.scss';
import Search from './Search.js';
import Albums from './Albums.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="title elegantShadow">Discography</header>
        <Search />
        <Albums />
      </div>
    );
  }
}

export default App;
