/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../../../../common/ui/components/Loading';

import DashboardAdmin from './Admin';
import DashboardSpv from './Spv';
import DashboardMember from './Member';
import DashboardUser from './User';

export default function ExampleDashboard(props) {
  const { roles, loggingIn } = props;

  if (loggingIn) return <Loading />;

  if (roles.indexOf('admin') > -1) return <DashboardAdmin {...props} />;
  if (roles.indexOf('spv') > -1) return <DashboardSpv {...props} />;
  if (roles.indexOf('member') > -1) return <DashboardMember {...props} />;
  if (roles.indexOf('user') > -1) return <DashboardUser {...props} />;
}

ExampleDashboard.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  loggingIn: PropTypes.bool.isRequired,
};
