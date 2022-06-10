/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperPublic from '../../Wrapper/Public';
import CardListWithVerticalImage from '../../components/CardListWithVerticalImage';

export default function CommonAboutPage(props) {
  return (
    <WrapperPublic
      currentPageName="About Us"
      caption="Caption of About Us Page"
      description="lorem ipsum"
      {...props}
    >
      <CardListWithVerticalImage />
    </WrapperPublic>
  );
}
