import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const Button = props => {
  return (
    <button className="button" onClick={props.handleClick}>
      <FontAwesomeIcon icon="search" />
    </button>
  );
};

export default Button;
