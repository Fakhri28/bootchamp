import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { ChevronRightIcon } from '@heroicons/react/solid';

import classNames from '../../helpers/classNames';
import statusStyles from '../../helpers/statusStyles';

export default function TableSimpleWithStatus(props) {
  const { docs, caption } = props;
  if (_.isEmpty(docs))
    return (
      <h2 className="mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        {`${caption} - No Data`}
      </h2>
    );

  return (
    <>
      <h2 className="mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        {caption}
      </h2>

      {/* Activity list (smallest breakpoint only) */}
      <div className="shadow sm:hidden">
        <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          {docs.map((doc) => (
            <li key={doc._id}>
              <Link to={doc.linkUrl || '#'} className="block px-4 py-4 bg-white hover:bg-gray-50">
                <span className="flex items-center space-x-4">
                  <span className="flex-1 flex space-x-2 truncate">
                    <span className="flex flex-col text-gray-500 text-sm truncate">
                      {Object.keys(doc).map((key) => {
                        if (key === 'status')
                          return (
                            <span
                              key={key}
                              className={classNames(
                                statusStyles[doc.status],
                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
                              )}
                            >
                              {doc.status}
                            </span>
                          );
                        if (
                          key !== '_id' &&
                          key !== 'owner' &&
                          key !== 'style' &&
                          key !== 'linkUrl'
                        )
                          return (
                            <span key={key} className="truncate">
                              {doc[key]}
                            </span>
                          );
                        return '';
                      })}
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mt-2">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    {Object.keys(docs[0]).map(
                      (key) =>
                        key !== '_id' &&
                        key !== 'owner' &&
                        key !== 'style' &&
                        key !== 'linkUrl' && (
                          <th
                            key={key}
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {_.upperCase(key)}
                          </th>
                        ),
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {docs.map((doc, index) => (
                    <tr key={doc._id || index} className="bg-white">
                      {Object.keys(doc).map(
                        (key) =>
                          key !== '_id' &&
                          key !== 'owner' &&
                          key !== 'style' &&
                          key !== 'linkUrl' && (
                            <td
                              key={key}
                              className="w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                              style={
                                doc[key] && doc[key].style ? doc[key].style : { textAlign: 'left' }
                              }
                            >
                              <div className="flex">
                                <Link
                                  to={doc.linkUrl || '#'}
                                  className="group inline-flex space-x-2 truncate text-sm"
                                >
                                  {key === 'status' ? (
                                    <span
                                      className={classNames(
                                        statusStyles[doc.status],
                                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
                                      )}
                                    >
                                      {doc.status}
                                    </span>
                                  ) : (
                                    <p className="text-gray-500 truncate group-hover:text-gray-900">
                                      {doc[key] && doc[key].value ? doc[key].value : doc[key]}
                                    </p>
                                  )}
                                </Link>
                              </div>
                            </td>
                          ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

TableSimpleWithStatus.defaultProps = {
  docs: [],
  caption: '',
};

TableSimpleWithStatus.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object),
  caption: PropTypes.string,
};
