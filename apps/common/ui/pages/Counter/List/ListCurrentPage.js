/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import WrapperList from '../../../Wrapper/List';

import Counter from '../../../../entities/Counter/api';

import jsonDefsDefault from '../../../../entities/Counter/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/Counter/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import getTabsDefault from '../../Dashboard/getTabsDefault';

import { addCounter } from '../../../../entities/Counter/ui/utils/mutations.gql';

const CounterListCurrentPage = (props) => {
  const { roles, jsonDefs, parser, tabs, getNavs, ...rest } = props;
  return (
    <WrapperList
      Entity={Counter}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'Counter')}
      sort={{ createdAt: 1 }}
      currentPageName="Counter"
      currentTabName="Current"
      publishName="listCounterCurrent"
      navigations={getNavs(roles)}
      roles={roles}
      {...rest}
    />
  );
};

CounterListCurrentPage.defaultProps = {
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  getNavs: getNavsDefault,
};

CounterListCurrentPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  getNavs: PropTypes.func,
};

export default compose(
  graphql(addCounter, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/Counter/${mutation.addCounter._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(CounterListCurrentPage);
