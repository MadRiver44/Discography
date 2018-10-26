import React, { Component } from 'react';
import Button from './Button.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('button is clicked');
  }

  render() {
    return (
      <div className="search-container">
        <form className="form-container">
          {/*<div className="text-button"> */}
          <label htmlFor="searchbar" />
          <input type="search" id="searchbar" placeHolder="Search"/>
          {/* </div> */}
          <Button handleClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default Search;
