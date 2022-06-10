/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import UserLogDetail from '../../../../entities/UserLog/ui/components/Detail';

export default function UserLogDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="UserLog" roles={roles} {...rest}>
      <UserLogDetail {...props} />
    </WrapperDashboard>
  );
}

UserLogDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
