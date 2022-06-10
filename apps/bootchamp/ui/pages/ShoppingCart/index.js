/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ShoppingCart from '../../components/ShoppingCart';

export default function ShoppingCartPage() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Keranjang
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Barang dalam keranjangmu
              </h2>
              <ShoppingCart
                products={[
                  {
                    id: 1,
                    name: 'Ini Sofi',
                    href: '#',
                    price: '300000',
                    color: 'Kakhi',
                    inStock: true,
                    size: 'Large',
                    imageSrc:
                      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
                    imageAlt: "Front of men's Basic Tee in sienna.",
                  },
                  {
                    id: 2,
                    name: 'Ini juga Sofi',
                    href: '#',
                    price: '3200000',
                    color: 'Hitam',
                    inStock: false,
                    leadTime: '3–4 hari',
                    size: 'Large',
                    imageSrc:
                      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                  },
                  {
                    id: 3,
                    name: 'Ini juga masih Sofi',
                    href: '#',
                    price: '350000',
                    color: 'White',
                    inStock: true,
                    imageSrc:
                      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
                    imageAlt: 'Insulated bottle with white base and black snap lid.',
                  },
                ]}
              />
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >
              <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Jumlah Order
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">Rp. 99.00</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Biaya Pengiriman</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Learn more about how shipping is calculated</span>
                      <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">Rp. 5.00</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex text-sm text-gray-600">
                    <span> PPN</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Learn more about how tax is calculated</span>
                      <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">Rp. 8.32</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">Rp. 112.32</dd>
                </div>
              </dl>

              <div className="mt-6">
                <Link
                  to="/checkout"
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Checkout
                </Link>
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
