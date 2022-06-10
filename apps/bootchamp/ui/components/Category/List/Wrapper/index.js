/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CategoryList from '..';

/* This example requires Tailwind CSS v2.0+ */

export default function CategoryListWrapper() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Kategori</h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Tampilkan lebih banyak<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <CategoryList
          categories={[
            {
              _id: '1',
              name: 'Produk baru',
              href: '/categorydetail',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
            },
            {
              _id: '2',
              name: 'Teknologi',
              href: '/categorydetail',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
            },
            {
              _id: '3',
              name: 'Kecantikan',
              href: '#',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
            },
            {
              _id: '4',
              name: 'Sekolah',
              href: '/categorydetail',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
            },
            {
              _id: '5',
              name: 'Promo',
              href: '/categorydetail',
              imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg',
            },
          ]}
        />
        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Tampilkan lebih banyak<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

CategoryListWrapper.defaultProps;
