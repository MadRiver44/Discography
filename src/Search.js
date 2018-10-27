import React from 'react';
import Button from './Button.js';

const Search = props => {
  return (
    <div className="search-container">
      <form className="form-container">
        <label htmlFor="searchbar" />
        <input
          type="search"
          id="searchbar"
          placeholder="Search"
          value={props.query}
          onChange={props.handleChange}
        />
        <Button handleClick={props.handleClick} />
      </form>
    </div>
  );
};

export default Search;
