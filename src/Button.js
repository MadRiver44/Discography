import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
// stateless functional component
const Button = (props) => {
  const { handleClick } = props;
  return (
    <button className="button" onClick={handleClick} type="submit">
      <FontAwesomeIcon icon="search" />
    </button>
  );
};

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
