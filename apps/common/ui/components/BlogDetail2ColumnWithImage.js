import React from 'react';
import PropTypes from 'prop-types';

export default function BlogDetail2ColumnWithImage(props) {
  const { title, subtitle, synopsis, contents, imgUrl, imgFooter } = props;

  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {subtitle}
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={imgUrl}
                    alt=""
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">{imgFooter}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">{synopsis}</p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              {contents.map((content, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={index}>{content}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogDetail2ColumnWithImage.defaultProps = {
  title: 'Title of BlogDetail2ColumnWithImage',
  subtitle: 'Subtitle of BlogDetail2ColumnWithImage',
  synopsis: 'Synopsis of BlogDetail2ColumnWithImage',
  contents: ['Paragraph 1', 'Paragraph 2'],
  imgUrl:
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  imgFooter: 'Footer of Image',
};

BlogDetail2ColumnWithImage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  synopsis: PropTypes.string,
  contents: PropTypes.arrayOf(PropTypes.string),
  imgUrl: PropTypes.string,
  imgFooter: PropTypes.string,
};
