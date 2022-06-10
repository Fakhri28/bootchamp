/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckoutContact from '../../components/Checkout/Contact';
import CheckoutProduct from '../../components/Checkout/Product';

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Background color split screen for large screens */}
          <div>
            {/* <div
              className="hidden lg:block fixed top-0 left-0 w-1/2 h-screen bg-white"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block fixed top-0 right-0 w-1/2 h-screen bg-indigo-900"
              aria-hidden="true"
            /> */}

            <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-16">
              <h1 className="sr-only">Checkout</h1>

              <section
                aria-labelledby="summary-heading"
                className="bg-indigo-900 text-indigo-300 py-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
              >
                <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                  <h2 id="summary-heading" className="sr-only">
                    Order summary
                  </h2>

                  <dl>
                    <dt className="text-sm font-medium">Amount due</dt>
                    <dd className="mt-1 text-3xl font-extrabold text-black">$232.00</dd>
                  </dl>

                  <CheckoutProduct />

                  <dl className="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6">
                    <div className="flex items-center justify-between">
                      <dt>Subtotal</dt>
                      <dd>$570.00</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt>Shipping</dt>
                      <dd>$25.00</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt>Taxes</dt>
                      <dd>$47.60</dd>
                    </div>

                    <div className="flex items-center justify-between border-t border-white border-opacity-10 text-black pt-6">
                      <dt className="text-base">Total</dt>
                      <dd className="text-base">$642.60</dd>
                    </div>
                  </dl>
                </div>
              </section>

              <section
                aria-labelledby="payment-and-shipping-heading"
                className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
              >
                <h2 id="payment-and-shipping-heading" className="sr-only">
                  Payment and shipping details
                </h2>
                <CheckoutContact />
                <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                  <Link
                    to="/ordersummaries"
                    type="submit"
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Pay now
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
