import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ItemList(props) {
  const { title, linkUrl, linkLabel, collections } = props;

  return (
    <section
      aria-labelledby="collection-heading"
      className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
        <h2
          id="collection-heading"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          {title}
        </h2>
        <Link
          to={linkUrl}
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          {linkLabel}
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>

      <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {collections.map((collection) => (
          <Link key={collection.name} to={collection.href} className="group block">
            <div
              aria-hidden="true"
              className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
            >
              <img
                src={collection.imageSrc}
                alt={collection.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Link to="/" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Lihat semua Lot<span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </section>
  );
}

ItemList.defaultProps = {
  title: 'Feature Products',
  linkUrl: '/Product',
  linkLabel: 'See all Products',
  collections: [
    {
      name: 'Handcrafted Collection',
      href: '/Item',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description:
        'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
      name: 'Organized Desk Collection',
      href: '/Item',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
      imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
      name: 'Focus Collection',
      href: '/Item',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
      imageAlt:
        'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
      description:
        'Be more productive than enterprise project managers with a single piece of paper.',
    },
  ],
};

ItemList.propTypes = {
  title: PropTypes.string,
  linkUrl: PropTypes.string,
  linkLabel: PropTypes.string,
  collections: PropTypes.arrayOf(PropTypes.object),
  // settings: PropTypes.object.isRequired,
};
