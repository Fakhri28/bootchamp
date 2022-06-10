import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../../../components/Loading';
import UserLogin from '../../../../entities/User/ui/components/UserLogin';

export default function UserLoginPage(props) {
  const { loggingIn } = props;
  if (loggingIn) return <Loading />;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <UserLogin {...props} />;
}

UserLoginPage.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
};
