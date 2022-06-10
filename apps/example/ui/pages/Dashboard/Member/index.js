/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../../../../../common/ui/components/SEO';

import WrapperDashboard from '../../../Wrapper/Dashboard';

export default function ExampleDashboardMember(props) {
  const { settings, match } = props;
  return (
    <WrapperDashboard currentPageName="Dashboard" {...props}>
      <SEO
        title={`${settings && settings.name} | Dashboard | Member`}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />
      <p>Ini Dashboard Member</p>
    </WrapperDashboard>
  );
}

ExampleDashboardMember.propTypes = {
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
