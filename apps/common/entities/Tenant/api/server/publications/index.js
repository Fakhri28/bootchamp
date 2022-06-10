import { Meteor } from 'meteor/meteor';

import Tenant from '../..';

import parseHost from '../../../../../helpers/parseHost';

import './listDraft';
import './listCurrent';
import './listHistory';
import './listProcessing';

Meteor.publish('app', function app() {
  return [
    Meteor.users.find({ _id: this.userId }),
    Tenant.find(
      { host: parseHost(this.connection.httpHeaders.host) },
      { fields: { host: 1, orgId: 1, name: 1, settings: 1 } },
    ),
  ];
});
