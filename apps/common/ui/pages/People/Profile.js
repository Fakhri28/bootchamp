/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperPublic from '../../Wrapper/Public';
import ProfileDetail from '../../components/ProfileDetail';

export default function CommonPeopleProfilePage(props) {
  return (
    <WrapperPublic
      currentPageName="People Detail"
      caption="Caption of People Detail Page"
      description="Lorem Ipsum"
      {...props}
    >
      <ProfileDetail />
    </WrapperPublic>
  );
}
