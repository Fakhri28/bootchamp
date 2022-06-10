/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperList from '../../../Wrapper/List';
import getNavsDefault from '../../Dashboard/getNavs';

import OrgListPage from '../../../../../common/ui/pages/Org/List';

const ExampleOrgListPage = (props) => (
  <OrgListPage Wrapper={WrapperList} navigations={getNavsDefault} {...props} />
);

export default ExampleOrgListPage;
