import { Meteor } from 'meteor/meteor';

import _ from 'lodash';

import parseDocs from '../../../../../helpers/parseDocs';
import authorizer from '../../../../../helpers/server/authorizer';

import Org from '../..';
import getJSONdefs from '../../utils/getJSONdefs';
import parseToOptions from '../../../../../helpers/server/parseToOptions';

// this methods could be use for UI combo promise or others
Meteor.methods({
  listOrgVendorForEntry() {
    const { host } = authorizer(
      parseToOptions(Meteor.user(), {}, this),
      'listOrgVendorForEntry',
      getJSONdefs,
    );

    const ids = _.map(
      Meteor.roleAssignment.find({ 'role._id': /vendor/, scope: host }).fetch(),
      (doc) => doc.user._id.replace('.org', ''),
    );
    const orgs = Org.find(
      { _id: { $in: ids } },
      { fields: { _id: 1, name: 1, shortname: 1, address: 1 }, sort: { name: 1 } },
    ).fetch();

    return parseDocs(orgs || [], [
      { from: '_id', to: 'value' },
      { from: 'name', to: 'label' },
      { from: (doc) => doc.address && doc.address.address, to: 'address' },
    ]);
  },
});
