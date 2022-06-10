/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { forgotPassword as forgotPasswordMutation } from '../../../../entities/User/ui/utils/mutations.gql';

class UserForgetPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      labelButton: 'Request Reset Link',
      count: 1,
    };
  }

  handleSubmit = (form) => {
    const { forgotPassword, history } = this.props;
    const { count } = this.state;
    const email = form.email.value;

    this.setState({
      disabled: true,
      labelButton: 'Checking...',
    });

    forgotPassword({
      variables: {
        email,
      },
    }).then((response) => {
      if (!response && count > 5) {
        alert('Anda akan diarahkan ke halaman awal karena mencoba terlalu banyak');
        history.push('/');
      } else {
        this.setState({
          disabled: false,
          labelButton: 'Request Reset Link',
          count: count + 1,
        });
      }
    });
  };

  render() {
    const { settings } = this.props;
    const { logoUrlPopUp } = settings;

    const { disabled, labelButton } = this.state;

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-auto" src={logoUrlPopUp} alt="" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              ref={(form) => (this.form = form)}
              onSubmit={(event) => {
                event.preventDefault();
                this.handleSubmit(this.form);
              }}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={disabled}
                >
                  {labelButton}
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            sign up
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
}

UserForgetPasswordPage.propTypes = {
  history: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  forgotPassword: PropTypes.func.isRequired,
};

export default graphql(forgotPasswordMutation, {
  name: 'forgotPassword',
  options: ({ history }) => ({
    onCompleted: () => {
      alert('Email with reset link sent!');
      history.push('/login');
    },
    onError: (error) => {
      alert(error.message);
    },
  }),
})(UserForgetPasswordPage);
