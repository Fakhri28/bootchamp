/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import ItemDetail from '../../components/Item/Detail';
import FrontendWrapper from '../../components/Wrapper';

export default function ItemPage(props) {
  return (
    <FrontendWrapper currentPageName="Item" {...props}>
      <ItemDetail {...props} />
    </FrontendWrapper>
  );
}
