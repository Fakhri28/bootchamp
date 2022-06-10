/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import NavbarWithImageBackground from '../../components/NavbarWithImageBackground';
import FooterWithSitemap from '../../components/FooterWithSitemap';
import SEO from '../../components/SEO';

import wrapper from '../index';

export default function CommonWrapperPublic(props) {
  wrapper(props);

  const { children, settings, currentPageName, match, ...rest } = props;
  const { logoUrl, logoUrlPopUp, motto, copyright } = settings;

  return (
    <NavbarWithImageBackground
      logoUrl={logoUrl}
      logoUrlPopUp={logoUrlPopUp}
      settings={settings}
      {...rest}
    >
      <SEO
        title={`${settings && settings.name} | ${currentPageName}`}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />
      {children}
      <FooterWithSitemap logoUrl={logoUrl} motto={motto} copyright={copyright} />
    </NavbarWithImageBackground>
  );
}

CommonWrapperPublic.defaultProps = {
  children: null,
};

CommonWrapperPublic.propTypes = {
  children: PropTypes.node,
  currentPageName: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
