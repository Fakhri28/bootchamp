/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import wrapperUtils from './utils';

import MobileMenu from '../MobileMenu';
import Header from '../Header';
import Footer from '../Footer';

export default function FrontendWrapper(props) {
  const { children, ...rest } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  wrapperUtils(props);
  return (
    <div className="bg-white">
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} {...rest} />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} {...rest} />
      {children}
      <Footer {...rest} />
    </div>
  );
}

FrontendWrapper.defaultProps = {
  children: null,
};

FrontendWrapper.propTypes = {
  children: PropTypes.node,
  currentPageName: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
