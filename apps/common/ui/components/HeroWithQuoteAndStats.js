import React from 'react';
import PropTypes from 'prop-types';

export default function HeroWithQuoteAndStats(props) {
  const { children, stats, quote, name, imgUrl, logoUrl, caption, synopsis, content } = props;
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-green-500 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-red-300"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card */}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img className="absolute inset-0 h-full w-full object-cover" src={imgUrl} alt="" />
              <div className="absolute inset-0" style={{ mixBlendMode: 'multiply' }} />
              <div className="absolute inset-0" />
              <div className="relative px-8">
                {logoUrl && (
                  <div>
                    <img className="h-12" src={logoUrl} alt="" />
                  </div>
                )}
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">{quote}</p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-blue-200">{name}</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              {caption}
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">{synopsis}</p>
              <p className="text-base leading-7">{content}</p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat._id} className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

HeroWithQuoteAndStats.defaultProps = {
  stats: [
    { _id: 1, label: 'Founded', value: '2017' },
    { _id: 2, label: 'Employees', value: '8' },
    { _id: 3, label: 'Clients', value: '5' },
    { _id: 4, label: 'Raised', value: '$77B' },
  ],
  children: undefined,
  caption: 'Caption of HeroWithQuoteAndStats',
  quote: 'Quote of HeroWithQuoteAndStats',
  name: 'Name of HeroWithQuoteAndStats',
  synopsis: 'Synopsis of HeroWithQuoteAndStats',
  content:
    'Lorem Ipsum ajkhsdf  ajksdfhkajsh dfajksdfh asj, ajklsdfh s kjahsdfjhjkh ajksdefahjkf adsfasf.',
  logoUrl: undefined,
  imgUrl:
    'https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100',
};

HeroWithQuoteAndStats.propTypes = {
  children: PropTypes.node,
  stats: PropTypes.arrayOf(PropTypes.object),
  quote: PropTypes.string,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  logoUrl: PropTypes.string,
  caption: PropTypes.string,
  synopsis: PropTypes.string,
  content: PropTypes.string,
};
