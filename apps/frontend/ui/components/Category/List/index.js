import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ListCategory(props) {
  const { title, linkUrl, linkLabel, categories } = props;

  return (
    <section
      aria-labelledby="category-heading"
      className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
    >
      <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
        <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
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

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
            <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
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

      <div className="mt-6 px-4 sm:hidden">
        <Link to="/" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Lihat semua kategori<span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </section>
  );
}

ListCategory.defaultProps = {
  title: 'Daftar Kategori',
  linkUrl: '/Category',
  linkLabel: 'Lihat semua kategori',
  categories: [
    {
      name: 'New Arrivals',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
      name: 'Productivity',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
      name: 'Workspace',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
      name: 'Accessories',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    {
      name: 'Sale',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg',
    },
  ],
};

ListCategory.propTypes = {
  title: PropTypes.string,
  linkUrl: PropTypes.string,
  linkLabel: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object),
};
