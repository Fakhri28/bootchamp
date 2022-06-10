import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductRecommended(props) {
  const { products } = props;
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Yang mungkin kamu juga suka</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">Rp. {product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Tambahkan kekeranjang<span className="sr-only">, {product.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ProductRecommended.defaultProps = {
  products: [
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and blue',
      href: '/shoppingcart',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '707000',
    },
    {
      id: 2,
      name: 'Zip High Wall Tote',
      color: 'White and black',
      href: '/shoppingcart',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '600000',
    },
    {
      id: 3,
      name: 'Halfsize Tote',
      color: 'Clay',
      href: '/shoppingcart',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-03.jpg',
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '900000',
    },
    {
      id: 4,
      name: 'High Wall Tote',
      color: 'Black and orange',
      href: '/shoppingcart',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-04.jpg',
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '710000',
    },
  ],
};

ProductRecommended.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
