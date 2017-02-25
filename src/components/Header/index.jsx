import React, { PropTypes } from 'react';
import './index.scss';

const Header = props => (
  <header role="banner" className="siteHeader">
    <h1 className="siteHeader_name">{props.name}</h1>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
