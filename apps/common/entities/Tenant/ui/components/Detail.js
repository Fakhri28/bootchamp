/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailTenant } from '../utils/queries.gql';

import {
  updateTenant as updateTenantMutation,
  removeTenant as removeTenantMutation,
  setTenantStatusToDraft,
  setTenantStatusToActive,
  setTenantStatusToClosed,
} from '../utils/mutations.gql';

import TenantForm from './Form';

const TenantDetail = (props) => {
  const { data, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailTenant)
    return <BlankState title="No Tenant found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.detailTenant.status === 'Draft');

  return <TenantForm doc={data.detailTenant} disabled={disabled} {...rest} />;
};

TenantDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateTenant: PropTypes.func.isRequired,
  removeTenant: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailTenant, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateTenantMutation, {
    name: 'updateTenant',
    options: () => ({
      refetchQueries: [{ query: detailTenant }],
      onCompleted: () => {
        alert('Tenant updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeTenantMutation, {
    name: 'removeTenant',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('Tenant deleted!');
        history.push('/Tenant/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setTenantStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Tenant Status set to Draft!');
        history.push('/Tenant/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setTenantStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Tenant Status set to Active!');
        history.push('/Tenant/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setTenantStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Tenant Status set to Closed!');
        history.push('/Tenant/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(TenantDetail);
