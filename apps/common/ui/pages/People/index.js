/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperPublic from '../../Wrapper/Public';
import CardListSmallAvatar from '../../components/CardListSmallAvatar';

export default function CommonPeoplePage(props) {
  return (
    <WrapperPublic
      currentPageName="People"
      caption="Caption of People Page"
      description="Lorem Ipsum"
      {...props}
    >
      <CardListSmallAvatar />
    </WrapperPublic>
  );
}
