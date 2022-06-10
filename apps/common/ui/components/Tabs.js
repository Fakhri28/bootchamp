/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from '../../helpers/classNames';

export default function Tabs(props) {
  const { tabs, current, history } = props;

  return (
    <div className="mx-auto sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        {/* Tabs */}
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.name === current).name}
            onChange={(event) =>
              history.push(tabs.find((tab) => tab.name === event.target.value).linkUrl)
            }
          >
            {tabs.map((tab) => (
              <option key={tab._id}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <Link
                  key={tab._id}
                  to={tab.linkUrl}
                  className={classNames(
                    tab.name === current
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                  )}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        tab.name === current
                          ? 'bg-purple-100 text-purple-600'
                          : 'bg-gray-100 text-gray-900',
                        'hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  current: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};
