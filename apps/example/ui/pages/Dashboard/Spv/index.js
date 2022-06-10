/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../../../../../common/ui/components/SEO';

import WrapperDashboard from '../../../Wrapper/Dashboard';

export default function ExampleDashboardSpv(props) {
  const { settings, match } = props;
  return (
    <WrapperDashboard currentPageName="Dashboard" {...props}>
      <SEO
        title={`${settings && settings.name} | Dashboard | Spv`}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />
      <p>Ini Dashboard Spv</p>
    </WrapperDashboard>
  );
}

ExampleDashboardSpv.propTypes = {
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
