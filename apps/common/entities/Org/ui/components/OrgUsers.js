/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';
import TableSimpleWithStatus from '../../../../ui/components/TableSimpleWithStatus';

import OrgUserParser from '../../../User/ui/utils/Parser/OrgUserParser';

import { detailOrg } from '../utils/queries.gql';

// FIXME simplify please
const OrgUsers = (props) => {
  const { data, roles } = props;
  if (data.loading) return <Loading />;
  if (!data.detailOrg)
    return <BlankState title="No Organization found" subtitle="Make sure you have enough right" />;

  return (
    <TableSimpleWithStatus
      docs={OrgUserParser(data.detailOrg && data.detailOrg.Users, roles)}
      caption={`Last Updated: ${new Date().toLocaleString()}`}
    />
  );
};

OrgUsers.propTypes = {
  data: PropTypes.object.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
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
)(OrgUsers);
