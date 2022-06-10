/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import EmailSubscriberDetail from '../../../../entities/EmailSubscriber/ui/components/Detail';

export default function EmailSubscriberDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="EmailSubscriber" roles={roles} {...rest}>
      <EmailSubscriberDetail {...props} />
    </WrapperDashboard>
  );
}

EmailSubscriberDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
