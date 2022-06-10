/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductListVer(props) {
  const { people } = props;
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Trending Product</h2>
        </div>
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="w-full shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <Link to={person.href}>
                            <h3>{person.name}</h3>
                          </Link>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>

                        <ul role="list" className="flex space-x-5">
                          <li>
                            <p className="mb-2 text-indigo-700 font-semibold hover:text-gray-500">
                              Rp. {person.price}
                            </p>
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <p className="text-gray-700">{person.desc}</p>
                            </div>
                          </li>
                          <li>
                            <a href={person.color} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Color</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductListVer.defaultProps = {
  people: [
    {
      id: 1,
      name: 'Cammomile',
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      href: '/productdetail',
      price: '500000',
      color: 'Basic Ladies T-Shirt - Oneck',
      desc: 'Kaos untuk cewek, bahan cotton combed 30s (karakteristik tidak tebal dan tidak tipis nyaman di pakai untuk musim di indonesia), tekstur bahan halus, tangan pendek model kerah oneck/bulat, cocok untuk dipakai daily wear 💯',
    },
    {
      id: 2,
      name: 'Uniqlo',
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      href: '/productdetail',
      price: '500000',
      color: 'Oversize Ladies with Slit - Black, M',
      desc: 'Kaos model oversize untuk wanita dengan slit (belahan di samping kanan dan kiri) , bahan cotton combed 30s tebal, bikin gaya kalian makin hype wajib punya 😍',
    },
    {
      id: 3,
      name: 'Zalora',
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      href: '/productdetail',
      price: '500000',
      color: 'Zalmore Muscle Tee - Black, M',
      desc: 'Crop Top motif gingham, bahan cotton combed 30s tebal, bikin gaya kalian makin hype wajib punya',
    },
    // More people...
  ],
};

ProductListVer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
};
