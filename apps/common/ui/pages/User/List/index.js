/* eslint-disable react/jsx-props-no-spreading */
import { Meteor } from 'meteor/meteor';

import React from 'react';
import PropTypes from 'prop-types';

import getStatusObj from '../../../../helpers/getStatusObj';

import WrapperListDefault from '../../../Wrapper/List';
import jsonDefsDefault from '../../../../entities/User/api/utils/getUserJSONdefs';
import parserDefault from '../../../../entities/User/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import tabsDefault from '../../Dashboard/getTabsUser';

const UserListPage = (props) => {
  const { roles, scope, Wrapper, statusJSON, jsonDefs, parser, tabs, navigations, match, ...rest } =
    props;
  const { currentStatus, statusObj } = getStatusObj(match, statusJSON);
  const currentScope = match?.params?.scope || scope;

  return (
    <Wrapper
      Entity={Meteor.users}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'User', currentScope)}
      sort={statusObj.sort}
      currentPageName={`User${currentScope === 'All' ? ' All Tenant' : ''}`}
      currentTabName={currentStatus}
      publishName={`listUser${currentStatus}${currentScope}`}
      navigations={navigations(roles)}
      roles={roles}
      match={match}
      {...rest}
    />
  );
};

UserListPage.defaultProps = {
  scope: 'Host',
  statusJSON: {
    Current: {
      sort: {},
    },
  },
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: tabsDefault,
  navigations: getNavsDefault,
  Wrapper: WrapperListDefault,
};

UserListPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  scope: PropTypes.string,
  Wrapper: PropTypes.func,
  statusJSON: PropTypes.object,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  navigations: PropTypes.func,
  match: PropTypes.object.isRequired,
};

export default UserListPage;
