import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Dialog, Tab, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import classNames from '../../../../common/helpers/classNames';

export default function MobileMenu(props) {
  const { mobileMenuOpen, setMobileMenuOpen, categories, pages } = props;

  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileMenuOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex px-4 space-x-8">
                  {categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'text-indigo-600 border-indigo-600'
                            : 'text-gray-900 border-transparent',
                          'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                        )
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                {categories.map((category) => (
                  <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
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
                            className="mt-6 block text-sm font-medium text-gray-900"
                          >
                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              {pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link to={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              <div className="flow-root">
                <Link to="/" className="-m-2 p-2 block font-medium text-gray-900">
                  Create an account
                </Link>
              </div>
              <div className="flow-root">
                <Link to="/" className="-m-2 p-2 block font-medium text-gray-900">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}

MobileMenu.defaultProps = {
  categories: [
    {
      name: 'Lot',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Kategori',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};

MobileMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  pages: PropTypes.arrayOf(PropTypes.object),
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
  // currentPageName: PropTypes.string.isRequired,
  // settings: PropTypes.object.isRequired,
};
