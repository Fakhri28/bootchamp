/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../../../common/ui/components/Tabs';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import UserIdCard from '../../../../../common/entities/User/ui/components/UserIdCard';

// use tabs from common, change this if needed
import tabsDefault from '../../../../../common/ui/pages/User/Profile/tabs';

export default function SalesUserIdCardPage(props) {
  const { tabs, match, ...rest } = props;
  return (
    <WrapperDashboard
      currentPageName="User"
      tabs={tabs(match.params && match.params._id)}
      match={match}
      {...rest}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="ID Card" {...rest} />
      <UserIdCard match={match} {...rest} />
    </WrapperDashboard>
  );
}

SalesUserIdCardPage.defaultProps = {
  tabs: tabsDefault,
};

SalesUserIdCardPage.propTypes = {
  tabs: PropTypes.func,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
