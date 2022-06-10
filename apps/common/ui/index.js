/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind/src/autoBind';

import { Switch, Route } from 'react-router-dom';

import withTrackerSsr from '../helpers/withTrackerSsr';
import initApp from '../helpers/initApp';

// common components
import NotAuthorized from './components/NotAuthorized';
import NotFound from './components/NotFound';
import Loading from './components/Loading';

import Authenticated from './components/RouteAuthenticated';
import Authorized from './components/RouteAuthorized';
import Public from './components/RoutePublic';

import UserLoginPage from './pages/User/Access/UserLoginPage';
import UserLogoutPage from './pages/User/Access/UserLogoutPage';
import UserSignupPage from './pages/User/Access/UserSignupPage';
import UserVerifyEmailPage from './pages/User/Access/UserVerifyEmailPage';
import UserForgetPasswordPage from './pages/User/Access/UserForgetPasswordPage';
import UserResetPasswordPage from './pages/User/Access/UserResetPasswordPage';

// app pages
import Home from './pages/Home';

// app authorized pages
import Dashboard from './pages/Dashboard';

// Tenant Pages
import TenantListDraftPage from './pages/Tenant/List/ListDraftPage';
import TenantListCurrentPage from './pages/Tenant/List/ListCurrentPage';
import TenantListHistoryPage from './pages/Tenant/List/ListHistoryPage';
import TenantListProcessingPage from './pages/Tenant/List/ListProcessingPage';

// User Pages
import UserListPage from './pages/User/List';
import UserProfilePage from './pages/User/Profile';
import UserRolesPage from './pages/User/Profile/Roles';
import UserIdCardPage from './pages/User/Profile/IdCard';

// Org Pages
import OrgListPage from './pages/Org/List';
import OrgProfilePage from './pages/Org/Profile';
import OrgRolesPage from './pages/Org/Profile/Roles';
import OrgUsersPage from './pages/Org/Profile/Users';

// Counter Pages
import CounterDetailPage from './pages/Counter/Detail';
import CounterListDraftPage from './pages/Counter/List/ListDraftPage';
import CounterListCurrentPage from './pages/Counter/List/ListCurrentPage';
import CounterListHistoryPage from './pages/Counter/List/ListHistoryPage';
import CounterListProcessingPage from './pages/Counter/List/ListProcessingPage';

// File Pages
import FileDetailPage from './pages/File/Detail';
import FileListDraftPage from './pages/File/List/ListDraftPage';
import FileListCurrentPage from './pages/File/List/ListCurrentPage';
import FileListHistoryPage from './pages/File/List/ListHistoryPage';
import FileListProcessingPage from './pages/File/List/ListProcessingPage';

// Notification Pages
import NotificationDetailPage from './pages/Notification/Detail';
import NotificationListDraftPage from './pages/Notification/List/ListDraftPage';
import NotificationListCurrentPage from './pages/Notification/List/ListCurrentPage';
import NotificationListHistoryPage from './pages/Notification/List/ListHistoryPage';
import NotificationListProcessingPage from './pages/Notification/List/ListProcessingPage';

// EmailSubscriber Pages
import EmailSubscriberDetailPage from './pages/EmailSubscriber/Detail';
import EmailSubscriberListDraftPage from './pages/EmailSubscriber/List/ListDraftPage';
import EmailSubscriberListCurrentPage from './pages/EmailSubscriber/List/ListCurrentPage';
import EmailSubscriberListHistoryPage from './pages/EmailSubscriber/List/ListHistoryPage';
import EmailSubscriberListProcessingPage from './pages/EmailSubscriber/List/ListProcessingPage';

// Contoh Pages
import ContohDetailPage from './pages/Contoh/Detail';
import ContohListPage from './pages/Contoh/List';

// Web Pages
import AboutPage from './pages/About';
import PeoplePage from './pages/People';
import BlogPage from './pages/Blog';
import PeopleProfilePage from './pages/People/Profile';
import BlogDetailPage from './pages/Blog/Detail';

class CommonApp extends React.Component {
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

    const { ready } = state;
    const { loading } = props;

    if (loading || !ready) return <Loading />;

    return (
      <Switch>
        {/* Web */}
        <Route
          exact
          name="home"
          path="/"
          render={(routeProps) => <Home {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          name="about"
          path="/about"
          render={(routeProps) => <AboutPage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          name="people"
          path="/people"
          render={(routeProps) => <PeoplePage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          name="people_profile"
          path="/people/profile"
          render={(routeProps) => <PeopleProfilePage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          name="blog"
          path="/blog"
          render={(routeProps) => <BlogPage {...routeProps} {...props} {...state} />}
        />
        <Route
          exact
          name="blog_detail"
          path="/blog/detail"
          render={(routeProps) => <BlogDetailPage {...routeProps} {...props} {...state} />}
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

        {/* Tenant */}
        <Authorized
          exact
          allowedRoles={['root']}
          path="/Tenant/List/Draft"
          pathAfterFailure="/dashboard"
          component={TenantListDraftPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['root']}
          path="/Tenant/List/Current"
          pathAfterFailure="/dashboard"
          component={TenantListCurrentPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['root']}
          path="/Tenant/List/History"
          pathAfterFailure="/dashboard"
          component={TenantListHistoryPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['root']}
          path="/Tenant/List/Processing"
          pathAfterFailure="/dashboard"
          component={TenantListProcessingPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* User */}
        <Authorized
          exact
          allowedRoles={['admin']}
          path="/User/List/:status/:scope"
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
          path="/Org/List/:status/:scope"
          pathAfterFailure="/dashboard"
          component={OrgListPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* Counter */}
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Counter/:_id"
          pathAfterFailure="/dashboard"
          component={CounterDetailPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Counter/List/Draft"
          pathAfterFailure="/dashboard"
          component={CounterListDraftPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Counter/List/Current"
          pathAfterFailure="/dashboard"
          component={CounterListCurrentPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Counter/List/History"
          pathAfterFailure="/dashboard"
          component={CounterListHistoryPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Counter/List/Processing"
          pathAfterFailure="/dashboard"
          component={CounterListProcessingPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* File */}
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/File/:_id"
          pathAfterFailure="/dashboard"
          component={FileDetailPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/File/List/Draft"
          pathAfterFailure="/dashboard"
          component={FileListDraftPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/File/List/Current"
          pathAfterFailure="/dashboard"
          component={FileListCurrentPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/File/List/History"
          pathAfterFailure="/dashboard"
          component={FileListHistoryPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/File/List/Processing"
          pathAfterFailure="/dashboard"
          component={FileListProcessingPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* Notification */}
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Notification/:_id"
          pathAfterFailure="/dashboard"
          component={NotificationDetailPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Notification/List/Draft"
          pathAfterFailure="/dashboard"
          component={NotificationListDraftPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/Notification/List/Current"
          pathAfterFailure="/dashboard"
          component={NotificationListCurrentPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Notification/List/History"
          pathAfterFailure="/dashboard"
          component={NotificationListHistoryPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/Notification/List/Processing"
          pathAfterFailure="/dashboard"
          component={NotificationListProcessingPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />

        {/* EmailSubscriber */}
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/EmailSubscriber/:_id"
          pathAfterFailure="/dashboard"
          component={EmailSubscriberDetailPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/EmailSubscriber/List/Draft"
          pathAfterFailure="/dashboard"
          component={EmailSubscriberListDraftPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['member', 'spv']}
          path="/EmailSubscriber/List/Current"
          pathAfterFailure="/dashboard"
          component={EmailSubscriberListCurrentPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/EmailSubscriber/List/History"
          pathAfterFailure="/dashboard"
          component={EmailSubscriberListHistoryPage}
          setAfterLoginPath={setAfterLoginPath}
          {...props}
          {...state}
        />
        <Authorized
          exact
          allowedRoles={['spv']}
          path="/EmailSubscriber/List/Processing"
          pathAfterFailure="/dashboard"
          component={EmailSubscriberListProcessingPage}
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

        {/* All route */}
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

CommonApp.defaultProps = {
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

CommonApp.propTypes = {
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

export default withTrackerSsr(() => initApp())(CommonApp);
