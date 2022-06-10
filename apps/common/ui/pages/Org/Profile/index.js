/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../../components/Tabs';
import SidebarWithSearchAndAvatar from '../../../components/SidebarWithSearchAndAvatar';

import OrgProfile from '../../../../entities/Org/ui/components/Detail';

import tabsDefault from './tabs';
import getNavsDefault from '../../Dashboard/getNavsDefault';

export default function OrgProfilePage(props) {
  const { tabs, getNavs, roles, history, match } = props;
  return (
    <SidebarWithSearchAndAvatar
      currentPageName="Organization"
      navigations={getNavs(roles)}
      {...props}
    >
      <Tabs tabs={tabs(match.params && match.params._id)} current="Profile" history={history} />
      <OrgProfile {...props} />
    </SidebarWithSearchAndAvatar>
  );
}

OrgProfilePage.defaultProps = {
  getNavs: getNavsDefault,
  tabs: tabsDefault,
};

OrgProfilePage.propTypes = {
  getNavs: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.object),
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
