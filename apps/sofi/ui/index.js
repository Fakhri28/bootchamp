/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind/src/autoBind';

import { Switch, Route } from 'react-router-dom';

import withTrackerSsr from '../../common/helpers/withTrackerSsr';
import initApp from '../../common/helpers/initApp';

// common components
import NotAuthorized from '../../common/ui/components/NotAuthorized';
import NotFound from '../../common/ui/components/NotFound';

// import Authenticated from '../../common/ui/components/RouteAuthenticated';
// import Authorized from '../../common/ui/components/RouteAuthorized';
// import Public from '../../common/ui/components/RoutePublic';

// app pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductListPage from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetail';
import CategoryDetailPage from './pages/CategoryDetail';
import CategoryListPage from './pages/CategoryList';
import ShoppingCartPage from './pages/ShoppingCart';

// All Pages

class SofiApp extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = { ready: false, afterLoginPath: null };
  }

  componentDidMount() {
    this.setPageReady();
  }

  setPageReady = () => {
    this.setState({ ready: true });
  };

  setAfterLoginPath = (afterLoginPath) => {
    this.setState({ afterLoginPath });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { props, state, setAfterLoginPath } = this;

    return (
      <Switch>
        {/* Web */}
        <Route
          exact
          path="/"
          render={(routeProps) => <HomePage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          path="/about"
          render={(routeProps) => <AboutPage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          path="/productlist"
          render={(routeProps) => <ProductListPage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          path="/productdetail"
          render={(routeProps) => <ProductDetailPage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          path="/categorylist"
          render={(routeProps) => <CategoryListPage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          path="/categorydetail"
          render={(routeProps) => <CategoryDetailPage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          path="/shoppingcart"
          render={(routeProps) => <ShoppingCartPage {...routeProps} {...props} {...state} />}
        />

        <Route name="NotAuthorized" path="/NotAuthorized" component={NotAuthorized} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

SofiApp.defaultProps = {
  loading: true,
  user: {},
  userId: '',
  emailAddress: '',
  emailVerified: false,
  authenticated: false,
  settings: {},
  roles: [],
  host: '',
};

SofiApp.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
  userId: PropTypes.string,
  emailAddress: PropTypes.string,
  emailVerified: PropTypes.bool,
  authenticated: PropTypes.bool,
  settings: PropTypes.object,
  roles: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.string,
};

export default withTrackerSsr(() => initApp())(SofiApp);
