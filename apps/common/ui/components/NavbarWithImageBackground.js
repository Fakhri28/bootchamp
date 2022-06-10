import { Meteor } from 'meteor/meteor';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function NavbarWithImageBackground(props) {
  const {
    caption,
    description,
    navigations,
    logoUrl,
    logoUrlPopUp,
    logoName,
    imgUrl,
    buttonLink,
    history,
    children,
  } = props;

  return (
    <div className="min-h-screen bg-white">
      <header className="relative pb-24 bg-green-100 sm:pb-32">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={imgUrl} alt="" />
          <div
            className="absolute inset-0 bg-gradient-to-l from-green-100 to-cyan-700"
            style={{ mixBlendMode: 'multiply' }}
            aria-hidden="true"
          />
        </div>
        <Popover as="div" className="relative z-10">
          {({ open }) => (
            <>
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
                aria-label="Global"
              >
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link to="/">
                    <span className="sr-only">{logoName}</span>
                    <img className="h-16 w-auto sm:h-20" src={logoUrl} alt="" />
                  </Link>
                  <div className="-mr-2 flex items-center lg:hidden">
                    <Popover.Button className="bg-sky-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-10 lg:flex lg:ml-10">
                  {navigations.map((item) => (
                    <Link
                      key={item._id}
                      to={item.linkUrl || '#'}
                      className="text-base font-medium text-white hover:text-cyan-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                  {Meteor.isClient && Meteor.userId() ? (
                    <Link
                      to="/dashboard"
                      className="py-2 px-6 bg-white bg-opacity-10 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-20"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="py-2 px-6 bg-white bg-opacity-10 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-20"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </nav>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
                >
                  <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src={logoUrlPopUp} alt="" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="pt-5 pb-6">
                      <div className="px-2 space-y-1">
                        {navigations.map((item) => (
                          <Link
                            key={item._id}
                            to={item.linkUrl || '#'}
                            className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 px-5">
                        {Meteor.isClient && Meteor.userId() ? (
                          <Link
                            to="/dashboard"
                            className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-green-400 text-white font-medium hover:bg-green-500"
                          >
                            Dashboard
                          </Link>
                        ) : (
                          <Link
                            to="/login"
                            className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-green-400 text-white font-medium hover:bg-green-500"
                          >
                            Login
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {caption}
          </h1>
          <p className="mt-6 text-xl text-cyan-100 max-w-3xl">{description}</p>
          {buttonLink && (
            <p className="mt-6 text-xl text-cyan-100 max-w-3xl">
              <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => history.push(`${buttonLink.linkUrl}`)}
              >
                {buttonLink.label}
              </button>
            </p>
          )}
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

NavbarWithImageBackground.defaultProps = {
  caption: 'Catalyst Engine',
  description: 'Now with Tailwindcss',
  logoName: '',
  logoUrl: '',
  logoUrlPopUp: '',
  buttonLink: undefined,
  imgUrl:
    'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100',
  navigations: [
    { _id: 1, name: 'About Us', linkUrl: '/about' },
    { _id: 2, name: 'People', linkUrl: '/people' },
    { _id: 3, name: 'Blog', linkUrl: '/blog' },
  ],
};

NavbarWithImageBackground.propTypes = {
  caption: PropTypes.string,
  description: PropTypes.string,
  logoName: PropTypes.string,
  logoUrl: PropTypes.string,
  logoUrlPopUp: PropTypes.string,
  imgUrl: PropTypes.string,
  navigations: PropTypes.arrayOf(PropTypes.object),
  buttonLink: PropTypes.object,
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
