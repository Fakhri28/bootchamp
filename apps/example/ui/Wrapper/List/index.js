/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import CommonWrapperList from '../../../../common/ui/Wrapper/List';

import ExampleWrapperDashboard from '../Dashboard';

const ExampleWrapperList = (props) => (
  <CommonWrapperList WrapperDashboard={ExampleWrapperDashboard} {...props} />
);

export default ExampleWrapperList;
