/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../../../common/ui/components/Tabs';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import UserRoles from '../../../../../common/entities/User/ui/components/UserRoles';

// use tabs from common, change this if needed
import tabsDefault from '../../../../../common/ui/pages/User/Profile/tabs';

export default function SalesUserRolesPage(props) {
  const { tabs, roles, match, ...rest } = props;
  return (
    <WrapperDashboard
      currentPageName="User"
      tabs={tabs(match.params && match.params._id)}
      match={match}
      roles={roles}
      {...rest}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Roles" {...rest} />
      <UserRoles match={match} disabled={!(roles.indexOf('admin') > -1)} {...rest} />
    </WrapperDashboard>
  );
}

SalesUserRolesPage.defaultProps = {
  tabs: tabsDefault,
};

SalesUserRolesPage.propTypes = {
  tabs: PropTypes.func,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
