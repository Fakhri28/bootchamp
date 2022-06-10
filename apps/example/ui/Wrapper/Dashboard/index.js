/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

// using common wrapper
import wrapper from '../../../../common/ui/Wrapper';

import SidebarWithSearchAndAvatar from '../../../../common/ui/components/SidebarWithSearchAndAvatar';

import getNavs from '../../pages/Dashboard/getNavs';

export default function ExampleWrapperDashboard(props) {
  const { children, roles, ...rest } = props;
  wrapper(props);
  return (
    <SidebarWithSearchAndAvatar navigations={getNavs(roles)} roles={roles} {...rest}>
      {children}
    </SidebarWithSearchAndAvatar>
  );
}

ExampleWrapperDashboard.defaultProps = {
  children: null,
};

ExampleWrapperDashboard.propTypes = {
  children: PropTypes.node,
  currentPageName: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
