import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  const { footerNavigation, motto, copyright } = props;
  const footerSections = Object.keys(footerNavigation);
  const sectionOneMax = Math.ceil(footerSections.length / 2);

  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, sectionOneMax).map((name) => (
                <div key={name}>
                  <h3 className="text-lg font-medium text-white">{name}</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation[name].map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link to={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(sectionOneMax).map((name) => (
                <div key={name}>
                  <h3 className="text-lg font-medium text-white">{name}</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation[name].map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link to={item.href} className="text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-16 xl:mt-0">
            <h3 className="text-lg font-medium text-white">{copyright}</h3>
            <p className="mt-6 text-sm text-gray-300">{motto}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 py-10">
          <p className="text-sm text-gray-400">
            Copyright &copy; {new Date().getFullYear()} {copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  motto: 'One Stop Solution for Auction',
  copyright: 'PT Balai Lelang Rajawali Karya',
  footerNavigation: {
    Shop: [
      { name: 'Bags', href: '/' },
      { name: 'Tees', href: '/' },
      { name: 'Objects', href: '/' },
      { name: 'Home Goods', href: '/' },
      { name: 'Accessories', href: '/' },
    ],
    Company: [
      { name: 'Who we are', href: '/' },
      { name: 'Sustainability', href: '/' },
      { name: 'Press', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Terms & Conditions', href: '/' },
      { name: 'Privacy', href: '/' },
    ],
    Account: [
      { name: 'Manage Account', href: '/' },
      { name: 'Returns & Exchanges', href: '/' },
      { name: 'Redeem a Gift Card', href: '/' },
    ],
    Connect: [
      { name: 'Contact Us', href: '/' },
      { name: 'Twitter', href: '/' },
      { name: 'Instagram', href: '/' },
      { name: 'Pinterest', href: '/' },
    ],
  },
};

Footer.propTypes = {
  motto: PropTypes.string,
  copyright: PropTypes.string,
  footerNavigation: PropTypes.object,
};
