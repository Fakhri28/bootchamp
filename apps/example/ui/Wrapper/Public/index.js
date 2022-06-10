/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

// using common wrapper
import wrapper from '../../../../common/ui/Wrapper';

import HeaderFullWidthFlyouts from '../../../../common/ui/components/HeaderFullWidthFlyouts';
import FooterOnly from '../../../../common/ui/components/FooterOnly';
import SEO from '../../../../common/ui/components/SEO';

export default function ExampleWrapperPublic(props) {
  const { children, match, settings, currentPageName, ...rest } = props;
  wrapper(props);

  return (
    <>
      <HeaderFullWidthFlyouts settings={settings} {...rest} />
      <SEO
        title={`${settings && settings.name} | ${currentPageName}`}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />
      {children}
      <FooterOnly copyright={settings.copyright} />
    </>
  );
}

ExampleWrapperPublic.defaultProps = {
  children: null,
  authenticated: false,
};

ExampleWrapperPublic.propTypes = {
  children: PropTypes.node,
  authenticated: PropTypes.bool,
  currentPageName: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
