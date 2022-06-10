import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Disclosure } from '@headlessui/react';

import classNames from '../../helpers/classNames';

export default function NavbarSideWithSubMenu(props) {
  const { navigations, currentPageName, settings } = props;

  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <img className="h-8 w-auto" src={settings.logoUrlPopUp} alt="" />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
          {navigations.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <Link
                  to={item.linkUrl}
                  className={classNames(
                    item.name === currentPageName
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md',
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.name === currentPageName
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.children.map((subItem) => subItem.name).includes(currentPageName)
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500',
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.linkUrl}
                          className={classNames(
                            subItem.name === currentPageName
                              ? 'bg-gray-100 text-gray-900'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md hover:text-gray-900 hover:bg-gray-50',
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ),
          )}
        </nav>
      </div>
    </div>
  );
}

NavbarSideWithSubMenu.propTypes = {
  navigations: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPageName: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
};
