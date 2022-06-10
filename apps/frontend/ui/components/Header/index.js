import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, UserIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import classNames from '../../../../common/helpers/classNames';

export default function Header(props) {
  const { categories, pages, setMobileMenuOpen, authenticated } = props;

  return (
    <div className="relative bg-gray-900">
      {/* Navigation */}
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}

          <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              <form>
                <div>
                  <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white text-white">
                    PT Balai Lelang Rajawali Karya
                  </div>
                </div>
              </form>
              {!authenticated ? (
                <div className="flex items-center space-x-6">
                  <Link to="/" className="text-sm font-medium text-white hover:text-gray-100">
                    Register
                  </Link>
                  <Link to="/" className="text-sm font-medium text-white hover:text-gray-100">
                    Sign In
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-6">
                  <Link to="/" className="text-sm font-medium text-white hover:text-gray-100">
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <Link to="/">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
                                    {category.name}
                                    <span
                                      className={classNames(
                                        open ? 'bg-white' : '',
                                        'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200',
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white">
                                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                          {category.featured.map((item) => (
                                            <div key={item.name} className="group relative">
                                              <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-center object-cover"
                                                />
                                              </div>
                                              <Link
                                                to={item.href}
                                                className="mt-4 block font-medium text-gray-900"
                                              >
                                                <span
                                                  className="absolute z-10 inset-0"
                                                  aria-hidden="true"
                                                />
                                                {item.name}
                                              </Link>
                                              <p aria-hidden="true" className="mt-1">
                                                Shop now
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {pages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className="flex items-center text-sm font-medium text-white"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 p-2 text-white"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <Link to="/" className="ml-2 p-2 text-white">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Logo (lg-) */}
                  <Link to="/" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </Link>

                  <div className="flex-1 flex items-center justify-end">
                    <Link to="/" className="hidden text-sm font-medium text-white lg:block">
                      Search
                    </Link>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <Link to="/" className="p-2 text-white lg:hidden">
                        <span className="sr-only">Help</span>
                        <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                      </Link>
                      <Link to="/" className="hidden text-sm font-medium text-white lg:block">
                        Help
                      </Link>

                      {/* User */}
                      {authenticated && (
                        <div className="ml-4 flow-root lg:ml-8">
                          <Link to="/" className="group -m-2 p-2 flex items-center">
                            <UserIcon
                              className="flex-shrink-0 h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                            {/* <span className="ml-2 text-sm font-medium text-white">0</span> */}
                            {/* <span className="sr-only">items in cart, view bag</span> */}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

Header.defaultProps = {
  categories: [
    {
      name: 'Lot',
      featured: [
        {
          name: 'Lot 1: Barang Industrial',
          href: '/',
          imageSrc: '/lelang/industri.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Lot 2: Motor',
          href: '/',
          imageSrc: '/lelang/motor.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Lot 3: Mesin Fotokopi',
          href: '/',
          imageSrc: '/lelang/fotokopi.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Lot 4: Lambretta',
          href: '/',
          imageSrc: '/lelang/vespa1.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Kategori',
      featured: [
        {
          name: 'Mobil',
          href: '/',
          imageSrc: '/lelang/mobil.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Motor',
          href: '/',
          imageSrc: '/lelang/motor.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Spare Parts',
          href: '/',
          imageSrc: '/lelang/sparepart.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Industri',
          href: '/',
          imageSrc: '/lelang/industri.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'FAQ', href: '/' },
    { name: 'Hubungi Kami', href: '/' },
  ],
  authenticated: false,
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  pages: PropTypes.arrayOf(PropTypes.object),
  authenticated: PropTypes.bool,
  setMobileMenuOpen: PropTypes.func.isRequired,
  // currentPageName: PropTypes.string.isRequired,
  // settings: PropTypes.object.isRequired,
};
