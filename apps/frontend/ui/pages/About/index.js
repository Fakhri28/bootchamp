/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

// import WrapperPublic from '../../Wrapper/Public';

import CardListWithVerticalImage from '../../../../common/ui/components/CardListWithVerticalImage';
import CardListSmallAvatar from '../../../../common/ui/components/CardListSmallAvatar';

export default function AboutPage() {
  return (
    <>
      <CardListWithVerticalImage />
      <CardListSmallAvatar />
    </>
    // <WrapperPublic currentPageName="About" {...props}>
    //   <CardListWithVerticalImage />
    //   <CardListSmallAvatar />
    // </WrapperPublic>
  );
}
