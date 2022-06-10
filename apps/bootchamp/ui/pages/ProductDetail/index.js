/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductRecommended from '../../components/Product/RecommenDetail';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetailPage(props) {
  const { product, reviews } = props;
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <a
                        href={breadcrumb.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {breadcrumb.name}
                      </a>
                      {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Informasi Produk
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">Rp. {product.price}</p>

                <div className="ml-4 pl-4 border-l border-gray-300">
                  <h2 className="sr-only">Review</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{reviews.average} out of 5 stars</p>
                    </div>
                    <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reviews</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{product.description}</p>
              </div>

              <div className="mt-6 flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                <p className="ml-2 text-sm text-gray-500">Ready Stock</p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <form>
                <div className="sm:flex sm:justify-between">
                  {/* Size selector */}
                  <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                      Ukuran
                    </RadioGroup.Label>
                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          as="div"
                          key={size.name}
                          value={size}
                          className={({ active }) =>
                            classNames(
                              active ? 'ring-2 ring-indigo-500' : '',
                              'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none',
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label
                                as="p"
                                className="text-base font-medium text-gray-900"
                              >
                                {size.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                {size.description}
                              </RadioGroup.Description>
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'absolute -inset-px rounded-lg pointer-events-none',
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                  >
                    <span>Ukuran apa yang harus saya beli?</span>
                    <QuestionMarkCircleIcon
                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="mt-10">
                  <Link
                    to="/shoppingcart"
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Tambahkan keranjang
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <a href="#" className="group inline-flex text-base font-medium">
                    <ShieldCheckIcon
                      className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500 hover:text-gray-700">Garansi</span>
                  </a>
                </div>
              </form>
            </section>
          </div>
        </div>
        <ProductRecommended />
      </div>
      <Footer />
    </>
  );
}

ProductDetailPage.defaultProps = {
  product: {
    name: 'Everyday Ruck Snack',
    href: '#',
    price: '209000',
    description:
      'Jangan kompromi pada kapasitas membawa makanan ringan dengan tas yang ringan dan luas ini. Bagian atas serut membuat semua keripik, keripik, kentang goreng, biskuit, kerupuk, dan kue favorit Anda tetap aman.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    breadcrumbs: [
      { id: 1, name: 'Travel', href: '#' },
      { id: 2, name: 'Bags', href: '#' },
    ],
    sizes: [
      { name: '18L', description: 'Sempurna untuk makanan ringan' },
      { name: '20L', description: 'Cukup ruang untuk sejumlah makanan ringan yang banyak.' },
    ],
  },
  reviews: { average: 4, totalCount: 1624 },
};

ProductDetailPage.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
};
