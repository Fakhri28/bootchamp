/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../../../common/ui/components/Tabs';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import OrgProfile from '../../../../../common/entities/Org/ui/components/Detail';

// use tabs from common, change this if needed
import tabsDefault from '../../../../../common/ui/pages/Org/Profile/tabs';

export default function SalesOrgProfilePage(props) {
  const { tabs, match, ...rest } = props;
  return (
    <WrapperDashboard
      currentPageName="Organization"
      tabs={tabs(match.params && match.params._id)}
      match={match}
      {...rest}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Profile" {...rest} />
      <OrgProfile match={match} {...rest} />
    </WrapperDashboard>
  );
}

SalesOrgProfilePage.defaultProps = {
  tabs: tabsDefault,
};

SalesOrgProfilePage.propTypes = {
  tabs: PropTypes.func,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
