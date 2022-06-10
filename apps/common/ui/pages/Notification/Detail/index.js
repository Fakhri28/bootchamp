/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import NotificationDetail from '../../../../entities/Notification/ui/components/Detail';

export default function NotificationDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="Notification" roles={roles} {...rest}>
      <NotificationDetail {...props} />
    </WrapperDashboard>
  );
}

NotificationDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
