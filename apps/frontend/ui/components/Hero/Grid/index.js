import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function HeroGrid(props) {
  const { imgUrl, imgAlt, title, synopsis, buttonLabel, buttonUrl } = props;
  return (
    <section
      aria-labelledby="comfort-heading"
      className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
    >
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgUrl} alt={imgAlt} className="w-full h-full object-center object-cover" />
        </div>
        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2
              id="comfort-heading"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-xl text-white">{synopsis}</p>
            <Link
              to={buttonUrl}
              className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

HeroGrid.defaultProps = {
  imgUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg',
  imgAlt: '',
  title: 'Put Title here',
  synopsis: 'You can put synopsis here, lorem ipsum etc black klasdf adslfkjasdf',
  buttonLabel: 'Click Me',
  buttonUrl: '/',
};

HeroGrid.propTypes = {
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  synopsis: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonUrl: PropTypes.string,
};
