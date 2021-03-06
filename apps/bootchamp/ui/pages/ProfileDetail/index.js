import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile/detail';

export default function ProfileDetail() {
  return (
    <>
      <Header />
      <Profile
        profile={{
          name: 'Mohammad Fakhri Ali',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          coverImageUrl:
            'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          about: `
              <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
              <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
            `,
          fields: {
            Phone: '(555) 123-4567',
            Email: 'ricardocooper@example.com',
            Title: 'Senior Front-End Developer',
            Team: 'Product Development',
            Location: 'San Francisco',
            Sits: 'Oasis, 4th floor',
            Salary: '$145,000',
            Birthday: 'June 8, 1990',
          },
        }}
      />
      <Footer />
    </>
  );
}
