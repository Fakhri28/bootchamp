/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Loadable from 'react-loadable';

import { BrowserRouter } from 'react-router-dom';

import Loading from '../apps/common/ui/components/Loading';
import parseHost from '../apps/common/helpers/parseHost';

// toogle this if you do not want dynamic loading, e.g. for debug purpose
// import App from '../../apps/example/ui/layout';

// toogle this if you do not want dynamic loading, e.g. for debug purpose
const Apps = {
  default: Loadable({
    loader: () => import('../apps/default/ui'),
    loading: Loading,
  }),
  'common.maya': Loadable({
    loader: () => import('../apps/common/ui'),
    loading: Loading,
  }),
  'example.maya': Loadable({
    loader: () => import('../apps/example/ui'),
    loading: Loading,
  }),
  'frontend.lelang.maya': Loadable({
    loader: () => import('../apps/frontend/ui'),
    loading: Loading,
  }),
  'jcha.maya': Loadable({
    loader: () => import('../apps/jcha/ui'),
    loading: Loading,
  }),
  'sofi.maya': Loadable({
    loader: () => import('../apps/sofi/ui'),
    loading: Loading,
  }),
  'bootchamp.maya': Loadable({
    loader: () => import('../apps/bootchamp/ui'),
    loading: Loading,
  }),
};

class AppImporter extends React.Component {
  render() {
    const { props, state } = this;
    const host = parseHost(window.location.hostname);
    const App = Apps[host] || Apps.default; // toogle this if you do not want dynamic loading, e.g. for debug purpose
    return (
      <BrowserRouter>
        <App {...props} {...state} />
      </BrowserRouter>
    );
  }
}

export default AppImporter;
