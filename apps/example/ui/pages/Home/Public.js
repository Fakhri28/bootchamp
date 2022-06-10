/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperPublic from '../../Wrapper/Public';

import FeatureList from '../../../../common/ui/components/FeatureList';

export default function ExampleHomePublic(props) {
  return (
    <WrapperPublic currentPageName="Home" {...props}>
      <FeatureList />
    </WrapperPublic>
  );
}
