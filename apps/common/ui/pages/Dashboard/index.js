/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading';

import DashboardRoot from './Root';
import DashboardAdmin from './Admin';
import DashboardSpv from './Spv';
import DashboardMember from './Member';
import DashboardUser from './User';

export default function Dashboard(props) {
  const { roles, loggingIn } = props;

  if (loggingIn) return <Loading />;

  if (roles.indexOf('root') > -1) return <DashboardRoot {...props} />;
  if (roles.indexOf('admin') > -1) return <DashboardAdmin {...props} />;
  if (roles.indexOf('spv') > -1) return <DashboardSpv {...props} />;
  if (roles.indexOf('member') > -1) return <DashboardMember {...props} />;
  if (roles.indexOf('user') > -1) return <DashboardUser {...props} />;
}

Dashboard.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  loggingIn: PropTypes.bool.isRequired,
};
