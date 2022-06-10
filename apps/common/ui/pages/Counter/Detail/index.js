/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import CounterDetail from '../../../../entities/Counter/ui/components/Detail';

export default function CounterDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="Counter" roles={roles} {...rest}>
      <CounterDetail {...props} />
    </WrapperDashboard>
  );
}

CounterDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
