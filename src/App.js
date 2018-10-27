import React, { Component } from 'react';
import './App.scss';
import Search from './Search.js';
import Albums from './Albums.js';
import axios from 'axios';

const API = `https://itunes.apple.com/search?term=`; //${ARTIST_NAME}
const DEFAULT_QUERY = `jay-z`;
const entityType = `&entity=album`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hits: [],
      query: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getArtistInfo = this.getArtistInfo.bind(this);
  }

  getArtistInfo() {
    axios
      .get(API + this.state.query + entityType)
      .then(response => response.data)
      .then(data => this.setState({ data: data.results }));
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.getArtistInfo();
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="title elegantShadow">Discography</header>
        <Search
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          value={this.state.query}
        />
        <Albums items={this.state.data} />
      </div>
    );
  }
}

export default App;
