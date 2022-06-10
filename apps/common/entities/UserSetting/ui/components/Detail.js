/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailUserSetting } from '../utils/queries.gql';

import {
  updateUserSetting as updateUserSettingMutation,
  removeUserSetting as removeUserSettingMutation,
  setUserSettingStatusToDraft,
  setUserSettingStatusToActive,
  setUserSettingStatusToClosed,
} from '../utils/mutations.gql';

import UserSettingForm from './Form';

const UserSettingDetail = (props) => {
  const { data, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailUserSetting)
    return <BlankState title="No UserSetting found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.detailUserSetting.status === 'Draft');

  return <UserSettingForm doc={data.detailUserSetting} disabled={disabled} {...rest} />;
};

UserSettingDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateUserSetting: PropTypes.func.isRequired,
  removeUserSetting: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailUserSetting, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateUserSettingMutation, {
    name: 'updateUserSetting',
    options: () => ({
      refetchQueries: [{ query: detailUserSetting }],
      onCompleted: () => {
        alert('UserSetting updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeUserSettingMutation, {
    name: 'removeUserSetting',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('UserSetting deleted!');
        history.push('/UserSetting/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setUserSettingStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('UserSetting Status set to Draft!');
        history.push('/UserSetting/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setUserSettingStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('UserSetting Status set to Active!');
        history.push('/UserSetting/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setUserSettingStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('UserSetting Status set to Closed!');
        history.push('/UserSetting/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(UserSettingDetail);
