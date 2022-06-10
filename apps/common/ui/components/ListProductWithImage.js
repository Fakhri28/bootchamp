import { Meteor } from 'meteor/meteor';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// FIXME make example of this component

export default function ListProductWithImage(props) {
  const { docs, caption } = props;
  return (
    <div className="mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
      <p className="text-xl font-semibold text-gray-900 pb-4">{caption}</p>
      <ul className="divide-y divide-gray-200">
        {docs.map((doc) => (
          <Link key={doc._id} to={doc.linkUrl}>
            <li className="py-2">
              <div className="flex space-x-3">
                <img
                  className="h-20 w-20 rounded-md"
                  src={doc.imgUrl || Meteor.settings.public.default.imgUrl}
                  alt=""
                />
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold">{doc.name}</h3>
                    <p className="text-sm text-gray-500">{doc.price}</p>
                  </div>
                  <p className="text-sm font-semibold">{doc.subtitle}</p>
                  <p className="text-sm text-gray-500">{doc.description}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

ListProductWithImage.defaultProps = {
  docs: [],
  caption: '',
};

ListProductWithImage.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object),
  caption: PropTypes.string,
};
