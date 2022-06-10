/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import WrapperList from '../../../Wrapper/List';

import UserLog from '../../../../entities/UserLog/api';

import jsonDefsDefault from '../../../../entities/UserLog/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/UserLog/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import getTabsDefault from '../../Dashboard/getTabsDefault';

import { addUserLog } from '../../../../entities/UserLog/ui/utils/mutations.gql';

const UserLogListHistoryPage = (props) => {
  const { roles, jsonDefs, parser, tabs, getNavs, ...rest } = props;
  return (
    <WrapperList
      Entity={UserLog}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'UserLog')}
      sort={{ updatedAt: 1 }}
      currentPageName="UserLog"
      currentTabName="History"
      publishName="listUserLogHistory"
      navigations={getNavs(roles)}
      roles={roles}
      {...rest}
    />
  );
};

UserLogListHistoryPage.defaultProps = {
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  getNavs: getNavsDefault,
};

UserLogListHistoryPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  getNavs: PropTypes.func,
};

export default compose(
  graphql(addUserLog, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/UserLog/${mutation.addUserLog._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(UserLogListHistoryPage);
