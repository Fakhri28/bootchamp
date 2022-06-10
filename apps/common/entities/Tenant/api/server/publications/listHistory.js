import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import pubProcessor from '../../../../../helpers/server/pubProcessor';

import Tenant from '../..';
import getTenantJSONdefs from '../../utils/getJSONdefs';

const publishName = 'listTenantHistory';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    return pubProcessor(Tenant, publishName, getTenantJSONdefs, props, this);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
