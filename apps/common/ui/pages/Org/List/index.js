/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import getStatusObj from '../../../../helpers/getStatusObj';

import Org from '../../../../entities/Org/api';

import WrapperListDefault from '../../../Wrapper/List';
import jsonDefsDefault from '../../../../entities/Org/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/Org/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import tabsDefault from '../../Dashboard/getTabsWithCurrentFeature';

import { addOrg } from '../../../../entities/Org/ui/utils/mutations.gql';

const OrgListPage = (props) => {
  const { roles, scope, Wrapper, statusJSON, jsonDefs, parser, tabs, navigations, match, ...rest } =
    props;
  const { currentStatus, statusObj } = getStatusObj(match, statusJSON);
  const currentScope = match?.params?.scope || scope;

  return (
    <Wrapper
      Entity={Org}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'Org', currentScope)}
      sort={statusObj.sort}
      currentPageName={`Organization${currentScope === 'All' ? ' All Tenant' : ''}`}
      currentTabName={currentStatus}
      publishName={`listOrg${currentStatus}${currentScope}`}
      navigations={navigations(roles)}
      roles={roles}
      match={match}
      {...rest}
    />
  );
};

OrgListPage.defaultProps = {
  scope: 'Host',
  statusJSON: {
    Current: {
      sort: { featureNr: 1 },
    },
    History: {
      sort: { updatedAt: -1 },
    },
  },
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: tabsDefault,
  navigations: getNavsDefault,
  Wrapper: WrapperListDefault,
};

OrgListPage.propTypes = {
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

export default compose(
  graphql(addOrg, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/Org/${mutation.addOrg._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(OrgListPage);
