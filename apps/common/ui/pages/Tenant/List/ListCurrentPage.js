/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import WrapperList from '../../../Wrapper/List';

import Tenant from '../../../../entities/Tenant/api';

import jsonDefsDefault from '../../../../entities/Tenant/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/Tenant/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import getTabsDefault from '../../Dashboard/getTabsDefault';

import { addTenant } from '../../../../entities/Tenant/ui/utils/mutations.gql';

const TenantListCurrentPage = (props) => {
  const { roles, jsonDefs, parser, tabs, getNavs, ...rest } = props;
  return (
    <WrapperList
      Entity={Tenant}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'Tenant')}
      sort={{ createdAt: 1 }}
      currentPageName="Tenant"
      currentTabName="Current"
      publishName="listTenantCurrent"
      navigations={getNavs(roles)}
      roles={roles}
      {...rest}
    />
  );
};

TenantListCurrentPage.defaultProps = {
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  getNavs: getNavsDefault,
};

TenantListCurrentPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  getNavs: PropTypes.func,
};

export default compose(
  graphql(addTenant, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/Tenant/${mutation.addTenant._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(TenantListCurrentPage);
