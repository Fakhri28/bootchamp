/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailUserLog } from '../utils/queries.gql';

import {
  updateUserLog as updateUserLogMutation,
  removeUserLog as removeUserLogMutation,
  setUserLogStatusToDraft,
  setUserLogStatusToActive,
  setUserLogStatusToClosed,
} from '../utils/mutations.gql';

import UserLogForm from './Form';

const UserLogDetail = (props) => {
  const { data, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailUserLog)
    return <BlankState title="No UserLog found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.detailUserLog.status === 'Draft');

  return <UserLogForm doc={data.detailUserLog} disabled={disabled} {...rest} />;
};

UserLogDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateUserLog: PropTypes.func.isRequired,
  removeUserLog: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailUserLog, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateUserLogMutation, {
    name: 'updateUserLog',
    options: () => ({
      refetchQueries: [{ query: detailUserLog }],
      onCompleted: () => {
        alert('UserLog updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeUserLogMutation, {
    name: 'removeUserLog',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('UserLog deleted!');
        history.push('/UserLog/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setUserLogStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('UserLog Status set to Draft!');
        history.push('/UserLog/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setUserLogStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('UserLog Status set to Active!');
        history.push('/UserLog/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setUserLogStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('UserLog Status set to Closed!');
        history.push('/UserLog/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(UserLogDetail);
