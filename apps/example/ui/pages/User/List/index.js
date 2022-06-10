/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperList from '../../../Wrapper/List';
import getNavsDefault from '../../Dashboard/getNavs';

import UserListPage from '../../../../../common/ui/pages/User/List';

const ExampleUserListPage = (props) => (
  <UserListPage Wrapper={WrapperList} navigations={getNavsDefault} {...props} />
);

export default ExampleUserListPage;
