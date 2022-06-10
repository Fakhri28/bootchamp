/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import PropTypes from 'prop-types';
import { InboxIcon } from '@heroicons/react/outline';

export default function Notification(props) {
  const { notif } = props;
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div className="w-full flex flex-col items-center space-y-2 sm:items-end">
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        {notif.map((notify) => (
          <div
            key={notify.id}
            className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div className="p-1">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <InboxIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">{notify.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{notify.info}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Notification.defaultProps = {
  notif: [
    {
      id: 1,
      name: 'Promo Bulan Ini',
      info: 'Dapatkan potongan 50% + 20% selma bulan Ramadhan, mulai dari 1-30 April 2022.',
    },
    {
      id: 2,
      name: 'Promo 5.5',
      info: 'Gratis ongkir ke seluruh Inddonesia.',
    },
    {
      id: 3,
      name: 'Promo Kemerdekaan',
      info: 'Dapatkan diskon 17%, cashback 8K, dan potongan ongkir sampai 45K',
    },
  ],
};

Notification.propTypes = {
  notif: PropTypes.arrayOf(PropTypes.object),
};
