/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import UserSettingDetail from '../../../../entities/UserSetting/ui/components/Detail';

export default function UserSettingDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="UserSetting" roles={roles} {...rest}>
      <UserSettingDetail {...props} />
    </WrapperDashboard>
  );
}

UserSettingDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
