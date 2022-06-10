/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperPublic from '../../Wrapper/Public';
import Blog3ColumnWithImage from '../../components/BlogList3ColumnWithImage';

export default function CommonBlogPage(props) {
  return (
    <WrapperPublic
      currentPageName="Blog"
      caption="Caption of Blog Page"
      description="Lorem Ipsum"
      {...props}
    >
      <Blog3ColumnWithImage />
    </WrapperPublic>
  );
}
