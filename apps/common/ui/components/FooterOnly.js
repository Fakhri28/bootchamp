import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function FooterOnly(props) {
  const { copyright } = props;

  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <div className="max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-12 border-t border-warm-gray-200 pt-8">
          <p className="text-base text-warm-gray-400 xl:text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

FooterOnly.defaultProps = {
  copyright: 'Put your copyright text here',
};

FooterOnly.propTypes = {
  copyright: PropTypes.string,
};
