/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

// use common getNavs instead of example getNavs, while still using default parser n jsonDefs
import navigations from '../../Dashboard/getNavsDefault';

import ContohListPage from '../../../../../example/ui/pages/Contoh/List';

const CommonContohListPage = (props) => <ContohListPage navigations={navigations} {...props} />;

export default CommonContohListPage;
