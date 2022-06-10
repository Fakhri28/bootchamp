/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../components/Tabs';

import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';
import UserRoles from '../../../../entities/User/ui/components/UserRoles';

import tabs from './tabs';
import getNavsDefault from '../../Dashboard/getNavsDefault';

export default function UserRolesPage(props) {
  const { getNavs, roles, match, history } = props;
  return (
    <SidebarWithSearchAndAvatar currentPageName="User" navigations={getNavs(roles)} {...props}>
      <Tabs tabs={tabs(match.params && match.params._id)} current="Roles" history={history} />
      <UserRoles {...props} disabled={!(roles.indexOf('admin') > -1)} />
    </SidebarWithSearchAndAvatar>
  );
}

UserRolesPage.defaultProps = {
  getNavs: getNavsDefault,
};

UserRolesPage.propTypes = {
  getNavs: PropTypes.func,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
