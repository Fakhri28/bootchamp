import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/ros:publish-counts';

import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';

import withTrackerSsr from '../../helpers/withTrackerSsr';

const EntityList = (props) => {
  const {
    loading,
    caption,
    docs,
    total,
    perPage,
    currentPage,
    onChangePage,
    match,
    settings,
    componentTable,
    componentPagination,
    parser,
    roles,
  } = props;

  if (loading) return <Loading />;

  return (
    <>
      {React.createElement(componentTable, {
        docs: parser(docs, settings, roles, match),
        caption,
      })}
      {React.createElement(componentPagination, {
        currentPage,
        onChangePage,
        perPage,
        total,
      })}
    </>
  );
};

EntityList.defaultProps = {
  loading: true,
  caption: `Last Updated: ${new Date().toLocaleString()}`,
  docs: [],
  total: 0,
  perPage: 12,
  currentPage: 1,
  onChangePage: () => {},
};

EntityList.propTypes = {
  loading: PropTypes.bool,
  caption: PropTypes.string,
  docs: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  perPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func,
  match: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  parser: PropTypes.func.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  componentTable: PropTypes.func.isRequired,
  componentPagination: PropTypes.func.isRequired,
};

export default withTrackerSsr((props) => {
  let params = { ...props };

  if (Meteor.isClient) {
    const { search, perPage, currentPage, sort, publishName, jsonDefs, Entity, match } = props;
    const options = {
      search,
      perPage,
      currentPage,
      sort: sort || {
        createdAt: 1,
      },
    };

    const queryProps = {};
    if (match && match.params) {
      Object.keys(match.params).forEach((key) => {
        if (typeof match.params[key] === 'string') {
          options[key] = match.params[key];
          queryProps[key] = match.params[key];
        }
      });
    }

    const subscription = Meteor.subscribe(publishName, options);
    const loading = !subscription.ready();

    if (Entity._name === 'users') queryProps._id = Meteor.userId(); // to prevent self object always show in meteor.users

    const docs = Entity.find(
      { ...jsonDefs(publishName, queryProps).query },
      {
        sort: options.sort,
      },
    ).fetch();

    const total = Counts.get(`${publishName}Count`);

    params = {
      ...params,
      loading,
      docs,
      total,
    };
  }
  return params;
})(EntityList);
