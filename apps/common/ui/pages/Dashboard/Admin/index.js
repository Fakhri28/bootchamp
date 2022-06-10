/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../../../components/SEO';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import getNavsDefault from '../getNavsDefault';

export default function CommonDashboardAdmin(props) {
  const { roles, settings, match } = props;

  return (
    <WrapperDashboard currentPageName="Dashboard" navigations={getNavsDefault(roles)} {...props}>
      <SEO
        title={`${settings && settings.name} | Dashboard | Admin`}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />
      <p>Dashboard Admin</p>
    </WrapperDashboard>
  );
}

CommonDashboardAdmin.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
