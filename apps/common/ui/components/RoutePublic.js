import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePublic = ({
  loggingIn,
  authenticated,
  afterLoginPath,
  component,
  path,
  exact,
  ...rest
}) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !authenticated ? (
        React.createElement(component, {
          ...props,
          ...rest,
          loggingIn,
          authenticated,
        })
      ) : (
        <Redirect to={afterLoginPath || '/'} />
      )
    }
  />
);

RoutePublic.defaultProps = {
  loggingIn: false,
  path: '',
  exact: false,
  afterLoginPath: null,
};

RoutePublic.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  afterLoginPath: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default RoutePublic;
