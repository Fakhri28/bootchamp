/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperPublic from '../../Wrapper/Public';
import BlogDetail2ColumnWithImage from '../../components/BlogDetail2ColumnWithImage';

export default function CommonBlogDetailPage(props) {
  return (
    <WrapperPublic
      currentPageName="Blog Detail"
      caption="Caption of Blog Detail Page"
      description="Lorem Ipsum"
      {...props}
    >
      <BlogDetail2ColumnWithImage />
    </WrapperPublic>
  );
}
