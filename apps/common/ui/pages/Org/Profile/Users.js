/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../components/Tabs';
import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';

import OrgUsers from '../../../../entities/Org/ui/components/OrgUsers';

import getNavsDefault from '../../Dashboard/getNavsDefault';
import tabsDefault from './tabs';

export default function OrgUsersPage(props) {
  const { tabs, getNavs, roles, history, match } = props;
  return (
    <SidebarWithSearchAndAvatar
      currentPageName="Organization"
      navigations={getNavs(roles)}
      {...props}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Users" history={history} />
      <OrgUsers {...props} />
    </SidebarWithSearchAndAvatar>
  );
}

OrgUsersPage.defaultProps = {
  getNavs: getNavsDefault,
  tabs: tabsDefault,
};

OrgUsersPage.propTypes = {
  getNavs: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.object),
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
