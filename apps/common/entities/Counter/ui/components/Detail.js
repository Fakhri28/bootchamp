/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailCounter } from '../utils/queries.gql';

import {
  updateCounter as updateCounterMutation,
  removeCounter as removeCounterMutation,
  setCounterStatusToDraft,
  setCounterStatusToActive,
  setCounterStatusToClosed,
} from '../utils/mutations.gql';

import CounterForm from './Form';

const CounterDetail = (props) => {
  const { data, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailCounter)
    return <BlankState title="No Counter found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.detailCounter.status === 'Draft');

  return <CounterForm doc={data.detailCounter} disabled={disabled} {...rest} />;
};

CounterDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateCounter: PropTypes.func.isRequired,
  removeCounter: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailCounter, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateCounterMutation, {
    name: 'updateCounter',
    options: () => ({
      refetchQueries: [{ query: detailCounter }],
      onCompleted: () => {
        alert('Counter updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeCounterMutation, {
    name: 'removeCounter',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('Counter deleted!');
        history.push('/Counter/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setCounterStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Counter Status set to Draft!');
        history.push('/Counter/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setCounterStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Counter Status set to Active!');
        history.push('/Counter/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setCounterStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Counter Status set to Closed!');
        history.push('/Counter/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(CounterDetail);
