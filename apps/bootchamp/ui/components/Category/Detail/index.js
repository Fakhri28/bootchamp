/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CategoryDetail(props) {
  const { orders } = props;

  return (
    <div className="space-y-16 sm:space-y-24">
      <div className="bg-white">
        <div>
          <div className="relative rounded-lg overflow-hidden lg:h-56">
            <div className="absolute inset-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
            <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
              <div>
                <h2 className="text-xl font-bold text-white">Aksesoris</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {orders.map((order) => (
        <div key={order._id}>
          <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
            <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
              {order.products.map((product) => (
                <div key={product.id} className="flex py-6 sm:py-10">
                  <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                    <div className="lg:flex-1">
                      <div className="sm:flex">
                        <div>
                          <h4 className="font-medium text-gray-900">{product.name}</h4>
                          <p className="hidden mt-2 text-sm text-gray-500 sm:block">
                            {product.description}
                          </p>
                        </div>
                        <p className="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">
                          {product.price}
                        </p>
                      </div>
                      <div className="mt-2 flex text-sm font-medium sm:mt-4">
                        <Link to={product.href} className="text-indigo-600 hover:text-indigo-500">
                          View Product
                        </Link>
                        <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                          <a href="#" className="text-indigo-600 hover:text-indigo-500">
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 font-medium">
                      {product.status === 'delivered' ? (
                        <div className="flex space-x-2">
                          <CheckIcon
                            className="flex-none w-6 h-6 text-green-500"
                            aria-hidden="true"
                          />
                          <p>
                            Delivered
                            <span className="hidden sm:inline">
                              on <time dateTime={product.datetime}>{product.date}</time>
                            </span>
                          </p>
                        </div>
                      ) : product.status === 'out-for-delivery' ? (
                        <p>Out for delivery</p>
                      ) : product.status === 'cancelled' ? (
                        <p className="text-gray-500">Cancelled</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

CategoryDetail.defaultProps = {
  orders: [
    {
      _id: '1',
      number: 'WU88191111',
      date: 'January 22, 2021',
      datetime: '2021-01-22',
      href: '#',
      invoiceHref: '#',
      total: '$302.00',
      products: [
        {
          id: 1,
          name: 'Nomad Tumbler',
          description:
            'Material Polypropylene Polypropylene merupakan salah satu material yang telah melewati proses produksi di bawah uji coba panas dan bahan kimia untuk mendapatkan kekuatan yang lebih dari material biasa pada umumnya.',
          href: '#',
          price: '7900000',
          status: 'out-for-delivery',
          date: 'January 5, 2021',
          datetime: '2021-01-05',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        // More products...
      ],
    },
    {
      _id: '3',
      number: 'WU88191122',
      date: 'January 23, 2021',
      datetime: '2021-01-22',
      href: '#',
      invoiceHref: '#',
      total: '$302.00',
      products: [
        {
          id: 2,
          name: 'Uniqlo',
          description:
            'Kaos untuk cewek, bahan cotton combed 30s (karakteristik tidak tebal dan tidak tipis nyaman di pakai untuk musim di indonesia), tekstur bahan halus, tangan pendek model kerah oneck/bulat, cocok untuk dipakai daily wear 💯',
          href: '#',
          price: '7900000',
          status: 'out-for-delivery',
          date: 'January 5, 2021',
          datetime: '2021-01-05',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        // More products...
      ],
    },
    {
      _id: '2',
      number: 'WU88191134',
      date: 'January 22, 2021',
      datetime: '2021-01-22',
      href: '#',
      invoiceHref: '#',
      total: '$302.00',
      products: [
        {
          id: 3,
          name: 'Adidas',
          description:
            'T-Shirt yang kami buat memakai bahan berkualitas sehingga nyaman untuk dipakai sehari-hari, bersiaplah untuk menjadi salah satu pusat perhatian!',
          href: '#',
          price: '7900000',
          status: 'out-for-delivery',
          date: 'January 5, 2021',
          datetime: '2021-01-05',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        // More products...
      ],
    },
  ],
};

CategoryDetail.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
};
