/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailFile } from '../utils/queries.gql';

import {
  updateFile as updateFileMutation,
  removeFile as removeFileMutation,
  setFileStatusToDraft,
  setFileStatusToActive,
  setFileStatusToClosed,
} from '../utils/mutations.gql';

import FileForm from './Form';

const FileDetail = (props) => {
  const { data, ...rest } = props;
  if (data.loading) return <Loading />;
  if (!data.detailFile)
    return <BlankState title="No File found" subtitle="Make sure you have enough right" />;

  const disabled = !(data.detailFile.status === 'Draft');

  return <FileForm doc={data.detailFile} disabled={disabled} {...rest} />;
};

FileDetail.propTypes = {
  data: PropTypes.object.isRequired,
  updateFile: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailFile, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateFileMutation, {
    name: 'updateFile',
    options: () => ({
      refetchQueries: [{ query: detailFile }],
      onCompleted: () => {
        alert('File updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(removeFileMutation, {
    name: 'removeFile',
    options: ({ history }) => ({
      onCompleted: () => {
        alert('File deleted!');
        history.push('/File/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setFileStatusToDraft, {
    name: 'setStatusToDraft',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('File Status set to Draft!');
        history.push('/File/List/Draft');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setFileStatusToActive, {
    name: 'setStatusToActive',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('File Status set to Active!');
        history.push('/File/List/Current');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
  graphql(setFileStatusToClosed, {
    name: 'setStatusToClosed',
    options: ({ match, history }) => ({
      variables: {
        _id: match.params._id,
      },
      onCompleted: () => {
        alert('File Status set to Closed!');
        history.push('/File/List/History');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(FileDetail);
