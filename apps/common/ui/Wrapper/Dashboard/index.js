/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import SidebarWithSearchAndAvatar from '../../components/SidebarWithSearchAndAvatar';

import wrapper from '../index';
import getNavsDefault from '../../pages/Dashboard/getNavsDefault';

export default function CommonWrapperDashboard(props) {
  const { children, roles, ...rest } = props;
  wrapper(props);
  return (
    <SidebarWithSearchAndAvatar navigations={getNavsDefault(roles)} roles={roles} {...rest}>
      {children}
    </SidebarWithSearchAndAvatar>
  );
}

CommonWrapperDashboard.defaultProps = {
  children: null,
};

CommonWrapperDashboard.propTypes = {
  children: PropTypes.node,
  currentPageName: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
