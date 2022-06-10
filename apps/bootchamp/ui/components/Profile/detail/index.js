/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

export default function Profil(props) {
  const { profile } = props;

  return (
    <>
      <div>
        <div>
          <img className="h-32 w-full object-cover lg:h-48" src={profile.coverImageUrl} alt="" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={profile.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>Message</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {Object.keys(profile.fields).map((field) => (
            <div key={field} className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">{field}</dt>
              <dd className="mt-1 text-sm text-gray-900">{profile.fields[field]}</dd>
            </div>
          ))}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd
              className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
              dangerouslySetInnerHTML={{ __html: profile.about }}
            />
          </div>
        </dl>
      </div>
    </>
  );
}

Profil.defaultProps = {
  profile: {
    name: 'Ricardo Cooper',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    about: `
        <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
        <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
    fields: {
      Phone: '(555) 123-4567',
      Email: 'ricardocooper@example.com',
      Title: 'Senior Front-End Developer',
      Team: 'Product Development',
      Location: 'San Francisco',
      Sits: 'Oasis, 4th floor',
      Salary: '$145,000',
      Birthday: 'June 8, 1990',
    },
  },
};

Profil.propTypes = {
  profile: PropTypes.string,
};
