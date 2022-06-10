/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailNotification } from '../utils/queries.gql';

import {
  updateNotification as updateNotificationMutation,
  removeNotification as removeNotificationMutation,
  setNotificationStatusToDraft,
  setNotificationStatusToActive,
  setNotificationStatusToClosed,
} from '../utils/mutations.gql';

import NotificationForm from './Form';

const NotificationDetail = (props) => {
  const { data, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailNotification)
    return <BlankState title="No Notification found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.detailNotification.status === 'Draft');

  return <NotificationForm doc={data.detailNotification} disabled={disabled} {...rest} />;
};

NotificationDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateNotification: PropTypes.func.isRequired,
  removeNotification: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailNotification, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateNotificationMutation, {
    name: 'updateNotification',
    options: () => ({
      refetchQueries: [{ query: detailNotification }],
      onCompleted: () => {
        alert('Notification updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeNotificationMutation, {
    name: 'removeNotification',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('Notification deleted!');
        history.push('/Notification/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setNotificationStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Notification Status set to Draft!');
        history.push('/Notification/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setNotificationStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Notification Status set to Active!');
        history.push('/Notification/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setNotificationStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('Notification Status set to Closed!');
        history.push('/Notification/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(NotificationDetail);
