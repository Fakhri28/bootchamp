/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import Validation from '../../../components/Validation';

class UserResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      labelButton: 'Reset Password',
    };
  }

  handleSubmit = (form) => {
    const { match, history } = this.props;
    const { token } = match.params;

    this.setState({
      disabled: true,
      labelButton: 'Resetting...',
    });

    Accounts.resetPassword(token, form.newPassword.value, (error) => {
      if (error) {
        alert(error.reason);
      } else {
        history.push('/dashboard');
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
            <Validation
              rules={{
                newPassword: {
                  required: true,
                  minlength: 6,
                },
                repeatNewPassword: {
                  required: true,
                  minlength: 6,
                  equalTo: '[name="newPassword"]',
                },
              }}
              messages={{
                newPassword: {
                  required: 'Enter a new password, please.',
                  minlength: 'Use at least six characters, please.',
                },
                repeatNewPassword: {
                  required: 'Repeat your new password, please.',
                  equalTo: "Hmm, your passwords don't match. Try again?",
                },
              }}
              submitHandler={(form) => {
                this.handleSubmit(form);
              }}
            >
              <form
                className="space-y-6"
                ref={(form) => (this.form = form)}
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="repeatNewPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Retype New Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="repeatNewPassword"
                      name="repeatNewPassword"
                      type="password"
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
            </Validation>
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

UserResetPasswordPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

export default UserResetPasswordPage;
