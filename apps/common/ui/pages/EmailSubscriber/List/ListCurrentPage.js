/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import WrapperList from '../../../Wrapper/List';

import EmailSubscriber from '../../../../entities/EmailSubscriber/api';

import jsonDefsDefault from '../../../../entities/EmailSubscriber/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/EmailSubscriber/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import getTabsDefault from '../../Dashboard/getTabsDefault';

import { addEmailSubscriber } from '../../../../entities/EmailSubscriber/ui/utils/mutations.gql';

const EmailSubscriberListCurrentPage = (props) => {
  const { roles, jsonDefs, parser, tabs, getNavs, ...rest } = props;
  return (
    <WrapperList
      Entity={EmailSubscriber}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'EmailSubscriber')}
      sort={{ createdAt: 1 }}
      currentPageName="EmailSubscriber"
      currentTabName="Current"
      publishName="listEmailSubscriberCurrent"
      navigations={getNavs(roles)}
      roles={roles}
      {...rest}
    />
  );
};

EmailSubscriberListCurrentPage.defaultProps = {
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  getNavs: getNavsDefault,
};

EmailSubscriberListCurrentPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  getNavs: PropTypes.func,
};

export default compose(
  graphql(addEmailSubscriber, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/EmailSubscriber/${mutation.addEmailSubscriber._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(EmailSubscriberListCurrentPage);
