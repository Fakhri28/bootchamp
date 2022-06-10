/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import ContohDetailPage from '../../../../../example/ui/pages/Contoh/Detail';

import getNavsDefault from '../../Dashboard/getNavsDefault';

const CommonContohDetailPage = (props) => <ContohDetailPage getNavs={getNavsDefault} {...props} />;

export default CommonContohDetailPage;
