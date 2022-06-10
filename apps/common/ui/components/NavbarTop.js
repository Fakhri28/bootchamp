/* eslint-disable react/button-has-type, jsx-a11y/label-has-associated-control */

import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { Link } from 'react-router-dom';

import { MenuAlt2Icon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';

import PropTypes from 'prop-types';
import classNames from '../../helpers/classNames';

import Anon from './Anon';

export default function NavbarTop(props) {
  const {
    setSidebarOpen,
    currentPageName,
    children,
    user,
    name,
    searchForm,
    createDoc,
    createDocLabel,
    userNavigations,
  } = props;

  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 px-4 flex justify-between">
          <div className="flex-1 flex">
            {searchForm && (
              <div className="w-full flex md:ml-0">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    onChange={searchForm}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            {/* <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> */}
            {/*  <span className="sr-only">View notifications</span> */}
            {/*  <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
            {/* </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
              {({ open }) => (
                <>
                  <div id="button_profile">
                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">{name}</span>
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                        {user.profile && user.profile.Image_User_PP ? (
                          <img src={user.profile.Image_User_PP} alt="" />
                        ) : (
                          <Anon />
                        )}
                      </div>

                      {/* <img */}
                      {/*  className="h-8 w-8 rounded-full" */}
                      {/*  src={ */}
                      {/*    user.imgUrl || */}
                      {/*    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' */}
                      {/*  } */}
                      {/*  alt={name} */}
                      {/* /> */}
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
                      {userNavigations.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.linkUrl}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>

      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-2">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{currentPageName}</h3>
            </div>
            {createDoc && (
              <div className="ml-4 mt-2 flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={createDoc}
                >
                  {createDocLabel || `Create new ${currentPageName}`}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8">{children}</div>
        </div>
      </main>
    </div>
  );
}

NavbarTop.defaultProps = {
  user: {},
  name: '',
  searchForm: undefined,
  createDoc: undefined,
  createDocLabel: undefined,
  userNavigations: [
    { _id: 1, name: 'Your Profile', linkUrl: '/profile' },
    { _id: 2, name: 'Public Web', linkUrl: '/' },
    { _id: 3, name: 'Sign out', linkUrl: '/logout' },
  ],
};

NavbarTop.propTypes = {
  setSidebarOpen: PropTypes.func.isRequired,
  currentPageName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
  name: PropTypes.string,
  searchForm: PropTypes.func,
  createDoc: PropTypes.func,
  createDocLabel: PropTypes.string,
  userNavigations: PropTypes.arrayOf(PropTypes.object),
};
