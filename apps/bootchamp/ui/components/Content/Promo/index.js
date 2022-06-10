/* eslint-disable react/no-unescaped-entities */
/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Promo(props) {
  const { promo } = props;
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            {promo.tagline.map((item) => (
              <h1
                key={item.name}
                className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl"
              >
                {item.name}
              </h1>
            ))}
            {promo.subtagline.map((item) => (
              <p key={item.name} className="mt-4 text-xl text-gray-500">
                {item.name}
              </p>
            ))}
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {promo.promo1.map((item) => (
                        <div
                          key={item.id}
                          className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src={item.imageUrl}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {promo.promo2.map((item) => (
                        <div key={item.id} className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={item.imageUrl}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {promo.promo3.map((item) => (
                        <div
                          key={item.id}
                          className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src={item.imageUrl}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/promo"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Beli Sekarang!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Promo.defaultProps = {
  promo: {
    promo1: [
      {
        id: 1,
        imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
      },
      {
        id: 2,
        imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
      },
    ],
    promo2: [
      {
        id: 3,
        imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
      },
      {
        id: 4,
        imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
      },
      {
        id: 5,
        imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
      },
    ],
    promo3: [
      {
        id: 6,
        imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
      },
      {
        id: 7,
        imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg',
      },
      // More promo...
    ],
    tagline: [
      {
        name: 'Ramadhan Penuh Berkah',
      },
    ],
    subtagline: [
      {
        name: 'Ramadhan penuh berkah, diskon sampe 90%! Belanja sekarang!',
      },
    ],
  },
};

Promo.propTypes = {
  promo: PropTypes.arrayOf(PropTypes.object),
};
