import React from 'react';
import PropTypes from 'prop-types';

export default function FAQListWithOffset(props) {
  const { docs, caption, info, linkUrl } = props;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">{caption}</h2>
            <p className="mt-4 text-lg text-gray-500">
              {info}
              <a href={linkUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
                Information Team
              </a>
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {docs.map((doc) => (
                <div key={doc._id}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">{doc.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{doc.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

FAQListWithOffset.defaultProps = {
  docs: [
    {
      _id: 1,
      question: 'How do you boil water?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      _id: 2,
      question: 'Why do you need water?',
      answer:
        'You boil it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      _id: 3,
      question: 'Can you grow water?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
  ],
  caption: 'Frequently Asked Questions',
  info: 'Still no answer? You can reach out to our ',
  linkUrl: 'mailto:info@mayacatalyst.com',
};

FAQListWithOffset.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object),
  caption: PropTypes.string,
  info: PropTypes.string,
  linkUrl: PropTypes.string,
};
