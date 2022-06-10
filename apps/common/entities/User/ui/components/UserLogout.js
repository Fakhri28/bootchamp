import { Meteor } from 'meteor/meteor';

import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../../../../ui/components/Loading';

class UserLogout extends React.Component {
  componentDidMount() {
    const { setAfterLoginPath, history } = this.props;
    Meteor.logout(() => {
      setAfterLoginPath(null);
      history.push('/');
    });
  }

  render() {
    return <Loading />;
  }
}

UserLogout.propTypes = {
  setAfterLoginPath: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default UserLogout;
