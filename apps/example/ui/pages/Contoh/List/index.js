/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import getStatusObj from '../../../../../common/helpers/getStatusObj';

import WrapperList from '../../../Wrapper/List';

import Contoh from '../../../../entities/Contoh/api';

import jsonDefsDefault from '../../../../entities/Contoh/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/Contoh/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavs';
import getTabsDefault from '../../../../../common/ui/pages/Dashboard/getTabsDefault';

import { addContoh } from '../../../../entities/Contoh/ui/utils/mutations.gql';

const ContohListPage = (props) => {
  const { roles, statusJSON, jsonDefs, parser, tabs, navigations, match, ...rest } = props;
  const { currentStatus, statusObj } = getStatusObj(match, statusJSON);

  return (
    <WrapperList
      Entity={Contoh}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'Contoh')}
      sort={statusObj.sort}
      currentPageName="Contoh"
      currentTabName={currentStatus}
      publishName={`listContoh${currentStatus}`}
      navigations={navigations(roles)}
      roles={roles}
      match={match}
      {...rest}
    />
  );
};

ContohListPage.defaultProps = {
  statusJSON: {
    Current: {
      sort: { createdAt: 1 },
    },
    History: {
      sort: { updatedAt: -1 },
    },
  },
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  navigations: getNavsDefault,
};

ContohListPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  statusJSON: PropTypes.object,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  navigations: PropTypes.func,
  match: PropTypes.object.isRequired,
};

export default compose(
  graphql(addContoh, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/Contoh/${mutation.addContoh._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(ContohListPage);
