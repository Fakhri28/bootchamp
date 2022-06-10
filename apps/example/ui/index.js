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

import Authenticated from '../../common/ui/components/RouteAuthenticated';
import Authorized from '../../common/ui/components/RouteAuthorized';
import Public from '../../common/ui/components/RoutePublic';

import UserLoginPage from '../../common/ui/pages/User/Access/UserLoginPage';
import UserLogoutPage from '../../common/ui/pages/User/Access/UserLogoutPage';
import UserSignupPage from '../../common/ui/pages/User/Access/UserSignupPage';
import UserVerifyEmailPage from '../../common/ui/pages/User/Access/UserVerifyEmailPage';
import UserForgetPasswordPage from '../../common/ui/pages/User/Access/UserForgetPasswordPage';
import UserResetPasswordPage from '../../common/ui/pages/User/Access/UserResetPasswordPage';

// app pages
import Home from './pages/Home';

// app authorized pages
import Dashboard from './pages/Dashboard';

// Contoh Pages
import ContohDetailPage from './pages/Contoh/Detail';
import ContohListPage from './pages/Contoh/List';

// Org Pages
import OrgListPage from './pages/Org/List';
import OrgProfilePage from './pages/Org/Profile';
import OrgRolesPage from './pages/Org/Profile/Roles';
import OrgUsersPage from './pages/Org/Profile/Users';

// User Pages
import UserListPage from './pages/User/List';
import UserProfilePage from './pages/User/Profile';
import UserRolesPage from './pages/User/Profile/Roles';
import UserIdCardPage from './pages/User/Profile/IdCard';

// All Pages
import AboutPage from './pages/About';

class ExampleApp extends React.Component {
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
    const { props, state, setAfterLoginPath } = this;

    return (
      <Switch>
        {/* Web */}
        <Route
          exact
          path="/"
          render={(routeProps) => <Home {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          path="/about"
          render={(routeProps) => <AboutPage {...routeProps} {...props} {...state} />}
        />

        {/* Dashboard */}
        <Authorized
          exact
          allowedRoles={['user', 'member', 'spv']}
          path="/dashboard"
          component={Dashboard}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* User */}
        <Authorized
          exact
          allowedRoles={['admin']}
          path="/User/List/:status/Host"
          pathAfterFailure="/dashboard"
          component={UserListPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['admin']}
          path="/User/:_id"
          pathAfterFailure="/dashboard"
          component={UserProfilePage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['admin']}
          path="/User/:_id/Roles"
          pathAfterFailure="/dashboard"
          component={UserRolesPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['admin']}
          path="/User/:_id/idcard"
          pathAfterFailure="/dashboard"
          component={UserIdCardPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* Org */}
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Org/:_id"
          pathAfterFailure="/dashboard"
          component={OrgProfilePage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Org/:_id/Roles"
          pathAfterFailure="/dashboard"
          component={OrgRolesPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Org/:_id/Users"
          pathAfterFailure="/dashboard"
          component={OrgUsersPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Org/List/:status/Host"
          pathAfterFailure="/dashboard"
          component={OrgListPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* Contoh */}
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Contoh/:_id"
          pathAfterFailure="/dashboard"
          component={ContohDetailPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Contoh/List/:status"
          pathAfterFailure="/dashboard"
          component={ContohListPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* Self */}
        <Authenticated
          exact
          path="/profile"
          component={UserProfilePage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authenticated
          exact
          path="/roles"
          component={UserRolesPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authenticated
          exact
          path="/idcard"
          component={UserIdCardPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* ALL route */}
        <Public path="/signup" component={UserSignupPage} {...props} {...state} />
        <Public path="/login" component={UserLoginPage} {...props} {...state} />
        <Route
          path="/logout"
          render={(routeProps) => (
            <UserLogoutPage {...routeProps} setAfterLoginPath={setAfterLoginPath} />
          )}
          {...props}
          {...state}
        />
        <Route path="/verify-email/:token" component={UserVerifyEmailPage} />
        <Public path="/forgetpassword" component={UserForgetPasswordPage} {...props} {...state} />
        <Public
          name="reset-password"
          path="/reset-password/:token"
          component={UserResetPasswordPage}
          {...props}
          {...state}
        />
        <Route name="NotAuthorized" path="/NotAuthorized" component={NotAuthorized} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

ExampleApp.defaultProps = {
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

ExampleApp.propTypes = {
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

export default withTrackerSsr(() => initApp())(ExampleApp);
