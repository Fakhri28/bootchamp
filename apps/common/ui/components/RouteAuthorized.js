import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { withTracker } from 'meteor/react-meteor-data';

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import parseHost from '../../helpers/parseHost';

class RouteAuthorized extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authorized: false };
  }

  componentDidMount() {
    this.checkIfAuthorized();
  }

  componentDidUpdate() {
    this.checkIfAuthorized();
  }

  checkIfAuthorized = () => {
    const { history, loading, userId, userRoles, userIsInRoles, pathAfterFailure } = this.props;

    if (!userId) {
      history.push(pathAfterFailure || '/');
    }

    if (!loading && userRoles.length > 0) {
      if (!userIsInRoles) {
        history.push('/NotAuthorized');
      } else {
        // Check to see if authorized is still false before setting. This prevents an infinite loop
        // when this is used within componentDidUpdate.
        if (!this.state.authorized) this.setState({ authorized: true }); // eslint-disable-line
      }
    }
  };

  render() {
    const { component, path, exact, ...rest } = this.props;
    const { authorized } = this.state;

    return authorized ? (
      <Route
        path={path}
        exact={exact}
        render={(props) => React.createElement(component, { ...rest, ...props })}
      />
    ) : (
      <div />
    );
  }
}

RouteAuthorized.defaultProps = {
  allowedGroup: null,
  userId: null,
  exact: false,
  userRoles: [],
  userIsInRoles: false,
  pathAfterFailure: '/login',
};

RouteAuthorized.propTypes = {
  loading: PropTypes.bool.isRequired,
  allowedRoles: PropTypes.array.isRequired,
  allowedGroup: PropTypes.string,
  userId: PropTypes.string,
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  history: PropTypes.object.isRequired,
  userRoles: PropTypes.array,
  userIsInRoles: PropTypes.bool,
  pathAfterFailure: PropTypes.string,
};

export default withRouter(
  withTracker(({ allowedRoles, allowedGroup }) => {
    if (!Meteor.isClient) return {};

    const scope = allowedGroup === 'ROOT' ? null : parseHost(window.location.hostname);

    return {
      loading: !Roles.subscription.ready(),
      userId: Meteor.userId(),
      userRoles: Roles.getRolesForUser(Meteor.userId(), scope),
      userIsInRoles: Roles.userIsInRole(Meteor.userId(), [...allowedRoles, 'admin'], scope),
    };
  })(RouteAuthorized),
);
