/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailEmailSubscriber } from '../utils/queries.gql';

import {
  updateEmailSubscriber as updateEmailSubscriberMutation,
  removeEmailSubscriber as removeEmailSubscriberMutation,
  setEmailSubscriberStatusToDraft,
  setEmailSubscriberStatusToActive,
  setEmailSubscriberStatusToClosed,
} from '../utils/mutations.gql';

import EmailSubscriberForm from './Form';

const EmailSubscriberDetail = (props) => {
  const { data, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailEmailSubscriber)
    return (
      <BlankState title="No EmailSubscriber found" subtitle="Make sure you have enough right" />
    );

  const disabled = !(data.detailEmailSubscriber.status === 'Draft');

  return <EmailSubscriberForm doc={data.detailEmailSubscriber} disabled={disabled} {...rest} />;
};

EmailSubscriberDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateEmailSubscriber: PropTypes.func.isRequired,
  removeEmailSubscriber: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailEmailSubscriber, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateEmailSubscriberMutation, {
    name: 'updateEmailSubscriber',
    options: () => ({
      refetchQueries: [{ query: detailEmailSubscriber }],
      onCompleted: () => {
        alert('EmailSubscriber updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeEmailSubscriberMutation, {
    name: 'removeEmailSubscriber',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('EmailSubscriber deleted!');
        history.push('/EmailSubscriber/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setEmailSubscriberStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('EmailSubscriber Status set to Draft!');
        history.push('/EmailSubscriber/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setEmailSubscriberStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('EmailSubscriber Status set to Active!');
        history.push('/EmailSubscriber/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setEmailSubscriberStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('EmailSubscriber Status set to Closed!');
        history.push('/EmailSubscriber/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(EmailSubscriberDetail);
