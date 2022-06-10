/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import WrapperList from '../../../Wrapper/List';

import UserSetting from '../../../../entities/UserSetting/api';

import jsonDefsDefault from '../../../../entities/UserSetting/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/UserSetting/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import getTabsDefault from '../../Dashboard/getTabsDefault';

import { addUserSetting } from '../../../../entities/UserSetting/ui/utils/mutations.gql';

const UserSettingListHistoryPage = (props) => {
  const { roles, jsonDefs, parser, tabs, getNavs, ...rest } = props;
  return (
    <WrapperList
      Entity={UserSetting}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'UserSetting')}
      sort={{ updatedAt: 1 }}
      currentPageName="UserSetting"
      currentTabName="History"
      publishName="listUserSettingHistory"
      navigations={getNavs(roles)}
      roles={roles}
      {...rest}
    />
  );
};

UserSettingListHistoryPage.defaultProps = {
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  getNavs: getNavsDefault,
};

UserSettingListHistoryPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  getNavs: PropTypes.func,
};

export default compose(
  graphql(addUserSetting, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/UserSetting/${mutation.addUserSetting._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(UserSettingListHistoryPage);
