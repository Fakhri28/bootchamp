import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardListWithVerticalImage(props) {
  const { docs, caption, description } = props;
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{caption}</h2>
            <p className="text-xl text-gray-500">{description}</p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {docs.map((doc) => (
                <li key={doc._id}>
                  <Link to={doc.linkUrl}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src={doc.imgUrl}
                          alt=""
                        />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{doc.name}</h3>
                        <p className="text-indigo-600">{doc.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{doc.description}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

CardListWithVerticalImage.defaultProps = {
  caption: 'Caption of CardListWithVerticalImage',
  description: 'Lorem ipsum',
  docs: [
    {
      _id: 1,
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      description:
        'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      linkUrl: '/people/profile',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      _id: 2,
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imgUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      description:
        'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      linkUrl: '/people/profile',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      _id: 3,
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imgUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      description:
        'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      linkUrl: '/people/profile',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      _id: 4,
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imgUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      description:
        'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      linkUrl: '/people/profile',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      _id: 5,
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imgUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=dYiZvcaBWW&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      description:
        'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      linkUrl: '/people/profile',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
  ],
};

CardListWithVerticalImage.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.object),
  caption: PropTypes.string,
  description: PropTypes.string,
};
