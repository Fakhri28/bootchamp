/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../../../common/ui/components/Tabs';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import OrgRoles from '../../../../../common/entities/Org/ui/components/OrgRoles';

// use tabs from common, change this if needed
import tabsDefault from '../../../../../common/ui/pages/Org/Profile/tabs';

export default function SalesOrgRolesPage(props) {
  const { tabs, roles, match, ...rest } = props;
  return (
    <WrapperDashboard
      currentPageName="Organization"
      tabs={tabs(match.params && match.params._id)}
      roles={roles}
      match={match}
      {...rest}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Roles" {...rest} />
      <OrgRoles
        disabled={!(roles.indexOf('spv') > -1 || roles.indexOf('admin') > -1)}
        match={match}
        {...rest}
      />
    </WrapperDashboard>
  );
}

SalesOrgRolesPage.defaultProps = {
  tabs: tabsDefault,
};

SalesOrgRolesPage.propTypes = {
  tabs: PropTypes.func,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
