import { Accounts } from 'meteor/accounts-base';

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Loading from '../../../components/Loading';

import { sendWelcomeEmail as sendWelcomeEmailMutation } from '../../../../entities/User/ui/utils/mutations.gql';

class UserVerifyEmailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidMount() {
    const { match, history, sendWelcomeEmail } = this.props;
    Accounts.verifyEmail(match.params.token, (error) => {
      if (error) {
        alert(error.reason);
        this.setState({ error: `${error.reason}. Please login and resend verification email.` });
      } else {
        setTimeout(() => {
          sendWelcomeEmail();
          history.push('/profile');
        }, 100);
      }
    });
  }

  render() {
    const { error } = this.state;
    return <p>{!error ? <Loading /> : error}</p>;
  }
}

UserVerifyEmailPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  sendWelcomeEmail: PropTypes.func.isRequired,
};

export default graphql(sendWelcomeEmailMutation, {
  name: 'sendWelcomeEmail',
})(UserVerifyEmailPage);
