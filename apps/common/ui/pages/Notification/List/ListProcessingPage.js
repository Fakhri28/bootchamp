/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import WrapperList from '../../../Wrapper/List';

import Notification from '../../../../entities/Notification/api';

import jsonDefsDefault from '../../../../entities/Notification/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/Notification/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import getTabsDefault from '../../Dashboard/getTabsDefault';

import { addNotification } from '../../../../entities/Notification/ui/utils/mutations.gql';

const NotificationListProcessingPage = (props) => {
  const { roles, jsonDefs, parser, tabs, getNavs, ...rest } = props;
  return (
    <WrapperList
      Entity={Notification}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'Notification')}
      sort={{ createdAt: 1 }}
      currentPageName="Notification"
      currentTabName="Processing"
      publishName="listNotificationProcessing"
      navigations={getNavs(roles)}
      roles={roles}
      {...rest}
    />
  );
};

NotificationListProcessingPage.defaultProps = {
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  getNavs: getNavsDefault,
};

NotificationListProcessingPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  getNavs: PropTypes.func,
};

export default compose(
  graphql(addNotification, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/Notification/${mutation.addNotification._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(NotificationListProcessingPage);
