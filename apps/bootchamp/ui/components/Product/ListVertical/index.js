/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductList(props) {
  const { judul, listProduct } = props;
  return (
    <>
      <div className="py-6 sm:py-6 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{judul}</h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Tampilkan lebih banyak<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listProduct.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900"> Rp. {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

ProductList.defaultProps = {
  listProduct: [
    {
      id: 1,
      name: 'Hugo Boss',
      href: '/productdetail',
      imageSrc: '/bootchamp/pic1.jpeg',
      imageAlt: 'Mens Plain Gentlemanlike Vintage Solid Color Corduroy Long Sleeve Shirt',
      price: '500000',
      color: 'VNF FastDry WAVE Tee',
    },
    {
      id: 2,
      name: 'Tommy Hilfiger',
      href: '/productdetail',
      imageSrc: '/bootchamp/pic4.jpeg',
      imageAlt: 'Mens Corduroy Patchwork Double Chest Pockets Long Sleeve Shirts',
      price: '560000',
      color: 'Noxy T-Shirt Catch A Wave',
    },
    {
      id: 3,
      name: 'Lacoste',
      href: '/productdetail',
      imageSrc: '/bootchamp/pic2.jpeg',
      imageAlt: 'Mens Corduroy Colorblock Stitching Drawstring Hooded Shirt With Pocket',
      price: '700000',
      color: 'Noxy T-Shirt Road',
    },
    {
      id: 4,
      name: 'Versace',
      href: '/productdetail',
      imageSrc: '/bootchamp/pic3.jpeg',
      imageAlt: 'Mens Corduroy Color Block Panel Stitching Casual Long Sleeve Shirts',
      price: '590000',
      color: 'Noxy T-Shirt Summer Time',
    },

    {
      id: 1,
      name: 'Cammomile',
      href: '/productdetail',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '508000',
      color: 'Basic Ladies T-Shirt - Oneck',
    },
    {
      id: 2,
      name: 'Uniqlo',
      href: '/productdetail',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '1000000',
      color: 'Kaos Wanita UNIQL0',
    },
    {
      id: 3,
      name: 'Colorbox',
      href: '/productdetail',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '900000',
      color: 'AUTUMN EMBROIDERY TEE',
    },
    {
      id: 4,
      name: 'Miniso',
      href: '/productdetail',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '510000',
      color: 'MONSOON TOP - Hijau',
      // More products...
    },
  ],
  judul: 'Ini contoh judul',
};

ProductList.propTypes = {
  listProduct: PropTypes.arrayOf(PropTypes.object),
  judul: PropTypes.string,
};
