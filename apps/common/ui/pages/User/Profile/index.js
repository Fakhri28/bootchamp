/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../components/Tabs';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';
import UserProfile from '../../../../entities/User/ui/components/UserProfile';

import tabs from './tabs';
import getNavsDefault from '../../Dashboard/getNavsDefault';

export default function UserProfilePage(props) {
  const { getNavs, roles, history, match } = props;
  return (
    <SidebarWithSearchAndAvatar currentPageName="User" navigations={getNavs(roles)} {...props}>
      <Tabs tabs={tabs(match.params && match.params._id)} current="Profile" history={history} />
      <UserProfile {...props} />
    </SidebarWithSearchAndAvatar>
  );
}

UserProfilePage.defaultProps = {
  getNavs: getNavsDefault,
};

UserProfilePage.propTypes = {
  getNavs: PropTypes.func,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
