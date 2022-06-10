/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import PropTypes from 'prop-types';

export default function CheckoutProduct(props) {
  const { product } = props;
  return (
    <ul role="list" className="text-sm font-medium divide-y divide-white divide-opacity-10">
      {product.map((item) => (
        <li key={item.id} className="flex items-start py-6 space-x-4">
          <img
            src={item.imageSrc}
            alt={item.imageAlt}
            className="flex-none w-20 h-20 rounded-md object-center object-cover"
          />
          <div className="flex-auto space-y-1">
            <h3 className="text-black">{item.name}</h3>
            <p>{item.color}</p>
            <p>{item.size}</p>
          </div>
          <p className="flex-none text-base font-medium text-black">{item.price}</p>
        </li>
      ))}
    </ul>
  );
}

CheckoutProduct.defaultProps = {
  product: [
    {
      id: 1,
      name: 'High Wall Tote',
      href: '#',
      price: 'RP. 210000',
      color: 'White and black',
      size: '15L',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, white handles, and black drawstring top.',
    },
    // More Product...
  ],
};

CheckoutProduct.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
