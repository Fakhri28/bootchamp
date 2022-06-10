import { Meteor } from 'meteor/meteor';

import _ from 'lodash';

import parseDocs from '../../../../../helpers/parseDocs';
import authorizer from '../../../../../helpers/server/authorizer';

import getUserJSONdefs from '../../utils/getUserJSONdefs';
import parseToOptions from '../../../../../helpers/server/parseToOptions';

// this methods could be use for UI combo promise or others
Meteor.methods({
  listHostMemberForEntry() {
    const { host } = authorizer(
      parseToOptions(Meteor.user(), {}, this),
      'listHostMemberForEntry',
      getUserJSONdefs,
    );

    const ids = _.map(
      Meteor.roleAssignment.find({ 'role._id': 'member', scope: host }).fetch(),
      (doc) => doc.user._id,
    ); // ids here contains .org but we dont care

    const users = Meteor.users
      .find(
        { _id: { $in: ids } },
        { fields: { _id: 1, 'profile.fullname': 1, 'profile.shortname': 1 } },
      )
      .fetch();

    return parseDocs(users || [], [
      { from: '_id', to: 'value' },
      { from: (doc) => `${doc.profile.shortname} - ${doc.profile.fullname}`, to: 'label' },
    ]);
  },
});
