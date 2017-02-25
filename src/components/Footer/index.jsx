import React, { PropTypes } from 'react';
import './index.scss';

const Footer = props => (
  <footer role="contentinfo" className="siteFooter">
    <p className="siteFooter_copyright"><small>&copy; {props.name}</small></p>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Footer;
