/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';
import SEO from '../../../../ui/components/SEO';

import { detailOrg } from '../utils/queries.gql';

import { updateOrg, removeOrg, setOrgStatusToActive } from '../utils/mutations.gql';

import OrgForm from './Form';

const OrgDetail = (props) => {
  const { data, match, settings, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailOrg)
    return <BlankState title="No Organization found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.detailOrg.status === 'Draft');

  return (
    <>
      <SEO
        title={`${settings.name} | Org | ${data.detailOrg.name || data.detailOrg._id}`}
        description={data.detailOrg.description}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />
      <OrgForm
        doc={data.detailOrg}
        disabled={disabled}
        match={match}
        settings={settings}
        {...rest}
      />
    </>
  );
};

OrgDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateDoc: PropTypes.func.isRequired,
  removeDoc: PropTypes.func.isRequired,
  // setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  // setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailOrg, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateOrg, {
    name: 'updateDoc',
    options: () => ({
      onCompleted: () => {
        alert('Organization Updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeOrg, {
    name: 'removeDoc',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('Organization Deleted!');
        history.push('/Org/List/Draft/Host');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  // graphql(setOrgStatusToDraft, {
  //   name: 'setStatusToDraft',
  //   options: ({ match, history }) => ({
  //     variables: {
  //       _id: match.params._id,
  //     },
  //     onCompleted: () => {
  //       alert('Organization Status set to Draft!');
  //       history.push('/Org/List/Draft/Host');
  //     },
  //     onError: (error) => {
  //       alert(error.message);
  //     },
  //   }),
  // }),
  graphql(setOrgStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Organization Status set to Active!');
        history.push('/Org/List/Current/Host');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  // graphql(setOrgStatusToClosed, {
  //   name: 'setStatusToClosed',
  //   options: ({ match, history }) => ({
  //     variables: {
  //       _id: match.params._id,
  //     },
  //     onCompleted: () => {
  //       alert('Organization Status set to Closed!');
  //       history.push('/Org/List/History');
  //     },
  //     onError: (error) => {
  //       alert(error.message);
  //     },
  //   }),
  // }),
)(OrgDetail);
