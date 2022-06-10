import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function HeroFull(props) {
  const { imgUrl, imgAlt, title, synopsis, buttonLabel, buttonUrl } = props;
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img src={imgUrl} alt={imgAlt} className="w-full h-full object-center object-cover" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">{title}</h1>
          <p className="mt-4 text-xl text-white">{synopsis}</p>
          <Link
            to={buttonUrl}
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

HeroFull.defaultProps = {
  imgUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg',
  imgAlt: '',
  title: 'Put Title here',
  synopsis: 'You can put synopsis here, lorem ipsum etc black klasdf adslfkjasdf',
  buttonLabel: 'Click Me',
  buttonUrl: '/',
};

HeroFull.propTypes = {
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  synopsis: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonUrl: PropTypes.string,
};
