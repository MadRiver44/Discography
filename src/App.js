import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Search from './Search';
import Albums from './Albums';

const API = `https://itunes.apple.com/search?term=`; // ${ARTIST_NAME}
const entityType = `&entity=album`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getArtistInfo = this.getArtistInfo.bind(this);
  }

  getArtistInfo() {
    const { query } = this.state;
    axios
      .get(API + query + entityType, {
        headers: { crossDomain: true, 'Content-Type': 'application/json' },
      })
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
    const { query, data } = this.state;
    return (
      <div className="App">
        <header className="title elegantShadow">Discography</header>
        <Search handleClick={this.handleClick} handleChange={this.handleChange} value={query} />
        <Albums items={data} />
      </div>
    );
  }
}

export default App;
