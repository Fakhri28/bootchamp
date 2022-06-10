/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import TenantDetail from '../../../../entities/Tenant/ui/components/Detail';

export default function TenantDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="Tenant" roles={roles} {...rest}>
      <TenantDetail {...props} />
    </WrapperDashboard>
  );
}

TenantDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
