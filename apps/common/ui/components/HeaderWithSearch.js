/* eslint-disable jsx-a11y/label-has-associated-control */

// FIXME make example of this component

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { ShoppingCartIcon, MenuIcon, XIcon, LoginIcon } from '@heroicons/react/outline';

import Anon from './Anon';

import classNames from '../../helpers/classNames';

class HeaderWithSearch extends React.Component {
  // FIXME make route product softcode
  handleSubmit = (form) => {
    const { history, settings } = this.props;
    const keyword = form.keyword.value ? form.keyword.value.trim() : undefined;
    if (!keyword) history.push(`/Product`);
    if (keyword && keyword.length > settings.minCharSearch)
      history.push(`/Product/search/${keyword}`);
  };

  render() {
    const {
      user,
      authenticated,
      name,
      emailAddress,
      navigations,
      currentPageName,
      settings,
      history,
    } = this.props;

    return (
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={settings.logoUrlPopUp}
                      alt=""
                    />
                    <img className="hidden lg:block h-8 w-auto" src={settings.logoUrl} alt="" />
                  </div>
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
                      {navigations.map((item) => (
                        <Link
                          key={item._id}
                          to={item.linkUrl}
                          className={classNames(
                            item.name === currentPageName
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium',
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <form
                        ref={(form) => (this.form = form)}
                        onSubmit={(event) => {
                          event.preventDefault();
                          this.handleSubmit(this.form);
                        }}
                      >
                        <input
                          id="keyword"
                          name="keyword"
                          className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {authenticated ? (
                  <div className="hidden lg:block lg:ml-4">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={() => history.push('/cart')}
                      >
                        <span className="sr-only">View Cart</span>
                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-4 relative flex-shrink-0">
                        {/* eslint-disable-next-line no-shadow */}
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                                  {user && user.profile && user.profile.Image_User_PP ? (
                                    <img src={user.profile.Image_User_PP} alt="" />
                                  ) : (
                                    <Anon />
                                  )}
                                </div>
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/profile"
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                      )}
                                    >
                                      Your Profile
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/logout"
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                      )}
                                    >
                                      Sign out
                                    </Link>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                  </div>
                ) : (
                  <div className="hidden lg:block lg:ml-4">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={() => history.push('/login')}
                      >
                        <span className="sr-only">Login</span>
                        <LoginIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {navigations.map((item) => (
                  <Link
                    key={item._id}
                    to={item.linkUrl}
                    className={classNames(
                      item.name === currentPageName
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {authenticated ? (
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                        {user && user.profile && user.profile.Image_User_PP ? (
                          <img
                            className="h-10 w-10 rounded-full overflow-hidden bg-gray-100"
                            src={user.profile.Image_User_PP}
                            alt=""
                          />
                        ) : (
                          <Anon />
                        )}
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">{name}</div>
                      <div className="text-sm font-medium text-gray-400">{emailAddress}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={() => history.push('/cart')}
                    >
                      <span className="sr-only">View Cart</span>
                      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <Link
                      to="/profile"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/logout"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={() => history.push('/login')}
                    >
                      <span className="sr-only">Login</span>
                      <LoginIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
}

HeaderWithSearch.defaultProps = {
  user: {},
  name: '',
  emailAddress: '',
};

HeaderWithSearch.propTypes = {
  navigations: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
  emailAddress: PropTypes.string,
  currentPageName: PropTypes.string.isRequired,
  user: PropTypes.object,
  settings: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default HeaderWithSearch;
