/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../../common/ui/components/Loading';
import BlankState from '../../../../../common/ui/components/BlankState';
import SEO from '../../../../../common/ui/components/SEO';

import { getContoh } from '../utils/queries.gql';

import {
  updateContoh as updateContohMutation,
  removeContoh as removeContohMutation,
  setContohStatusToDraft,
  setContohStatusToActive,
  setContohStatusToClosed,
} from '../utils/mutations.gql';

import ContohForm from './Form';

const ContohDetail = (props) => {
  const { data, match, settings, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.getContoh)
    return <BlankState title="No Contoh found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.getContoh.status === 'Draft');

  return (
    <>
      <SEO
        title={`${settings.name} | Contoh | ${data.getContoh.name || data.getContoh._id}`}
        description={data.getContoh.description}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />
      <ContohForm
        doc={data.getContoh}
        disabled={disabled}
        match={match}
        settings={settings}
        {...rest}
      />
    </>
  );
};

ContohDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateContoh: PropTypes.func.isRequired,
  removeContoh: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default compose(
  graphql(getContoh, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateContohMutation, {
    name: 'updateContoh',
    options: () => ({
      onCompleted: () => {
        alert('Contoh updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeContohMutation, {
    name: 'removeContoh',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('Contoh deleted!');
        history.push('/Contoh/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setContohStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Contoh Status set to Draft!');
        history.push('/Contoh/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setContohStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Contoh Status set to Active!');
        history.push('/Contoh/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setContohStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Contoh Status set to Closed!');
        history.push('/Contoh/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(ContohDetail);
