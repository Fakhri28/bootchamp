import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import parseDocs from '../../../../../../common/helpers/parseDocs';
import ownerQuery from '../../../../../../common/helpers/ownerQuery';
import authorizer from '../../../../../../common/helpers/server/authorizer';

import Contoh from '../..';
import getContohJSONdefs from '../../utils/getJSONdefs';

// this methods could be use for UI combo promise or others
Meteor.methods({
  listContohForEntry(search) {
    check(search, String);

    const options = {
      context: {
        headers: {
          origin: this.connection.httpHeaders.host,
        },
        user: Meteor.user(),
      },
    };

    const { tenant } = authorizer(options, 'listContohForEntry', getContohJSONdefs);

    const contohs = Contoh.find(
      {
        status: 'Active',
        ...ownerQuery(tenant.owner),
      },
      { sort: { nr: 1 } },
    ).fetch();

    const results = parseDocs(contohs || [], [
      { from: '_id', to: 'value' },
      { from: (doc) => `${doc.nr}/${doc.type} - ${doc.name}`, to: 'label' },
    ]);

    return results.filter((result) => result.label.toLowerCase().includes(search.toLowerCase()));
  },
});
