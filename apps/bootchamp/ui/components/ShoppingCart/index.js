/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import PropTypes from 'prop-types';

import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid';

export default function ShoppingCart(props) {
  const { products } = props;

  return (
    <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
      {products.map((product, productIdx) => (
        <li key={product.id} className="flex py-6 sm:py-10">
          <div className="flex-shrink-0">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
            />
          </div>

          <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <a
                      href={product.href}
                      className="font-medium text-gray-700 hover:text-gray-800"
                    >
                      {product.name}
                    </a>
                  </h3>
                </div>
                <div className="mt-1 flex text-sm">
                  <p className="text-gray-500">{product.color}</p>
                  {product.size ? (
                    <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                      {product.size}
                    </p>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-gray-900">Rp. {product.price}</p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.name}
                </label>
                <select
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                </select>

                <div className="absolute top-0 right-0">
                  <button
                    type="button"
                    className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Hapus</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 flex text-sm text-gray-700 space-x-2">
              {product.inStock ? (
                <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
              ) : (
                <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
              )}

              <span>{product.inStock ? 'Ready Stock' : `Dikirim dalam ${product.leadTime}`}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

ShoppingCart.defaultProps = {
  products: [
    {
      id: 1,
      name: 'Kaos warna Kakhi',
      href: '#',
      price: '300000',
      color: 'Kakhi',
      inStock: true,
      size: 'Large',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
      id: 2,
      name: 'Kaos Warna Hitam',
      href: '#',
      price: '3200000',
      color: 'Hitam',
      inStock: false,
      leadTime: '3–4 hari',
      size: 'Large',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      name: 'Nomad Tumbler',
      href: '#',
      price: '350000',
      color: 'White',
      inStock: true,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
      imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
  ],
};

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
