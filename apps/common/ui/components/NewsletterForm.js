/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { addEmailSubscriber as addEmailSubscriberMutation } from '../../entities/EmailSubscriber/ui/utils/mutations.gql';

class NewsletterForm extends React.Component {
  handleSubmit = (form) => {
    const { addEmailSubscriber } = this.props;
    const email = form.email.value;

    addEmailSubscriber({
      variables: {
        email,
      },
    });
  };

  render() {
    return (
      <div className="relative">
        <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
        <div className="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-12 py-10 px-6 bg-gradient-to-l from-sky-800 to-cyan-700 rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Daftarkanlah email Anda
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                Anda akan dikirimkan berita terbaru secara berkala
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form
                className="sm:flex"
                ref={(form) => (this.form = form)}
                onSubmit={(event) => {
                  event.preventDefault();
                  this.handleSubmit(this.form);
                }}
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Register
                </button>
              </form>
              <p className="mt-3 text-sm text-cyan-100">
                We care about the protection of your data. Read our{' '}
                <Link to="/privacy" className="text-white font-medium underline">
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewsletterForm.propTypes = {
  addEmailSubscriber: PropTypes.func.isRequired,
};

export default graphql(addEmailSubscriberMutation, {
  name: 'addEmailSubscriber',
  options: () => ({
    onCompleted: () => {
      alert('Thank you, your email is now subscribed to our Newsletter!');
    },
    onError: () => {
      alert('Thank you!'); // purposely so that anon doesnt know
    },
  }),
})(NewsletterForm);
