/* eslint-disable jsx-a11y/label-has-associated-control */

import { Accounts } from 'meteor/accounts-base';

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { graphql } from 'react-apollo';

import Validation from '../../../../ui/components/Validation';

import parseHost from '../../../../helpers/parseHost';

import { sendVerificationEmail as sendVerificationEmailMutation } from '../utils/mutations.gql';

class UserSignup extends React.Component {
  handleSubmit = (form) => {
    const { urlAfterSignup, history, sendVerificationEmail } = this.props;

    const splitfullname = form.fullname.value.split(' ');
    const mobilePhone = form.phone.value.trim();

    Accounts.createUser(
      {
        email: form.email.value,
        password: form.password.value,
        profile: {
          fullname: form.fullname.value,
          shortname: splitfullname[0].trim(),
          phone: mobilePhone.substr(0, 1) === '0' ? `+62${mobilePhone.substring(1)}` : mobilePhone,
        },
        host: parseHost(window.location.hostname),
      },
      (error) => {
        if (error) {
          alert(error.reason);
        } else {
          sendVerificationEmail();
          history.push(urlAfterSignup);
        }
      },
    );
  };

  render() {
    const { settings } = this.props;

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="h-12 mx-auto w-auto" src={settings.logoUrlPopUp} alt="" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">SIGN UP</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              login
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Validation
              rules={{
                fullname: {
                  required: true,
                },
                email: {
                  required: true,
                  email: true,
                },
                phone: {
                  required: true,
                  mobilephoneID: true,
                },
                password: {
                  required: true,
                  minlength: 6,
                },
              }}
              messages={{
                fullname: {
                  required: "What's your full name?",
                },
                phone: {
                  required: "What's your phone number?",
                  mobilephoneID: 'Please input valid Indonesian mobile phone number',
                },
                email: {
                  required: 'Need an email address here.',
                  email: 'Is this email address correct?',
                },
                password: {
                  required: 'Need a password here.',
                  minlength: 'Please use at least six characters.',
                },
              }}
              submitHandler={(form) => {
                this.handleSubmit(form);
              }}
            >
              <form
                className="space-y-6"
                ref={(form) => (this.form = form)}
                onSubmit={(event) => event.preventDefault()}
              >
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                    Fullname
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="number"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
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
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </Validation>
          </div>
        </div>
      </div>
    );
  }
}

UserSignup.defaultProps = {
  urlAfterSignup: '/dashboard',
};

UserSignup.propTypes = {
  urlAfterSignup: PropTypes.string,
  settings: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  sendVerificationEmail: PropTypes.func.isRequired,
};

export default graphql(sendVerificationEmailMutation, {
  name: 'sendVerificationEmail',
})(UserSignup);
