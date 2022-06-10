import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CategoryList(props) {
  const { categories } = props;

  return (
    <div className="mt-4 flow-root">
      <div className="-my-2">
        <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
          <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
            {categories.map((category) => (
              <Link
                to={category.href}
                key={category._id}
                className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
              >
                <span aria-hidden="true" className="absolute inset-0">
                  <img
                    src={category.imageSrc}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                />
                <span className="relative mt-auto text-center text-xl font-bold text-white">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryList.defaultProps = {
  categories: [
    {
      _id: '1',
      name: 'New Arrivals',
      href: '/categorydetail',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
      _id: '2',
      name: 'Productivity',
      href: '/categorydetail',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
      _id: '3',
      name: 'Workspace',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
      _id: '4',
      name: 'Accessories',
      href: '/categorydetail',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    {
      _id: '5',
      name: 'Sale',
      href: '/categorydetail',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg',
    },
  ],
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};
