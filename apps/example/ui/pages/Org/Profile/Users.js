/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../../../common/ui/components/Tabs';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import OrgUsers from '../../../../../common/entities/Org/ui/components/OrgUsers';

// use tabs from common, change this if needed
import tabsDefault from '../../../../../common/ui/pages/Org/Profile/tabs';

export default function SalesOrgUsersPage(props) {
  const { tabs, match, ...rest } = props;
  return (
    <WrapperDashboard
      currentPageName="Organization"
      tabs={tabs(match.params && match.params._id)}
      match={match}
      {...rest}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Users" {...rest} />
      <OrgUsers match={match} {...rest} />
    </WrapperDashboard>
  );
}

SalesOrgUsersPage.defaultProps = {
  tabs: tabsDefault,
};

SalesOrgUsersPage.propTypes = {
  tabs: PropTypes.func,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
