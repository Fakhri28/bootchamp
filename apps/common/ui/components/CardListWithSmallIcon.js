import React from 'react';
import PropTypes from 'prop-types';

import {
  GlobeIcon,
  RefreshIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SunIcon,
  UsersIcon,
} from '@heroicons/react/outline';

export default function CardListWithSmallIcon(props) {
  const { docs, title, subtitle, description } = props;

  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
          {subtitle}
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {title}
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">{description}</p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc) => (
              <div key={doc._id} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                        <doc.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {doc.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

CardListWithSmallIcon.defaultProps = {
  title: 'Title of CardListWithSmallIcon',
  subtitle: 'Subtitle of CardListWithSmallIcon',
  description: 'lorem ipsum',
  docs: [
    {
      _id: 1,
      name: 'Feature 1',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: GlobeIcon,
    },
    {
      _id: 2,
      name: 'Feature 2',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: ScaleIcon,
    },
    {
      _id: 3,
      name: 'Feature 3',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: UsersIcon,
    },
    {
      _id: 4,
      name: 'Feature 4',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: ShieldCheckIcon,
    },
    {
      _id: 5,
      name: 'Feature 5',
      description: '“Yuhuuu.” Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: RefreshIcon,
    },
    {
      _id: 6,
      name: 'Feature 6',
      description: 'Lorem ipsum alskdfj alksjdf laksdjf jklasjdfjjl asfd',
      icon: SunIcon,
    },
  ],
};

CardListWithSmallIcon.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};
