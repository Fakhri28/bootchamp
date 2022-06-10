/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import ContohDetail from '../../../../entities/Contoh/ui/components/Detail';

export default function ContohDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="Contoh" roles={roles} {...rest}>
      <ContohDetail {...props} />
    </WrapperDashboard>
  );
}

ContohDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
