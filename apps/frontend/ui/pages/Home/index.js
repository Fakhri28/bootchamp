/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Main from '../../components/Main';
import FrontendWrapper from '../../components/Wrapper';

export default function HomePage(props) {
  return (
    <FrontendWrapper currentPageName="Home" {...props}>
      <Main {...props} />
    </FrontendWrapper>
  );
}
