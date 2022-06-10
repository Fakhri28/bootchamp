/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

export default function Header(props) {
  const { navigation } = props;
  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex px-2 lg:px-0">
                  <div className="flex-shrink-0 flex items-center">
                    {navigation.logo.map((item) => (
                      <Link key={item.name} to={item.to}>
                        <img
                          className="block lg:hidden h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                        <img
                          className="hidden lg:block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                          alt="Workflow"
                        />
                      </Link>
                    ))}
                  </div>

                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    {navigation.header.map((item) => (
                      <>
                        <Link
                          key={item.name}
                          to={item.to}
                          className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Pencarian
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Pencarian"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <Dropdown />
                  <div className="ml-4 relative flex-shrink-0">
                    <div>
                      {navigation.profile.map((item) => (
                        <div
                          key={item.name}
                          className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Open user menu</span>
                          <Link to={item.to}>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              {navigation.header.map((item) => (
                <>
                  <div key={item.name} className="pt-2 pb-3 space-y-1">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                    <Link to={item.to}>
                      <Disclosure.Button className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  </div>
                </>
              ))}

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                    <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                  </div>
                  <Disclosure.Button className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    <Dropdown />
                  </Disclosure.Button>
                </div>
                {navigation.profile.map((item) => (
                  <>
                    <div className="mt-3 space-y-1">
                      <Link to={item.to}>
                        <Disclosure.Button className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                          {item.name}
                        </Disclosure.Button>
                      </Link>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        Sign out
                      </Disclosure.Button>
                    </div>
                  </>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

Header.defaultProps = {
  navigation: {
    header: [
      { name: 'Dashboard', to: '/' },
      { name: 'Daftar Produk', to: '/Productlist' },
      { name: 'Tutorial', to: '/help' },
    ],
    profile: [
      {
        name: 'Your Profile',
        to: '/profile',
      },
    ],
    logo: [
      {
        name: 'logo',
        to: '/',
      },
    ],
  },
};

Header.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object),
};
